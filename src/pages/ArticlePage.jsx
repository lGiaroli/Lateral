import { Link, Navigate, useParams } from 'react-router-dom';
import { articles } from '../data/siteContentData';

export default function ArticlePage() {
  const { slug } = useParams();
  const article = articles.find((entry) => entry.slug === slug);

  if (!article) {
    return <Navigate to="/thinking" replace />;
  }

  return (
    <>
      <section className="page-hero">
        <div className="container article-shell">
          <p className="eyebrow">
            {article.category} - {article.published}
          </p>
          <h1>{article.title}</h1>
          <p className="article-intro">{article.excerpt}</p>
        </div>
      </section>

      <section className="section">
        <div className="container article-content">
          {article.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <div className="button-row">
            <Link className="button button-secondary" to="/thinking">
              Back to articles
            </Link>
            <Link className="button button-primary" to="/demo">
              Book a demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
