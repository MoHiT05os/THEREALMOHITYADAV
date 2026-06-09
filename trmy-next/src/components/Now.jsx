'use client';

import ScrollReveal from './ScrollReveal';

const nowItems = [
  {
    label: 'Current Project',
    value: 'ISRO Internship — NISAR L-band SAR',
    detail: 'Processing real satellite data at IIRS Dehradun under Dr. Shashi Kumar. Focus on GCOV product analysis and earth observation science.'
  },
  {
    label: 'Currently Learning',
    value: 'ROS2 + SAR Data Processing',
    detail: 'Learning robotic operating systems for the next chapter: autonomous robotics prototyping.'
  },
  {
    label: 'Currently Reading',
    value: 'Probabilistic Robotics — Thrun, Burgard, Fox',
    detail: 'The foundational text for autonomous navigation and localization.'
  },
  {
    label: 'Currently Building',
    value: 'TRMY — The Public Architecture',
    detail: 'This website, the content engine, the newsletter, and the foundation for everything that comes next.'
  }
];

export default function Now() {
  return (
    <section className="section section--surface" id="now">
      <div className="container">
        <ScrollReveal>
          <div className="section__header">
            <p className="section__label">Now</p>
            <h2 className="section__title">What I'm doing right now</h2>
            <p className="section__subtitle">
              A live status page. Updated monthly. Because static bios lie.
            </p>
          </div>
        </ScrollReveal>

        <div className="now__grid">
          {nowItems.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="now-card">
                <div className="now-card__label">{item.label}</div>
                <div className="now-card__value">{item.value}</div>
                <div className="now-card__detail">{item.detail}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <p className="now__updated">Last updated: June 8, 2026</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
