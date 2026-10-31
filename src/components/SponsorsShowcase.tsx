import React from 'react';
import { Phone, Globe, ExternalLink } from 'lucide-react';

interface SponsorsShowcaseProps {
  lang: 'vi' | 'en';
}

export const SponsorsShowcase: React.FC<SponsorsShowcaseProps> = ({ lang }) => {
  return (
    <section id="sponsors" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0c10] via-[#05070a] to-[#040507] border-t border-amber-500/30 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-950/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-950/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-stone-100 font-light tracking-wide mb-3">
            {lang === 'vi' ? 'Đơn Vị Tổ Chức & Đồng Hành' : 'Organizers & Partners'}
          </h2>
        </div>

        {/* Sponsor Cards Grid - Matching Mockup Bottom Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-4xl mx-auto">
          {/* Sponsor 1: An Khai Hung Investment */}
          <div className="bg-[#0e1117] border border-amber-500/40 p-8 flex flex-col items-center justify-between text-center relative group hover:border-amber-400 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            {/* Top gold accent tag */}
            <div className="mb-6">
              <span className="text-[11px] font-sans font-medium uppercase tracking-widest text-amber-400/90 block">
                {lang === 'vi' ? 'Đơn vị tổ chức & Đầu tư' : 'Organizing & Investment Partner'}
              </span>
            </div>

            {/* Official Logo: An Khai Hung */}
            <div className="my-auto py-4 flex flex-col items-center">
              <div className="relative p-2 rounded-2xl bg-black/40 border border-emerald-900/40 group-hover:border-amber-500/40 transition-colors">
                <img
                  src="/assets/aistudio/AKH_Logo_6574c649.png"
                  alt="An Khai Hung Investment Logo"
                  className="h-28 sm:h-32 w-auto object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
                />
              </div>
              <h3 className="text-xl font-serif text-stone-100 font-medium tracking-wider mt-4">
                AN KHAI HUNG INVESTMENT
              </h3>
              <p className="text-xs text-stone-400 font-sans mt-1">
                {lang === 'vi' ? 'Kiến tạo giá trị di sản & phát triển bền vững' : 'Creating heritage value & sustainable growth'}
              </p>
            </div>

            {/* QR Code and Contact info matching poster */}
            <div className="w-full pt-6 mt-6 border-t border-stone-800 flex flex-col items-center gap-3">
              {/* QR Code Graphic matching poster */}
              <div className="flex items-center gap-3 bg-stone-900/80 px-4 py-2 border border-stone-800">
                <div className="w-12 h-12 bg-white p-1 rounded-sm shrink-0 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <rect width="100" height="100" fill="#fff" />
                    <rect x="5" y="5" width="30" height="30" fill="#0b3d2c" />
                    <rect x="10" y="10" width="20" height="20" fill="#fff" />
                    <rect x="15" y="15" width="10" height="10" fill="#0b3d2c" />
                    <rect x="65" y="5" width="30" height="30" fill="#0b3d2c" />
                    <rect x="70" y="10" width="20" height="20" fill="#fff" />
                    <rect x="75" y="15" width="10" height="10" fill="#0b3d2c" />
                    <rect x="5" y="65" width="30" height="30" fill="#0b3d2c" />
                    <rect x="10" y="70" width="20" height="20" fill="#fff" />
                    <rect x="15" y="75" width="10" height="10" fill="#0b3d2c" />
                    <rect x="45" y="15" width="10" height="10" fill="#0b3d2c" />
                    <rect x="45" y="45" width="10" height="10" fill="#0b3d2c" />
                    <rect x="75" y="45" width="10" height="10" fill="#0b3d2c" />
                    <rect x="45" y="75" width="10" height="10" fill="#0b3d2c" />
                    <rect x="65" y="65" width="10" height="10" fill="#0b3d2c" />
                    <rect x="85" y="85" width="10" height="10" fill="#0b3d2c" />
                  </svg>
                </div>
                <div className="text-left text-[11px] text-stone-300 font-sans">
                  <span className="block text-amber-400 font-medium">www.ikivillage.vn</span>
                  <span className="text-stone-400 text-[10px]">Quét mã truy cập</span>
                </div>
              </div>

              {/* Direct links */}
              <div className="flex flex-col gap-1 text-xs font-sans">
                <a
                  href="https://www.ikivillage.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 hover:text-amber-300 transition-colors inline-flex items-center justify-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5 text-amber-400" />
                  <span>www.ikivillage.vn</span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>
                <a
                  href="tel:0773369369"
                  className="text-amber-300 font-semibold hover:underline inline-flex items-center justify-center gap-1.5 text-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Hotline: 0773 369 369</span>
                </a>
              </div>
            </div>
          </div>

          {/* Sponsor 2: GG Corporation */}
          <div className="bg-[#0e1117] border border-amber-500/40 p-8 flex flex-col items-center justify-between text-center relative group hover:border-amber-400 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            {/* Top gold accent tag */}
            <div className="mb-6">
              <span className="text-[11px] font-sans font-medium uppercase tracking-widest text-amber-400/90 block">
                {lang === 'vi' ? 'Đơn vị đồng hành · Premium Wellbeing' : 'Premier Wellbeing Partner'}
              </span>
            </div>

            {/* Official Logo: GG Corporation */}
            <div className="my-auto py-4 flex flex-col items-center">
              <div className="relative p-3 rounded-2xl bg-black/40 border border-stone-800 group-hover:border-amber-500/40 transition-colors">
                <img
                  src="/assets/aistudio/logogg_bd8491d8.webp"
                  alt="GG Corporation Premium Wellbeing Logo"
                  className="h-20 sm:h-24 w-auto object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
                />
              </div>
              <h3 className="text-xl font-serif text-stone-100 font-medium tracking-wider mt-5">
                GG CORPORATION
              </h3>
              <p className="text-xs text-amber-400/90 font-sans tracking-wide mt-1">
                PREMIUM WELLBEING
              </p>
            </div>

            {/* QR Code and Contact info matching poster */}
            <div className="w-full pt-6 mt-6 border-t border-stone-800 flex flex-col items-center gap-3">
              {/* QR Code Graphic matching poster */}
              <div className="flex items-center gap-3 bg-stone-900/80 px-4 py-2 border border-stone-800">
                <div className="w-12 h-12 bg-white p-1 rounded-sm shrink-0 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <rect width="100" height="100" fill="#fff" />
                    <rect x="5" y="5" width="30" height="30" fill="#a47854" />
                    <rect x="10" y="10" width="20" height="20" fill="#fff" />
                    <rect x="15" y="15" width="10" height="10" fill="#a47854" />
                    <rect x="65" y="5" width="30" height="30" fill="#a47854" />
                    <rect x="70" y="10" width="20" height="20" fill="#fff" />
                    <rect x="75" y="15" width="10" height="10" fill="#a47854" />
                    <rect x="5" y="65" width="30" height="30" fill="#a47854" />
                    <rect x="10" y="70" width="20" height="20" fill="#fff" />
                    <rect x="15" y="75" width="10" height="10" fill="#a47854" />
                    <rect x="45" y="25" width="10" height="10" fill="#a47854" />
                    <rect x="35" y="45" width="10" height="10" fill="#a47854" />
                    <rect x="55" y="45" width="10" height="10" fill="#a47854" />
                    <rect x="45" y="65" width="10" height="10" fill="#a47854" />
                    <rect x="75" y="65" width="10" height="10" fill="#a47854" />
                    <rect x="85" y="75" width="10" height="10" fill="#a47854" />
                  </svg>
                </div>
                <div className="text-left text-[11px] text-stone-300 font-sans">
                  <span className="block text-amber-400 font-medium">www.ggcvietnam.vn</span>
                  <span className="text-stone-400 text-[10px]">Quét mã truy cập</span>
                </div>
              </div>

              {/* Direct links */}
              <div className="flex flex-col gap-1 text-xs font-sans">
                <a
                  href="https://www.ggcvietnam.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 hover:text-amber-300 transition-colors inline-flex items-center justify-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5 text-amber-400" />
                  <span>www.ggcvietnam.vn</span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>
                <a
                  href="tel:0968268879"
                  className="text-amber-300 font-semibold hover:underline inline-flex items-center justify-center gap-1.5 text-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Hotline: 0968 268 879</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
