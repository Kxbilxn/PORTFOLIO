import React from 'react';
import SectionFadeUp from './SectionFadeUp';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'AI / ML & GenAI',
    items: ['LLM Fine-Tuning (LoRA)', 'RAG Pipelines', 'OpenAI API', 'Ollama', 'ChromaDB', 'FAISS', 'PyTorch', 'NLP', 'Generative AI', 'LangChain', 'Vector Indexing', 'Embeddings']
  },
  {
    category: 'Backend & APIs',
    items: ['Python', 'FastAPI', 'REST APIs', 'Caching', 'PostgreSQL', 'MySQL', 'SQL']
  },
  {
    category: 'Languages',
    items: ['Python', 'Java', 'JavaScript', 'PHP', 'HTML/CSS']
  },
  {
    category: 'Tooling',
    items: ['Git', 'Linux', 'Pandas', 'NumPy', 'Power BI', 'Clean Code', 'OOP', 'Performance Profiling']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 20 } }
};

const Skills = () => {
  return (
    <SectionFadeUp id="skills" className="bg-white dark:bg-gray-950">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-apple-black mb-16">
        Technical Arsenal
      </h2>
      
      <div className="flex flex-col space-y-12">
        {skillsData.map((group, groupIdx) => (
          <div key={groupIdx} className="flex flex-col md:flex-row gap-6 md:gap-12">
            <div className="md:w-1/4">
              <h3 className="text-sm font-bold tracking-wider text-apple-black dark:text-white uppercase mt-2">
                {group.category}
              </h3>
            </div>
            
            <motion.div 
              className="md:w-3/4 flex flex-wrap gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {group.items.map((item, idx) => (
                <motion.span
                  key={idx}
                  variants={pillVariants}
                  className="px-4 py-2 text-sm font-medium border-2 border-black dark:border-white rounded-full bg-white dark:bg-gray-900 text-apple-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 cursor-default"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </SectionFadeUp>
  );
};

export default Skills;
