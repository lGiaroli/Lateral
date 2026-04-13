import { Link, Navigate, useParams } from 'react-router-dom';
import { ScrollReveal, SectionHeading } from '../components/SiteLayout';
import { solutionDetailContent, solutions } from '../data/siteContentData';

const getCascadeDelay = (index, itemsPerWave = 3) => (index % itemsPerWave) * 110;

function SolutionExtraSection({ section }) {
  const sectionClassName = `section${section.alt ? ' section-alt' : ''}`;

  if (section.type === 'cards') {
    return (
      <section className={sectionClassName}>
        <div className="container">
          <SectionHeading
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
          />

          <div className="feature-grid">
            {section.cards.map((card, index) => (
              <ScrollReveal delay={getCascadeDelay(index)} key={card.title}>
                <article className="card feature-card solution-section-card">
                  {card.image ? (
                    <div className="solution-section-media">
                      <img
                        src={card.image}
                        alt={card.imageAlt ?? card.title}
                        loading="lazy"
                      />
                    </div>
                  ) : null}
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (section.type === 'workflowColumns') {
    return (
      <section className={sectionClassName}>
        <div className="container">
          <SectionHeading
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
          />

          <div className="feature-grid">
            {section.columns.map((column, index) => (
              <ScrollReveal delay={getCascadeDelay(index)} key={column.title}>
                <article className="card detail-card solution-workflow-card">
                  <p className="eyebrow">{column.eyebrow}</p>
                  <h3>{column.title}</h3>
                  <ul className="check-list">
                    {column.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (section.type === 'pills') {
    return (
      <section className={sectionClassName}>
        <div className="container">
          <SectionHeading
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
          />

          <div className="pill-grid">
            {section.items.map((item) => (
              <div className="pill-card" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return null;
}

const collectIqWorkspaceTags = [
  'Intelligent Workflows',
  'Powerful Reporting',
  'Custom Fields and Tags',
];

const collectIqWorkspaceIntro = [
  'CollectIQ is Lateral’s in-house, proven debt recovery system for automating and tracking business processes.',
  'It includes the ability to have custom fields and manual or automated workflows with text, email, and letter templates.',
  'It also includes a financial system for managing fees, commissions and many other customisable fields.',
];

const collectIqWorkspaceFeatureCards = [
  {
    title: 'Intelligent workflows',
    description:
      'Manage multiple case types with intelligent workflows, bulk processing and automated workflow control.',
    items: [
      'Multiple Case Types',
      'Intelligent Workflows',
      'Bulk Processing',
      'Automated workflows',
    ],
    image: '/solution-assets/collect-iq-desktop-workflow-v3.svg',
    imageAlt: 'Collect IQ desktop workflow stage configuration screen',
  },
  {
    title: 'Reporting and communications',
    description:
      'Track activity with powerful reporting while keeping email, letter and texting integrated into the process.',
    items: [
      'Powerful Reporting',
      'Document Management',
      'Email, Letter, Texting integrated',
    ],
    image: '/solution-assets/collect-iq-desktop-comms-v2.svg',
    imageAlt: 'Collect IQ desktop communication weekly data dashboard',
  },
  {
    title: 'Flexible case setup',
    description:
      'Configure the system around your operation with permissions, forms, new data types and custom fields.',
    items: [
      'User Permissions',
      'Ability to create forms and new data types',
      'Custom Fields and Tags',
    ],
    image: '/solution-assets/collect-iq-desktop-cases-v3.svg',
    imageAlt: 'Collect IQ desktop case weekly data and total outstanding dashboard',
  },
];

const collectIqWorkspaceBenefits = [
  'Manage Cases more efficiently by streamlining your business process',
  'Less clicks and scrolling - optimised user experience',
  'Less time to train staff - easy to learn',
  'Companion app available along with field service management',
  'Integrates with 3rd-party systems easily',
];

function CollectIqWorkspacePage() {
  return (
    <div className="solution-detail-page collect-iq-workspace-page">
      <section className="collect-iq-workspace-hero-section">
        <div className="container collect-iq-workspace-hero-grid">
          <div className="collect-iq-workspace-copy">
            <p className="eyebrow">Debt recovery system</p>
            <h1>CollectIQ</h1>
            <p className="collect-iq-workspace-lead">{collectIqWorkspaceIntro[0]}</p>

            {collectIqWorkspaceIntro.slice(1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="collect-iq-workspace-tag-row">
              {collectIqWorkspaceTags.map((tag) => (
                <span className="collect-iq-workspace-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="button-row">
              <Link className="button button-primary" to="/demo">
                Book a demo
              </Link>
              <a className="button button-secondary" href="#collect-iq-service-features">
                View service features
              </a>
            </div>
          </div>

          <div className="collect-iq-workspace-hero-media">
            <img
              src="/solution-assets/collect-iq-desktop-workflow-v3.svg"
              alt="Collect IQ desktop debt recovery workflow"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="collect-iq-workspace-features-section" id="collect-iq-service-features">
        <div className="container">
          <SectionHeading eyebrow="Service features" title="Service features" />

          <div className="collect-iq-workspace-feature-grid">
            {collectIqWorkspaceFeatureCards.map((card, index) => (
              <ScrollReveal delay={getCascadeDelay(index)} key={card.title}>
                <article className="card collect-iq-workspace-anatomy-card">
                  <div className="collect-iq-workspace-shot">
                    <img src={card.image} alt={card.imageAlt} loading="lazy" />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <div className="collect-iq-workspace-chip-row">
                    {card.items.map((item) => (
                      <span className="collect-iq-workspace-chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="collect-iq-workspace-benefits-section">
        <div className="container">
          <SectionHeading
            eyebrow="Service benefits"
            title="Service benefits"
          />

          <article className="card collect-iq-workspace-outcomes-card">
            <ul className="check-list">
              {collectIqWorkspaceBenefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}

export default function SolutionDetailPage() {
  const { slug } = useParams();
  const solution = solutions.find((entry) => entry.slug === slug);
  const detailPage = slug ? solutionDetailContent[slug] : null;

  if (!solution) {
    return <Navigate to="/solutions" replace />;
  }

  if (slug === 'collect-iq') {
    return <CollectIqWorkspacePage />;
  }

  if (detailPage) {
    const introSectionId = detailPage.introId ?? `${solution.slug}-overview`;

    return (
      <div className={`solution-detail-page solution-detail-${solution.slug}`}>
        <section className="page-hero">
          <div className="container solution-hero-grid">
            <div className="solution-hero-copy">
              <p className="eyebrow">{detailPage.heroEyebrow ?? solution.title}</p>
              <h1>{detailPage.heroTitle}</h1>
              <p>{detailPage.heroDescription}</p>
              <div className="button-row">
                {detailPage.heroCtaHref ? (
                  <a className="button button-primary" href={detailPage.heroCtaHref}>
                    {detailPage.heroCtaLabel ?? 'Learn more'}
                  </a>
                ) : (
                  <Link className="button button-primary" to="/demo">
                    Book a demo
                  </Link>
                )}
              </div>
            </div>

            <div className="solution-hero-media">
              <img
                src={detailPage.heroImage}
                alt={detailPage.heroImageAlt ?? 'Solution detail visual'}
                loading="eager"
                style={
                  detailPage.heroImagePosition
                    ? { objectPosition: detailPage.heroImagePosition }
                    : undefined
                }
              />
            </div>
          </div>
        </section>

        <section className="section" id={introSectionId}>
          <div className="container solution-story-grid">
            <div className="section-stack">
              <SectionHeading
                eyebrow={detailPage.introEyebrow ?? `${solution.title} software`}
                title={detailPage.introTitle}
                description={detailPage.introLead}
              />

              {detailPage.introBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <div className="button-row">
                <Link className="button button-primary" to="/demo">
                  Book a demo
                </Link>
              </div>
            </div>

            <div className="section-stack">
              {detailPage.overviewImage ? (
                <div className="solution-story-media">
                  <img
                    src={detailPage.overviewImage}
                    alt={detailPage.overviewImageAlt ?? 'Solution platform visual'}
                    loading="lazy"
                  />
                </div>
              ) : null}

              <article className="card detail-card solution-highlight-card">
                <p className="eyebrow">
                  {detailPage.highlightEyebrow ?? `${solution.title} toolkit`}
                </p>
                <h2>{detailPage.highlightTitle ?? 'Built into the platform'}</h2>
                {detailPage.keyInclusionsLead ? (
                  <p className="solution-highlight-lead">{detailPage.keyInclusionsLead}</p>
                ) : null}
                <ul className="check-list">
                  {detailPage.keyInclusions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="page-hero-aside solution-best-fit-card">
                <p>{detailPage.bestFitLabel ?? 'Best fit'}</p>
                <p>{detailPage.bestFitText ?? solution.audience}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <SectionHeading
              eyebrow={detailPage.differenceEyebrow ?? 'The Lateral difference'}
              title={detailPage.differenceTitle}
              description={detailPage.differenceDescription}
            />

            <div className="solution-difference-grid">
              {detailPage.differenceItems.map((item, index) => (
                <ScrollReveal delay={getCascadeDelay(index)} key={item.title}>
                  <article className="card detail-card solution-difference-card">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {detailPage.sections?.map((section) => (
          <SolutionExtraSection key={section.title} section={section} />
        ))}

        <section className="section">
          <div className="container section-stack">
            <article className="card detail-card solution-features-card">
              <p className="eyebrow">{detailPage.featuresEyebrow ?? 'Features & Benefits'}</p>
              <h2>{detailPage.featuresTitle}</h2>
              <ul className="check-list">
                {detailPage.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <div className="quote-panel solution-testimonial-panel">
              <p className="quote-mark">"</p>
              <blockquote>{detailPage.testimonial.quote}</blockquote>
              {detailPage.testimonial.author ? (
                <p>
                  {detailPage.testimonial.author}
                  {detailPage.testimonial.role ? `, ${detailPage.testimonial.role}` : ''}
                </p>
              ) : null}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container solution-quote-grid">
            <div className="solution-quote-media">
              <img
                src={detailPage.insightImage}
                alt={detailPage.insightImageAlt ?? 'Solution visual'}
                loading="lazy"
                style={
                  detailPage.insightImagePosition
                    ? { objectPosition: detailPage.insightImagePosition }
                    : undefined
                }
              />
            </div>

            <article className="card solution-quote-card">
              <p className="eyebrow">
                {detailPage.quoteEyebrow ?? 'Process optimization partner'}
              </p>
              <h2>{detailPage.quote}</h2>
              {detailPage.quoteAuthor ? (
                <p className="solution-quote-author">{detailPage.quoteAuthor}</p>
              ) : null}
              <p>{detailPage.closingText}</p>
              <div className="button-row">
                <Link className="button button-primary" to="/demo">
                  Book a demo
                </Link>
                <Link className="button button-secondary" to="/contact">
                  Get in touch
                </Link>
              </div>
            </article>
          </div>
        </section>
      </div>
    );
  }

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">Solution</p>
            <h1>{solution.title}</h1>
            <p>{solution.tagline}</p>
          </div>
          <div className="page-hero-aside">
            <p>Best fit</p>
            <p>{solution.audience}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container detail-grid">
          <article className="card detail-card">
            <h2>Overview</h2>
            <p>{solution.summary}</p>
          </article>
          <article className="card detail-card">
            <h2>What this supports</h2>
            <ul className="check-list">
              {solution.benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container cta-banner">
          <div>
            <p className="eyebrow">Next step</p>
            <h2>See {solution.title.toLowerCase()} workflows in Lateral.</h2>
            <p>
              We can walk through data visibility, automation, communications and case handling with a demo tailored to your team.
            </p>
          </div>
          <div className="button-row">
            <Link className="button button-primary" to="/demo">
              Book a demo
            </Link>
            <Link className="button button-secondary" to="/solutions">
              Back to solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
