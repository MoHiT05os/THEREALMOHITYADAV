'use client';

import { useEffect } from 'react';
import { useScroll, motion, useSpring } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import NameMarquee from '@/components/NameMarquee';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Universe from '@/components/Universe';
import Writing from '@/components/Writing';
import Now from '@/components/Now';
import Newsletter from '@/components/Newsletter';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX }}
    />
  );
}

export default function Home() {
  useEffect(() => {
    // Console easter egg
    console.log(
      `%c TRMY %c TheRealMohitYadav %c\n\nBuilding Physical AI.\nTranslating civilization-scale technology.\n\nISRO → Robotics → Company\n\nhttps://therealMohitYadav.com`,
      'background: #26215C; color: #fff; padding: 4px 8px; border-radius: 4px 0 0 4px; font-weight: bold;',
      'background: #1D9E75; color: #fff; padding: 4px 8px; border-radius: 0 4px 4px 0; font-weight: bold;',
      ''
    );
  }, []);

  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      <Hero />
      <NameMarquee reverse={false} surface={true} />
      <About />
      <NameMarquee reverse={true} surface={false} />
      <Projects />
      <NameMarquee reverse={false} surface={true} />
      <Universe />
      <NameMarquee reverse={true} surface={false} />
      <Writing />
      <NameMarquee reverse={false} surface={true} />
      <Now />
      <NameMarquee reverse={true} surface={false} />
      <Newsletter />
      <NameMarquee reverse={false} surface={true} />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}
