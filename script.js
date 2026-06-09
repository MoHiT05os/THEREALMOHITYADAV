/* ============================================================
   TRMY — TheRealMohitYadav.com
   JavaScript — Interactivity & Animations
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // ── Page Load Animation ──────────────────────────────────
  requestAnimationFrame(() => {
    document.body.classList.add('is-loaded');
  });


  // ── Scroll Animations (IntersectionObserver) ──────────────
  const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach((el) => {
    // Force hero elements to animate immediately (they're already in view)
    if (el.closest('#hero')) {
      setTimeout(() => {
        el.classList.add('is-visible');
      }, 100);
    } else {
      observer.observe(el);
    }
  });


  // ── Rotating Title Text ───────────────────────────────────
  const rotateContainer = document.getElementById('hero-rotate');
  if (rotateContainer) {
    const words = rotateContainer.querySelectorAll('.rotate-word');
    let currentIndex = 0;

    setInterval(() => {
      words[currentIndex].classList.remove('is-active');
      currentIndex = (currentIndex + 1) % words.length;
      words[currentIndex].classList.add('is-active');
    }, 3000);
  }


  // ── Navbar Scroll Effect ──────────────────────────────────
  const nav = document.getElementById('nav');
  const scrollIndicator = document.querySelector('.hero__scroll-indicator');
  const backToTop = document.getElementById('back-to-top');

  const handleScroll = () => {
    const scrollY = window.scrollY;

    // Nav style
    if (scrollY > 50) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }

    // Hide scroll indicator on scroll
    if (scrollIndicator) {
      scrollIndicator.style.opacity = scrollY > 100 ? '0' : '';
      scrollIndicator.style.pointerEvents = scrollY > 100 ? 'none' : '';
    }

    // Show/hide back to top
    if (backToTop) {
      if (scrollY > 600) {
        backToTop.classList.add('is-visible');
      } else {
        backToTop.classList.remove('is-visible');
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Run on load


  // ── Back to Top Button ────────────────────────────────────
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  // ── Active Nav Link ───────────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  const updateActiveNav = () => {
    const scrollY = window.scrollY + 120;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('is-active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('is-active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', updateActiveNav, { passive: true });


  // ── Mobile Navigation ─────────────────────────────────────
  const navToggle = document.getElementById('nav-toggle');
  const navMobile = document.getElementById('nav-mobile');

  if (navToggle && navMobile) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('is-open');
      navMobile.classList.toggle('is-open');
      document.body.style.overflow = navMobile.classList.contains('is-open') ? 'hidden' : '';
    });

    // Close mobile nav on link click
    navMobile.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('is-open');
        navMobile.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }


  // ── Projects Show/Hide Toggle ─────────────────────────────
  const projectsToggleBtn = document.getElementById('projects-toggle-btn');
  const projectsHidden = document.getElementById('projects-hidden');

  if (projectsToggleBtn && projectsHidden) {
    projectsToggleBtn.addEventListener('click', () => {
      const isShowing = projectsHidden.classList.contains('is-visible');

      if (isShowing) {
        projectsHidden.classList.remove('is-visible');
        projectsToggleBtn.innerHTML = 'Show all projects <span class="btn__arrow">↓</span>';
      } else {
        projectsHidden.classList.add('is-visible');
        projectsToggleBtn.innerHTML = 'Show fewer <span class="btn__arrow">↑</span>';

        // Trigger fade-in animations for newly visible cards
        projectsHidden.querySelectorAll('.fade-in-up').forEach((el) => {
          setTimeout(() => el.classList.add('is-visible'), 100);
        });
      }
    });
  }


  // ── Newsletter Form ───────────────────────────────────────
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterEmail = document.getElementById('newsletter-email');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = newsletterEmail.value.trim();
      if (!email) return;

      // Visual feedback
      const submitBtn = newsletterForm.querySelector('button[type="submit"]');
      const originalHTML = submitBtn.innerHTML;

      submitBtn.innerHTML = '✓ Subscribed!';
      submitBtn.style.background = 'var(--color-action)';
      submitBtn.disabled = true;
      newsletterEmail.value = '';

      // Reset after 3 seconds
      setTimeout(() => {
        submitBtn.innerHTML = originalHTML;
        submitBtn.style.background = '';
        submitBtn.disabled = false;
      }, 3000);

      // TODO: Connect to Beehiiv API
      // fetch('https://api.beehiiv.com/v2/publications/YOUR_PUB_ID/subscriptions', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer YOUR_API_KEY' },
      //   body: JSON.stringify({ email, reactivate_existing: true }),
      // });
    });
  }


  // ── Smooth scroll for anchor links ────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });


  // ── Hero Parallax (subtle background gradient movement) ──
  const gradient1 = document.querySelector('.hero__bg-gradient--1');
  const gradient2 = document.querySelector('.hero__bg-gradient--2');

  if (gradient1 && gradient2) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY < 800) { // Only apply in hero region
        const offset = scrollY * 0.3;
        gradient1.style.transform = `translate(${offset * 0.2}px, ${offset}px)`;
        gradient2.style.transform = `translate(${-offset * 0.15}px, ${-offset * 0.5}px)`;
      }
    }, { passive: true });
  }


  // ── Tech pill hover effect — subtle scale ─────────────────
  document.querySelectorAll('.tech-pill').forEach((pill) => {
    pill.addEventListener('mouseenter', () => {
      pill.style.transform = 'scale(1.05)';
    });
    pill.addEventListener('mouseleave', () => {
      pill.style.transform = 'scale(1)';
    });
  });


  // ── Console easter egg ────────────────────────────────────
  console.log(
    `%c TRMY %c TheRealMohitYadav %c\n\nBuilding Physical AI.\nTranslating civilization-scale technology.\n\nISRO → Robotics → Company\n\nhttps://therealMohitYadav.com`,
    'background: #26215C; color: #fff; padding: 4px 8px; border-radius: 4px 0 0 4px; font-weight: bold;',
    'background: #1D9E75; color: #fff; padding: 4px 8px; border-radius: 0 4px 4px 0; font-weight: bold;',
    ''
  );
});
