import React, { useEffect, useRef } from 'react';
import { ArrowDown, Download } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-grid-pattern pt-16" id="hero">
      <div className="text-center z-10 px-6">
        <h1 
          ref={nameRef}
          className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-apple-black mb-6 px-4"
        >
          Kabilan Swaminathan
        </h1>
        
        <div 

          ref={subtitleRef}
          className="flex items-center justify-center space-x-2 text-lg md:text-2xl text-apple-muted font-medium mb-12"
        >
          <span>AI & Backend Engineer</span>
          <span className="w-2 h-6 md:h-8 bg-current animate-pulse inline-block"></span>
        </div>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center space-x-2 bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
          >
            <span>View Projects</span>
            <ArrowDown size={18} />
          </button>
          
          <a 
            href="/resume.pdf"
            target="_blank"
            className="flex items-center space-x-2 bg-transparent text-apple-black dark:text-apple-base border-2 border-apple-black dark:border-apple-base px-6 py-3 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-300"
          >
            <Download size={18} />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
