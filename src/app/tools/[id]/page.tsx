"use client";

import React, { useState, use } from 'react';

interface Feature {
  title: string;
  desc: string;
  icon: string;
}

interface ToolData {
  name: string;
  version: string;
  category: string;
  tag: string;
  description: string;
  about: string;
  installCommand: string;
  stars: string;
  forks: string;
  license: string;
  lastUpdated: string;
  icon: string;
  features: Feature[];
  images?: string[];
  imageRatio?: '16:9' | '9:16';
}

const defaultTool: ToolData = {
  name: 'Lumina CLI',
  version: '4.2.0 Stable',
  category: 'DEVELOPER TOOL',
  tag: 'V4.2 STABLE',
  description: 'The next generation command-line interface for cloud-native orchestration and real-time stellar data processing.',
  about: 'Lumina CLI v4.2 is a performance-optimized toolkit designed for modern developers who demand speed and reliability. Built with Rust for zero-cost abstractions, it provides a seamless interface for managing complex multi-cloud deployments with a single command.\n\nVersion 4.2 introduces the "Stellar Discovery" engine, allowing for automated resource mapping and intelligent latency-aware routing across global regions. Whether you are scaling microservices or processing terabytes of log data, Lumina provides the granular control you need without the overhead.',
  installCommand: 'npm install -g @lumina/cli',
  stars: '15k',
  forks: '1.8k',
  license: 'MIT Open Source',
  lastUpdated: '2 days ago',
  icon: 'terminal',
  features: [
    { title: 'Ultra Fast', desc: 'Cold boot in under 10ms with optimized binary sizes.', icon: 'bolt' },
    { title: 'End-to-End', desc: 'Built-in AES-256 encryption for all config parameters.', icon: 'security' },
    { title: 'Smart Sync', desc: 'Auto-sync environments across your developer team.', icon: 'auto_awesome' }
  ],
  images: [
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
  ]
};

