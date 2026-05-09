import React from 'react';
import Link from 'next/link';
import { ToolCard } from '@/components/ui/ToolCard';
import { SearchBar } from '@/components/ui/SearchBar';
import { CategoryChip } from '@/components/ui/CategoryChip';

const tools = [
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
  }
];

export default function HomePage() {
  return (
    <main className="flex-grow pt-24 pb-32 max-w-container-max mx-auto px-gutter w-full">
      {/* Hero Search Section */}
      <section className="flex flex-col items-center justify-center py-20">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-stack-md text-center">
          Curated Open-Source Excellence
        </h1>
        <p className="font-body-base text-body-base text-on-surface-variant mb-stack-lg text-center max-w-2xl">
          Discover, deploy, and master the best tools built by the community. No noise, just signal.
        </p>
        
        <SearchBar />

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mt-stack-lg">
          {['All Tools', 'Android', 'Windows', 'macOS', 'MCP Servers', 'AI Tools', 'Developer Tools', 'Others'].map((cat, i) => (
            <CategoryChip key={cat} label={cat} isActive={i === 0} />
          ))}
        </div>
      </section>

      {/* Trending Tools Section */}
      <section className="mb-20">
        <div className="flex justify-between items-end mb-stack-md border-b border-outline-variant/20 pb-4">
          <h2 className="font-headline-md text-headline-md text-on-surface">Trending Tools</h2>
          <Link className="font-label-sm text-label-sm text-primary hover:text-primary-fixed transition-colors flex items-center gap-1" href="/tools">
            VIEW ALL <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <ToolCard key={tool.id} {...tool} />
          ))}
        </div>
      </section>

      {/* Newly Added Section with Skeleton State */}
      <section>
        <div className="flex justify-between items-end mb-stack-md border-b border-outline-variant/20 pb-4">
          <h2 className="font-headline-md text-headline-md text-on-surface">Newly Added</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-surface rounded-2xl border border-outline-variant/10 p-6 animate-pulse flex flex-col h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-surface-container-high"></div>
                <div className="flex-1">
                  <div className="h-5 bg-surface-container-high rounded w-24 mb-2"></div>
                  <div className="h-3 bg-surface-container-high rounded w-12"></div>
                </div>
              </div>
              <div className="space-y-2 flex-grow">
                <div className="h-3 bg-surface-container-high rounded w-full"></div>
                <div className="h-3 bg-surface-container-high rounded w-5/6"></div>
              </div>
              <div className="mt-4 flex gap-2">
                <div className="h-5 bg-surface-container-high rounded w-16"></div>
                <div className="h-5 bg-surface-container-high rounded w-16"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
