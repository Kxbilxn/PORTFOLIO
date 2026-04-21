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
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-900 border-2 border-apple-black dark:border-apple-base flex items-center justify-center text-apple-black dark:text-apple-base group-hover:bg-gray-200 dark:group-hover:bg-gray-800 transition-colors duration-300">
              {link.icon}
            </div>
            <div className="flex flex-col items-center">
              <span className="font-medium text-apple-black">{link.name}</span>
              <span className="text-sm text-apple-muted">{link.username}</span>
            </div>
          </a>
        ))}
      </div>
    </SectionFadeUp>
  );
};

export default Contact;
