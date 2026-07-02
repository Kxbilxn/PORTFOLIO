import React from 'react';
import SectionFadeUp from './SectionFadeUp';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "AI Engineering Intern",
    company: "IQNet Solutions India",
    period: "Jun 2025 – Jul 2025",
    description: "Trained and fine-tuned ML models using PyTorch on domain-specific datasets. Built data preprocessing pipelines with Pandas/NumPy. Applied OOP design patterns, unit testing, and documented model inference workflows."
  },
  {
    role: "Developer Intern",
    company: "Maya Appliances India",
    period: "Jul 2025 – Dec 2025",
    description: "Built and maintained production web app features. Developed REST API endpoints, async data processing workflows, and SQL schemas for CRUD operations. Profiled bottlenecks and contributed in an Agile cycle."
  }
];

const Experience = () => {
  return (
    <SectionFadeUp id="experience">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-apple-black mb-16">
        Experience
      </h2>
      
      <div className="relative pl-6 md:pl-8 space-y-12">
        {/* Glowing Gradient Timeline Line */}
        <div className="absolute left-[3px] md:left-[4px] top-2 bottom-2 w-[3px] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 opacity-60 dark:opacity-40 rounded-full" />

        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
            className="relative group"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[29px] md:-left-[37px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 dark:bg-purple-500 border-4 border-white dark:border-zinc-950 shadow-md group-hover:scale-125 transition-transform duration-300" />
            
            <div className="glass-card p-6 md:p-8 rounded-3xl border border-black/10 dark:border-white/10 hover:border-indigo-500/30 dark:hover:border-purple-500/30 hover:shadow-2xl hover:shadow-indigo-500/5 dark:hover:shadow-purple-500/10 transition-all duration-500 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl relative overflow-hidden group/card">
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-apple-black group-hover/card:text-indigo-600 dark:group-hover/card:text-indigo-400 transition-colors duration-300">{exp.role}</h3>
                  <div className="flex items-center text-apple-muted mt-1 space-x-2">
                    <Briefcase size={16} />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                </div>
                <div className="text-sm font-medium px-3 py-1 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-full w-fit text-apple-muted transition-colors duration-300 group-hover/card:text-apple-black dark:group-hover/card:text-white">
                  {exp.period}
                </div>
              </div>
              
              <p className="text-apple-base dark:text-gray-300 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionFadeUp>
  );
};

export default Experience;
