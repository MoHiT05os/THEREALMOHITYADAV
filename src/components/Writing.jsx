'use client';

import { config } from '@/config';
import ScrollReveal from './ScrollReveal';

const articles = [
  {
    date: 'May 2026',
    readTime: '6 min read',
    title: 'Nobody in AI Wants to Answer This Question. One Lab Just Did.',
    url: 'https://medium.com/@mohityadav.coral/nobody-in-ai-wants-to-answer-this-question-one-lab-just-did-da98967da886'
  },
  {
    date: 'May 2026',
    readTime: '7 min read',
    title: 'Elon Musk Didn’t Build a Company. He Built the Infrastructure for a New Civilization.',
    url: 'https://medium.com/@mohityadav.coral/elon-musk-didnt-build-a-company-he-built-the-infrastructure-for-a-new-civilization-82b75d90f991'
  },
  {
    date: 'April 2026',
    readTime: '4 min read',
    title: 'Tokenmaxxing Is the New Hustle Culture — And It’s Actually Smart',
    url: 'https://medium.com/@mohityadav.coral/tokenmaxxing-is-the-new-hustle-culture-and-its-actually-smart-34271b7a584a'
  }
];

export default function Writing() {
  return (
    <section className="section" id="writing">
      <div className="container">
        <ScrollReveal>
          <div className="section__header">
            <p className="section__label">Writing</p>
            <h2 className="section__title">Latest from @MOHITCREATES</h2>
            <p className="section__subtitle">
              Translating frontier technology into usable signal for engineers and builders.
            </p>
          </div>
        </ScrollReveal>

        <div className="writing__grid">
          {articles.map((article, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="article-card"
              >
                <div className="article-card__meta">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="article-card__title">{article.title}</h3>
                <span className="article-card__read">Read on Medium →</span>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="writing__cta">
            <a
              href={config.links.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
            >
              Read all on Medium
              <span className="btn__arrow">→</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
