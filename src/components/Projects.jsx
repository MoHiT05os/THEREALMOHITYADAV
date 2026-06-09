'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { config } from '@/config';
import ScrollReveal from './ScrollReveal';

const mainProjects = [
  {
    number: '01',
    name: 'Multi-Camera Re-ID Pipeline',
    flagship: true,
    desc: 'Real-time person re-identification across camera networks without biometric data. Tracks individuals across multiple camera views using appearance-based matching — no identity cards, no face recognition.',
    tech: ['YOLOv10', 'YOLOv11', 'ByteTrack', 'OSNet', 'Python'],
    status: { type: 'built', label: '✓ Built' },
    links: [{ label: 'GitHub →', url: config.links.github }]
  },
  {
    number: '02',
    name: 'ISRO — NISAR SAR Analysis',
    flagship: false,
    desc: 'Processing real L-band SAR satellite data from the NASA-ISRO NISAR mission for earth observation science. Working under Dr. Shashi Kumar at IIRS, ISRO Dehradun.',
    tech: ['L-band SAR', 'GCOV', 'SNAP', 'ISCE3', 'h5py', 'Python'],
    status: { type: 'active', label: 'Active — June 2026' }
  },
  {
    number: '03',
    name: 'Virtual Try-On — Indian Traditional Clothing',
    flagship: false,
    desc: 'Generative AI-powered virtual try-on system for Indian traditional clothing using diffusion models.',
    tech: ['Diffusion Models', 'Generative AI'],
    status: { type: 'built', label: '✓ Built' },
    links: [{ label: 'GitHub →', url: config.links.github }]
  },
  {
    number: '04',
    name: 'Tri-Model Emergence System',
    flagship: false,
    desc: 'Vision + reasoning + generative AI system for real-time classroom engagement monitoring. Three models working in concert to understand student attention.',
    tech: ['Vision AI', 'LLM', 'Generative AI'],
    status: { type: 'built', label: '✓ Built' }
  },
  {
    number: '05',
    name: 'AI Agent Fast Stack — Interactive Artifact',
    flagship: false,
    desc: '7-layer production AI agent architecture explorer. An interactive tool that maps every major framework, metric, and decision point for building production AI systems.',
    tech: ['React', 'Vercel'],
    status: { type: 'live', label: '◉ Live' },
    links: [{ label: 'Live Demo →', url: 'https://ai-agent-infographic-2026.vercel.app' }]
  },
  {
    number: '06',
    name: 'RAG-Based Legal Advisor Agent',
    flagship: false,
    desc: 'AI-powered legal advisory agent using retrieval-augmented generation. Indexes legal documents and provides contextual, citation-backed advice.',
    tech: ['LangChain', 'FAISS', 'LLMs'],
    status: { type: 'built', label: '✓ Built' }
  }
];

const secondaryProjects = [
  {
    number: '07',
    name: 'Plastic Waste Detection',
    desc: 'Computer vision system for automated plastic waste detection and classification using state-of-the-art object detection models.',
    tech: ['YOLOv8', 'Detectron2'],
    status: { type: 'built', label: '✓ Built' }
  },
  {
    number: '08',
    name: 'Integrated Traffic Control',
    desc: 'AI-powered traffic monitoring and control system using real-time object detection and computer vision for intelligent traffic management.',
    tech: ['YOLO', 'OpenCV'],
    status: { type: 'built', label: '✓ Built' }
  },
  {
    number: '09',
    name: 'LLM AI Agent with Tool Use',
    desc: 'Autonomous AI agent capable of using external tools, APIs, and data sources to solve multi-step problems with reasoning chains.',
    tech: ['LangChain', 'Python'],
    status: { type: 'built', label: '✓ Built' }
  },
  {
    number: '10',
    name: 'AI Workflow Automation Suite',
    desc: 'End-to-end workflow automation system connecting AI models with business processes through visual programming and REST API orchestration.',
    tech: ['n8n', 'REST APIs'],
    status: { type: 'built', label: '✓ Built' }
  }
];

function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Position of mouse relative to card center
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Limit rotation to max 6 degrees
    const rX = -(mouseY / (height / 2)) * 6;
    const rY = (mouseX / (width / 2)) * 6;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const statusClass = project.status.type === 'built' 
    ? 'status-badge--built' 
    : project.status.type === 'active' 
      ? 'status-badge--active' 
      : 'status-badge--live';

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      style={{ transformStyle: 'preserve-3d' }}
      className={`project-card ${project.flagship ? 'project-card--flagship' : ''}`}
    >
      <div className="project-card__number" style={{ transform: 'translateZ(10px)' }}>
        {project.number}
      </div>
      <div className="project-card__header" style={{ transform: 'translateZ(15px)' }}>
        <h3 className="project-card__name">{project.name}</h3>
        {project.flagship && (
          <span className="project-card__flagship-badge">★ Flagship</span>
        )}
      </div>
      <p className="project-card__desc" style={{ transform: 'translateZ(10px)' }}>
        {project.desc}
      </p>
      
      <div className="project-card__tech" style={{ transform: 'translateZ(15px)' }}>
        {project.tech.map((t, idx) => (
          <span key={idx} className="tech-pill">{t}</span>
        ))}
      </div>
      
      <div className="project-card__footer" style={{ transform: 'translateZ(10px)' }}>
        <span className={`status-badge ${statusClass}`}>
          {project.status.label}
        </span>
        {project.links && (
          <div className="project-card__links">
            {project.links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="section" id="projects">
      <div className="container">
        <ScrollReveal>
          <div className="section__header">
            <p className="section__label">Projects</p>
            <h2 className="section__title">What I've built</h2>
            <p className="section__subtitle">
              Each project is a case study, not a bullet point. Real problems, real constraints, real output.
            </p>
          </div>
        </ScrollReveal>

        <div className="projects__grid">
          {mainProjects.map((project, idx) => (
            <ScrollReveal key={project.number} delay={idx * 0.05}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        <AnimatePresence initial={false}>
          {showAll && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              style={{ overflow: 'hidden', marginTop: 'var(--space-lg)' }}
            >
              <div className="projects__grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
                {secondaryProjects.map((project) => (
                  <ProjectCard key={project.number} project={project} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <ScrollReveal delay={0.1}>
          <div className="projects__toggle">
            <button
              className="btn btn--secondary"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show fewer' : 'Show all projects'}
              <span className="btn__arrow" style={{ transform: showAll ? 'rotate(180deg)' : 'none', display: 'inline-block' }}>
                ↓
              </span>
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
