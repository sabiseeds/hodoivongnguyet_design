import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProgramChapters } from './components/ProgramChapters';
import { StageShowcase } from './components/StageShowcase';
import { ArtistProfiles } from './components/ArtistProfiles';
import { PerformanceGallery } from './components/PerformanceGallery';
import { Footer } from './components/Footer';

export default function App() {
  const [lang] = useState<'vi' | 'en'>('vi');

  const handleSelectArtist = () => {
    const el = document.getElementById('nghe-si') || document.getElementById('artists');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07090d] text-stone-200 font-sans selection:bg-amber-500 selection:text-stone-950">
      {/* Primary Navigation Bar */}
      <Navbar lang={lang} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero lang={lang} />

        {/* Program Chapters: 3 Chapters from Poster.txt */}
        <ProgramChapters
          lang={lang}
          onSelectArtist={handleSelectArtist}
        />

        {/* Architectural Stage Showcase: 4 Perspectives */}
        <StageShowcase
          lang={lang}
        />

        {/* 9 Artists & Masters: Category Filters & Bio Modals */}
        <ArtistProfiles
          lang={lang}
        />

        {/* Visual & Stage Performance Gallery: Masonry + Lightbox */}
        <PerformanceGallery
          lang={lang}
        />
      </main>

      {/* Institutional Footer */}
      <Footer lang={lang} />
    </div>
  );
}
