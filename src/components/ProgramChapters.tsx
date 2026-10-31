import React, { useState } from 'react';
import { CHAPTERS } from '../data/eventData';

interface ProgramChaptersProps {
  lang: 'vi' | 'en';
  onSelectArtist?: (artistId: string) => void;
}

export const ProgramChapters: React.FC<ProgramChaptersProps> = ({ lang }) => {
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);
  const currentChapter = CHAPTERS[activeChapterIndex];

  return (
    <section id="chuong-trinh" className="py-20 bg-[#0b0c10] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header matching mockup */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-widest uppercase">
            {lang === 'vi' ? 'Chương Trình' : 'Concert Program'}
          </h2>
        </div>

        {/* Chapter Navigation Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
          {CHAPTERS.map((chap, idx) => {
            const isActive = idx === activeChapterIndex;
            return (
              <button
                key={chap.number}
                onClick={() => setActiveChapterIndex(idx)}
                className={`p-5 rounded-2xl text-left transition-all relative border cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-br from-[#181a24] to-[#12141c] border-[#d4af37] shadow-[0_0_25px_rgba(212,175,55,0.2)]'
                    : 'bg-[#12141c]/60 border-white/5 hover:border-white/20 hover:bg-[#151722]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-xs uppercase tracking-widest font-bold ${
                      isActive ? 'text-[#d4af37]' : 'text-white/40'
                    }`}
                  >
                    {lang === 'vi' ? `CHƯƠNG ${chap.number}:` : `CHAPTER ${chap.number}:`}
                  </span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
                  )}
                </div>

                <h3
                  className={`font-serif text-base sm:text-lg font-semibold line-clamp-2 ${
                    isActive ? 'text-white' : 'text-white/70'
                  }`}
                >
                  {lang === 'vi' ? chap.titleVi : chap.titleEn}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active Chapter Showcase Box */}
        <div className="rounded-3xl bg-gradient-to-br from-[#141622] to-[#0e1017] border border-[#d4af37]/30 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Media Column - Pure Photo, No Text Box Overlaid */}
            <div className="lg:col-span-5 relative min-h-[340px] lg:min-h-full bg-black">
              <img
                src={currentChapter.image}
                alt={currentChapter.titleVi}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter contrast-110 brightness-90 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#141622]" />
            </div>

            {/* Editorial Content Column - Strictly Faithful to Mockup Copy */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                {/* Chapter Label */}
                <div className="mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#f7dfa5] font-mono text-xs font-bold tracking-wider">
                    {lang === 'vi' ? `CHƯƠNG ${currentChapter.number}` : `CHAPTER ${currentChapter.number}`}
                  </span>
                </div>

                {/* Chapter Title */}
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight">
                  {lang === 'vi' ? currentChapter.titleVi : currentChapter.titleEn}
                </h3>

                {/* Credits Grid - Exact Mockup Text */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 mb-6 space-y-2.5">
                  {(lang === 'vi' ? currentChapter.creditsVi : currentChapter.creditsEn).map(
                    (credit, cIdx) => (
                      <div
                        key={cIdx}
                        className="flex flex-col sm:flex-row text-xs gap-1 sm:gap-2 border-b border-white/5 pb-2.5 last:border-none last:pb-0"
                      >
                        <span className="text-[#d4af37] font-medium shrink-0">
                          {credit.role}:
                        </span>
                        <span className="text-white/90 leading-relaxed font-light">
                          {credit.name}
                        </span>
                      </div>
                    )
                  )}
                </div>

                {/* Prose Paragraphs - Exact Mockup Text */}
                <div className="space-y-4 text-white/85 text-xs sm:text-sm leading-relaxed font-light">
                  {(lang === 'vi'
                    ? currentChapter.descriptionVi
                    : currentChapter.descriptionEn
                  ).map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
