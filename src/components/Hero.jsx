import React, { useEffect, useRef } from 'react';
import { ArrowDown, Download } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import kabilanImage from '../assets/kabilan.jpg';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const nameRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Split text logic for letter-by-letter animation without external library
    if (nameRef.current) {
      const text = nameRef.current.innerText;
      nameRef.current.innerHTML = '';
      text.split(' ').forEach((word, wordIdx, arr) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'inline-block whitespace-nowrap';
        
        word.split('').forEach(char => {
          const charSpan = document.createElement('span');
          charSpan.innerText = char;
          charSpan.style.opacity = 0;
          charSpan.className = 'inline-block';
          wordSpan.appendChild(charSpan);
        });
        
        nameRef.current.appendChild(wordSpan);
        
        if (wordIdx < arr.length - 1) {
          const spaceSpan = document.createElement('span');
          spaceSpan.innerHTML = '&nbsp;';
          nameRef.current.appendChild(spaceSpan);
        }
      });
      
      tl.to(nameRef.current.querySelectorAll('.inline-block > span'), {
        opacity: 1,
        y: 0,
        stagger: 0.03,
        duration: 0.5,
        ease: 'power2.out',
      });
    }

    tl.fromTo(subtitleRef.current, 
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      "-=0.2"
    );

    tl.fromTo(ctaRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      "-=0.4"
    );
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-grid-pattern pt-24 pb-16 overflow-hidden" id="hero">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Column: Text Content */}
        <div className="md:col-span-7 text-center md:text-left order-2 md:order-1 flex flex-col items-center md:items-start">
          <h1 
            ref={nameRef}
            className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-apple-black mb-6"
          >
            Kabilan Swaminathan
          </h1>
          
          <div 
            ref={subtitleRef}
            className="flex items-center space-x-2 text-lg md:text-2xl text-apple-muted font-medium mb-10"
          >
            <span>AI & Backend Engineer</span>
            <span className="w-2 h-6 md:h-8 bg-current animate-pulse inline-block"></span>
          </div>

          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button 
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-black text-white dark:bg-white dark:text-black px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowDown size={18} />
            </button>
            
            <a 
              href="/resume.pdf"
              target="_blank"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-transparent text-apple-black dark:text-apple-base border-2 border-apple-black dark:border-apple-base px-8 py-4 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-300"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Right Column: Image Presentation */}
        <div className="md:col-span-5 flex justify-center order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group"
          >
            {/* Glowing Backdrop */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-30 pointer-events-none" />
            
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut"
              }}
              className="relative p-2 glass-card rounded-3xl border-2 border-white/20 dark:border-white/10 shadow-2xl overflow-hidden bg-white/10 dark:bg-black/10 backdrop-blur-md"
            >
              <img
                src={kabilanImage}
                alt="Kabilan Swaminathan"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-inner"
              />
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
