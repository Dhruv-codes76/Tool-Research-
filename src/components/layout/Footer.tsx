import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant/20 mt-auto pb-20 md:pb-0">
      <div className="max-w-container-max mx-auto px-gutter py-stack-lg flex flex-col md:flex-row justify-between items-start gap-stack-md font-body-base text-body-base">
        <div>
          <div className="font-headline-md text-headline-md font-bold text-on-surface mb-2">AI Tool Research</div>
          <p className="text-on-surface-variant text-sm">© 2026 AI Tool Research. Curated Excellence.</p>
        </div>
        <div className="flex gap-6">
          <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#">Mission</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#">GitHub</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#">Twitter</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
