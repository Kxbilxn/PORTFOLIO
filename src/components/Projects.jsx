import React, { useRef } from 'react';
import SectionFadeUp from './SectionFadeUp';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "PrivaRisk",
    description: "Offline AI Financial Analytics",
    details: "Built a fully air-gapped RAG pipeline with ChromaDB + FAISS vector indexing, LoRA fine-tuned LLM, async inference via Ollama, and a statistical fraud detection module with interactive KPI dashboards. Zero data leakage.",
    stack: ["Python", "FastAPI", "Ollama", "ChromaDB", "FAISS", "LoRA", "LLM", "RAG", "Pandas"],
    live: false
  },
  {
    title: "FastAPI URL Shortener",
    description: "High-performance async URL shortening API",
    details: "Async route handlers, in-memory caching layer, PostgreSQL backend, OpenAPI spec auto-generation, and performance-optimized SQL queries.",
    stack: ["Python", "FastAPI", "asyncio", "PostgreSQL", "In-Memory Cache"],
    live: false
  },
  {
    title: "Asset Management & Vendor Portal",
    description: "Production-grade live platform at Maya Appliances India",
    details: "Full CRUD ops, relational SQL schema, PHP backend, input sanitization. Currently live and in daily active use across inventory and vendor workflows.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
    live: true
  }
];

const Projects = () => {
  const containerRef = useRef(null);

  return (
    <SectionFadeUp id="projects" className="bg-gray-50 dark:bg-gray-900 w-full overflow-hidden">
      <div className="flex items-center justify-between mb-16">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-apple-black">
          Selected Projects
        </h2>
      </div>

      {/* Horizontal scroll container on desktop, vertical stack on mobile */}
      <div
        ref={containerRef}
        className="flex flex-col md:flex-row gap-6 md:overflow-x-auto md:snap-x md:snap-mandatory pb-8 hide-scrollbar"
        style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="md:min-w-[420px] md:w-[420px] shrink-0 md:snap-start h-full group"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="glass-card p-8 rounded-3xl h-full flex flex-col hover:shadow-xl dark:hover:shadow-white/10 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-apple-black tracking-tight">{project.title}</h3>
                {project.live && (
                  <span className="flex items-center space-x-1 px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300 text-xs font-semibold rounded-full uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse bg-current" />
                    <span>Live</span>
                  </span>
                )}
              </div>
              
              <p className="text-lg font-medium text-apple-black mb-3">{project.description}</p>
              <p className="text-sm text-apple-base dark:text-white leading-relaxed mb-8 flex-grow">{project.details}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.stack.map((tech, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 text-xs font-medium border-thin rounded-full bg-gray-100 dark:bg-gray-900 text-apple-muted transition-colors group-hover:border-gray-400 dark:group-hover:border-gray-600">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}} />
    </SectionFadeUp>
  );
};

export default Projects;
