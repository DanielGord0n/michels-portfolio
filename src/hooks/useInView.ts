import { useEffect, useRef, useState } from 'react';

interface Options {
  threshold?: number;
  once?: boolean;
}

/**
 * Observe an element and report when it scrolls into view.
 * Safe by default: if IntersectionObserver is unavailable, reports `true`
 * immediately so dependent content renders at its final state.
 */
export function useInView<T extends HTMLElement>({ threshold = 0.5, once = true }: Options = {}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [threshold, once]);

  return { ref, inView };
}
