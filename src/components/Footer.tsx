import React from 'react';
import { EVENT_DETAILS } from '../data/eventData';
import { Phone, Globe, MapPin, Calendar, ArrowUp, ShieldCheck, Heart, Sparkles } from 'lucide-react';

interface FooterProps {
  lang: 'vi' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070a] border-t border-amber-900/30 text-stone-300 relative overflow-hidden">
      {/* Decorative top gold gradient line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 mb-16">
          {/* Column 1: Brand & Series */}
          <div className="space-y-4">
            <span className="text-[11px] font-sans font-semibold tracking-widest uppercase text-amber-400">
              LIVING HERITAGE CONCERT SERIES
            </span>
            <h3 className="text-2xl font-serif text-stone-100 font-light tracking-wider">
              {EVENT_DETAILS.title}
            </h3>
            <p className="text-xs text-stone-400 font-serif italic leading-relaxed">
              {lang === 'vi'
                ? 'Đêm hòa nhạc thính phòng và kịch múa đương đại đỉnh cao kết nối di sản tinh thần Đông - Tây.'
                : 'A transcendent evening of chamber jazz and contemporary dance uniting Eastern and Western living heritage.'}
            </p>
          </div>

          {/* Column 2: Event Details & Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-sans tracking-widest uppercase text-stone-100 font-semibold border-b border-stone-800 pb-2">
              {lang === 'vi' ? 'Thời Gian & Địa Điểm' : 'Date & Venue'}
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400 font-sans">
              <li className="flex items-start gap-2.5">
                <Calendar className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{EVENT_DETAILS.dateFormattedVi}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-stone-200 block">{EVENT_DETAILS.venue}</strong>
                  {EVENT_DETAILS.address}
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Navigation & Audio Notice */}
          <div className="space-y-3">
            <h4 className="text-xs font-sans tracking-widest uppercase text-stone-100 font-semibold border-b border-stone-800 pb-2">
              {lang === 'vi' ? 'Chương Trình & Tác Phẩm' : 'Program Navigation'}
            </h4>
            <ul className="space-y-2 text-xs font-sans text-stone-400">
              <li>
                <a href="#chuong-trinh" className="hover:text-amber-300 transition-colors">
                  Chương 1: Kịch múa The Five – Mùa thịnh vượng
                </a>
              </li>
              <li>
                <a href="#chuong-trinh" className="hover:text-amber-300 transition-colors">
                  Chương 2: The Radius of Now - Thực tại Vô biên
                </a>
              </li>
              <li>
                <a href="#chuong-trinh" className="hover:text-amber-300 transition-colors">
                  Chương 3: Piano Sanstuary - Nơi an trú của tiếng Dương Cầm
                </a>
              </li>
              <li>
                <a href="#san-khau" className="hover:text-amber-300 transition-colors">
                  {lang === 'vi' ? 'Sân Khấu' : 'Stage'}
                </a>
              </li>
              <li>
                <a href="#nghe-si" className="hover:text-amber-300 transition-colors">
                  {lang === 'vi' ? 'Nghệ Sĩ' : 'Artists'}
                </a>
              </li>
              <li>
                <a href="#thu-vien-anh" className="hover:text-amber-300 transition-colors">
                  {lang === 'vi' ? 'Hình Ảnh' : 'Gallery'}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Sponsor Logos & QR Codes */}
        <div
          className="pt-10 pb-2 border-t border-amber-900/20 grid justify-center items-center gap-x-12 sm:gap-x-20 gap-y-6"
          style={{ gridTemplateColumns: `repeat(${EVENT_DETAILS.organizers.length}, auto)` }}
        >
          {/* Logos row — each centered within its own column */}
          {EVENT_DETAILS.organizers.map((org) => (
            <img
              key={`logo-${org.website}`}
              src={org.logo}
              alt={org.nameVi}
              className={`w-auto object-contain justify-self-center ${org.name === 'An Khai Hung Investment' ? 'h-20' : 'h-10'}`}
            />
          ))}

          {/* QR codes row — centered within the same column */}
          {EVENT_DETAILS.organizers.map((org) => (
            <img
              key={`qr-${org.website}`}
              src={org.qrCode}
              alt={`QR code - ${org.website}`}
              className="w-24 h-24 object-contain justify-self-center"
            />
          ))}

          {/* Website & hotline row — centered within the same column */}
          {EVENT_DETAILS.organizers.map((org) => (
            <div key={`text-${org.website}`} className="text-xs font-sans text-center justify-self-center">
              <a
                href={`https://${org.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-300 hover:text-amber-200 transition-colors"
              >
                {org.website}
              </a>
              <p className="text-stone-400 mt-0.5">
                {lang === 'vi' ? 'Hotline' : 'Hotline'}: {org.hotline}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom bar with Copyright & Back to Top */}
        <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-stone-500">
          <p>
            © 2026 Hồ Đôi Vọng Nguyệt · Living Heritage.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-amber-300 border border-stone-800 transition-colors text-xs"
          >
            <span>{lang === 'vi' ? 'Lên Đầu Trang' : 'Back to Top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
