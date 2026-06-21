'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Shield, Lock, Terminal, Zap, Code, Brain, Cpu, Eye, Box, Sparkles } from 'lucide-react';

// ─────────────────────────────────────────────────────────────
// EDIT THIS: paste the Vercel link of your 3D resume/project here
const RESUME_3D_URL = 'https://sabahat-jahangir-3-d-portfolio.vercel.app/';
// ─────────────────────────────────────────────────────────────

// ============================================================================
// COMPONENTS
// ============================================================================

const LoadingScreen = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden"
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            {/* Animated grid background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(52,211,153,.05) 25%, rgba(52,211,153,.05) 26%, transparent 27%, transparent 74%, rgba(52,211,153,.05) 75%, rgba(52,211,153,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(52,211,153,.05) 25%, rgba(52,211,153,.05) 26%, transparent 27%, transparent 74%, rgba(52,211,153,.05) 75%, rgba(52,211,153,.05) 76%, transparent 77%, transparent)',
                backgroundSize: '50px 50px'
              }} />
            </div>

            {/* Centered content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="mb-8 flex justify-center"
              >
                <div className="w-16 h-16 rounded-lg border-2 border-emerald-500 border-t-transparent border-r-transparent" />
              </motion.div>

              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-2xl font-bold text-emerald-400 mb-4 font-mono tracking-wider"
              >
                WELCOME · SABAHAT JAHANGIR
              </motion.h2>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '200px' }}
                transition={{ duration: 2, ease: 'easeInOut' }}
                className="h-1 bg-gradient-to-r from-emerald-500 via-rose-500 to-transparent mx-auto mb-4"
              />

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-emerald-300/60 text-sm font-mono"
              >
                Loading AI · Security · Cloud portfolio...
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-40 px-6 lg:px-12 py-4 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-emerald-500/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-rose-500 bg-clip-text text-transparent font-mono tracking-wider"
        >
          SABAHAT.J
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {['About', 'Research', 'Projects', 'Skills', 'Timeline', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ color: '#34d399' }}
              className="text-sm text-emerald-300/70 hover:text-emerald-400 transition-colors font-mono"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Neon 3D Resume button */}
        <motion.a
          href={RESUME_3D_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="relative group inline-flex items-center"
        >
          {/* Animated neon glow behind the button */}
          <motion.span
            aria-hidden="true"
            animate={{ opacity: [0.55, 1, 0.55], scale: [1, 1.07, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -inset-[3px] rounded-xl bg-gradient-to-r from-emerald-400 via-rose-500 to-emerald-400 blur-md opacity-70 group-hover:opacity-100"
          />
          {/* Button face */}
          <span className="relative inline-flex items-center gap-2 rounded-xl bg-black/90 border border-emerald-400/60 px-3 py-2 md:px-5 md:py-2.5 font-mono text-xs md:text-sm font-bold transition-colors">
            <Box className="w-4 h-4 text-emerald-400 group-hover:text-rose-300 transition-colors" />
            <span className="bg-gradient-to-r from-emerald-300 to-rose-300 bg-clip-text text-transparent group-hover:from-white group-hover:to-white">
              3D Professional Portfolio
            </span>
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
          </span>
        </motion.a>
      </div>
    </motion.nav>
  );
};

const HeroSection = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/20 rounded-full filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-600/20 rounded-full filter blur-3xl opacity-20 animate-pulse delay-700" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(52,211,153,.1) 25%, rgba(52,211,153,.1) 26%, transparent 27%, transparent 74%, rgba(52,211,153,.1) 75%, rgba(52,211,153,.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(52,211,153,.1) 25%, rgba(52,211,153,.1) 26%, transparent 27%, transparent 74%, rgba(52,211,153,.1) 75%, rgba(52,211,153,.1) 76%, transparent 77%, transparent)',
          backgroundSize: '100px 100px'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Animated title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.p
            className="text-emerald-400 font-mono text-sm mb-4 tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            // Assalamu Alaikum — welcome to my corner of the web
          </motion.p>

          <h1 className="text-5xl md:text-7xl font-black mb-6 font-mono tracking-tight">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="block text-white"
            >
              Sabahat
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="block bg-gradient-to-r from-emerald-400 via-rose-500 to-emerald-400 bg-clip-text text-transparent"
            >
              Jahangir
            </motion.span>
          </h1>
        </motion.div>

        {/* Subtitle with typing effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-xl md:text-2xl text-emerald-300/80 font-mono mb-2">
            AI Security Researcher · Cybersecurity & Cloud
          </p>
          <p className="text-sm md:text-base text-rose-300/60 font-mono">
            BS Computer Science @ FAST NUCES · 2022 - 2026
          </p>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(52,211,153,0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-emerald-500/20 border border-emerald-500 text-emerald-400 rounded-lg font-mono text-sm hover:bg-emerald-500/30 transition-all"
          >
            Explore Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(251,113,133,0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-rose-500/20 border border-rose-500 text-rose-400 rounded-lg font-mono text-sm hover:bg-rose-500/30 transition-all"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mt-12"
        >
          <ChevronDown className="text-emerald-400 w-6 h-6" />
        </motion.div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <h2 className="text-4xl md:text-5xl font-black mb-12 font-mono tracking-tight">
          <span className="text-emerald-400">/</span>
          <span className="text-white">about</span>
          <span className="text-emerald-400">_me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-emerald-300/80 leading-relaxed font-mono">
              I'm a final-year Computer Science student at FAST NUCES, working at the intersection of Artificial Intelligence, Cybersecurity, and Cloud Computing. I care about building systems that are not only intelligent, but also secure and trustworthy by design.
            </p>

            <p className="text-lg text-rose-300/80 leading-relaxed font-mono">
              I currently work as a Research Assistant under the supervision of Dr. Anwar Shah, focusing on security-oriented Generative AI — Multi-Pipeline Retrieval-Augmented Generation (RAG) systems and the detection of backdoors and adversarial weaknesses in machine learning models.
            </p>

            <p className="text-lg text-emerald-300/80 leading-relaxed font-mono">
              Alongside research, I've built hands-on experience as a Teaching Assistant at FAST NUCES, and through projects in deep learning, digital forensics, and scalable AWS cloud infrastructure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-500/10 to-rose-500/10 border border-emerald-500/30 rounded-2xl p-8 backdrop-blur-sm"
          >
            <h3 className="text-xl font-bold text-emerald-400 mb-6 font-mono">🔐 WHAT I FOCUS ON</h3>
            <ul className="space-y-4">
              {[
                { icon: Brain, label: 'AI / LLM Security', desc: 'RAG systems & backdoor threat analysis' },
                { icon: Eye, label: 'Digital Forensics', desc: 'Evidence collection, steganography & OSINT' },
                { icon: Cpu, label: 'Cloud & DevOps', desc: 'AWS infrastructure, IAM & monitoring' },
                { icon: Shield, label: 'Security Testing', desc: 'Vulnerability assessment & secure coding' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <item.icon className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-emerald-300 font-mono font-bold text-sm">{item.label}</p>
                    <p className="text-emerald-300/60 text-xs font-mono">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const CareerGoalSection = () => {
  return (
    <section className="relative py-24 px-6 lg:px-12 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-80 h-80 bg-rose-600 rounded-full filter blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-600 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-8 font-mono tracking-tight">
            <motion.span
              animate={{ backgroundPosition: ['0% center', '100% center', '0% center'] }}
              transition={{ duration: 8, repeat: Infinity }}
              style={{
                backgroundImage: 'linear-gradient(90deg, #34d399, #a855f7, #34d399)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Building Secure & Intelligent Systems
            </motion.span>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center justify-center gap-3 text-xl text-emerald-300/80 font-mono">
              <Lock className="w-6 h-6 text-emerald-400" />
              <span>Goal: AI Security Researcher & Cloud Engineer</span>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                { title: 'Trustworthy AI', desc: 'Secure, robust generative AI systems' },
                { title: 'LLM Security Research', desc: 'Find & mitigate backdoors in ML models' },
                { title: 'Secure Cloud', desc: 'Scalable, well-monitored AWS infrastructure' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-emerald-500/10 to-rose-500/10 border border-emerald-500/20 rounded-xl p-6 backdrop-blur-sm"
                >
                  <h3 className="text-emerald-400 font-bold font-mono mb-2">{item.title}</h3>
                  <p className="text-emerald-300/60 text-sm font-mono">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ResearchSection = () => {
  const highlights = [
    { label: 'Multi-Pipeline RAG', desc: 'Designing, testing and evaluating RAG architectures for more accurate retrieval and more relevant, stable responses.' },
    { label: 'Backdoor Detection', desc: 'Finding and analysing backdoor threats in machine learning models, focusing on how adversarial triggers change model behaviour.' },
    { label: 'LLM Security', desc: 'Studying weaknesses in AI models and exploring ways to detect and reduce these risks.' },
    { label: 'System-Level Thinking', desc: 'Hands-on academic research, experimentation and analysis that sharpen rigour and reproducibility.' }
  ];

  return (
    <section id="research" className="relative py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <h2 className="text-4xl md:text-5xl font-black mb-6 font-mono tracking-tight">
          <span className="text-emerald-400">/</span>
          <span className="text-white">research</span>
          <span className="text-emerald-400">_work</span>
        </h2>

        <div className="flex items-center gap-3 mb-12 text-rose-300/80 font-mono text-sm">
          <Brain className="w-5 h-5 text-rose-400" />
          <span>Research Assistant · supervised by <span className="text-rose-400 font-bold">Dr. Anwar Shah</span></span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-lg text-emerald-300/80 leading-relaxed font-mono">
              I work as a Research Assistant under the supervision of Dr. Anwar Shah, contributing to Generative AI systems that focus on artificial intelligence and security.
            </p>
            <p className="text-lg text-rose-300/80 leading-relaxed font-mono">
              My primary focus is on Multi-Pipeline Retrieval-Augmented Generation (RAG) systems, and on looking for backdoors and weaknesses in AI models. I design, test and evaluate different RAG architectures to make information retrieval more accurate, responses more relevant, and the overall system more stable.
            </p>
            <p className="text-lg text-emerald-300/80 leading-relaxed font-mono">
              In parallel, I research how to find and analyse backdoor threats in machine learning models — studying how adversarial triggers can change how a model behaves, and how those risks can be detected and reduced. This role is helping me grow my skills in AI, LLM security, and system-level thinking.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: '0 0 30px rgba(52,211,153,0.15)' }}
                className="bg-gradient-to-br from-emerald-500/10 to-rose-500/10 border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm"
              >
                <h3 className="text-emerald-400 font-bold font-mono mb-2 text-sm">{item.label}</h3>
                <p className="text-emerald-300/70 text-xs font-mono leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-rose-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-500" />

      <div className="relative bg-gradient-to-br from-slate-900 to-black border border-emerald-500/30 rounded-xl p-8 hover:border-emerald-500/60 transition-all duration-500">
        {/* Project icon */}
        <motion.div
          animate={{ rotate: isHovered ? 12 : 0 }}
          transition={{ duration: 0.3 }}
          className="mb-4 inline-block"
        >
          {project.icon}
        </motion.div>

        <h3 className="text-2xl font-bold text-white mb-3 font-mono">{project.title}</h3>

        <p className="text-emerald-300/70 text-sm mb-6 font-mono leading-relaxed">{project.description}</p>

        <motion.div
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-3 mb-6"
        >
          {project.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2 text-emerald-300/60 text-xs font-mono">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
              <span>{feature}</span>
            </div>
          ))}
        </motion.div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(52,211,153,0.5)' }}
              className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs rounded font-mono hover:bg-emerald-500/20 transition-all cursor-pointer"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {project.status && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 px-3 py-1 bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs rounded font-mono inline-block"
          >
            {project.status}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: 'AI-Based Accident Detection (RoadGuard-AI)',
      description: 'Final-year project: real-time accident detection from CCTV and uploaded video using CNN + temporal modeling.',
      icon: <Cpu className="w-8 h-8 text-emerald-400" />,
      features: [
        'CNN + LSTM temporal modeling',
        'Low-latency detection (3-5 seconds)',
        'Multi-channel alerts (SMS, Email, WhatsApp)',
        'Severity classification & evidence storage',
        'Privacy-aware data handling'
      ],
      tech: ['Python', 'Deep Learning', 'Computer Vision', 'CNN', 'LSTM'],
      status: 'FINAL YEAR PROJECT'
    },
    {
      title: 'Multi-Pipeline Topic-Aware RAG',
      description: 'Research with Dr. Anwar Shah: a topic-aware Retrieval-Augmented Generation system that routes queries into relevant domains for higher retrieval precision.',
      icon: <Brain className="w-8 h-8 text-rose-400" />,
      features: [
        'Query routing via PCA, UMAP & KMeans clustering',
        'Multi-stage pipeline: KD-tree + HNSW search',
        'Paragraph-level re-ranking',
        'Structured prompt generation',
        'Improved grounding & answer accuracy'
      ],
      tech: ['Python', 'RAG', 'LLMs', 'Vector Search', 'Clustering'],
      status: 'ACTIVE RESEARCH'
    },
    {
      title: 'Backdoor & Adversarial Threat Analysis',
      description: 'Research into how adversarial triggers alter model behaviour, and how backdoors in ML models can be detected and reduced.',
      icon: <Shield className="w-8 h-8 text-emerald-400" />,
      features: [
        'Adversarial trigger analysis',
        'Backdoor detection in ML models',
        'Robustness & risk evaluation',
        'Experimentation & benchmarking',
        'LLM security threat modelling'
      ],
      tech: ['Python', 'Machine Learning', 'AI Security', 'Adversarial ML'],
      status: 'ACTIVE RESEARCH'
    },
    {
      title: 'AWS Scalable Infrastructure Deployment',
      description: 'Designed and deployed scalable, fault-tolerant AWS infrastructure with Infrastructure as Code and secure access control.',
      icon: <Cpu className="w-8 h-8 text-rose-400" />,
      features: [
        'EC2, S3 & VPC architecture',
        'Infrastructure as Code (CloudFormation)',
        'IAM roles, policies & security groups',
        'Monitoring with CloudWatch & CloudTrail',
        'Cost & performance optimization'
      ],
      tech: ['AWS', 'CloudFormation', 'IAM', 'Docker', 'Linux'],
      status: 'COMPLETED'
    },
    {
      title: 'Steganography Data Hiding & Detection',
      description: 'Python LSB steganography tool to embed and detect hidden data, with analysis of detectability and data integrity.',
      icon: <Eye className="w-8 h-8 text-emerald-400" />,
      features: [
        'LSB image steganography',
        'Hidden data embedding & extraction',
        'Detectability & integrity analysis',
        'Applications in digital forensics',
        'Built with Pillow & NumPy'
      ],
      tech: ['Python', 'Pillow', 'NumPy', 'Digital Forensics'],
      status: 'COMPLETED'
    },
    {
      title: 'Web Security Vulnerability Lab',
      description: 'Simulated attack scenarios and secure-coding practices for common web vulnerabilities in a controlled lab environment.',
      icon: <Lock className="w-8 h-8 text-rose-400" />,
      features: [
        'XSS, CSRF & SQL Injection scenarios',
        'Buffer overflow exploration',
        'Secure coding mitigations',
        'Reduced exploitable risk by ~40%',
        'Python & PHP test environments'
      ],
      tech: ['Python', 'PHP', 'Web Security', 'Ethical Hacking'],
      status: 'COMPLETED'
    }
  ];

  return (
    <section id="projects" className="relative py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-black mb-12 font-mono tracking-tight">
          <span className="text-emerald-400">/</span>
          <span className="text-white">projects</span>
          <span className="text-emerald-400">_showcase</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      skills: ['Deep Learning', 'CNN', 'LSTM', 'Computer Vision', 'RAG Systems', 'LLM Security'],
      color: 'emerald'
    },
    {
      title: 'Cybersecurity & Forensics',
      skills: ['Digital Forensics', 'Vulnerability Assessment', 'OSINT', 'Steganography', 'Web Security', 'Cryptography'],
      color: 'rose'
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS (EC2, S3, IAM)', 'VPC & CloudWatch', 'CloudFormation', 'Docker', 'CI/CD', 'Terraform (basic)'],
      color: 'emerald'
    },
    {
      title: 'Programming & Tools',
      skills: ['Python', 'C / C++', 'SQL / PL-SQL', 'Bash', 'Linux', 'Git & GitHub', 'Oracle', 'MySQL'],
      color: 'rose'
    }
  ];

  return (
    <section id="skills" className="relative py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-black mb-12 font-mono tracking-tight">
          <span className="text-emerald-400">/</span>
          <span className="text-white">skills</span>
          <span className="text-emerald-400">_arsenal</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br from-${category.color}-500/10 to-transparent border border-${category.color}-500/30 rounded-xl p-8`}
            >
              <h3 className={`text-xl font-bold text-${category.color}-400 mb-6 font-mono`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, j) => (
                  <motion.span
                    key={j}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 + j * 0.05 }}
                    whileHover={{ scale: 1.1, boxShadow: `0 0 20px rgba(52,211,153,0.4)` }}
                    viewport={{ once: true }}
                    className={`px-4 py-2 bg-${category.color}-500/20 border border-${category.color}-500/40 text-${category.color}-300 rounded-lg font-mono text-sm hover:bg-${category.color}-500/30 transition-all cursor-pointer`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const TimelineSection = () => {
  const events = [
    {
      year: '2022',
      title: 'BS Computer Science',
      org: 'FAST NUCES',
      desc: 'Began my Computer Science degree, building foundations in programming and systems'
    },
    {
      year: '2023',
      title: 'Graphics Designer & Google AI Essentials',
      org: 'FAST NUCES / Google',
      desc: 'Designed 15+ academic materials and earned the Google AI Essentials certificate'
    },
    {
      year: '2024',
      title: 'Teaching Assistant & Ubuntu Linux',
      org: 'FAST NUCES / Coursera',
      desc: 'Mentored 40+ students in programming and database labs; certified in Ubuntu Linux'
    },
    {
      year: '2025',
      title: 'Cyber & Cloud Projects',
      org: 'Independent / Academic',
      desc: 'Built steganography, web security labs and AWS cloud infrastructure projects'
    },
    {
      year: '2026',
      title: 'Research Assistant — AI Security',
      org: 'Under Dr. Anwar Shah',
      desc: 'Researching Multi-Pipeline RAG systems and backdoor detection in ML models'
    },
    {
      year: '2026',
      title: 'Graduation & Final Year Project',
      org: 'FAST NUCES',
      desc: 'Completing RoadGuard-AI and graduating with a focus on AI, security & cloud'
    }
  ];

  return (
    <section id="timeline" className="relative py-24 px-6 lg:px-12 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-black mb-16 font-mono tracking-tight text-center">
          <span className="text-emerald-400">/</span>
          <span className="text-white">journey</span>
          <span className="text-emerald-400">_timeline</span>
        </h2>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500/0 via-emerald-500/50 to-rose-500/0" />

          <div className="space-y-12">
            {events.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex gap-8 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`w-full md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <motion.div
                    whileHover={{ x: i % 2 === 0 ? -10 : 10 }}
                    className="bg-gradient-to-br from-emerald-500/10 to-rose-500/10 border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm"
                  >
                    <p className="text-emerald-400 font-bold text-lg font-mono">{event.year}</p>
                    <h3 className="text-xl font-bold text-white mt-2 font-mono">{event.title}</h3>
                    <p className="text-emerald-300/60 text-sm font-mono mt-1">{event.org}</p>
                    <p className="text-emerald-300/70 text-sm mt-3">{event.desc}</p>
                  </motion.div>
                </div>

                {/* Center dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  animate={{ boxShadow: ['0 0 0 0 rgba(52,211,153,0.4)', '0 0 0 10px rgba(52,211,153,0)'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute left-1/2 transform -translate-x-1/2 top-0 w-4 h-4 bg-emerald-400 rounded-full border-4 border-black"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const CertificationsSection = () => {
  const certs = [
    { name: 'Google AI Essentials', issuer: 'Google / Coursera', date: '2023', icon: Brain },
    { name: 'Google Cybersecurity Certificate', issuer: 'Google / Coursera', date: '2025', icon: Shield },
    { name: 'Ubuntu Linux', issuer: 'Coursera', date: '2024', icon: Terminal },
    { name: 'AWS Cloud Practitioner', issuer: 'AWS', date: '2026', icon: Shield}
  ];

  return (
    <section className="relative py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-black mb-12 font-mono tracking-tight">
          <span className="text-emerald-400">/</span>
          <span className="text-white">certifications</span>
          <span className="text-emerald-400">_badges</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 0 30px rgba(52,211,153,0.2)' }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-rose-500/20 to-emerald-500/10 border border-rose-500/30 rounded-xl p-8 text-center backdrop-blur-sm"
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="flex justify-center mb-4"
              >
                <cert.icon className="w-12 h-12 text-rose-400" />
              </motion.div>
              <h3 className="text-lg font-bold text-white mb-2 font-mono">{cert.name}</h3>
              <p className="text-rose-300/60 text-sm font-mono mb-3">{cert.issuer}</p>
              <p className="text-emerald-300/40 text-xs font-mono">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const LabSection = () => {
  const labs = [
    { name: 'AI / LLM Security Research', status: 'Active', tech: 'RAG pipelines, backdoor & adversarial analysis' },
    { name: 'Digital Forensics Lab', status: 'Active', tech: 'Autopsy, FTK Imager, steganography' },
    { name: 'Network & Vulnerability Lab', status: 'Active', tech: 'Wireshark, Nmap, OpenVAS' },
    { name: 'AWS Cloud Lab', status: 'In Progress', tech: 'EC2, S3, IAM, CloudWatch' }
  ];

  return (
    <section className="relative py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-black mb-12 font-mono tracking-tight">
          <span className="text-emerald-400">/</span>
          <span className="text-white">lab</span>
          <span className="text-emerald-400">_environments</span>
        </h2>

        <div className="bg-black border-2 border-emerald-500/50 rounded-lg p-6 font-mono text-sm overflow-hidden">
          <div className="space-y-4">
            {labs.map((lab, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-between p-4 border border-emerald-500/20 rounded bg-emerald-500/5"
              >
                <div>
                  <p className="text-emerald-400 font-bold">{lab.name}</p>
                  <p className="text-emerald-300/60 text-xs mt-1">{lab.tech}</p>
                </div>
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`px-3 py-1 rounded text-xs font-bold ${
                    lab.status === 'Active'
                      ? 'bg-green-500/30 text-green-300'
                      : 'bg-yellow-500/30 text-yellow-300'
                  }`}
                >
                  {lab.status}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('sabahat.jahangir.tech@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 px-6 lg:px-12 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-6 font-mono tracking-tight">
          <span className="text-emerald-400">/</span>
          <span className="text-white">connect</span>
          <span className="text-emerald-400">_with_me</span>
        </h2>

        <p className="text-lg text-emerald-300/70 mb-12 font-mono">
          Open to opportunities in AI, security research, and cloud — let's build something secure together
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(52,211,153,0.2)' }}
            onClick={copyEmail}
            className="bg-gradient-to-br from-emerald-500/20 to-transparent border border-emerald-500/40 rounded-xl p-8 cursor-pointer transition-all"
          >
            <Mail className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
            <p className="text-emerald-300 font-mono font-bold mb-2">Email</p>
            <p className="text-emerald-300/60 text-sm font-mono break-all">sabahat.jahangir.tech@gmail.com</p>
            <AnimatePresence>
              {copied && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-green-400 text-xs mt-3 font-mono"
                >
                  ✓ Copied!
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.a
            href="https://linkedin.com/in/sabahat-jahangir"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(251,113,133,0.2)' }}
            className="bg-gradient-to-br from-rose-500/20 to-transparent border border-rose-500/40 rounded-xl p-8 transition-all"
          >
            <Linkedin className="w-8 h-8 text-rose-400 mx-auto mb-4" />
            <p className="text-rose-300 font-mono font-bold mb-2">LinkedIn</p>
            <p className="text-rose-300/60 text-sm font-mono">Connect with me</p>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-500/10 via-rose-500/10 to-emerald-500/10 border border-emerald-500/20 rounded-xl p-8"
        >
          <p className="text-emerald-300/60 font-mono text-sm">
            Based in <span className="text-emerald-400 font-bold">Punjab, Pakistan</span> • Open to research, internships & cloud/AI security roles
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative py-12 px-6 lg:px-12 border-t border-emerald-500/20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-emerald-400 font-bold font-mono mb-4">Navigation</h4>
            <ul className="space-y-2 text-emerald-300/60 text-sm font-mono">
              <li><a href="#about" className="hover:text-emerald-400 transition">About</a></li>
              <li><a href="#projects" className="hover:text-emerald-400 transition">Projects</a></li>
              <li><a href="#skills" className="hover:text-emerald-400 transition">Skills</a></li>
              <li><a href="#timeline" className="hover:text-emerald-400 transition">Timeline</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-rose-400 font-bold font-mono mb-4">Focus Areas</h4>
            <ul className="space-y-2 text-rose-300/60 text-sm font-mono">
              <li>AI / LLM Security</li>
              <li>Digital Forensics</li>
              <li>Cloud Security</li>
              <li>RAG Systems</li>
            </ul>
          </div>

          <div>
            <h4 className="text-emerald-400 font-bold font-mono mb-4">Current Role</h4>
            <ul className="space-y-2 text-emerald-300/60 text-sm font-mono">
              <li>Research Assistant</li>
              <li>under Dr. Anwar Shah</li>
              <li>BS CS — FAST NUCES</li>
              <li>2022 - 2026</li>
            </ul>
          </div>

          <div>
            <h4 className="text-rose-400 font-bold font-mono mb-4">Connect</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/sabahat-jahangir"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#34d399' }}
                className="text-rose-300/60 hover:text-emerald-400 transition"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/sabahat-jahangir"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#a855f7' }}
                className="text-rose-300/60 hover:text-rose-400 transition"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:sabahat.jahangir.tech@gmail.com"
                whileHover={{ scale: 1.2, color: '#34d399' }}
                className="text-rose-300/60 hover:text-emerald-400 transition"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-500/10 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-emerald-300/40 text-xs font-mono"
          >
            <p className="mb-2">© 2026 Sabahat Jahangir. All security rights reserved.</p>
            <p>Building Secure & Intelligent Systems </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

// ============================================================================
// MAIN PORTFOLIO COMPONENT
// ============================================================================

export default function Portfolio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Loading screen */}
      <LoadingScreen isVisible={loading} />

      {/* Navigation */}
      <NavBar />

      {/* Main sections */}
      <HeroSection />
      <AboutSection />
      <ResearchSection />
      <CareerGoalSection />
      <ProjectsSection />
      <SkillsSection />
      <TimelineSection />
      <CertificationsSection />
      <LabSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
