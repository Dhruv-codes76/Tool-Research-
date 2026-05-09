'use client';

import React from 'react';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search the best open-source tools...", onSearch }) => {
  return (
    <div className="w-full max-w-3xl relative">
      <div className="glass-panel rounded-full flex items-center px-6 py-4 focus-within:ring-2 focus-within:ring-primary/50 focus-within:border-primary/50 transition-all duration-300">
        <span className="material-symbols-outlined text-on-surface-variant mr-4">search</span>
        <input 
          className="w-full bg-transparent border-none text-on-surface font-body-base focus:ring-0 placeholder-on-surface-variant/50 outline-none" 
          placeholder={placeholder} 
          type="text"
          onChange={(e) => onSearch?.(e.target.value)}
        />
        <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-label-sm hover:bg-primary-container/80 transition-colors ml-4">
          SEARCH
        </button>
      </div>
    </div>
  );
};
