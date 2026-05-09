import React from 'react';
import { ToolCard } from '@/components/ui/ToolCard';
import { SearchBar } from '@/components/ui/SearchBar';
import { CategoryChip } from '@/components/ui/CategoryChip';

const allTools = [
  {
    id: 'ghostty',
    name: 'Ghostty',
    stars: '12.4k',
    description: 'A fast, native, feature-rich terminal emulator pushing the boundaries of what is possible.',
    tags: ['macOS', 'Linux'],
    icon: 'terminal',
    color: 'text-primary'
  },
  {
    id: 'ollama',
    name: 'Ollama',
    stars: '85k',
    description: 'Get up and running with large language models locally. Run Llama 3, Mistral, and more.',
    tags: ['AI', 'macOS'],
    icon: 'smart_toy',
    color: 'text-secondary'
  },
  {
    id: 'obs-studio',
    name: 'OBS Studio',
    stars: '55k',
    description: 'Free and open source software for video recording and live streaming.',
    tags: ['Windows', 'macOS'],
    icon: 'video_camera_front',
    color: 'text-tertiary'
  },
  {
    id: 'zed',
    name: 'Zed',
    stars: '42k',
    description: 'A high-performance, multiplayer code editor from the creators of Atom and Tree-sitter.',
    tags: ['Developer Tools'],
    icon: 'code',
    color: 'text-primary-fixed'
  },
  // Adding more mock tools for the full list
  {
    id: 'excalidraw',
    name: 'Excalidraw',
    stars: '78k',
    description: 'Virtual whiteboard for sketching hand-drawn like diagrams.',
    tags: ['Design', 'Productivity'],
    icon: 'edit',
    color: 'text-secondary-fixed'
  },
  {
    id: 'tldraw',
    name: 'tldraw',
    stars: '34k',
    description: 'A tiny whiteboarding library, and a canvas for your ideas.',
    tags: ['Design', 'Canvas'],
    icon: 'draw',
    color: 'text-tertiary-fixed'
  }
];

const categories = ['All', 'AI Tools', 'Developer Tools', 'macOS', 'Linux', 'Windows', 'Design', 'Productivity'];

export default function ToolsPage() {
  return (
    <main className="flex-grow pt-24 pb-32 max-w-container-max mx-auto px-gutter w-full">
      <header className="mb-12">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-stack-md">
          All Open Source Tools
        </h1>
        <p className="font-body-base text-body-base text-on-surface-variant max-w-2xl">
          Explore the complete index of curated excellence. Filter by category or search for specific tools.
        </p>
      </header>

      {/* Filter & Search Bar */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
        <div className="w-full lg:max-w-md">
          <SearchBar placeholder="Search tools..." />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat, i) => (
            <CategoryChip key={cat} label={cat} isActive={i === 0} />
          ))}
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allTools.map((tool) => (
          <ToolCard key={tool.id} {...tool} />
        ))}
      </div>

      {/* Pagination Placeholder */}
      <div className="mt-20 flex justify-center">
        <div className="flex gap-2">
          {[1, 2, 3].map((page) => (
            <button 
              key={page} 
              className={`w-10 h-10 rounded-full flex items-center justify-center font-label-sm border ${page === 1 ? 'bg-primary-container text-on-primary-container border-primary' : 'border-outline-variant/30 text-on-surface-variant hover:border-primary'}`}
            >
              {page}
            </button>
          ))}
          <button className="w-10 h-10 rounded-full flex items-center justify-center font-label-sm border border-outline-variant/30 text-on-surface-variant hover:border-primary">
            <span className="material-symbols-outlined text-sm">chevron_right</span>
          </button>
        </div>
      </div>
    </main>
  );
}
