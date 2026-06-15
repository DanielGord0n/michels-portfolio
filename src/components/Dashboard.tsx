import { useEffect, useMemo, useState } from 'react';
import { dashViews, dashOrder } from '../data/dashboard';
import type { DashViewKey } from '../types';
import { useInView } from '../hooks/useInView';
import './Dashboard.css';

const STORAGE_KEY = 'mvDashView';

function lighten(hex: string) {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const mix = (c: number) => Math.round(c + (255 - c) * 0.4);
  return `rgb(${mix(r)},${mix(g)},${mix(b)})`;
}

function rgba(hex: string, a: number) {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
}

function readSaved(): DashViewKey {
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    if (s && Object.prototype.hasOwnProperty.call(dashViews, s)) return s as DashViewKey;
  } catch {
    /* ignore */
  }
  return 'audience';
}

export default function Dashboard() {
  const [view, setView] = useState<DashViewKey>(readSaved);
  const [type, setType] = useState<'bars' | 'line'>('bars');
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.35, once: true });

  const v = dashViews[view];
  const acc = v.accent;

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, view);
    } catch {
      /* ignore */
    }
  }, [view]);

  const { path, area } = useMemo(() => {
    const n = v.bars.length;
    const pts = v.bars.map((b, i) => [(i / (n - 1)) * 600, 220 - (b.v / 100) * 200 - 6]);
    const d = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ');
    return { path: d, area: `${d} L600,220 L0,220 Z` };
  }, [v]);

  return (
    <section id="dashboard" className="mv-section dashboard">
      <div className="dashboard__shell">
        <div className="mv-eyebrow dashboard__eyebrow">Interactive</div>
        <h2 className="dashboard__h2">Explore the data</h2>
        <p className="dashboard__lede">
          A live analyst view of my results. Switch the metric and the chart type and the dashboard
          updates instantly, the way I would build it for a stakeholder.
        </p>

        <div ref={ref} className="dashboard__card">
          <div className="dashboard__controls">
            <div className="dashboard__tabs">
              {dashOrder.map((k) => {
                const on = k === view;
                return (
                  <button
                    key={k}
                    type="button"
                    className="dashboard__tab"
                    onClick={() => setView(k)}
                    style={{
                      background: on ? acc : '#fff',
                      color: on ? '#fff' : '#5a6b7b',
                      borderColor: on ? acc : '#e4e8ee',
                    }}
                  >
                    {dashViews[k].label}
                  </button>
                );
              })}
            </div>
            <div className="dashboard__type">
              {(['bars', 'line'] as const).map((t) => {
                const on = t === type;
                return (
                  <button
                    key={t}
                    type="button"
                    className="dashboard__type-btn"
                    onClick={() => setType(t)}
                    style={{
                      background: on ? '#fff' : 'transparent',
                      color: on ? '#2c3e50' : '#7a8997',
                      boxShadow: on ? '0 4px 12px -6px rgba(44,62,80,0.4)' : 'none',
                    }}
                  >
                    {t === 'bars' ? 'Bars' : 'Line'}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="dashboard__body">
            <div className="dashboard__chart">
              <div className="dashboard__ytitle">{v.yLabel}</div>

              {type === 'bars' ? (
                <div className="dashboard__bars">
                  {v.bars.map((b, i) => {
                    const last = i === v.bars.length - 1;
                    return (
                      <div key={i} className="dashboard__barcol">
                        <div
                          className="dashboard__bar"
                          style={{
                            height: `${inView ? b.v : 0}%`,
                            background: last
                              ? acc
                              : `linear-gradient(180deg,${lighten(acc)},${acc})`,
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <svg viewBox="0 0 600 220" preserveAspectRatio="none" className="dashboard__line">
                  <path d={area} fill={rgba(acc, 0.16)} />
                  <path
                    d={path}
                    fill="none"
                    stroke={acc}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}

              <div className="dashboard__xlabels">
                {v.bars.map((b, i) => (
                  <div key={i} className="dashboard__xlabel">
                    {b.l}
                  </div>
                ))}
              </div>
            </div>

            <div className="dashboard__kpi-side">
              <div className="dashboard__kpi-label">{v.kpiLabel}</div>
              <div className="dashboard__kpi" style={{ color: acc }}>
                {v.kpi}
              </div>
              <div className="dashboard__insight">{v.insight}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
