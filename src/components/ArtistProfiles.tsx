import React, { useState } from 'react';
import { ARTISTS, Artist } from '../data/eventData';
import { Award, Sparkles, ChevronRight, X, Quote, Music, Users, ShieldCheck } from 'lucide-react';

interface ArtistProfilesProps {
  lang: 'vi' | 'en';
  onSelectArtist?: (artist: Artist) => void;
}

export const ArtistProfiles: React.FC<ArtistProfilesProps> = ({ lang, onSelectArtist }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'piano' | 'dance' | 'science'>('all');
  const [selectedModalArtist, setSelectedModalArtist] = useState<Artist | null>(null);

  const categories = [
    {
      id: 'all',
      labelVi: 'Tất cả Nghệ Sĩ (9)',
      labelEn: 'All Artists (9)',
      icon: Users
    },
    {
      id: 'piano',
      labelVi: 'Dương Cầm & Âm Nhạc (2)',
      labelEn: 'Piano & Music (2)',
      icon: Music
    },
    {
      id: 'dance',
      labelVi: 'Biên Đạo & Nghệ Thuật Múa (5)',
      labelEn: 'Choreography & Dance (5)',
      icon: Sparkles
    },
    {
      id: 'science',
      labelVi: 'Khoa Học Não Bộ & Âm Học (2)',
      labelEn: 'Neuroscience & Acoustics (2)',
      icon: ShieldCheck
    }
  ];

  const filteredArtists = activeCategory === 'all'
    ? ARTISTS
    : ARTISTS.filter(a => a.category === activeCategory);

  const handleOpenArtist = (artist: Artist) => {
    setSelectedModalArtist(artist);
    if (onSelectArtist) {
      onSelectArtist(artist);
    }
  };

  return (
    <section id="nghe-si" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0c10] border-t border-amber-900/20 relative">
      <div id="artists" className="absolute -top-24" />
      {/* Background subtle radial lights */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === 'vi' ? 'Hội Tụ Tinh Hoa Quốc Tế' : 'Masters of Global Stature'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-100 font-light tracking-wide mb-4">
            {lang === 'vi' ? 'Bậc Thầy Nghệ Thuật & Khoa Học' : 'Master Artists & Scientists'}
          </h2>
          <p className="text-stone-400 font-serif italic text-base sm:text-lg">
            {lang === 'vi'
              ? '9 nhân vật huyền thoại kết nối âm nhạc cổ điển, múa đương đại quốc tế và khoa học thần kinh chữa lành.'
              : '9 legendary visionaries weaving classical jazz, international contemporary dance, and neuro-acoustic wellness.'}
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 border ${
                  isActive
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/60 shadow-[0_0_15px_rgba(217,119,6,0.2)]'
                    : 'bg-stone-900/60 text-stone-400 border-stone-800 hover:border-amber-900/40 hover:text-stone-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-stone-500'}`} />
                <span>{lang === 'vi' ? cat.labelVi : cat.labelEn}</span>
              </button>
            );
          })}
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredArtists.map((artist) => {
            const role = lang === 'vi' ? artist.roleVi : artist.roleEn;
            const bio = lang === 'vi' ? artist.bioVi : artist.bioEn;
            const highlights = lang === 'vi' ? artist.highlightsVi : artist.highlightsEn;

            return (
              <div
                key={artist.id}
                className="group bg-[#0e1117] border border-stone-800/80 hover:border-amber-500/40 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                <div>
                  {/* Portrait with zoom on hover */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-stone-950">
                    <img
                      src={artist.photo}
                      alt={artist.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale contrast-110 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e1117] via-transparent to-transparent opacity-90" />

                    {/* Name overlay at bottom of photo */}
                    <div className="absolute bottom-3 left-4 right-4">
                      <h3 className="text-xl sm:text-2xl font-serif text-stone-100 font-medium tracking-wide group-hover:text-amber-300 transition-colors">
                        {artist.name}
                      </h3>
                      <p className="text-xs text-amber-400/90 font-sans tracking-wider uppercase mt-1">
                        {role}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-4">
                    <p className="text-xs sm:text-sm text-stone-300/80 line-clamp-3 leading-relaxed font-sans font-light">
                      {bio}
                    </p>

                    {/* Highlights bullet tags */}
                    <div className="space-y-1.5 pt-2 border-t border-stone-800/60">
                      {highlights.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-stone-400 font-sans">
                          <span className="text-amber-500 text-xs mt-0.5">•</span>
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-5 pb-5 pt-2">
                  <button
                    onClick={() => handleOpenArtist(artist)}
                    className="w-full inline-flex items-center justify-between px-3.5 py-2 text-xs font-sans tracking-wider uppercase text-stone-300 bg-stone-900/80 hover:bg-amber-500/20 hover:text-amber-300 border border-stone-800 hover:border-amber-500/40 transition-colors"
                  >
                    <span>{lang === 'vi' ? 'Tiểu sử chi tiết' : 'Full Biography'}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Artist Detail Modal */}
      {selectedModalArtist && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn overflow-x-hidden"
          onClick={() => setSelectedModalArtist(null)}
        >
          <div
            className="bg-[#0e1117] border border-amber-500/40 max-w-3xl w-full min-w-0 max-h-[90vh] overflow-y-auto overflow-x-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedModalArtist(null)}
              className="absolute top-4 right-4 z-20 p-2 text-stone-400 hover:text-stone-100 bg-black/60 hover:bg-stone-800 border border-stone-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-5 min-w-0">
              {/* Left Column: Portrait & Quick Stats */}
              <div className="md:col-span-2 relative bg-stone-950 min-h-[280px] min-w-0">
                <img
                  src={selectedModalArtist.photo}
                  alt={selectedModalArtist.name}
                  className="w-full h-full object-cover object-top filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1117] via-transparent to-transparent md:hidden" />
              </div>

              {/* Right Column: In-depth Content */}
              <div className="md:col-span-3 p-6 sm:p-8 space-y-5 min-w-0">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs text-amber-300 bg-amber-950/40 border border-amber-500/30 uppercase tracking-widest mb-2 font-sans">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>{lang === 'vi' ? selectedModalArtist.roleVi : selectedModalArtist.roleEn}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-stone-100 font-light">
                    {selectedModalArtist.name}
                  </h3>
                  {(selectedModalArtist.honorVi || selectedModalArtist.honorEn) && (
                    <p className="text-xs sm:text-sm text-amber-400 font-serif italic mt-1">
                      {lang === 'vi' ? selectedModalArtist.honorVi : selectedModalArtist.honorEn}
                    </p>
                  )}
                </div>

                {/* Quote if present */}
                {(selectedModalArtist.quoteVi || selectedModalArtist.quoteEn) && (
                  <div className="p-4 bg-amber-950/20 border-l-2 border-amber-500 space-y-1">
                    <Quote className="w-4 h-4 text-amber-400/80 mb-1" />
                    <p className="text-xs sm:text-sm font-serif italic text-stone-200 leading-relaxed">
                      {lang === 'vi' ? selectedModalArtist.quoteVi : selectedModalArtist.quoteEn}
                    </p>
                  </div>
                )}

                {/* Full Biography */}
                <div className="space-y-3 font-sans text-xs sm:text-sm text-stone-300 leading-relaxed whitespace-pre-line break-words font-light">
                  {lang === 'vi' ? selectedModalArtist.bioVi : selectedModalArtist.bioEn}
                </div>

                {/* Career Highlights */}
                <div className="pt-4 border-t border-stone-800">
                  <h4 className="text-xs font-sans tracking-widest uppercase text-amber-400 mb-3 font-semibold">
                    {lang === 'vi' ? 'Dấu Ấn & Cột Mốc Tiêu Biểu' : 'Key Highlights & Milestones'}
                  </h4>
                  <ul className="space-y-2">
                    {(lang === 'vi'
                      ? selectedModalArtist.highlightsVi
                      : selectedModalArtist.highlightsEn
                    ).map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs text-stone-300 min-w-0">
                        <Award className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span className="break-words">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
