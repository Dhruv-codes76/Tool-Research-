import React from 'react';

export default function BlogPage() {
  return (
    <div className="pt-24 pb-32 md:pt-32 px-gutter max-w-container-max mx-auto w-full flex flex-col md:flex-row gap-gutter relative">
      {/* Sticky TOC (Desktop) */}
      <aside className="hidden md:block w-64 shrink-0 relative">
        <div className="sticky top-32 glass-panel rounded-xl p-6">
          <h3 className="font-headline-md text-headline-md mb-stack-md text-primary">Contents</h3>
          <nav className="flex flex-col gap-stack-sm font-label-sm text-label-sm">
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#intro">Introduction</a>
            <a className="text-primary hover:text-primary transition-colors border-l-2 border-primary pl-2" href="#step1">Step 1: Setup</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#step2">Step 2: Configuration</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#conclusion">Conclusion</a>
          </nav>
        </div>
      </aside>

      {/* Blog Article */}
      <article className="flex-grow max-w-3xl mx-auto w-full space-y-stack-lg">
        <header className="space-y-stack-md mb-margin-page">
          <div className="flex items-center gap-2 text-primary font-label-sm text-label-sm">
            <span className="bg-surface-container px-3 py-1 rounded-full border border-outline-variant/30">Tutorial</span>
            <span className="text-on-surface-variant">• 10 min read</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-surface leading-tight">Mastering Dark Mode in Tailwind CSS: A Comprehensive Guide</h1>
          <p className="text-on-surface-variant text-lg">Learn how to implement a robust, system-aware dark mode using Tailwind CSS and semantic design tokens.</p>
          
          <div className="flex items-center gap-4 pt-4 border-t border-outline-variant/20 mt-stack-md">
            <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden border border-outline-variant/30">
              <img 
                alt="Author Avatar" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlq36IwEywzE4aiCctCIPEFBJwTec-Jm3SRfVwBgQxEtR_4V4yTkjuZSDdVPxlMphX2uAEZ4rIwZfBzOlKYMTHdHrdEXs_QWyU5a5e5CXfzDGh4s3xqdeZu135AVgekd1KbtEhaG7usckyRyfX0MwikCL041omXorPBFwcv4hGCUWpiVMQfZK3fdXBM3g0YiOph7yjhWEAMLHhqH3SBHuLAdpPH0sFJulCAp_w5vwvH6l63mnllgBFZYTymXvIFyG18qC21Bo5Kwk"
              />
            </div>
            <div>
              <p className="font-label-sm text-label-sm text-on-surface">Alex Mercer</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant font-normal">Senior Frontend Engineer</p>
            </div>
          </div>
        </header>

        <img 
          alt="Coding on laptop" 
          className="w-full h-auto rounded-xl border border-outline-variant/20 mb-stack-lg shadow-lg shadow-primary/10" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoR4OJt7eGHDN9cOD3rLaR9mJNwvVH1jpk4qKKQYXRWPPdasM3UTPOLFVVE-NpXfb-JWZjvuDqmgYtwBP9L4TVdHDh5wGdyTSUXkhTjyMP23g6LBZ0Wq3y3MmTTSNucvmyEesl8hwZ-O9fateCyv_R7NmTZ-VsMZ9DjuwUBPuAgVg6C7NdgMdp1TlrIWbFItE8kLXo1QvXCztIg2Iqf_DhFoaq3DX7xtg76YCEl6LvsvtXh4dGga947IfiT9ebonZnVLm04a2x_e0"
        />

        <section className="space-y-4" id="intro">
          <p>Implementing dark mode is no longer an optional feature; it's a core expectation for modern web applications. In this guide, we'll walk through a structured approach to adding dark mode using Tailwind CSS.</p>
          <p>We will focus on using a semantic color palette, ensuring that your application remains scalable and maintainable as your design system evolves.</p>
        </section>

        <section className="space-y-4" id="step1">
          <h2 className="font-headline-md text-headline-md text-on-surface mt-stack-lg mb-stack-md">Step 1: Tailwind Configuration</h2>
          <p>The first step is to tell Tailwind to rely on a CSS class for toggling dark mode rather than just the media query. This allows for manual overrides.</p>
          
          <div className="relative group mt-4 mb-6">
            <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-surface-container-high text-on-surface-variant hover:text-primary px-3 py-1 rounded-md border border-outline-variant/30 flex items-center gap-1 font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px]">content_copy</span> Copy
              </button>
            </div>
            <pre className="bg-[#0A0A0A] p-6 rounded-xl border border-outline-variant/30 overflow-x-auto">
              <code className="font-code-snippet text-code-snippet text-on-surface-variant">
                <span className="text-tertiary">module</span>.exports = {'{\n'}
                {'  '}<span className="text-primary-container">darkMode</span>: <span className="text-secondary">'class'</span>,{'\n'}
                {'  '}<span className="text-primary-container">theme</span>: {'{\n'}
                {'    '}<span className="text-primary-container">extend</span>: {'{\n'}
                {'      '}<span className="text-outline">// Your semantic colors here</span>{'\n'}
                {'    }\n'}
                {'  }\n'}
                {'}'}
              </code>
            </pre>
          </div>
        </section>

        <section className="space-y-4" id="step2">
          <h2 className="font-headline-md text-headline-md text-on-surface mt-stack-lg mb-stack-md">Step 2: Semantic Tokens</h2>
          <p>Instead of hardcoding generic colors like `bg-gray-900`, define semantic tokens like `surface-container-lowest`. This makes your HTML much cleaner.</p>
          
          <div className="glass-panel p-6 rounded-xl my-6 flex gap-4 items-start">
            <span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
            <div>
              <h4 className="font-label-sm text-label-sm text-on-surface mb-2">Pro Tip</h4>
              <p className="text-sm text-on-surface-variant">Always establish a clear naming convention for your color tokens before writing any UI code. A typical hierarchy includes background, surface, primary, and secondary roles.</p>
            </div>
          </div>
        </section>

        <section className="space-y-4" id="conclusion">
          <h2 className="font-headline-md text-headline-md text-on-surface mt-stack-lg mb-stack-md">Conclusion</h2>
          <p>By leveraging Tailwind's class-based dark mode and semantic color configuration, you create a robust foundation for a premium, dual-theme user interface.</p>
        </section>
      </article>
    </div>
  );
}
