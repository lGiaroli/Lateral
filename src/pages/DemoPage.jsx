import { useEffect, useRef, useState } from 'react';
import { offices } from '../data/siteContentData';

const initialForm = {
  name: '',
  company: '',
  email: '',
  team: '',
  message: '',
  website: '',
};

const focusableFieldOrder = ['name', 'company', 'email', 'team', 'message'];

export default function DemoPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const fieldRefs = useRef({});

  useEffect(() => {
    if (status !== 'error') {
      return;
    }

    const firstInvalidField = focusableFieldOrder.find((fieldName) => fieldErrors[fieldName]);

    if (!firstInvalidField) {
      return;
    }

    fieldRefs.current[firstInvalidField]?.focus();
  }, [fieldErrors, status]);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('submitting');
    setFeedback('');
    setFieldErrors({});

    try {
      const response = await fetch('/api/demo-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          sourcePath: window.location.pathname,
        }),
      });

      const payload = await response.json().catch(() => null);

      if (!response.ok) {
        const nextFieldErrors = Object.fromEntries(
          (payload?.error?.fields ?? []).map((issue) => [issue.field, issue.message]),
        );

        setFieldErrors(nextFieldErrors);
        setStatus('error');
        setFeedback(
          payload?.error?.message ??
            'We could not send your request right now. Please try again in a moment.',
        );
        return;
      }

      setForm(initialForm);
      setStatus('success');
      setFeedback(
        payload?.data?.delivery?.status === 'sent'
          ? 'Your demo request has been sent successfully by email and stored in the backend workflow.'
          : 'Your demo request has been saved in the backend. Email delivery is not active in this environment yet, so the lead was kept on the server as fallback.',
      );
    } catch (error) {
      setStatus('error');
      setFeedback('The request could not reach the server. Please check the connection and try again.');
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">Book a demo</p>
            <h1>Ask for a guided Lateral walkthrough.</h1>
            <p>
              Share your team and workflow and we will tailor the experience to your operating model.
            </p>
          </div>
          <div className="page-hero-aside">
            <p>Best used for</p>
            <ul className="check-list">
              <li>Debt recovery modernization</li>
              <li>Credit control and receivables automation</li>
              <li>Legal case or matter management</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container demo-grid">
          <form className="card form-card" onSubmit={handleSubmit}>
            <h2>Request a demo</h2>
            <div className="form-grid">
              <label>
                Name
                <input
                  name="name"
                  ref={(node) => {
                    fieldRefs.current.name = node;
                  }}
                  value={form.name}
                  onChange={handleChange}
                  aria-describedby={fieldErrors.name ? 'demo-name-error' : undefined}
                  aria-invalid={fieldErrors.name ? 'true' : 'false'}
                  required
                />
                {fieldErrors.name ? (
                  <span className="form-status error" id="demo-name-error">
                    {fieldErrors.name}
                  </span>
                ) : null}
              </label>
              <label>
                Company
                <input
                  name="company"
                  ref={(node) => {
                    fieldRefs.current.company = node;
                  }}
                  value={form.company}
                  onChange={handleChange}
                  aria-describedby={fieldErrors.company ? 'demo-company-error' : undefined}
                  aria-invalid={fieldErrors.company ? 'true' : 'false'}
                  required
                />
                {fieldErrors.company ? (
                  <span className="form-status error" id="demo-company-error">
                    {fieldErrors.company}
                  </span>
                ) : null}
              </label>
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  ref={(node) => {
                    fieldRefs.current.email = node;
                  }}
                  value={form.email}
                  onChange={handleChange}
                  aria-describedby={fieldErrors.email ? 'demo-email-error' : undefined}
                  aria-invalid={fieldErrors.email ? 'true' : 'false'}
                  required
                />
                {fieldErrors.email ? (
                  <span className="form-status error" id="demo-email-error">
                    {fieldErrors.email}
                  </span>
                ) : null}
              </label>
              <label>
                Team
                <input
                  name="team"
                  ref={(node) => {
                    fieldRefs.current.team = node;
                  }}
                  value={form.team}
                  onChange={handleChange}
                  aria-describedby={fieldErrors.team ? 'demo-team-error' : undefined}
                  aria-invalid={fieldErrors.team ? 'true' : 'false'}
                />
                {fieldErrors.team ? (
                  <span className="form-status error" id="demo-team-error">
                    {fieldErrors.team}
                  </span>
                ) : null}
              </label>
              <label className="full-span">
                What do you want to improve?
                <textarea
                  name="message"
                  rows="5"
                  ref={(node) => {
                    fieldRefs.current.message = node;
                  }}
                  value={form.message}
                  onChange={handleChange}
                  aria-describedby={fieldErrors.message ? 'demo-message-error' : undefined}
                  aria-invalid={fieldErrors.message ? 'true' : 'false'}
                />
                {fieldErrors.message ? (
                  <span className="form-status error" id="demo-message-error">
                    {fieldErrors.message}
                  </span>
                ) : null}
              </label>
              <label className="full-span" style={{ display: 'none' }} aria-hidden="true">
                Website
                <input
                  name="website"
                  autoComplete="off"
                  tabIndex={-1}
                  value={form.website}
                  onChange={handleChange}
                />
              </label>
            </div>

            <button className="button button-primary" type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Submitting...' : 'Submit request'}
            </button>

            {status === 'error' && feedback ? (
              <p className="form-status error" role="alert">
                {feedback}
              </p>
            ) : null}
            {status === 'success' && feedback ? (
              <p className="form-status success" role="status">
                {feedback}
              </p>
            ) : null}
          </form>

          <div className="sidebar-stack">
            <article className="card sidebar-card">
              <p className="eyebrow">Contact</p>
              <h2>Reach the team directly</h2>
              <a className="text-link" href="mailto:sales@getlateral.com">
                sales@getlateral.com
              </a>
              {offices.map((office) => (
                <div key={office.name} className="office-compact">
                  <strong>{office.name}</strong>
                  <p>{office.address}</p>
                  <a href={`tel:${office.phone.replace(/\s+/g, '')}`}>{office.phone}</a>
                </div>
              ))}
            </article>

            <article className="card sidebar-card">
              <p className="eyebrow">Submission flow</p>
              <h2>Requests now hit the backend</h2>
              <p>
                This form now posts to `/api/demo-requests` with server-side validation,
                sanitization, rate limiting, persistent server storage and optional Resend email
                delivery when environment variables are configured.
              </p>
              <a className="text-link" href="/api/demo-requests" rel="noreferrer" target="_blank">
                Open local lead review
              </a>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
