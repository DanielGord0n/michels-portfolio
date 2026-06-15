import type { DashView, DashViewKey } from '../types';

export const dashViews: Record<DashViewKey, DashView> = {
  audience: {
    label: 'Audience growth',
    kpi: '+17K',
    kpiLabel: 'followers grown, Novaly',
    accent: '#764ba2',
    yLabel: 'Cumulative reach',
    insight:
      'A data-led content strategy at Novaly Studios grew the TikTok audience to over 17,000 followers.',
    bars: [
      { l: 'Wk 1', v: 16 },
      { l: 'Wk 4', v: 33 },
      { l: 'Wk 8', v: 51 },
      { l: 'Wk 12', v: 70 },
      { l: 'Wk 16', v: 87 },
      { l: 'Wk 20', v: 100 },
    ],
  },
  retention: {
    label: 'Player retention',
    kpi: '+18%',
    kpiLabel: 'retention lift, Novaly',
    accent: '#667eea',
    yLabel: 'Players retained',
    insight:
      'SQL analysis of Roblox player behaviour surfaced trends that lifted retention by 18% and informed feature development.',
    bars: [
      { l: 'Base', v: 60 },
      { l: 'Wk 2', v: 65 },
      { l: 'Wk 4', v: 70 },
      { l: 'Wk 6', v: 74 },
      { l: 'Wk 8', v: 78 },
      { l: 'Now', v: 82 },
    ],
  },
  pipeline: {
    label: 'Outreach pipeline',
    kpi: '2.5x',
    kpiLabel: 'pipeline growth, The Kind Pet',
    accent: '#f5576c',
    yLabel: 'Boutiques in pipeline',
    insight:
      'Market research identified 40+ aligned boutiques, expanding the retail outreach pipeline by 2.5x.',
    bars: [
      { l: 'Start', v: 38 },
      { l: '+1mo', v: 55 },
      { l: '+2mo', v: 72 },
      { l: '+3mo', v: 86 },
      { l: '+4mo', v: 95 },
      { l: 'Final', v: 100 },
    ],
  },
  inquiries: {
    label: 'New inquiries',
    kpi: '+40%',
    kpiLabel: 'inquiry growth, Viva RGC',
    accent: '#3498db',
    yLabel: 'Monthly inquiries',
    insight: 'Launching and running a second club location drove a 40% increase in new inquiries.',
    bars: [
      { l: 'Q1', v: 58 },
      { l: 'Q2', v: 66 },
      { l: 'Q3', v: 75 },
      { l: 'Q4', v: 84 },
      { l: 'Q5', v: 93 },
      { l: 'Now', v: 100 },
    ],
  },
};

export const dashOrder: DashViewKey[] = ['audience', 'retention', 'pipeline', 'inquiries'];
