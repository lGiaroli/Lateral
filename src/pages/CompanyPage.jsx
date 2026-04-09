import { Link } from 'react-router-dom';
import { offices } from '../data/siteContentData';

const advantageCards = [
  {
    title: 'Powerful Reporting',
    copy: 'Unlimited real-time and historical performance reporting on every aspect of your business performance.',
    image: '/company-assets/reporting.png',
    alt: 'Lateral reporting dashboard on a laptop',
  },
  {
    title: 'Easy to Use',
    copy: 'Easy-to-use, practical and fast to train on solutions that help all businesses, from government bodies to international law firms and SMEs, work smarter.',
    image: '/company-assets/easy-to-use.png',
    alt: 'Chart showing new cases over time',
  },
  {
    title: 'Streamline Processes',
    copy: 'Innovative products help organisations streamline practices, reduce costs and environmental impact, avoid bad debt and improve cash flow.',
    image: '/company-assets/workflow.png',
    alt: 'Workflow diagram displayed on a desktop monitor',
  },
  {
    title: 'First Class Support',
    copy: "Supported by excellent resources and on-going development. The company's reputation reflects its commitment to giving first class customer service to partners and product users.",
    image: '/company-assets/support.png',
    alt: 'Lateral dashboard interface on a laptop',
  },
];

export default function CompanyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">Company</p>
            <h1>The Lateral Advantage.</h1>
            <p>
              A closer look at the reporting, usability, process design and support that help
              clients operate with more clarity and less friction.
            </p>
          </div>
          <div className="page-hero-aside">
            <p>Why teams choose Lateral</p>
            <ul className="check-list">
              <li>Reporting across real-time and historical performance</li>
              <li>Practical software that is easy to use and fast to train on</li>
              <li>Products and support designed for long-term operational value</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container advantage-grid">
          {advantageCards.map((card, index) => (
            <article
              className={`card advantage-card ${index % 2 === 1 ? 'is-reversed' : ''}`}
              key={card.title}
            >
              <div className="advantage-media">
                <img src={card.image} alt={card.alt} loading="lazy" />
              </div>
              <div className="advantage-copy">
                <p className="eyebrow">The Lateral Advantage</p>
                <h2>{card.title}</h2>
                <p>{card.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split-section">
          <div className="section-heading">
            <p className="eyebrow">Our software works harder</p>
            <h2>So you do not have to.</h2>
            <p>
              Lateral began in 2010, when our co-founder noticed a huge gap in the market for a
              cloud-based, intuitive solution to debt management.
            </p>
          </div>
          <div className="stacked-copy">
            <p>
              Since then, Lateral has grown its client base to include some of the largest
              Councils and debt collection companies, while expanding its software suite into a
              powerful yet flexible solution for companies and government departments alike.
              Lateral currently manages billions of transactions on behalf of clients around the
              world.
            </p>
            <p>
              The management team understands the challenges of the business environment for its
              clients and works tirelessly to improve solutions and service levels for continued
              success for all.
            </p>
            <p>
              Through cutting-edge Agile methodologies, and an environment fostering continuous
              improvement, the team is dedicated to continually improving software performance and
              giving clients innovative tools that drive time and cost efficiencies from the start.
            </p>
            <div className="button-row">
              <Link className="button button-primary" to="/contact">
                Get in touch
              </Link>
              <Link className="button button-secondary" to="/demo">
                Book a demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container office-grid">
          {offices.map((office) => (
            <article className="card office-card" key={office.name}>
              <p className="eyebrow">{office.name}</p>
              <p className="office-address">{office.address}</p>
              <a className="text-link" href={`tel:${office.phone.replace(/\s+/g, '')}`}>
                {office.phone}
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
