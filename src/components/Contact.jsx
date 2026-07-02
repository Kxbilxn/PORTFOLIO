import React from 'react';
import SectionFadeUp from './SectionFadeUp';
import { Mail } from 'lucide-react';

const Contact = () => {
  const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );

  const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );

  const links = [
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      url: 'mailto:rskabilan05@gmail.com',
      username: 'rskabilan05@gmail.com'
    },
    {
      name: 'LinkedIn',
      icon: <LinkedinIcon />,
      url: 'https://linkedin.com/in/kabilansr',
      username: 'in/kabilansr'
    },
    {
      name: 'GitHub',
      icon: <GithubIcon />,
      url: 'https://github.com/Kxbilxn',
      username: '@Kxbilxn'
    }
  ];

  return (
    <SectionFadeUp id="contact" className="bg-gray-50 dark:bg-gray-900 pt-32 pb-40">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-apple-black mb-6">
          Let's build something.
        </h2>
        <p className="text-xl text-apple-base dark:text-white">
          Open to internships, collaborations, and full-time roles.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto px-6">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 p-6 rounded-3xl border border-black/10 dark:border-white/10 hover:border-indigo-500/30 dark:hover:border-purple-500/30 hover:shadow-xl hover:shadow-indigo-500/5 dark:hover:shadow-purple-500/10 transition-all duration-500 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl relative overflow-hidden"
          >
            {/* Ambient hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

            <div className="w-14 h-14 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-apple-black dark:text-apple-base group-hover:bg-indigo-500/10 dark:group-hover:bg-purple-500/10 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:border-indigo-500/20 dark:group-hover:border-purple-500/20 transition-all duration-300">
              {link.icon}
            </div>
            <div className="flex flex-col text-left">
              <span className="font-semibold text-apple-black group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">{link.name}</span>
              <span className="text-sm text-apple-muted group-hover:text-apple-black dark:group-hover:text-white transition-colors duration-300">{link.username}</span>
            </div>
          </a>
        ))}
      </div>
    </SectionFadeUp>
  );
};

export default Contact;
