import React from 'react';

export default function NameMarquee({ reverse = false, surface = false }) {
  const words = Array(12).fill("MOHIT YADAV");

  return (
    <div className={`name-marquee ${surface ? 'name-marquee--surface' : ''} ${reverse ? 'name-marquee--reverse' : ''}`}>
      <div className="name-marquee__track">
        {words.map((word, idx) => (
          <span key={idx} className="name-marquee__text">
            {word}<span className="dot">.</span>
          </span>
        ))}
      </div>
    </div>
  );
}
