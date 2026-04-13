import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { footerLinks, navigation, offices, solutions } from '../data/siteContentData';

const lateralLogo =
  'https://images.squarespace-cdn.com/content/v1/5b335a834eddec4c26512510/eeb352d0-06b5-4fce-9d00-c30a97fea93c/embossedlogowhite.png?format=1500w';

const getCascadeDelay = (index, itemsPerWave = 3) => (index % itemsPerWave) * 110;

function ScrollToTop() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  return null;
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isPlatformPage = location.pathname === '/platform';
  const isCollectIqPage = location.pathname === '/solutions/collect-iq';

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const shouldLockMenu =
      isOpen && window.matchMedia && window.matchMedia('(max-width: 860px)').matches;

    if (shouldLockMenu) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <header
      className={`site-header${isHomePage ? ' is-home' : ' is-announcement-hidden'}${isPlatformPage ? ' is-platform' : ''}${isCollectIqPage ? ' is-collect-iq' : ''}`}
    >
      <div className="announcement-bar" aria-hidden={!isHomePage}>
        <div className="announcement-copy">
          <span className="announcement-tag">Platform spotlight</span>
          <p>
            Single View of Debt / Customer platform for collections, legal and government teams
          </p>
        </div>
        <Link className="announcement-cta" to="/demo">
          Ask for a demo
        </Link>
      </div>

      <div className="nav-shell">
        <Link className="brand" to="/">
          <span className="brand-logo-wrap">
            <img className="brand-logo" src={lateralLogo} alt="Lateral Technology" />
          </span>
          <span className="brand-copy">
            <strong>Lateral Technology</strong>
            <small>Automation &amp; Collections Software</small>
          </span>
        </Link>

        <button
          className="nav-toggle"
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-controls="primary-navigation"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          Menu
        </button>

        <nav className={`primary-nav ${isOpen ? 'is-open' : ''}`} id="primary-navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) =>
                `nav-link${isActive ? ' is-active' : ''}${item.accent ? ' is-accent' : ''}`
              }
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid container">
        <div className="footer-brand-panel">
          <p className="eyebrow">Lateral Technology Limited</p>
          <h3>Streamline your processes and protect your team's time.</h3>
          <p className="footer-copy">
            Get in touch to see how Lateral can modernize business processes, customer
            management and recovery operations.
          </p>
          <div className="footer-trust-list">
            <span>ISO 27001 aligned</span>
            <span>Cloud-based delivery</span>
            <span>UK and US support</span>
          </div>
          <Link className="button button-primary" to="/demo">
            Book a demo
          </Link>
          <img
            className="footer-certification"
            src="/footer-assets/lateral-crown-iso.png"
            alt="Crown Commercial Service supplier and ISO/IEC 27001 certification"
            loading="lazy"
          />
        </div>

        <div>
          <h4>Company</h4>
          <ul className="footer-list">
            {footerLinks.company.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Solutions</h4>
          <ul className="footer-list">
            {footerLinks.solutions.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Offices</h4>
          <ul className="footer-list">
            {offices.map((office) => (
              <li key={office.name}>
                <strong>{office.name}</strong>
                <span>{office.address}</span>
                <a href={`tel:${office.phone.replace(/\s+/g, '')}`}>{office.phone}</a>
              </li>
            ))}
            <li>
              <a href="mailto:sales@getlateral.com">sales@getlateral.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom container">
        <span>(c) Lateral Technology Ltd 2009 - 2025</span>
        <div className="footer-mini-links">
          <Link to="/privacy">Privacy</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/thinking">Industry News</Link>
        </div>
      </div>
    </footer>
  );
}

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export function ScrollReveal({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const revealRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      setIsVisible(true);
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return undefined;
    }

    const node = revealRef.current;

    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          setIsVisible(true);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`scroll-reveal${isVisible ? ' is-visible' : ''}`}
      ref={revealRef}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function SolutionGrid() {
  return (
    <div className="solution-grid">
      {solutions.map((solution, index) => (
        <ScrollReveal delay={getCascadeDelay(index)} key={solution.slug}>
          <Link className="card solution-card" to={`/solutions/${solution.slug}`}>
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
        </ScrollReveal>
      ))}
    </div>
  );
}

export default function SiteLayout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