const toolDataMap: Record<string, ToolData> = {
  ghostty: {
    name: 'Ghostty',
    version: '1.0.0 Stable',
    category: 'TERMINAL',
    tag: 'V1.0 STABLE',
    description: 'A fast, native, feature-rich terminal emulator pushing the boundaries of what is possible.',
    about: 'Ghostty is a highly-optimized terminal emulator designed for modern workfjjjjjjj jjjjjj jjjjj jjjjj jjjjj jjjjj jjjjj jjjjj j jjjjj jjjjjj jjjjjj jjjjj jjjjjj jjjjj jjj j jjjjjj jjjjjjjj jjjjj jjjjj jjjjj jjjj jjjjj jjj jjj jjjj jj jj jjj jjjj jj jjjj jj jjj jjjj jjjj jjj jjj jjjjjj jjjj jjjj jjj jjjj jjj jjj jjjjjjjjj jjjj jjjj    jjjjj jjjj  jj    jjjj  jjjj      jjjjjj    jj  jjjjj jjj    jjjjj jjjj jjjjj   jjjj jjjjjjj  jjjjjj  jjjjjj jjj jjjj  jjj  jjjjj  jjjjjj jjjjjjjjjjjlows. Built with native performance in mind, it provides smooth rendering, low latency, and advanced feature sets without compromising on resource usage.\n\nEnjoy extensive configuration options, custom keybindings, multi-window support, and deeply integrated system APIs that make Ghostty feel like a natural extension of your operating system.',
    installCommand: 'brew install --cask ghostty',
    stars: '12.4k',
    forks: '1.1k',
    license: 'MIT Open Source',
    lastUpdated: '5 days ago',
    icon: 'terminal',
    features: [
      { title: 'GPU Accelerated', desc: 'Blazing-fast rendering pipeline with near-zero latency.', icon: 'bolt' },
      { title: 'Native Integration', desc: 'Designed to look and feel completely at home on macOS and Linux.', icon: 'desktop_windows' },
      { title: 'Extensible Config', desc: 'Configure everything from tab styling to mouse interactions.', icon: 'settings' }
    ],
    images: [
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
    ],
    imageRatio: '9:16'
  },
  ollama: {
    name: 'Ollama',
    version: '0.1.48 Stable',
    category: 'AI TOOL',
    tag: 'V0.1 STABLE',
    description: 'Get up and running with large language models locally. Run Llama 3, Mistral, and more.',
    about: 'Ollama is a lightweight, extensible framework for building and running language models locally on your machine. With simple, intuitive commands, you can download, customize, and converse with state-of-the-art models like Llama 3, Mistral, Phi-3, and many more.\n\nFeaturing an optimized backend that automatically leverages your hardware (including Apple Silicon and NVIDIA GPUs), Ollama makes local AI accessible to developers and researchers alike.',
    installCommand: 'curl -fsSL https://ollama.com/install.sh | sh',
    stars: '85k',
    forks: '6.4k',
    license: 'MIT Open Source',
    lastUpdated: '1 day ago',
    icon: 'smart_toy',
    features: [
      { title: 'Local First', desc: 'Run large language models locally with complete data privacy.', icon: 'lock' },
      { title: 'Hardware Acceleration', desc: 'Automatically leverages Apple Silicon, NVIDIA, and AMD GPUs.', icon: 'bolt' },
      { title: 'Model Library', desc: 'Access a vast, curated library of fine-tuned open-weight models.', icon: 'auto_awesome' }
    ],
    images: [
      "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1684369175833-305f66ff619d?auto=format&fit=crop&w=800&q=80"
    ],
    imageRatio: '16:9'
  },
  'obs-studio': {
    name: 'OBS Studio',
    version: '30.1.2 Stable',
    category: 'MEDIA TOOL',
    tag: 'V30.1 STABLE',
    description: 'Free and open source software for video recording and live streaming.',
    about: 'OBS Studio is the gold standard for video production, recording, and live broadcasting. Used by millions of creators worldwide, it provides high-performance real-time video/audio capturing and mixing.\n\nCreate scenes made up of multiple sources including window captures, images, text, browser windows, webcams, capture cards, and more. Seamlessly switch between them with custom transitions.',
    installCommand: 'brew install --cask obs',
    stars: '55k',
    forks: '8.2k',
    license: 'GPL v2.0',
    lastUpdated: '1 week ago',
    icon: 'video_camera_front',
    features: [
      { title: 'Real-Time Mixing', desc: 'High-performance video/audio capturing and scene composition.', icon: 'bolt' },
      { title: 'Infinite Customization', desc: 'Extensive plugin and script support for advanced requirements.', icon: 'settings' },
      { title: 'Stream Anywhere', desc: 'Direct integration with YouTube, Twitch, Kick, and custom RTMP.', icon: 'language' }
    ],
    images: [
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80"
    ],
    imageRatio: '16:9'
  },
  zed: {
    name: 'Zed',
    version: '0.132.0 Stable',
    category: 'EDITOR',
    tag: 'V0.132 STABLE',
    description: 'A high-performance, multiplayer code editor from the creators of Atom and Tree-sitter.',
    about: 'Zed is a next-generation code editor built from the ground up in Rust. It is engineered to leverage multi-core CPUs and modern graphics processors, making it start instantly and respond to keystrokes within a fraction of a millisecond.\n\nWith built-in support for real-time collaborative editing, integrated AI chat, and native terminal capabilities, Zed redefines what a professional code editor can be.',
    installCommand: 'curl -fsSL https://zed.dev/install.sh | sh',
    stars: '42k',
    forks: '2.1k',
    license: 'GPL / Apache 2.0',
    lastUpdated: '3 days ago',
    icon: 'code',
    features: [
      { title: 'Rust Engineered', desc: 'Blazing fast start times and buttery-smooth typing experience.', icon: 'bolt' },
      { title: 'Collaborative', desc: 'Edit code in real-time with teammates on a shared workspace.', icon: 'groups' },
      { title: 'AI Integrated', desc: 'Context-aware AI assistance built natively into your editor.', icon: 'auto_awesome' }
    ],
    images: [
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=80"
    ],
    imageRatio: '16:9'
  }
};

const glassStyle = {
  background: "rgba(28, 32, 37, 0.4)",
  backdropFilter: "blur(24px)",
  WebkitBackdropFilter: "blur(24px)",
  border: "1px solid rgba(255, 255, 255, 0.05)",
};

