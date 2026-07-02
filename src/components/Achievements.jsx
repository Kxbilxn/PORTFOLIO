import React from 'react';
import SectionFadeUp from './SectionFadeUp';
import { Award, Code2, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';

const achievements = [
  {
    icon: <Award className="w-6 h-6 text-apple-black dark:text-apple-base" />,
    title: "3rd Place — National Level Hackathon",
    details: "Jeppiaar Institute of Technology. Cash prize ₹3,000 for building a functional prototype within 24 hours."
  },
  {
    icon: <Code2 className="w-6 h-6 text-apple-black dark:text-apple-base" />,
    title: "LeetCode 50-Day Badge",
    details: "Consistent competitive programming and daily problem-solving using Python and Java."
  },
  {
    icon: <LineChart className="w-6 h-6 text-apple-black dark:text-apple-base" />,
    title: "Analytics Certifications",
    details: "Power BI Certified & Microsoft Excel Certified via Skill Nation."
  }
];

const Achievements = () => {
  return (
    <SectionFadeUp id="achievements" className="bg-gray-50/30 dark:bg-zinc-950/30">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-apple-black mb-16 px-2">
        Achievements
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((item, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="glass-card p-8 rounded-3xl border border-black/10 dark:border-white/10 hover:border-indigo-500/30 dark:hover:border-purple-500/30 hover:shadow-2xl hover:shadow-indigo-500/5 dark:hover:shadow-purple-500/10 transition-all duration-500 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl relative overflow-hidden group flex flex-col h-full"
          >
            {/* Subtle hover gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

            <div className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center mb-6 shadow-sm group-hover:border-indigo-500/40 dark:group-hover:border-purple-500/40 transition-colors duration-300">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-apple-black mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">{item.title}</h3>
            <p className="text-sm text-apple-muted leading-relaxed">{item.details}</p>
          </motion.div>
        ))}
      </div>
    </SectionFadeUp>
  );
};

export default Achievements;
