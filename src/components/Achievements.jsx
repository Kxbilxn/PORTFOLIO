import React from 'react';
import SectionFadeUp from './SectionFadeUp';
import { Award, Code2, LineChart } from 'lucide-react';

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
          <div 
            key={idx}
            className="glass-card p-8 rounded-3xl hover:border-black dark:hover:border-white transition-all duration-300 flex flex-col h-full"
          >
            <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-900 border-2 border-apple-black dark:border-apple-base flex items-center justify-center mb-6 shadow-sm">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-apple-black mb-3">{item.title}</h3>
            <p className="text-sm text-apple-muted leading-relaxed">{item.details}</p>
          </div>
        ))}
      </div>
    </SectionFadeUp>
  );
};

export default Achievements;
