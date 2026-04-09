import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="section">
      <div className="container not-found">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The route you requested does not exist in this site prototype.</p>
        <Link className="button button-primary" to="/">
          Return home
        </Link>
      </div>
    </section>
  );
}
