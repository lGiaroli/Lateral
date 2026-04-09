import { offices } from '../data/siteContentData';

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container article-shell">
          <p className="eyebrow">Get in touch</p>
          <h1>Contact Lateral Technology</h1>
          <p className="article-intro">
            Talk to the team about debt recovery, legal case management, credit control, government workflows or the Single View of Debt / Customer platform.
          </p>
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
          <article className="card office-card">
            <p className="eyebrow">Email</p>
            <p className="office-address">sales@getlateral.com</p>
            <a className="text-link" href="mailto:sales@getlateral.com">
              Send an email
            </a>
          </article>
        </div>
      </section>
    </>
  );
}
