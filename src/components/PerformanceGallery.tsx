import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS } from '../data/eventData';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface PerformanceGalleryProps {
  lang: 'vi' | 'en';
}

// Each column gets its own vertical offset so the collage reads as staggered, not a grid.
const COLUMN_OFFSETS = ['sm:mt-0', 'sm:mt-12', 'sm:mt-4', 'sm:mt-16', 'sm:mt-6'];
const COLUMN_COUNT = COLUMN_OFFSETS.length;

export const PerformanceGallery: React.FC<PerformanceGalleryProps> = ({ lang }) => {
  const [activePhotoIdx, setActivePhotoIdx] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIdx === null) return;
      if (e.key === 'Escape') setActivePhotoIdx(null);
      if (e.key === 'ArrowRight') {
        setActivePhotoIdx((prev) => (prev !== null ? (prev + 1) % GALLERY_ITEMS.length : 0));
      }
      if (e.key === 'ArrowLeft') {
        setActivePhotoIdx((prev) => (prev !== null ? (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length : 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIdx]);

  return (
    <section id="thu-vien-anh" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#07090d] relative overflow-hidden border-t border-amber-900/20">
      <div id="gallery" className="absolute -top-24" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Staggered photo collage — no captions, non-aligned rhythm */}
        {/* Mobile: simple 2-col grid */}
        <div className="grid grid-cols-2 gap-3 sm:hidden">
          {GALLERY_ITEMS.map((src, index) => (
            <button
              key={src}
              onClick={() => setActivePhotoIdx(index)}
              className="group relative overflow-hidden bg-stone-100 p-1.5 shadow-lg"
              aria-label={lang === 'vi' ? 'Xem ảnh lớn' : 'View photo'}
            >
              <div className="overflow-hidden aspect-[4/5]">
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </button>
          ))}
        </div>

        {/* Desktop/tablet: independent columns, each offset vertically for a staggered skyline */}
        <div className="hidden sm:flex gap-4">
          {Array.from({ length: COLUMN_COUNT }).map((_, colIdx) => (
            <div key={colIdx} className={`flex-1 flex flex-col gap-4 ${COLUMN_OFFSETS[colIdx]}`}>
              {GALLERY_ITEMS.filter((_, i) => i % COLUMN_COUNT === colIdx).map((src) => {
                const index = GALLERY_ITEMS.indexOf(src);
                return (
                  <button
                    key={src}
                    onClick={() => setActivePhotoIdx(index)}
                    className="group relative overflow-hidden bg-stone-100 p-1.5 shadow-lg hover:shadow-amber-500/20 transition-shadow duration-500"
                    aria-label={lang === 'vi' ? 'Xem ảnh lớn' : 'View photo'}
                  >
                    <div className="overflow-hidden h-56 lg:h-64">
                      <img
                        src={src}
                        alt=""
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhotoIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-lg animate-fadeIn"
          onClick={() => setActivePhotoIdx(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setActivePhotoIdx(null)}
            className="absolute top-6 right-6 z-20 p-2.5 text-stone-300 hover:text-white bg-black/60 hover:bg-stone-800 border border-stone-700 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActivePhotoIdx((prev) => (prev !== null ? (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length : 0));
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 text-stone-300 hover:text-amber-300 bg-black/60 hover:bg-stone-800 border border-stone-700 transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActivePhotoIdx((prev) => (prev !== null ? (prev + 1) % GALLERY_ITEMS.length : 0));
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 text-stone-300 hover:text-amber-300 bg-black/60 hover:bg-stone-800 border border-stone-700 transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Photo Card */}
          <div
            className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative border border-amber-500/40 bg-stone-950 overflow-hidden shadow-2xl">
              <img
                src={GALLERY_ITEMS[activePhotoIdx]}
                alt=""
                className="max-h-[80vh] w-auto max-w-full object-contain mx-auto"
              />
              <div className="absolute bottom-3 right-4 text-xs text-stone-300 font-sans bg-black/60 px-2 py-1">
                {activePhotoIdx + 1} / {GALLERY_ITEMS.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
