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
      
      <div className="relative pl-4 md:pl-8 border-l-2 border-apple-black dark:border-apple-base space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[21px] md:-left-[37px] top-1.5 w-3 h-3 rounded-full bg-apple-black dark:bg-apple-base border-4 border-white dark:border-black" />
            
            <div className="glass-card p-6 md:p-8 rounded-3xl hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_rgb(255,255,255,0.08)] transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-apple-black">{exp.role}</h3>
                  <div className="flex items-center text-apple-muted mt-1 space-x-2">
                    <Briefcase size={16} />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                </div>
                <div className="text-sm font-medium px-3 py-1 bg-gray-100 dark:bg-gray-900 rounded-full w-fit text-apple-muted border border-apple-black/20 dark:border-apple-base/20">
                  {exp.period}
                </div>
              </div>
              
              <p className="text-apple-base leading-relaxed">
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
