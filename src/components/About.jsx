import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import SectionFadeUp from './SectionFadeUp';

const Counter = ({ from, to, duration = 2 }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = from;
      const end = to;
      const totalFrames = Math.round((duration * 1000) / 16);
      const increment = (end - start) / totalFrames;
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{typeof count === 'number' && Number.isInteger(to) ? Math.floor(count) : count}</span>;
};

const About = () => {
  const stats = [
    { value: 2, label: 'Internships', suffix: '' },
    { value: 3, label: 'Projects shipped', suffix: '' },
    { value: 50, label: 'Day LeetCode streak', suffix: '+' },
    { value: 8.25, label: 'CGPA', suffix: '' }
  ];

  return (
    <SectionFadeUp id="about" className="bg-white dark:bg-black">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-apple-black mb-12">
        About Me
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Bio Card */}
        <div className="glass-card p-8 rounded-3xl">
          <p className="text-lg leading-relaxed text-apple-base relative">
            <span className="text-4xl absolute -top-4 -left-4 text-gray-300 dark:text-gray-700 opacity-60 font-serif">"</span>
            I build LLM-powered systems, RAG pipelines, and production APIs. Currently pursuing B.Tech in CS (Big Data Analytics) at SRM. I care deeply about performance-aware, clean code — software that actually ships.
          </p>
          <div className="mt-8">
            <p className="font-medium text-apple-black">Kabilan Swaminathan</p>
            <p className="text-sm text-apple-muted">AI Engineering & Backend Systems</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-6 border-thin rounded-3xl bg-gray-50/50 dark:bg-gray-900/50">
              <div className="text-4xl font-semibold tracking-tight text-apple-black mb-2">
                <Counter from={0} to={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-sm text-apple-muted font-medium text-center">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionFadeUp>
  );
};

export default About;
