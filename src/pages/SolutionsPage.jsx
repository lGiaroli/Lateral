import { Link } from 'react-router-dom';
import { SectionHeading, SolutionGrid } from '../components/SiteLayout';

export default function SolutionsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">Solutions</p>
            <h1>Software for collections, legal and revenue teams.</h1>
            <p>
              Lateral adapts to different operational models while keeping the same core focus:
              better visibility, stronger automation and less wasted time.
            </p>
          </div>
          <div className="page-hero-aside">
            <p>Common outcomes</p>
            <ul className="check-list">
              <li>Faster action across complex workflows</li>
              <li>More consistent customer treatment</li>
              <li>Better operational control for growing teams</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Browse the solution portfolio."
            description="Each route focuses on a different operational need on the same Lateral platform."
          />
          <SolutionGrid />
        </div>
      </section>

      <section className="section">
        <div className="container cta-banner">
          <div>
            <p className="eyebrow">Need a tailored view?</p>
            <h2>We can tailor the demo to your operating model.</h2>
            <p>
              From receivables and debt recovery to case management and enforcement, the platform can be configured to fit the way you work.
            </p>
          </div>
          <Link className="button button-primary" to="/demo">
            Book a demo
          </Link>
        </div>
      </section>
    </>
  );
}
