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
            <div className="glass-card p-8 rounded-3xl h-full flex flex-col border border-black/10 dark:border-white/10 hover:border-indigo-500/30 dark:hover:border-purple-500/30 hover:shadow-2xl hover:shadow-indigo-500/5 dark:hover:shadow-purple-500/10 transition-all duration-500 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl relative overflow-hidden group/card">
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-apple-black tracking-tight group-hover/card:text-indigo-600 dark:group-hover/card:text-indigo-400 transition-colors duration-300">{project.title}</h3>
                {project.live && (
                  <span className="flex items-center space-x-1 px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300 text-xs font-semibold rounded-full uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse bg-current" />
                    <span>Live</span>
                  </span>
                )}
              </div>
              
              <p className="text-lg font-medium text-apple-black mb-3">{project.description}</p>
              <p className="text-sm text-apple-base dark:text-gray-300 leading-relaxed mb-8 flex-grow">{project.details}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.stack.map((tech, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 text-xs font-medium border border-black/5 dark:border-white/5 rounded-full bg-black/5 dark:bg-white/5 text-apple-muted transition-colors group-hover/card:border-indigo-500/30 dark:group-hover/card:border-purple-500/30 group-hover/card:text-apple-black dark:group-hover/card:text-white">
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
