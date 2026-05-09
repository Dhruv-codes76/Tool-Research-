import React from 'react';
import Link from 'next/link';

const TopNavBar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface/80 backdrop-blur-md border-b border-outline-variant/20">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-gutter h-16">
        <div className="font-display-lg text-headline-md font-bold text-on-surface dark:text-on-surface">
          <Link href="/">AI Tool Research</Link>
        </div>
        
        <div className="hidden md:flex items-center gap-stack-md font-body-base text-body-base">
          <Link 
            href="/" 
            className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200"
          >
            Home
          </Link>
          <Link 
            href="/tools" 
            className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200"
          >
            Tools
          </Link>
          <Link 
            href="/blog" 
            className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200"
          >
            Blog
          </Link>
          <Link 
            href="/about" 
            className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200"
          >
            About
          </Link>
        </div>

        <div className="flex items-center text-primary dark:text-primary">
          <button aria-label="Account" className="hover:text-primary transition-colors duration-200">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
