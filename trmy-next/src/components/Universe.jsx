'use client';

import ScrollReveal from './ScrollReveal';

const subBrands = [
  {
    icon: '🎯',
    iconClass: 'universe-card__icon--creates',
    name: '@MOHITCREATES',
    desc: 'Public content — breakdowns, takes, and explainers on frontier AI, computer vision, and robotics. Accessible, fast, punchy.',
    linkText: 'LinkedIn · Medium · YouTube →',
    linkUrl: 'https://linkedin.com/in/therealMohitYadav',
    isLink: true
  },
  {
    icon: '🔧',
    iconClass: 'universe-card__icon--builds',
    name: '@MOHITBUILDS',
    desc: 'Live project documentation — raw, honest, specific. Real work in public. From ISRO internship to robotics prototypes.',
    linkText: 'LinkedIn series · Website →',
    linkUrl: 'https://linkedin.com/in/therealMohitYadav',
    isLink: true
  },
  {
    icon: '🔬',
    iconClass: 'universe-card__icon--labs',
    name: '@MOHITLABS',
    desc: 'Research decodes, experiments, ablations. Technical and rigorous. For the people who go deep.',
    linkText: 'Medium · Newsletter →',
    linkUrl: 'https://medium.com/@therealMohitYadav',
    isLink: true
  },
  {
    icon: '🚀',
    iconClass: 'universe-card__icon--company',
    name: 'The Company',
    desc: 'Physical AI / embodied robotics. DHRUVA SYSTEMS or VAJRA INDUSTRIES. Built in public from day one. The destination.',
    linkText: 'Coming 2027 →',
    isLink: false
  }
];

export default function Universe() {
  return (
    <section className="section section--surface" id="universe">
      <div className="container">
        <ScrollReveal>
          <div className="section__header">
            <p className="section__label">Universe</p>
            <h2 className="section__title">The TRMY Architecture</h2>
            <p className="section__subtitle">
              TRMY is bigger than one platform. Each sub-brand has a purpose.
            </p>
          </div>
        </ScrollReveal>

        <div className="universe__grid">
          {subBrands.map((brand, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="universe-card">
                <div className={`universe-card__icon ${brand.iconClass}`}>
                  {brand.icon}
                </div>
                <h3 className="universe-card__name">{brand.name}</h3>
                <p className="universe-card__desc">{brand.desc}</p>
                {brand.isLink ? (
                  <a
                    href={brand.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="universe-card__link"
                  >
                    {brand.linkText}
                  </a>
                ) : (
                  <span
                    className="universe-card__link"
                    style={{ color: 'var(--color-text-tertiary)', cursor: 'default' }}
                  >
                    {brand.linkText}
                  </span>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="universe__why">
            <p>
              "TRMY is the public architecture of a life's work — the name, face, and gravitational center of everything I build, write, and ship. Not a personal brand. An operating system for doing things that matter."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
