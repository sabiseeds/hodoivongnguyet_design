import React, { useState } from 'react';
import { STAGE_VIEWS } from '../data/eventData';
import { ChevronLeft, ChevronRight, Layers } from 'lucide-react';

interface StageShowcaseProps {
  lang: 'vi' | 'en';
  onSelectZoneForRSVP?: (zone: string) => void;
}

export const StageShowcase: React.FC<StageShowcaseProps> = ({ lang }) => {
  const [selectedViewIndex, setSelectedViewIndex] = useState<number>(0);
  const currentView = STAGE_VIEWS[selectedViewIndex];

  const handlePrev = () => {
    setSelectedViewIndex((prev) => (prev - 1 + STAGE_VIEWS.length) % STAGE_VIEWS.length);
  };

  const handleNext = () => {
    setSelectedViewIndex((prev) => (prev + 1) % STAGE_VIEWS.length);
  };

  return (
    <section id="san-khau" className="py-20 bg-[#0e1017] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title matching mockup style */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30">
            <Layers className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-xs uppercase tracking-widest text-[#f7dfa5] font-display font-semibold">
              {lang === 'vi' ? 'Không Gian Kiến Trúc' : 'Architecture & Scenography'}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-wider uppercase">
            {lang === 'vi' ? 'Sân Khấu' : 'Stage Scenography'}
          </h2>
        </div>

        {/* Master Stage Perspective Viewer - Pure Visual, No Text Overlays */}
        <div className="relative rounded-3xl bg-[#141622] border border-[#d4af37]/30 overflow-hidden shadow-2xl mb-6 group">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-black flex items-center justify-center">
            <img
              src={currentView.image}
              alt={currentView.titleVi}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-95 contrast-105 transition-all duration-700"
            />

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-[#d4af37] border border-white/20 hover:border-[#d4af37] transition-all cursor-pointer opacity-80 hover:opacity-100 z-10"
              aria-label="Previous Perspective"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-[#d4af37] border border-white/20 hover:border-[#d4af37] transition-all cursor-pointer opacity-80 hover:opacity-100 z-10"
              aria-label="Next Perspective"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Subtle Counter Badge */}
            <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono text-white/70">
              {selectedViewIndex + 1} / {STAGE_VIEWS.length}
            </div>
          </div>
        </div>

        {/* 4 Perspective Switcher Thumbnails - Pure Image Cards, No Text Labels */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STAGE_VIEWS.map((view, idx) => {
            const isSelected = idx === selectedViewIndex;
            return (
              <button
                key={view.id}
                onClick={() => setSelectedViewIndex(idx)}
                className={`group relative rounded-2xl overflow-hidden border transition-all p-1 cursor-pointer ${
                  isSelected
                    ? 'border-[#d4af37] bg-[#d4af37]/15 ring-2 ring-[#d4af37]/50 shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                    : 'border-white/10 bg-[#12141c] hover:border-white/30'
                }`}
              >
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
                  <img
                    src={view.image}
                    alt={view.titleVi}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 transition-colors ${
                      isSelected ? 'bg-transparent' : 'bg-black/30 group-hover:bg-transparent'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
