import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  /** Numeric target the value animates toward. */
  value: number;
  /** The exact final string shown (safe default + end-of-animation value). */
  display: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  /** Bump to replay the count-up (used by the report "Replay build"). */
  replayKey?: number;
  className?: string;
  style?: React.CSSProperties;
}

const DURATION = 1400;
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Counts a number up 0 -> target with ease-out cubic when scrolled into view.
 * Safe default: the displayed text is initialised to the real final value, so
 * the number is always correct even if the animation never runs.
 */
export default function CountUp({
  value,
  display,
  prefix = '',
  suffix = '',
  decimals = 0,
  replayKey = 0,
  className,
  style,
}: CountUpProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const frame = useRef<number>(0);
  const hasRun = useRef(false);
  const [text, setText] = useState(display);

  const fmt = (v: number) => {
    if (suffix === 'K') return prefix + (v / 1000).toFixed(1) + 'K';
    if (decimals) return prefix + v.toFixed(decimals) + suffix;
    return prefix + Math.round(v).toLocaleString() + suffix;
  };

  const run = () => {
    cancelAnimationFrame(frame.current);
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION);
      setText(t < 1 ? fmt(value * easeOutCubic(t)) : display);
      if (t < 1) frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
  };

  // Trigger once when scrolled into view.
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === 'undefined') return; // keep safe default
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun.current) {
            hasRun.current = true;
            run();
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 },
    );
    io.observe(node);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Replay on demand.
  useEffect(() => {
    if (replayKey > 0) run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [replayKey]);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  return (
    <div ref={ref} className={className} style={style}>
      {text}
    </div>
  );
}