const stellarGlowStyle = {
  boxShadow: "0 0 30px rgba(62, 166, 255, 0.1)",
};

export default function ToolDetailPage({ params }: { params: Promise<{ id: string }> | { id: string } }) {
  // Support both Promise-based params and object-based params safely in Next.js 16 Client Component
  const resolvedParams = params && 'then' in params ? use(params) : params;
  const toolId = resolvedParams?.id?.toLowerCase() || '';
  const tool = toolDataMap[toolId] || defaultTool;

  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="max-w-[1280px] mx-auto px-4 md:px-6 pt-24 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column (Main) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Hero Section */}
          <div 
            className="relative rounded-xl overflow-hidden aspect-[16/9] lg:aspect-auto lg:h-[290px] mb-8 border border-outline-variant"
            style={stellarGlowStyle}
          >
            <img 
              alt="Developer Workstation" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida/ADBb0ugXbFHQGzdbdFoDuCMmckOcK7EF6WvK5Jtx9SzbpYtFF__KkoVzwVdb2WburoxKNE21hJsoujASpz3l2sXyk1vt9NaPhvz_VGKIrTln0V-G_zn0k03KdI3TsQYcLVrdf0WsM7onvKkroLkDdbg6sG3YE3f6-w6EvowkU_EXlxIi6YarYyDILV0XrnXuSu3iAnORlvbJouB6v7p8FGP6ri3FbJ2l99CApSSR_cE4gwFIaxlPYaLDjnsUX2D74hN4u-h6RJ68GVIJ"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101419] via-[#101419]/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-primary-container/10 text-primary-container px-3 py-1 rounded-full text-[10px] font-bold border border-primary-container/20 tracking-wider">
                  {tool.category}
                </span>
                <span className="bg-on-surface-variant/10 text-on-surface-variant px-3 py-1 rounded-full text-[10px] font-bold border border-outline-variant/30 tracking-wider">
                  {tool.tag}
                </span>
              </div>
              <h1 className="font-display-lg text-3xl md:text-5xl text-on-surface mb-2 tracking-tight">
                {tool.name}
              </h1>
              <p className="text-on-surface-variant font-body-base max-w-2xl text-sm md:text-base leading-relaxed">
                {tool.description}
              </p>
            </div>
          </div>

          {/* Description Section */}
          <section className="space-y-3">
            <h2 className="font-headline-md text-xl md:text-2xl text-on-surface">
              About {tool.name}
            </h2>
            <div className="relative">
              <div 
                className={`text-on-surface-variant text-sm md:text-base leading-relaxed whitespace-pre-line transition-all duration-500 ease-in-out relative ${
                  isExpanded ? 'pb-12' : (tool.about.split(' ').length > 70 ? 'max-h-[100px] overflow-hidden' : '')
                }`}
              >
                {tool.about}
                
                {/* Translucent Fading Gradient Overlay */}
                {!isExpanded && tool.about.split(' ').length > 70 && (
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent pointer-events-none" />
                )}
              </div>
              
              {/* Left-Aligned, Transparent Button */}
              {tool.about.split(' ').length > 70 && (
                <div className={isExpanded ? 'mt-3' : 'absolute bottom-1 left-0 z-10'}>
                  <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="inline-flex items-center gap-1.5 text-primary/80 hover:text-primary transition-all duration-300 font-semibold text-xs cursor-pointer py-1 bg-transparent border-0 outline-none focus:outline-none focus:ring-0 active:bg-transparent hover:bg-transparent shadow-none"
                  >
                    <span>{isExpanded ? 'View Less' : 'View More'}</span>
                    <span className="material-symbols-outlined text-sm">
                      {isExpanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                    </span>
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Images Gallery Section */}
          {tool.images && tool.images.length > 0 && (
            <section className="space-y-4">
              <h3 className="font-headline-md text-base md:text-lg text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-container text-xl">gallery_thumbnail</span>
                Gallery
              </h3>

              <div className={`grid gap-3 transition-all duration-500 ease-in-out ${
                tool.imageRatio === '9:16' 
                  ? 'grid-cols-4' 
                  : (tool.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2')
              }`}>
                {tool.images.map((imgUrl, i) => {
                  // For portrait view, use a vertical image crop height
                  const processedImgUrl = tool.imageRatio === '9:16'
                    ? imgUrl.replace('fit=crop&w=800&q=80', 'fit=crop&w=600&h=1067&q=80')
                    : imgUrl;

                  return (
                    <div 
                      key={i} 
                      className={`rounded-xl overflow-hidden border border-outline-variant/30 relative group cursor-pointer transition-all duration-500 ${
                        tool.imageRatio === '9:16' ? 'aspect-[9/16]' : 'aspect-video'
                      }`}
                    >
                      <img 
                        alt={`${tool.name} preview ${i + 1}`}
                        src={processedImgUrl}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                        <span className="material-symbols-outlined text-on-surface text-lg">zoom_in</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Installation */}
          <section className="p-6 rounded-xl bg-surface-container border border-outline-variant space-y-3">
            <h2 className="font-headline-md text-lg text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container">terminal</span>
              Quick Installation
            </h2>
            <div className="bg-surface-container-lowest rounded-lg p-4 font-mono text-xs md:text-sm border border-outline-variant relative overflow-hidden">
              <div className="flex items-center gap-2 mb-3 text-on-surface-variant/40">
                <div className="w-2.5 h-2.5 rounded-full bg-error"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-tertiary"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-secondary"></div>
                <span className="ml-2 text-[10px] font-medium">zsh — {tool.name.toLowerCase()}-setup</span>
              </div>
              <div className="text-on-surface-variant pr-12 overflow-x-auto whitespace-nowrap">
                <span className="text-primary-container">$</span> <span className="text-on-surface">{tool.installCommand}</span>
              </div>
              <button 
                onClick={() => copyToClipboard(tool.installCommand)}
                className="absolute top-4 right-4 text-on-surface-variant hover:text-primary-container transition-colors cursor-pointer"
                title="Copy install command"
              >
                <span className="material-symbols-outlined text-lg">
                  {copied ? 'check' : 'content_copy'}
                </span>
              </button>
            </div>
          </section>

        </div>

        {/* Right Column (Sidebar) */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 space-y-6">
            
            {/* Metadata Card */}
            <div 
              className="p-6 rounded-2xl lg:h-[290px] flex flex-col justify-between"
              style={{ ...glassStyle, ...stellarGlowStyle }}
            >
              <div className="flex justify-between items-center py-2 border-b border-outline-variant/30 text-sm">
                <span className="text-on-surface-variant">License</span>
                <span className="text-on-surface font-bold">{tool.license}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-outline-variant/30 text-sm">
                <span className="text-on-surface-variant">Version</span>
                <span className="text-on-surface font-bold">{tool.version}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-outline-variant/30 text-sm">
                <span className="text-on-surface-variant">Last Updated</span>
                <span className="text-on-surface font-bold">{tool.lastUpdated}</span>
              </div>
              <div className="pt-1">
                <span className="text-on-surface-variant text-sm block mb-2">Platforms</span>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-on-surface-variant hover:text-primary-container transition-colors cursor-help" title="Web">language</span>
                  <span className="material-symbols-outlined text-on-surface-variant hover:text-primary-container transition-colors cursor-help" title="MacOS">desktop_mac</span>
                  <span className="material-symbols-outlined text-on-surface-variant hover:text-primary-container transition-colors cursor-help" title="Windows">grid_view</span>
                  <span className="material-symbols-outlined text-on-surface-variant hover:text-primary-container transition-colors cursor-help" title="Linux">terminal</span>
                </div>
              </div>
            </div>

            {/* Capability Card */}
            <div className="p-6 rounded-2xl space-y-4" style={glassStyle}>
              <h3 className="font-headline-md text-on-surface text-lg">Capability</h3>
              <div className="flex flex-col gap-4">
                {tool.features.map((feature, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container shrink-0">
                      <span className="material-symbols-outlined text-base">{feature.icon}</span>
                    </div>
                    <div>
                      <div className="text-on-surface text-sm font-bold">{feature.title}</div>
                      <div className="text-xs text-on-surface-variant leading-relaxed mt-0.5">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
