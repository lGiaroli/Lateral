import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/SiteLayout';
import { articles } from '../data/siteContentData';

export default function ThinkingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">Lateral Thinking</p>
            <h1>News, insights and industry updates.</h1>
            <p>
              A blog zone for migration planning, automation strategy, security thinking and
              operational improvement.
            </p>
          </div>
          <div className="page-hero-aside">
            <p>Topics</p>
            <ul className="check-list">
              <li>Technology migrations and platform change</li>
              <li>Decision engines and workflow design</li>
              <li>Security, privacy and compliance</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Latest articles."
            description="A growing library of announcements, commentary and practical guidance from the Lateral team."
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
