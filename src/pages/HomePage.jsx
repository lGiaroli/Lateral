import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/SiteLayout';
import {
  articles,
  differentiators,
  homeHero,
  solutions,
  testimonial,
  timeQuote,
  valueStatement,
} from '../data/siteContentData';

const showcaseHighlights = [
  'Case management, communications, tasks and outcomes in one auditable workspace',
  'Workflow automation triggered by dates, status changes and business rules',
  'Letters, email, SMS, chat and telephony coordinated from one platform',
  'Real-time reporting that gives teams and clients a clear view of performance',
  'Flexible integrations with finance systems, legacy tools and third-party services',
  'Secure cloud operations with permissions, traceability and remote access',
];

function useAutoCarousel(speed = 0.055) {
  const viewportRef = useRef(null);
  const nudgeRef = useRef(() => {});

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return undefined;
    }

    const track = viewport.querySelector('.home-v2-marquee-track');
    const firstGroup = track?.querySelector('.home-v2-marquee-group');

    if (!track || !firstGroup) {
      return undefined;
    }

    let frameId = 0;
    let previousTime = 0;
    let loopWidth = 0;
    let velocityBoost = 0;

    const wrapScroll = (value) => {
      if (loopWidth <= 0) {
        return value;
      }

      if (value < 0) {
        return value + loopWidth;
      }

      if (value >= loopWidth) {
        return value - loopWidth;
      }

      return value;
    };

    const setWrappedScroll = (value) => {
      viewport.scrollLeft = wrapScroll(value);
    };

    const measure = () => {
      const styles = window.getComputedStyle(track);
      const parsedColumnGap = Number.parseFloat(styles.columnGap);
      const parsedGap = Number.parseFloat(styles.gap);
      const gap = Number.isNaN(parsedColumnGap)
        ? Number.isNaN(parsedGap)
          ? 0
          : parsedGap
        : parsedColumnGap;
      loopWidth = firstGroup.getBoundingClientRect().width + gap;
    };

    const step = (time) => {
      if (!previousTime) {
        previousTime = time;
      }

      const delta = time - previousTime;
      previousTime = time;

      if (loopWidth > 0) {
        const currentVelocity = speed + velocityBoost;

        if (currentVelocity !== 0) {
          setWrappedScroll(viewport.scrollLeft + delta * currentVelocity);
        }

        if (velocityBoost !== 0) {
          velocityBoost *= Math.pow(0.995, delta);

          if (Math.abs(velocityBoost) < 0.01) {
            velocityBoost = 0;
          }
        }
      }

      frameId = window.requestAnimationFrame(step);
    };

    measure();
    viewport.scrollLeft = 0;

    nudgeRef.current = (direction) => {
      if (!direction || loopWidth <= 0) {
        return;
      }

      const impulse = 1.45 * direction;
      velocityBoost = Math.max(-2.4, Math.min(2.4, velocityBoost + impulse));
    };

    const resizeObserver =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(() => {
            measure();
          })
        : null;

    resizeObserver?.observe(viewport);
    resizeObserver?.observe(track);
    resizeObserver?.observe(firstGroup);

    frameId = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver?.disconnect();
      nudgeRef.current = () => {};
    };
  }, [speed]);

  return { viewportRef, nudge: (direction) => nudgeRef.current(direction) };
}

