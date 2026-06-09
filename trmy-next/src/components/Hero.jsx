'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { config } from '@/config';

const words = [
  "Building Physical AI.",
  "Translating civilization-scale tech.",
  "ISRO → Robotics → Company."
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const { scrollY } = useScroll();

  // Scroll animations for parallax blobs
  const yBlob1 = useTransform(scrollY, [0, 800], [0, 240]);
  const xBlob1 = useTransform(scrollY, [0, 800], [0, 48]);
  const yBlob2 = useTransform(scrollY, [0, 800], [0, -120]);
  const xBlob2 = useTransform(scrollY, [0, 800], [0, -36]);

  // Scroll animation for massive watermark name gradient wipe
  const clipProgress = useTransform(scrollY, [0, 600], ['inset(0 100% 0 0)', 'inset(0 0% 0 0)']);
  const watermarkY = useTransform(scrollY, [0, 800], [0, 80]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollDown = (e) => {
    e.preventDefault();
    const target = document.getElementById('about');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleProjectsClick = (e) => {
    e.preventDefault();
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero section" id="hero">
      {/* Parallax Blobs Background */}
      <div className="hero__bg">
        <motion.div 
          className="hero__bg-gradient hero__bg-gradient--1" 
          style={{ y: yBlob1, x: xBlob1 }}
        />
        <motion.div 
          className="hero__bg-gradient hero__bg-gradient--2" 
          style={{ y: yBlob2, x: xBlob2 }}
        />
      </div>

      {/* Massive Typographic Statement behind hero */}
      <div className="hero__massive-name-container" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, overflow: 'hidden', zIndex: 0 }}>
        {/* Outline layer */}
        <motion.div 
          className="hero__massive-name"
          style={{ y: watermarkY }}
        >
          MOHIT YADAV
        </motion.div>
        {/* Solid gradient layer that wipes in on scroll */}
        <motion.div 
          className="hero__massive-name"
          style={{ 
            y: watermarkY,
            clipPath: clipProgress,
            color: 'var(--color-anchor)',
            background: 'linear-gradient(90deg, var(--color-anchor) 0%, var(--color-action) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            opacity: 0.12,
            zIndex: 1
          }}
        >
          MOHIT YADAV
        </motion.div>
      </div>

      <div className="container hero__content" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <div className="hero__text" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <ScrollReveal delay={0.1} yOffset={20}>
            <div className="hero__badge">
              <span className="hero__badge-dot"></span>
              Currently @ IIRS, ISRO — June 2026
            </div>
          </ScrollReveal>


          <ScrollReveal delay={0.3} yOffset={30}>
            <div className="hero__title">
              <span className="hero__title-rotate">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    style={{ display: 'inline-block' }}
                  >
                    {words[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4} yOffset={35}>
            <p className="hero__sub">
              ISRO intern · @MOHITCREATES · Founder-in-progress
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5} yOffset={40}>
            <div className="hero__actions">
              <a href="#projects" onClick={handleProjectsClick} className="btn btn--primary">
                See what I'm building
                <span className="btn__arrow">→</span>
              </a>
              <a href={config.links.medium} target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
                Read my writing
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.6} yOffset={45}>
            <div className="hero__socials">
              <a href={config.links.linkedin} target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href={config.links.medium} target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="Medium">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
              </a>
              <a href={config.links.github} target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>
              <a href={config.links.youtube} target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" onClick={handleScrollDown} className="hero__scroll-indicator" aria-label="Scroll down">
        <span>Scroll</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </a>
    </section>
  );
}

// Simple wrapper so ScrollReveal works inside Hero if imported
function ScrollReveal({ children, delay, yOffset, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.215, 0.61, 0.355, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
