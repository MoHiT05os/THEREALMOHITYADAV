'use client';

import { useState, useEffect } from 'react';
import { config } from '@/config';

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Universe', id: 'universe' },
  { label: 'Writing', id: 'writing' },
  { label: 'Now', id: 'now' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active Section detection
      const sections = ['hero', ...navItems.map((item) => item.id)];
      const scrollY = window.scrollY + 150;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsMobileOpen(false);
    document.body.style.overflow = '';
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleMobileMenu = () => {
    const nextState = !isMobileOpen;
    setIsMobileOpen(nextState);
    if (nextState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  return (
    <nav className={`nav ${isScrolled ? 'is-scrolled' : ''}`} id="nav">
      <div className="container nav__inner">
        <a href="#hero" onClick={(e) => handleLinkClick(e, 'hero')} className="nav__logo">
          TRMY<span>.</span>
        </a>

        <div className="nav__links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleLinkClick(e, item.id)}
              className={`nav__link ${activeSection === item.id ? 'is-active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={config.links.newsletter}
          target="_blank"
          rel="noopener noreferrer"
          className="nav__cta"
        >
          Subscribe
        </a>

        <button
          className={`nav__toggle ${isMobileOpen ? 'is-open' : ''}`}
          id="nav-toggle"
          aria-label="Toggle menu"
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile nav overlay */}
      <div className={`nav__mobile ${isMobileOpen ? 'is-open' : ''}`} id="nav-mobile">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleLinkClick(e, item.id)}
          >
            {item.label}
          </a>
        ))}
        <a
          href={config.links.newsletter}
          target="_blank"
          rel="noopener noreferrer"
        >
          Newsletter
        </a>
      </div>
    </nav>
  );
}
