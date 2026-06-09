'use client';

import { useState } from 'react';
import { config } from '@/config';
import ScrollReveal from './ScrollReveal';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('loading');

    // Open the Beehiiv newsletter URL in a new tab
    window.open(config.links.newsletter, '_blank', 'noopener,noreferrer');

    // Visual feedback
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      
      // Reset button after 3 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 800);
  };

  return (
    <section className="section newsletter" id="newsletter">
      <div className="container">
        <ScrollReveal>
          <div className="section__header">
            <p className="section__label">Newsletter</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="newsletter__box">
            <h2 className="newsletter__title">The TRMY Letter</h2>
            <p className="newsletter__desc">
              One email per week. Curated signal from the frontier of AI, robotics, and Physical AI — plus what I'm building. No noise. No spam.
            </p>

            <form className="newsletter__form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="newsletter__input"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
                disabled={status === 'loading' || status === 'success'}
              />
              <button
                type="submit"
                className="btn btn--action"
                disabled={status === 'loading' || status === 'success'}
                style={{
                  background: status === 'success' ? 'var(--color-action)' : '',
                  minWidth: '150px',
                  justifyContent: 'center'
                }}
              >
                {status === 'loading' ? (
                  <span>Redirecting...</span>
                ) : status === 'success' ? (
                  <span>✓ Subscribed!</span>
                ) : (
                  <>
                    Subscribe
                    <span className="btn__arrow">→</span>
                  </>
                )}
              </button>
            </form>

            <p className="newsletter__proof">Join builders and engineers at the frontier.</p>
            <p className="newsletter__nospam">One email per week. Unsubscribe anytime. I respect your inbox.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
