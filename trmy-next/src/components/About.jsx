'use client';

import ScrollReveal from './ScrollReveal';

const focusAreas = [
  {
    icon: '👁️',
    label: 'Physical AI',
    value: 'Spatial Vision',
    detail: 'Translating real-world video feeds into identity-linked coordinate tracks across camera networks using YOLOv10/11 and OSNet.'
  },
  {
    icon: '🛰️',
    label: 'Space Radar',
    value: 'L-band SAR',
    detail: 'Analyzing NISAR satellite datasets under Dr. Shashi Kumar at ISRO to map land deformation and earth changes.'
  },
  {
    icon: '🎯',
    label: '@MOHITCREATES',
    value: 'The Signal Engine',
    detail: 'Translating academic AI papers and robotics research into clear, actionable signal for engineers and builders.'
  },
  {
    icon: '🚀',
    label: 'Embodied Systems',
    value: 'Dhruva Systems',
    detail: 'Building the foundational platform layer for physical robotics and autonomous automation systems before 2030.'
  }
];

export default function About() {
  return (
    <section className="section section--surface" id="about">
      <div className="container">
        <ScrollReveal>
          <div className="section__header">
            <p className="section__label">About</p>
            <h2 className="section__title">The story, not the resume</h2>
          </div>
        </ScrollReveal>

        <div className="about__grid">
          <ScrollReveal delay={0.1}>
            <div className="about__narrative">
              <p>Most software engineers focus on screens. I focus on physics.</p>
              <p>The hardest problems in technology aren't inside compiler loops. They are in the physical world. I build computer vision systems that translate raw pixels into spatial coordination. Currently, that means tracking targets across camera networks without biometrics or facial recognition—using YOLOv10/11 and OSNet. It also means analyzing L-band SAR satellite radar data under Dr. Shashi Kumar at ISRO.</p>
              <p>I run @MOHITCREATES to document these experiments. Not to publish news, but to translate frontier AI research into usable signal for other builders.</p>
              <p>The goal isn't a resume. It's a Physical AI company before 2030.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="about__facts">
              {focusAreas.map((area, idx) => (
                <div key={idx} className="about__fact">
                  <div className="about__fact-icon">{area.icon}</div>
                  <div className="about__fact-label">{area.label}</div>
                  <div className="about__fact-value">{area.value}</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-xs)', lineHeight: '1.4' }}>
                    {area.detail}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="about__status">
            <span className="about__status-dot"></span>
            Currently @ IIRS, ISRO — June–August 2026
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