function HomeSolutionsCarousel() {
  const { viewportRef, nudge } = useAutoCarousel(0.055);

  return (
    <div className="home-v2-marquee home-v2-solutions-carousel">
      <button
        className="home-v2-carousel-arrow home-v2-carousel-arrow-left"
        type="button"
        aria-label="Move solutions backward"
        onClick={() => nudge(-1)}
      >
        <span aria-hidden="true">&lt;</span>
      </button>
      <div className="home-v2-marquee-viewport" ref={viewportRef}>
        <div className="home-v2-marquee-track home-v2-solutions-track">
          {[false, true].map((isClone) => (
            <div
              className="home-v2-marquee-group"
              key={isClone ? 'solutions-clone' : 'solutions-original'}
              aria-hidden={isClone ? 'true' : undefined}
            >
              {solutions.map((solution) => (
                <Link
                  className="card solution-card home-v2-solution-card"
                  key={`${solution.slug}-${isClone ? 'clone' : 'original'}`}
                  to={`/solutions/${solution.slug}`}
                  tabIndex={isClone ? -1 : undefined}
                >
                  <div className="solution-card-top">
                    <p className="eyebrow">Solution</p>
                    <span className="solution-card-badge">Cloud-based</span>
                  </div>
                  <h3>{solution.title}</h3>
                  <p className="solution-card-tagline">{solution.tagline}</p>
                  <p>{solution.summary}</p>
                  <div className="solution-card-footer">
                    <p className="solution-card-audience">{solution.audience}</p>
                    <span className="text-link">View solution</span>
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <button
        className="home-v2-carousel-arrow home-v2-carousel-arrow-right"
        type="button"
        aria-label="Move solutions forward"
        onClick={() => nudge(1)}
      >
        <span aria-hidden="true">&gt;</span>
      </button>
    </div>
  );
}

function HomeEditorialFeature({
  eyebrow,
  title,
  description,
  highlights,
  imageSrc,
  imageAlt,
  reverse = false,
}) {
  const screenRef = useRef(null);
  const baseRotateY = reverse ? 5.5 : -5.5;
  const baseRotateZ = reverse ? 0.3 : -0.3;

  const resetTilt = () => {
    const screen = screenRef.current;

    if (!screen) {
      return;
    }

    screen.style.setProperty('--feature-rotate-x', '1.5deg');
    screen.style.setProperty('--feature-rotate-y', `${baseRotateY}deg`);
    screen.style.setProperty('--feature-rotate-z', `${baseRotateZ}deg`);
    screen.style.setProperty('--feature-shift-x', '0px');
    screen.style.setProperty('--feature-shift-y', '-6px');
  };

  const handlePointerMove = (event) => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }

    const screen = screenRef.current;

    if (!screen) {
      return;
    }

    const bounds = screen.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    const centeredX = (x - 0.5) * 2;
    const centeredY = (y - 0.5) * 2;
    const rotateY = baseRotateY + centeredX * 2.2;
    const rotateX = 1.5 + centeredY * -3.2;
    const rotateZ = baseRotateZ + centeredX * 0.4;
    const shiftX = centeredX * 4;
    const shiftY = -6 + centeredY * -2;

    screen.style.setProperty('--feature-rotate-x', `${rotateX.toFixed(2)}deg`);
    screen.style.setProperty('--feature-rotate-y', `${rotateY.toFixed(2)}deg`);
    screen.style.setProperty('--feature-rotate-z', `${rotateZ.toFixed(2)}deg`);
    screen.style.setProperty('--feature-shift-x', `${shiftX.toFixed(2)}px`);
    screen.style.setProperty('--feature-shift-y', `${shiftY.toFixed(2)}px`);
  };

  return (
    <div className={`home-v2-feature${reverse ? ' home-v2-feature-reverse' : ''}`}>
      <div className="home-v2-feature-copy">
        <p className="home-v2-feature-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="home-v2-feature-description">{description}</p>
        <ul className="home-v2-feature-list">
          {highlights.map((item) => (
            <li className="home-v2-feature-item" key={item}>
              <span className="home-v2-feature-check" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="home-v2-feature-media">
        <div
          className="home-v2-feature-screen"
          ref={screenRef}
          onPointerEnter={resetTilt}
          onPointerMove={handlePointerMove}
          onPointerLeave={resetTilt}
        >
          <img src={imageSrc} alt={imageAlt} loading="lazy" />
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="home-v2-hero">
        <div className="container">
          <div className="home-v2-hero-shell">
            <div className="home-v2-hero-image">
              <div className="home-v2-hero-media">
                <img
                  src="/home-assets/jim-rohn.jpg"
                  alt="Mountain lake landscape"
                  loading="eager"
                />
                <div className="home-v2-hero-overlay" />
              </div>
              <div className="home-v2-hero-copy">
                <p className="eyebrow home-v2-eyebrow">
                  Collections, legal and government workflow platform
                </p>
                <h1>{homeHero.title}</h1>
                <p>{homeHero.description}</p>
                <div className="button-row home-v2-hero-actions">
                  <Link className="button button-primary" to="/demo">
                    Book a demo
                  </Link>
                  <Link className="button button-secondary" to="/solutions">
                    Explore solutions
                  </Link>
                </div>
                <div className="home-v2-hero-pills">
                  <span>One connected platform</span>
                  <span>Case management</span>
                  <span>Workflow automation</span>
                  <span>Omni-channel communications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container home-v2-value">
          <div className="home-v2-value-copy">
            <SectionHeading title={valueStatement.title} description={valueStatement.body[0]} />
            <div className="stacked-copy">
              {valueStatement.body.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="card home-v2-value-panel">
            <h3>One platform, many uses</h3>
            <p>
              Built for legal, government, finance, contact center and collections teams that need
              clarity, speed and control.
            </p>
            <div className="home-v2-value-list">
              <span>CRM</span>
              <span>Case Management</span>
              <span>Workflow Automation</span>
              <span>Credit Control</span>
              <span>Customer Communications</span>
              <span>Debt Recovery</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="home-v2-showcase">
            <HomeEditorialFeature
              eyebrow="One system, many uses"
              title="Next-generation CRM and case management."
              description="Purpose-built for operational teams working across collections, customer management and regulated workflows."
              highlights={showcaseHighlights}
              imageSrc="/home-assets/one-system.png"
              imageAlt="Lateral case and payment management interface"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Solutions"
            title="Built for collections, legal and customer operations."
            description="Explore the products and operating models Lateral supports across high-volume and compliance-sensitive environments."
          />
          <HomeSolutionsCarousel />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container home-v2-difference">
          <HomeEditorialFeature
            eyebrow="The Lateral Difference"
            title="Reliability, security and operational confidence."
            description="Designed to help teams move faster without losing control, traceability or service quality."
            highlights={differentiators}
            imageSrc="/home-assets/difference.png"
            imageAlt="Lateral customer management dashboard"
            reverse
          />
        </div>
      </section>

      <section className="section">
        <div className="container home-v2-testimonial">
          <div className="quote-panel">
            <p className="quote-mark">"</p>
            <blockquote>{testimonial.quote}</blockquote>
            <p>
              {testimonial.author}, {testimonial.role}
            </p>
          </div>
          <div className="home-v2-quote card">
            <img
              className="home-v2-quote-image"
              src="/home-assets/jim-rohn.jpg"
              alt="Mountain lake reflecting the landscape"
              loading="lazy"
            />
            <div className="home-v2-quote-copy">
              <p className="eyebrow">Process optimization partner</p>
              <h2>{timeQuote.quote}</h2>
              <p>{timeQuote.supporting}</p>
              <div className="button-row">
                <Link className="button button-primary" to="/demo">
                  Book a demo
                </Link>
                <Link className="button button-secondary" to="/contact">
                  Talk to sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Latest announcements"
            title="News and insights from Lateral Thinking."
            description="For teams planning migrations, improving security and refining operations."
          />
          <div className="article-grid">
            {articles.map((article) => (
              <Link className="card article-card" key={article.slug} to={`/thinking/${article.slug}`}>
                <p className="eyebrow">
                  {article.category} - {article.published}
                </p>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <span className="text-link">Read article</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
