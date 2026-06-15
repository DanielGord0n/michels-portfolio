import { useEffect, useRef, useState } from 'react';
import CountUp from './CountUp';
import { useInView } from '../hooks/useInView';
import './ImpactReport.css';

interface Kpi {
  label: string;
  source: string;
  border: string;
  value: number;
  display: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

const KPIS: Kpi[] = [
  {
    label: 'Player retention',
    source: 'Novaly Studios, via SQL analysis',
    border: '#667eea',
    value: 18,
    display: '+18%',
    prefix: '+',
    suffix: '%',
  },
  {
    label: 'Audience grown',
    source: 'data-driven content strategy',
    border: '#764ba2',
    value: 17000,
    display: '+17K',
    prefix: '+',
    suffix: 'K',
  },
  {
    label: 'Outreach pipeline',
    source: 'The Kind Pet, market research',
    border: '#f5576c',
    value: 2.5,
    display: '2.5x',
    suffix: 'x',
    decimals: 1,
  },
  {
    label: 'New inquiries',
    source: 'Viva RGC second location',
    border: '#3498db',
    value: 40,
    display: '+40%',
    prefix: '+',
    suffix: '%',
  },
];

const ACTUAL_GRAD = 'linear-gradient(180deg,#dfe4f8,#b9c2ef)';
const BAR_GROUPS = [
  { f: 52, a: 48, fGrad: 'linear-gradient(180deg,#8a9af0,#667eea)' },
  { f: 66, a: 63, fGrad: 'linear-gradient(180deg,#8a9af0,#667eea)' },
  { f: 79, a: 82, fGrad: 'linear-gradient(180deg,#9a72c4,#764ba2)' },
  { f: 88, a: 85, fGrad: 'linear-gradient(180deg,#9a72c4,#764ba2)' },
  { f: 97, a: 93, fGrad: 'linear-gradient(180deg,#9a72c4,#764ba2)' },
];

const flatBars = BAR_GROUPS.flatMap((g) => [
  { h: g.f, bg: g.fGrad },
  { h: g.a, bg: ACTUAL_GRAD },
]);

export default function ImpactReport() {
  const [replayKey, setReplayKey] = useState(0);
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { ref: chartRef, inView } = useInView<HTMLDivElement>({ threshold: 0.5, once: true });

  const animateBars = () => {
    barRefs.current.forEach((bar, i) => {
      if (!bar || typeof bar.animate !== 'function') return;
      bar.animate([{ transform: 'scaleY(0)' }, { transform: 'scaleY(1)' }], {
        duration: 620,
        delay: i * 55,
        easing: 'cubic-bezier(.2,.7,.3,1)',
        fill: 'none',
      });
    });
  };

  // Build the bars when the chart first scrolls into view.
  useEffect(() => {
    if (inView) animateBars();
  }, [inView]);

  // Replay re-runs the bars (counters re-run via replayKey prop).
  useEffect(() => {
    if (replayKey > 0) animateBars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [replayKey]);

  return (
    <section id="report" className="mv-section report">
      <div className="mv-shell">
        <div className="mv-eyebrow report__eyebrow">By the numbers</div>
        <h2 className="report__h2">Impact at a glance</h2>
        <p className="report__lede">
          A live, self-building report of measurable outcomes across my analytics and marketing
          roles. The numbers count up and the charts draw in. Press replay to watch it build again.
        </p>

        <div className="report__card">
          <div className="report__header">
            <div className="report__shimmer" aria-hidden="true" />
            <div className="report__header-left">
              <span className="report__badge">MV</span>
              <div>
                <div className="report__title">Performance report</div>
                <div className="report__subtitle">
                  <span className="report__pulse" />
                  Animated snapshot, outcomes 2020 to 2026
                </div>
              </div>
            </div>
            <div className="report__header-right">
              <button
                type="button"
                className="report__replay"
                onClick={() => setReplayKey((k) => k + 1)}
              >
                <span aria-hidden="true" style={{ fontSize: 10 }}>
                  ▶
                </span>{' '}
                Replay build
              </button>
              <span className="report__tag">Analytics &amp; marketing</span>
            </div>
          </div>

          <div className="report__body">
            <div className="report__kpis">
              {KPIS.map((k) => (
                <div key={k.label} className="report__kpi" style={{ borderTop: `3px solid ${k.border}` }}>
                  <div className="report__kpi-label">{k.label}</div>
                  <CountUp
                    className="report__kpi-value"
                    value={k.value}
                    display={k.display}
                    prefix={k.prefix}
                    suffix={k.suffix}
                    decimals={k.decimals}
                    replayKey={replayKey}
                  />
                  <div className="report__kpi-source">▲ {k.source}</div>
                </div>
              ))}
            </div>

            <div className="report__charts">
              <div className="report__chart-card">
                <div className="report__chart-head">
                  <div className="report__chart-title">Labour forecast vs actual, ARIMA model</div>
                  <span className="report__chart-tag">Lone Star Texas Grill</span>
                </div>
                <div ref={chartRef} className="report__barchart">
                  {BAR_GROUPS.map((_, gi) => (
                    <div key={gi} className="report__bargroup">
                      {[gi * 2, gi * 2 + 1].map((idx) => (
                        <div
                          key={idx}
                          ref={(el) => {
                            barRefs.current[idx] = el;
                          }}
                          className="report__bar"
                          style={{ height: `${flatBars[idx].h}%`, background: flatBars[idx].bg }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
                <div className="report__legend">
                  <span>
                    <span className="report__legend-dot" style={{ background: '#667eea' }} />
                    Forecast
                  </span>
                  <span>
                    <span className="report__legend-dot" style={{ background: '#cdd4f5' }} />
                    Actual
                  </span>
                </div>
              </div>

              <div className="report__donut-card">
                <div className="report__chart-title" style={{ marginBottom: 16 }}>
                  Where my experience sits
                </div>
                <div className="report__donut-row">
                  <div className="report__donut">
                    <div className="report__donut-hole">
                      <div className="report__donut-num">7</div>
                      <div className="report__donut-cap">roles</div>
                    </div>
                  </div>
                  <div className="report__donut-legend">
                    <span>
                      <span className="report__legend-dot" style={{ background: '#764ba2' }} />
                      Analytics &amp; BI
                    </span>
                    <span>
                      <span className="report__legend-dot" style={{ background: '#667eea' }} />
                      Operations &amp; reporting
                    </span>
                    <span>
                      <span className="report__legend-dot" style={{ background: '#3498db' }} />
                      Marketing &amp; research
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
