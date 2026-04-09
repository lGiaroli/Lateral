import { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';

const heroHighlights = [
  'Automate workflows, communications and payment activity from one surface',
  'Keep case history, documents and next actions in a single working view',
  'Give teams live reporting, permissions and auditability without bolt-on tools',
];

const capabilityRail = [
  {
    title: 'Workflow automation',
    description: 'Rules, queues and decisioning that match the process your team already runs.',
  },
  {
    title: 'Case management',
    description: 'Files, timelines, ownership and next steps in one connected record.',
  },
  {
    title: 'Communications and payments',
    description: 'Coordinate email, SMS, letters, plans and payment activity together.',
  },
  {
    title: 'Reporting and insight',
    description: 'Live operational visibility for internal teams, clients and compliance reviews.',
  },
];

const workflowPoints = [
  'Trigger actions from time, status, balance or user decisions',
  'Automate letters, emails, SMS, reminders and escalation steps',
  'Build logic once and run it consistently across every team',
];

const workflowLanes = ['Triggers', 'Decisions', 'Outcomes'];

const workflowRows = [
  {
    trigger: {
      title: 'New debt',
      meta: 'Balance raised',
      icon: '+',
    },
    decision: {
      title: 'In grace?',
      meta: 'Balance under threshold',
    },
    outcome: {
      title: 'Send reminder',
      meta: 'Email + letter template',
      icon: '>',
    },
  },
  {
    trigger: {
      title: 'Missed plan',
      meta: 'Payment not kept',
      icon: '>',
    },
    decision: {
      title: 'Opened email?',
      meta: 'Check after 48 hours',
    },
    outcome: {
      title: 'SMS chase',
      meta: 'Fallback on no open',
      icon: '+',
    },
  },
  {
    trigger: {
      title: 'No reply',
      meta: 'After reminder',
      icon: 'x',
    },
    decision: {
      title: 'Human review?',
      meta: 'Based on balance and risk',
    },
    outcome: {
      title: 'Escalate case',
      meta: 'Queue for specialist team',
      icon: 'x',
    },
  },
];

const heroLineLabels = [
  'Week 5',
  'Week 6',
  'Week 7',
  'Week 8',
  'Week 9',
  'Week 10',
  'Week 11',
  'Week 12',
  'Week 13',
  'Week 14',
  'Week 15',
  'Week 16',
  'Week 17',
];

const heroLineSeries = [
  {
    name: 'High Court',
    color: '#4a7fda',
    values: [4000, 21000, 33000, 9000, 2000, 76000, 18000, 6000, 14000, 9000, 5000, 7000, 3000],
  },
  {
    name: 'Debt Collection',
    color: '#d98954',
    values: [6000, 18000, 27000, 11000, 5000, 3000, 2000, 1000, 4000, 12000, 9000, 7000, 5000],
  },
  {
    name: 'Live Case',
    color: '#8ea85a',
    values: [0, 0, 0, 0, 0, 0, 4000, 12000, 23000, 14000, 9000, 6000, 3000],
  },
  {
    name: 'Broken Arrange',
    color: '#a17bc3',
    values: [0, 4000, 9000, 14000, 21000, 26000, 18000, 10000, 8000, 12000, 14000, 10000, 7000],
  },
  {
    name: 'New Clients',
    color: '#838c95',
    values: [0, 9000, 18000, 13000, 8000, 5000, 3000, 6000, 4000, 3000, 2000, 1000, 0],
  },
];

const heroBarLabels = ['29 Jan', '5 Feb', '12 Feb', '19 Feb', '26 Feb', '5 Mar', '12 Mar', '19 Mar'];

const heroBarSeries = [
  {
    name: 'Due',
    color: '#d9dfe5',
    values: [62000, 41000, 52000, 74000, 56000, 98000, 82000, 69000],
  },
  {
    name: 'Paid',
    color: '#eef3f7',
    values: [28000, 25000, 47000, 61000, 34000, 26000, 18000, 12000],
  },
  {
    name: 'Unpaid',
    color: '#eda84d',
    values: [15000, 72000, 38000, 52000, 68000, 9000, 0, 0],
  },
];

function formatCompactMoney(value) {
  if (value === 0) {
    return '£0';
  }

  return `£${(value / 1000).toFixed(0)}k`;
}

function buildLineChartPoints(values, width, height, maxValue) {
  const stepX = width / (values.length - 1);

  return values
    .map((value, index) => {
      const x = index * stepX;
      const y = height - (value / maxValue) * height;
      return { x, y, value };
    })
    .filter((point, index, points) => point.value > 0 || points[index - 1]?.value > 0 || points[index + 1]?.value > 0);
}

function PlatformHeroLineChart() {
  const width = 620;
  const height = 220;
  const maxValue = 80000;
  const xStep = width / (heroLineLabels.length - 1);
  const yTicks = [0, 20000, 40000, 60000, 80000];

  return (
    <svg
      className="platform-v2-hero-chart-svg"
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label="Top clients line chart"
      preserveAspectRatio="none"
    >
      {yTicks.map((tick) => {
        const y = height - (tick / maxValue) * height;
        return (
          <g key={tick}>
            <line className="grid-line" x1="0" y1={y} x2={width} y2={y} />
            <text className="axis-label axis-label-y" x="4" y={Math.max(12, y - 4)}>
              {formatCompactMoney(tick)}
            </text>
          </g>
        );
      })}

      {heroLineLabels.map((label, index) => {
        const x = index * xStep;
        return (
          <g key={label}>
            <line className="grid-line is-vertical" x1={x} y1="0" x2={x} y2={height} />
            <text className="axis-label axis-label-x" x={x} y={height - 6} textAnchor="middle">
              {label}
            </text>
          </g>
        );
      })}

      {heroLineSeries.map((series) => {
        const points = buildLineChartPoints(series.values, width, height - 18, maxValue);
        const pointString = points.map((point) => `${point.x},${point.y}`).join(' ');

        return (
          <g key={series.name}>
            <polyline
              className="series-line"
              points={pointString}
              stroke={series.color}
              strokeWidth="3"
              fill="none"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            {points
              .filter((point) => point.value > 0)
              .map((point, index) => (
                <circle
                  className="series-point"
                  key={`${series.name}-${index}`}
                  cx={point.x}
                  cy={point.y}
                  r="3.5"
                  fill={series.color}
                />
              ))}
          </g>
        );
      })}
    </svg>
  );
}

function PlatformHeroBarChart() {
  const width = 620;
  const height = 180;
  const maxValue = 125000;
  const yTicks = [0, 25000, 50000, 75000, 100000, 125000];
  const groupWidth = width / heroBarLabels.length;
  const barWidth = 12;

  return (
    <svg
      className="platform-v2-hero-chart-svg"
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label="Payments on arrangement bar chart"
      preserveAspectRatio="none"
    >
      {yTicks.map((tick) => {
        const y = height - (tick / maxValue) * height;
        return (
          <g key={tick}>
            <line className="grid-line" x1="0" y1={y} x2={width} y2={y} />
            <text className="axis-label axis-label-y" x="4" y={Math.max(12, y - 4)}>
              {formatCompactMoney(tick)}
            </text>
          </g>
        );
      })}

      {heroBarLabels.map((label, index) => {
        const x = index * groupWidth + groupWidth / 2;
        return (
          <g key={label}>
            <line className="grid-line is-vertical" x1={x} y1="0" x2={x} y2={height} />
            <text className="axis-label axis-label-x" x={x} y={height - 6} textAnchor="middle">
              {label}
            </text>
          </g>
        );
      })}

      {heroBarLabels.map((label, index) => {
        const center = index * groupWidth + groupWidth / 2;

        return heroBarSeries.map((series, seriesIndex) => {
          const value = series.values[index];
          const barHeight = (value / maxValue) * (height - 18);
          const x = center + (seriesIndex - 1) * (barWidth + 3) - barWidth / 2;
          const y = height - barHeight;

          return (
            <rect
              key={`${label}-${series.name}`}
              x={x}
              y={y}
              width={barWidth}
              height={barHeight}
              rx="3"
              fill={series.color}
              className={`series-bar ${series.name.toLowerCase()}`}
            />
          );
        });
      })}
    </svg>
  );
}

function formatCompactMoneyV2(value) {
  if (value === 0) {
    return 'GBP 0';
  }

  return `GBP ${(value / 1000).toFixed(0)}k`;
}

function buildLineChartPointsV2(values, plotWidth, plotHeight, maxValue, offsetX, offsetY) {
  const stepX = plotWidth / (values.length - 1);

  return values.map((value, index) => {
    const x = offsetX + index * stepX;
    const y = offsetY + plotHeight - (value / maxValue) * plotHeight;
    return { x, y, value };
  });
}

function PlatformHeroLineChartV2() {
  const width = 620;
  const height = 220;
  const maxValue = 80000;
  const padding = {
    top: 12,
    right: 18,
    bottom: 22,
    left: 52,
  };
  const plotWidth = width - padding.left - padding.right;
  const plotHeight = height - padding.top - padding.bottom;
  const xStep = plotWidth / (heroLineLabels.length - 1);
  const yTicks = [0, 20000, 40000, 60000, 80000];

  return (
    <svg
      className="platform-v2-hero-chart-svg"
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label="Top clients line chart"
      preserveAspectRatio="none"
    >
      {yTicks.map((tick) => {
        const y = padding.top + plotHeight - (tick / maxValue) * plotHeight;
        return (
          <g key={tick}>
            <line className="grid-line" x1={padding.left} y1={y} x2={width - padding.right} y2={y} />
            <text className="axis-label axis-label-y" x="4" y={Math.max(12, y - 4)}>
              {formatCompactMoneyV2(tick)}
            </text>
          </g>
        );
      })}

      {heroLineLabels.map((label, index) => {
        const x = padding.left + index * xStep;
        return (
          <g key={label}>
            <line
              className="grid-line is-vertical"
              x1={x}
              y1={padding.top}
              x2={x}
              y2={height - padding.bottom}
            />
            <text className="axis-label axis-label-x" x={x} y={height - 6} textAnchor="middle">
              {label}
            </text>
          </g>
        );
      })}

      {heroLineSeries.map((series) => {
        const points = buildLineChartPointsV2(
          series.values,
          plotWidth,
          plotHeight,
          maxValue,
          padding.left,
          padding.top,
        );
        const pointString = points.map((point) => `${point.x},${point.y}`).join(' ');

        return (
          <g key={series.name}>
            <polyline
              className="series-line"
              points={pointString}
              stroke={series.color}
              strokeWidth="3"
              fill="none"
              strokeLinejoin="round"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            {points.map((point, index) => (
              <circle
                className="series-point"
                key={`${series.name}-${index}`}
                cx={point.x}
                cy={point.y}
                r="3.5"
                fill={series.color}
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </g>
        );
      })}
    </svg>
  );
}

function PlatformHeroBarChartV2() {
  const width = 620;
  const height = 180;
  const maxValue = 125000;
  const padding = {
    top: 10,
    right: 18,
    bottom: 20,
    left: 52,
  };
  const plotWidth = width - padding.left - padding.right;
  const plotHeight = height - padding.top - padding.bottom;
  const yTicks = [0, 25000, 50000, 75000, 100000, 125000];
  const groupWidth = plotWidth / heroBarLabels.length;
  const barWidth = 12;

  return (
    <svg
      className="platform-v2-hero-chart-svg"
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label="Payments on arrangement bar chart"
      preserveAspectRatio="none"
    >
      {yTicks.map((tick) => {
        const y = padding.top + plotHeight - (tick / maxValue) * plotHeight;
        return (
          <g key={tick}>
            <line className="grid-line" x1={padding.left} y1={y} x2={width - padding.right} y2={y} />
            <text className="axis-label axis-label-y" x="4" y={Math.max(12, y - 4)}>
              {formatCompactMoneyV2(tick)}
            </text>
          </g>
        );
      })}

      {heroBarLabels.map((label, index) => {
        const x = padding.left + index * groupWidth + groupWidth / 2;
        return (
          <g key={label}>
            <line
              className="grid-line is-vertical"
              x1={x}
              y1={padding.top}
              x2={x}
              y2={height - padding.bottom}
            />
            <text className="axis-label axis-label-x" x={x} y={height - 6} textAnchor="middle">
              {label}
            </text>
          </g>
        );
      })}

      {heroBarLabels.map((label, index) => {
        const center = padding.left + index * groupWidth + groupWidth / 2;

        return heroBarSeries.map((series, seriesIndex) => {
          const value = series.values[index];
          const barHeight = (value / maxValue) * plotHeight;
          const x = center + (seriesIndex - 1) * (barWidth + 3) - barWidth / 2;
          const y = padding.top + plotHeight - barHeight;

          return (
            <rect
              key={`${label}-${series.name}`}
              x={x}
              y={y}
              width={barWidth}
              height={barHeight}
              rx="3"
              fill={series.color}
              className={`series-bar ${series.name.toLowerCase()}`}
            />
          );
        });
      })}
    </svg>
  );
}

const caseManagementPoints = [
  'Centralised case files, timelines and customer context',
  'Role-based access for internal teams, external clients and stakeholders',
  'Integrated documents, notes, payment activity and e-signatures',
  'Auto-assign and escalate tasks by case status, age or ownership',
];

const reportingPoints = [
  'Dashboards by user, client, portfolio or team',
  'Exportable reports in PDF, CSV and client-ready formats',
  'Real-time views of volume, recoveries, SLA performance and workflow health',
  'Drill-down audit trails and compliance oversight in the same platform',
];

const integrationPoints = [
  'REST API for custom integrations and data flows',
  'Connectors for payment gateways, e-sign platforms, CRMs and SMS providers',
  'Sync with finance systems, document storage and reporting tools',
];

const securityPoints = [
  'Multi geographical regions for local AWS cloud hosting or on-premise deployment',
  'ISO 27001 and SOC 2 certified',
  'Encryption at rest and in transit by default',
  'Audit logs, role permissions and multi-tenant controls built in',
];

const platformStories = [
  {
    eyebrow: 'Workflow automation',
    title: 'Rules, journeys and next steps that match the way your team already works.',
    description:
      'Design credit control steps, collections journeys, legal actions and escalation logic in one controlled environment, then apply it consistently at scale.',
    points: workflowPoints,
    visualType: 'workflow',
    shotClassName: 'is-workflow-shot',
    storyClassName: 'is-workflow-story',
  },
  {
    eyebrow: 'Unified workspaces',
    title: 'Case, customer and payment context in one connected working view.',
    description:
      'Give teams a live record of balances, documents, communications and next actions without bouncing between legacy systems or duplicated records.',
    points: caseManagementPoints,
    imageSrc: '/home-assets/one-system.png',
    imageAlt: 'Lateral platform showing payment plans, notes and case information',
    cover: true,
    aspectRatio: '1.2 / 1',
    objectPosition: 'center 10%',
    reverse: true,
  },
  {
    eyebrow: 'Reporting and insight',
    title: 'Operational visibility your team and your clients can act on immediately.',
    description:
      'Move from static exports and fragmented reporting to live dashboards, client-ready views and deeper auditability across every workflow.',
    points: reportingPoints,
    imageSrc: '/company-assets/reporting.png',
    imageAlt: 'Lateral reporting dashboard with charts and system alerts',
    cover: true,
    aspectRatio: '1.34 / 1',
    objectPosition: 'center 12%',
  },
];

const platformMarkets = [
  'North America',
  'United Kingdom',
  'Australia, New Zealand & Asia-Pacific',
  'Collections teams',
  'Credit control',
  'Legal case management',
  'Enforcement operations',
  'Customer recovery',
];

const heroNavigation = ['Overview', 'Workflows', 'Cases', 'Payments'];

const heroStats = [
  {
    label: 'Cases in flow',
    value: '24.8k',
    accent: 'is-blue',
  },
  {
    label: 'Automation rate',
    value: '94%',
    accent: 'is-pink',
  },
  {
    label: 'Recovered',
    value: '£1.48m',
    accent: 'is-slate',
  },
];

const heroQueue = [
  {
    title: 'Broken plan follow-up',
    meta: '212 accounts ready',
    accent: 'is-pink',
  },
  {
    title: 'High-value review',
    meta: '37 escalations pending',
    accent: 'is-blue',
  },
  {
    title: 'Promises to pay',
    meta: '81% kept this week',
    accent: 'is-slate',
  },
];

const heroTimeline = [
  'SMS reminders sent',
  'Payment plans updated',
  'Manager queue reviewed',
];

function PlatformTiltSurface({
  children,
  interactive = false,
  cover = false,
  aspectRatio,
  shotClassName = '',
}) {
  const shotRef = useRef(null);

  const resetTilt = useCallback(() => {
    const shot = shotRef.current;

    if (!shot) {
      return;
    }

    shot.style.setProperty('--platform-tilt-x', '0deg');
    shot.style.setProperty('--platform-tilt-y', '0deg');
    shot.style.setProperty('--platform-tilt-shift-x', '0px');
    shot.style.setProperty('--platform-tilt-shift-y', '0px');
  }, []);

  const handlePointerMove = useCallback((event) => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }

    const shot = shotRef.current;

    if (!shot) {
      return;
    }

    const bounds = shot.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    const centeredX = (x - 0.5) * 2;
    const centeredY = (y - 0.5) * 2;

    shot.style.setProperty('--platform-tilt-x', `${(centeredY * -4.5).toFixed(2)}deg`);
    shot.style.setProperty('--platform-tilt-y', `${(centeredX * 5.5).toFixed(2)}deg`);
    shot.style.setProperty('--platform-tilt-shift-x', `${(centeredX * 4).toFixed(2)}px`);
    shot.style.setProperty('--platform-tilt-shift-y', `${(centeredY * -4).toFixed(2)}px`);
  }, []);

  return (
    <div className="platform-v2-media-shell">
      <div
        className={`platform-v2-shot${cover ? ' is-cover' : ''}${interactive ? ' is-interactive' : ''}${shotClassName ? ` ${shotClassName}` : ''}`}
        ref={shotRef}
        onPointerEnter={interactive ? resetTilt : undefined}
        onPointerMove={interactive ? handlePointerMove : undefined}
        onPointerLeave={interactive ? resetTilt : undefined}
        onPointerCancel={interactive ? resetTilt : undefined}
        style={aspectRatio ? { '--platform-shot-ratio': aspectRatio } : undefined}
      >
        {children}
      </div>
    </div>
  );
}

function PlatformTiltMedia({
  src,
  alt,
  loading = 'lazy',
  interactive = false,
  cover = false,
  aspectRatio,
  objectPosition,
  shotClassName = '',
}) {
  return (
    <PlatformTiltSurface
      interactive={interactive}
      cover={cover}
      aspectRatio={aspectRatio}
      shotClassName={shotClassName}
    >
      <img
        src={src}
        alt={alt}
        loading={loading}
        style={objectPosition ? { objectPosition } : undefined}
      />
    </PlatformTiltSurface>
  );
}

function PlatformHeroVisualLegacy() {
  return (
    <PlatformTiltSurface shotClassName="is-hero-dashboard" aspectRatio="1.35 / 1">
      <div className="platform-v2-hero-dashboard" aria-hidden="true">
        <span className="platform-v2-dashboard-glow is-left" />
        <span className="platform-v2-dashboard-glow is-right" />

        <div className="platform-v2-dashboard-window">
          <div className="platform-v2-dashboard-topbar">
            <div className="platform-v2-dashboard-dots">
              <span />
              <span />
              <span />
            </div>
            <div className="platform-v2-dashboard-topbar-title">Lateral platform</div>
            <div className="platform-v2-dashboard-topbar-status">Live operations</div>
          </div>

          <div className="platform-v2-dashboard-body">
            <aside className="platform-v2-dashboard-sidebar">
              <div className="platform-v2-dashboard-brand">
                <span className="platform-v2-dashboard-brand-mark">lateral</span>
                <span className="platform-v2-dashboard-brand-sub">Collections OS</span>
              </div>

              <div className="platform-v2-dashboard-nav">
                {heroNavigation.map((item, index) => (
                  <span
                    className={`platform-v2-dashboard-nav-pill${index === 0 ? ' is-active' : ''}`}
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="platform-v2-dashboard-sidebar-card">
                <span className="platform-v2-dashboard-sidebar-kicker">Recovery automation</span>
                <strong>94%</strong>
                <p>Letters, email and SMS coordinated from one workflow engine.</p>
              </div>
            </aside>

            <div className="platform-v2-dashboard-main">
              <div className="platform-v2-dashboard-toolbar">
                <span className="platform-v2-dashboard-search">Portfolio overview</span>
                <div className="platform-v2-dashboard-toolbar-actions">
                  <span>Debt recovery</span>
                  <span className="platform-v2-dashboard-toolbar-button">Export</span>
                </div>
              </div>

              <section className="platform-v2-dashboard-highlight">
                <div>
                  <p className="platform-v2-dashboard-kicker">Operational control</p>
                  <h3>Cases, comms and payments in one working view.</h3>
                </div>
                <div className="platform-v2-dashboard-balance">
                  <span>Recovered this month</span>
                  <strong>£1.48m</strong>
                  <em>+18.4%</em>
                </div>
              </section>

              <div className="platform-v2-dashboard-stats">
                {heroStats.map((item) => (
                  <article className={`platform-v2-dashboard-stat ${item.accent}`} key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </article>
                ))}
              </div>

              <div className="platform-v2-dashboard-lower">
                <section className="platform-v2-dashboard-card platform-v2-dashboard-chart-card">
                  <div className="platform-v2-dashboard-card-head">
                    <div>
                      <p>Workflow activity</p>
                      <strong>Live throughput by queue</strong>
                    </div>
                    <span className="platform-v2-dashboard-live-pill">Updated now</span>
                  </div>
                  <div className="platform-v2-dashboard-chart">
                    <div className="platform-v2-dashboard-chart-grid" />
                    <div className="platform-v2-dashboard-chart-lines">
                      <span className="platform-v2-dashboard-chart-line is-primary" />
                      <span className="platform-v2-dashboard-chart-line is-secondary" />
                    </div>
                    <div className="platform-v2-dashboard-chart-bars">
                      <span style={{ '--bar-height': '38%' }} />
                      <span style={{ '--bar-height': '62%' }} />
                      <span style={{ '--bar-height': '47%' }} />
                      <span style={{ '--bar-height': '76%' }} />
                      <span style={{ '--bar-height': '58%' }} />
                      <span style={{ '--bar-height': '83%' }} />
                    </div>
                  </div>
                </section>

                <div className="platform-v2-dashboard-sidecards">
                  <section className="platform-v2-dashboard-card platform-v2-dashboard-queue-card">
                    <div className="platform-v2-dashboard-card-head">
                      <div>
                        <p>Priority queues</p>
                        <strong>Today&apos;s focus</strong>
                      </div>
                    </div>
                    <div className="platform-v2-dashboard-queue-list">
                      {heroQueue.map((item) => (
                        <div className="platform-v2-dashboard-queue-item" key={item.title}>
                          <span className={`platform-v2-dashboard-queue-dot ${item.accent}`} />
                          <div>
                            <strong>{item.title}</strong>
                            <span>{item.meta}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="platform-v2-dashboard-card platform-v2-dashboard-timeline-card">
                    <div className="platform-v2-dashboard-card-head">
                      <div>
                        <p>Activity stream</p>
                        <strong>Automation pulse</strong>
                      </div>
                    </div>
                    <div className="platform-v2-dashboard-timeline">
                      {heroTimeline.map((item) => (
                        <div className="platform-v2-dashboard-timeline-item" key={item}>
                          <span className="platform-v2-dashboard-timeline-mark" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="platform-v2-dashboard-float is-primary">
          <span>Payments collected</span>
          <strong>£482k</strong>
          <small>in the last 7 days</small>
        </div>

        <div className="platform-v2-dashboard-float is-secondary">
          <span className="platform-v2-dashboard-float-dot" />
          SLA on track
        </div>
      </div>
    </PlatformTiltSurface>
  );
}

function PlatformHeroVisual() {
  return (
    <PlatformTiltSurface shotClassName="is-hero-dashboard-redesign" aspectRatio="1.35 / 1">
      <div className="platform-v2-hero-screenshot" aria-hidden="true">
        <span className="platform-v2-hero-screenshot-glow is-left" />
        <span className="platform-v2-hero-screenshot-glow is-right" />

        <div className="platform-v2-hero-screenshot-window">
          <div className="platform-v2-hero-screenshot-topbar">
            <div className="platform-v2-hero-screenshot-brand" aria-label="lateral">
              <span className="platform-v2-hero-screenshot-brand-bar" />
              <span className="platform-v2-hero-screenshot-brand-chevron" />
              <span className="platform-v2-hero-screenshot-brand-chevron is-trailing" />
            </div>
            <div className="platform-v2-hero-screenshot-nav">
              <span>Home</span>
              <span>Create Case</span>
              <span>General</span>
              <span>Management</span>
              <span>Settings</span>
              <span>Addons</span>
            </div>
          </div>

          <div className="platform-v2-hero-screenshot-body">
            <div className="platform-v2-hero-screenshot-panel">
              <div className="platform-v2-hero-screenshot-panel-head">
                <span>Dashboard Filters</span>
              </div>

              <div className="platform-v2-hero-screenshot-filters">
                <span className="platform-v2-hero-filter-field">From date</span>
                <span className="platform-v2-hero-filter-field">To date</span>
                <span className="platform-v2-hero-filter-toggle">Group by week</span>
                <span className="platform-v2-hero-filter-toggle">Group by month</span>
                <span className="platform-v2-hero-filter-button">Filter</span>
              </div>
            </div>

            <section className="platform-v2-hero-chart-card is-line-chart">
              <div className="platform-v2-hero-card-head">
                <strong>Top Clients</strong>
              </div>

              <div className="platform-v2-hero-chart-shell">
                <div className="platform-v2-hero-line-chart">
                  <div className="platform-v2-hero-chart-grid" />
                  <PlatformHeroLineChartV2 />
                </div>

                <div className="platform-v2-hero-chart-legend">
                  <span className="is-blue">High Court</span>
                  <span className="is-orange">Debt Collection</span>
                  <span className="is-green">Live Case</span>
                  <span className="is-purple">Broken Arrange</span>
                  <span className="is-gray">New Clients</span>
                </div>
              </div>
            </section>

            <section className="platform-v2-hero-chart-card is-bar-chart">
              <div className="platform-v2-hero-card-head">
                <strong>Payments on Arrangement</strong>
              </div>

              <div className="platform-v2-hero-chart-shell">
                <div className="platform-v2-hero-bar-chart">
                  <div className="platform-v2-hero-chart-grid" />
                  <PlatformHeroBarChartV2 />
                </div>

                <div className="platform-v2-hero-chart-legend">
                  <span className="is-due">Due</span>
                  <span className="is-paid">Paid</span>
                  <span className="is-unpaid">Unpaid</span>
                </div>
              </div>
            </section>

            <section className="platform-v2-hero-alerts-card">
              <div className="platform-v2-hero-card-head">
                <strong>System Alerts</strong>
              </div>

              <div className="platform-v2-hero-alert-grid">
                <div className="platform-v2-hero-alert-pill"><span>Ready for Payout</span><b>119</b></div>
                <div className="platform-v2-hero-alert-pill"><span>IDF invoicing Required</span><b>57</b></div>
                <div className="platform-v2-hero-alert-pill"><span>Broken Arrangements</span><b>56</b></div>
                <div className="platform-v2-hero-alert-pill"><span>Cases Held Too Often</span><b>8</b></div>
                <div className="platform-v2-hero-alert-pill"><span>Cases over 300 days</span><b>101</b></div>
                <div className="platform-v2-hero-alert-pill"><span>Payments held over 30+</span><b>123</b></div>
                <div className="platform-v2-hero-alert-pill"><span>Ready for Allocation</span><b>29</b></div>
                <div className="platform-v2-hero-alert-pill"><span>Allocation over 5 days</span><b>29</b></div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PlatformTiltSurface>
  );
}

function PlatformWorkflowVisual() {
  return (
    <PlatformTiltSurface shotClassName="is-workflow-shot" aspectRatio="1.18 / 1">
      <div className="platform-v2-workflow-mockup" aria-hidden="true">
        <span className="platform-v2-workflow-glow is-left" />
        <span className="platform-v2-workflow-glow is-right" />

        <div className="platform-v2-workflow-pills">
          <span>Triggers</span>
          <span>Decisions</span>
          <span>Outcomes</span>
        </div>

        <div className="platform-v2-workflow-canvas">
          <span className="platform-v2-workflow-connector is-row row-1" />
          <span className="platform-v2-workflow-connector is-row row-2" />
          <span className="platform-v2-workflow-connector is-row row-3" />
          <span className="platform-v2-workflow-connector is-vertical center-top" />
          <span className="platform-v2-workflow-connector is-vertical center-bottom" />
          <span className="platform-v2-workflow-connector is-vertical right-side" />
          <span className="platform-v2-workflow-connector is-elbow top-branch" />
          <span className="platform-v2-workflow-connector is-elbow bottom-branch" />

          <article className="platform-v2-workflow-node is-trigger row-1 col-1">
            <span className="platform-v2-workflow-node-icon">+</span>
            <div>
              <strong>New debt</strong>
              <span>balance raised</span>
            </div>
          </article>

          <article className="platform-v2-workflow-node is-trigger row-2 col-1">
            <span className="platform-v2-workflow-node-icon">→</span>
            <div>
              <strong>Missed</strong>
              <span>payment plan</span>
            </div>
          </article>

          <article className="platform-v2-workflow-node is-trigger row-3 col-1">
            <span className="platform-v2-workflow-node-icon">×</span>
            <div>
              <strong>No reply</strong>
              <span>after reminder</span>
            </div>
          </article>

          <article className="platform-v2-workflow-node is-decision row-1 col-2">
            <span className="platform-v2-workflow-node-badge" />
            <strong>In grace?</strong>
            <span>Balance under threshold</span>
          </article>

          <article className="platform-v2-workflow-node is-decision row-2 col-2">
            <span className="platform-v2-workflow-node-badge" />
            <strong>Opened email?</strong>
            <span>Check after 48 hours</span>
          </article>

          <article className="platform-v2-workflow-node is-decision row-3 col-2">
            <span className="platform-v2-workflow-node-badge" />
            <strong>Human review?</strong>
            <span>Based on balance and risk</span>
          </article>

          <article className="platform-v2-workflow-node is-outcome row-1 col-3">
            <span className="platform-v2-workflow-node-icon">→</span>
            <div>
              <strong>Send reminder</strong>
              <span>Email + letter template</span>
            </div>
          </article>

          <article className="platform-v2-workflow-node is-outcome row-2 col-3">
            <span className="platform-v2-workflow-node-icon">+</span>
            <div>
              <strong>SMS chase</strong>
              <span>Fallback on no open</span>
            </div>
          </article>

          <article className="platform-v2-workflow-node is-outcome row-3 col-3">
            <span className="platform-v2-workflow-node-icon">×</span>
            <div>
              <strong>Escalate case</strong>
              <span>Queue for specialist team</span>
            </div>
          </article>

          <article className="platform-v2-workflow-note is-wait">
            <span className="platform-v2-workflow-note-icon">→</span>
            Wait 48 hours
          </article>

          <article className="platform-v2-workflow-note is-route">
            <span className="platform-v2-workflow-note-icon">✓</span>
            Route to legal
          </article>
        </div>
      </div>
    </PlatformTiltSurface>
  );
}

function PlatformWorkflowVisualV2() {
  return (
    <PlatformTiltSurface shotClassName="is-workflow-shot-v2" aspectRatio="1.18 / 1">
      <div className="platform-v2-workflow-mockup-v2" aria-hidden="true">
        <span className="platform-v2-workflow-glow is-left" />
        <span className="platform-v2-workflow-glow is-right" />

        <div className="platform-v2-workflow-pills is-v2">
          {workflowLanes.map((lane) => (
            <span key={lane}>{lane}</span>
          ))}
        </div>

        <div className="platform-v2-workflow-canvas-v2">
          <span className="platform-v2-workflow-spine is-center-top" />
          <span className="platform-v2-workflow-spine is-center-bottom" />
          <span className="platform-v2-workflow-spine is-right" />

          {workflowRows.map((row) => (
            <div className="platform-v2-workflow-row-v2" key={row.decision.title}>
              <article className="platform-v2-workflow-card-v2 is-trigger">
                <span className="platform-v2-workflow-card-icon-v2">{row.trigger.icon}</span>
                <div className="platform-v2-workflow-card-copy-v2">
                  <strong>{row.trigger.title}</strong>
                  <span>{row.trigger.meta}</span>
                </div>
              </article>

              <article className="platform-v2-workflow-card-v2 is-decision">
                <span className="platform-v2-workflow-card-badge-v2" />
                <div className="platform-v2-workflow-card-copy-v2">
                  <strong>{row.decision.title}</strong>
                  <span>{row.decision.meta}</span>
                </div>
              </article>

              <article className="platform-v2-workflow-card-v2 is-outcome">
                <span className="platform-v2-workflow-card-icon-v2">{row.outcome.icon}</span>
                <div className="platform-v2-workflow-card-copy-v2">
                  <strong>{row.outcome.title}</strong>
                  <span>{row.outcome.meta}</span>
                </div>
              </article>
            </div>
          ))}

          <article className="platform-v2-workflow-chip-v2 is-wait">
            <span className="platform-v2-workflow-chip-icon-v2">&gt;</span>
            Wait 48 hours
          </article>

          <article className="platform-v2-workflow-chip-v2 is-route">
            <span className="platform-v2-workflow-chip-icon-v2">+</span>
            Route to legal
          </article>
        </div>
      </div>
    </PlatformTiltSurface>
  );
}

function PlatformStorySection({
  eyebrow,
  title,
  description,
  points,
  imageSrc,
  imageAlt,
  reverse = false,
  muted = false,
  cover = false,
  aspectRatio,
  objectPosition,
  shotClassName = '',
  storyClassName = '',
  visualType = '',
}) {
  return (
    <section className={`section platform-v2-section${muted ? ' section-alt' : ''}`}>
      <div
        className={`container platform-v2-story${reverse ? ' is-reverse' : ''}${storyClassName ? ` ${storyClassName}` : ''}`}
      >
        <div className="platform-v2-story-media">
          {visualType === 'workflow' ? (
            <PlatformWorkflowVisualV2 />
          ) : (
            <PlatformTiltMedia
              src={imageSrc}
              alt={imageAlt}
              cover={cover}
              aspectRatio={aspectRatio}
              objectPosition={objectPosition}
              shotClassName={shotClassName}
            />
          )}
        </div>
        <div className="platform-v2-story-copy">
          <p className="platform-v2-tag">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{description}</p>
          <ul className="platform-v2-check-list">
            {points.map((item) => (
              <li key={item}>
                <span className="platform-v2-check-mark" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function PlatformPage() {
  return (
    <>
      <section className="platform-v2-hero">
        <div className="container platform-v2-hero-shell">
          <div className="platform-v2-hero-copy">
            <p className="platform-v2-tag">Platform overview</p>
            <h1>One connected platform for workflows, cases and recoveries.</h1>
            <p className="platform-v2-hero-lead">
              Lateral brings automation, case management, communications, payments and reporting
              into one cloud environment for operational teams.
            </p>
            <div className="button-row">
              <Link className="button button-primary" to="/demo">
                Schedule demo
              </Link>
              <Link className="button button-secondary" to="/solutions">
                Explore solutions
              </Link>
              <Link className="text-link" to="/contact">
                Talk to sales
              </Link>
            </div>
            <ul className="platform-v2-check-list platform-v2-hero-list">
              {heroHighlights.map((item) => (
                <li key={item}>
                  <span className="platform-v2-check-mark" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="platform-v2-hero-visual">
            <PlatformHeroVisual />
          </div>
        </div>
        <div className="platform-v2-rail">
          <div className="container platform-v2-rail-grid">
            {capabilityRail.map((item) => (
              <article className="platform-v2-rail-item" key={item.title}>
                <p>{item.title}</p>
                <span>{item.description}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {platformStories.map((story, index) => (
        <PlatformStorySection key={story.title} {...story} muted={index % 2 === 1} />
      ))}

      <section className="section platform-v2-section section-alt">
        <div className="container platform-v2-foundation">
          <div className="platform-v2-foundation-intro">
            <p className="platform-v2-tag">Platform foundation</p>
            <h2>Integration-ready architecture with compliance built in from the start.</h2>
            <p>
              Connect Lateral to the wider systems your teams already depend on while keeping
              hosting, permissions, audit trails and operational control inside one architecture.
            </p>
          </div>

          <div className="platform-v2-foundation-grid">
            <div className="platform-v2-foundation-media">
              <PlatformTiltMedia
                src="/home-assets/difference.png"
                alt="Lateral customer and account management workspace"
                interactive
                shotClassName="is-foundation-shot"
              />
            </div>

            <div className="platform-v2-foundation-panels">
              <article className="platform-v2-foundation-panel">
                <p className="platform-v2-mini-tag">Integrations</p>
                <ul className="platform-v2-check-list">
                  {integrationPoints.map((item) => (
                    <li key={item}>
                      <span className="platform-v2-check-mark" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="platform-v2-foundation-panel is-strong">
                <p className="platform-v2-mini-tag">Security and hosting</p>
                <ul className="platform-v2-check-list">
                  {securityPoints.map((item) => (
                    <li key={item}>
                      <span className="platform-v2-check-mark" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section platform-v2-section">
        <div className="container platform-v2-regions">
          <div className="platform-v2-region-media">
            <PlatformTiltMedia
              src="/solution-assets/legal-office.jpg"
              alt="Professional workspace for legal and operations teams"
              cover
              aspectRatio="1.06 / 1"
              objectPosition="center center"
              shotClassName="is-photo-shot"
            />
          </div>

          <div className="platform-v2-region-copy">
            <p className="platform-v2-tag">Built for your region and sector</p>
            <h2>Support for collections, legal, enforcement and customer operations teams.</h2>
            <p>
              Region-aligned support and deployment options help you move without waiting on
              another time zone or compromising local requirements.
            </p>
            <div className="platform-v2-market-pills">
              {platformMarkets.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section platform-v2-section">
        <div className="container platform-v2-cta">
          <p className="platform-v2-tag">Ready to simplify complexity?</p>
          <h2>Consolidate operations into one streamlined platform.</h2>
          <p>
            Discover how Lateral can be tailored to your industry, your data and your workflow.
          </p>
          <div className="button-row">
            <Link className="button button-primary" to="/demo">
              Schedule demo
            </Link>
            <Link className="button button-secondary" to="/solutions">
              View solutions
            </Link>
            <Link className="button button-secondary" to="/contact">
              Get a quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
