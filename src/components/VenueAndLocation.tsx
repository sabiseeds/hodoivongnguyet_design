import React, { useState } from 'react';
import { EVENT_DETAILS } from '../data/eventData';
import { MapPin, Clock, Sparkles, Navigation, ExternalLink } from 'lucide-react';

interface VenueAndLocationProps {
  lang: 'vi' | 'en';
}

export const VenueAndLocation: React.FC<VenueAndLocationProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'venue'>('timeline');

  const timelineItems = [
    {
      time: '18:30',
      titleVi: 'Chương 1: Kịch múa The Five - Mùa thịnh vượng',
      titleEn: 'Chapter 1: Dance Drama The Five - Full Prosperity',
      descVi: 'Đạo diễn & biên đạo múa: Nguyễn Ngọc Anh. Âm nhạc: Trí Minh.',
      descEn: 'Director & choreographer: Nguyen Ngoc Anh. Music: Tri Minh.',
      highlight: true
    },
    {
      time: '',
      titleVi: 'Chương 2: The Radius of Now - Thực tại Vô biên',
      titleEn: 'Chapter 2: The Radius of Now - Boundless Present',
      descVi: 'Biểu diễn: Sir Niels Lan Doky.',
      descEn: 'Performance: Sir Niels Lan Doky.',
      highlight: true
    },
    {
      time: '',
      titleVi: 'Chương 3: Piano Sanstuary - Nơi an trú của tiếng Dương cầm',
      titleEn: 'Chapter 3: Piano Sanctuary - The Refuge of the Piano',
      descVi: 'Biểu diễn: Niels Lan Doky. Cùng giao lưu với: Peter Michael Nielsen và Frank Goldberg.',
      descEn: 'Performance: Niels Lan Doky. In dialogue with: Peter Michael Nielsen and Frank Goldberg.',
      highlight: true
    }
  ];

  const venueFeatures = [
    {
      titleVi: 'IKI Gallery',
      titleEn: 'IKI Gallery',
      descVi: 'Tọa lạc tại 675 Đỗ Xuân Hợp, P. Phước Long, TP. Hồ Chí Minh.',
      descEn: 'Located at 675 Do Xuan Hop, P. Phuoc Long, Ho Chi Minh City.'
    },
    {
      titleVi: 'Sân Khấu Living Heritage',
      titleEn: 'Living Heritage Stage',
      descVi: 'Một sân khấu tròn giữa lòng thành phố, nơi ánh sáng vàng kim uốn lượn như vệt trăng tan trên mặt hồ.',
      descEn: 'A circular stage in the heart of the city, where golden light curves like a trail of moonlight dissolving on the water.'
    }
  ];

  return (
    <section id="dia-diem" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#090b0f] border-t border-amber-900/20 relative">
      <div id="venue" className="absolute -top-24" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs tracking-widest uppercase mb-4">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === 'vi' ? 'Địa Điểm & Lịch Trình' : 'Venue & Program Flow'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-100 font-light tracking-wide mb-4">
            {lang === 'vi' ? 'Không Gian IKI Gallery & Dòng Thời Gian' : 'IKI Gallery & Event Schedule'}
          </h2>
          <p className="text-stone-400 font-serif italic text-base sm:text-lg">
            {EVENT_DETAILS.address}
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-stone-900 border border-stone-800">
            <button
              onClick={() => setActiveTab('timeline')}
              className={`px-5 py-2.5 text-xs sm:text-sm uppercase tracking-wider font-sans transition-all ${
                activeTab === 'timeline'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              {lang === 'vi' ? 'Lịch Trình Chi Tiết' : 'Timeline Flow'}
            </button>
            <button
              onClick={() => setActiveTab('venue')}
              className={`px-5 py-2.5 text-xs sm:text-sm uppercase tracking-wider font-sans transition-all ${
                activeTab === 'venue'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              {lang === 'vi' ? 'Không Gian & Kiến Trúc' : 'Venue & Architecture'}
            </button>
          </div>
        </div>

        {/* Tab 1: Timeline */}
        {activeTab === 'timeline' && (
          <div className="max-w-4xl mx-auto space-y-4">
            {timelineItems.map((item, idx) => (
              <div
                key={idx}
                className={`p-5 sm:p-6 border transition-all duration-300 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 ${
                  item.highlight
                    ? 'bg-amber-950/20 border-amber-500/40 shadow-[0_0_20px_rgba(217,119,6,0.1)]'
                    : 'bg-[#0e1117] border-stone-800/80 hover:border-stone-700'
                }`}
              >
                {/* Time Badge */}
                <div className="shrink-0 flex items-center gap-2 sm:w-44 text-amber-400 font-sans font-medium text-xs sm:text-sm tracking-wider">
                  <Clock className="w-4 h-4 shrink-0 text-amber-400" />
                  <span>{item.time}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className={`text-base sm:text-lg font-serif font-medium ${item.highlight ? 'text-amber-200' : 'text-stone-100'}`}>
                    {lang === 'vi' ? item.titleVi : item.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-400 font-sans mt-1 leading-relaxed">
                    {lang === 'vi' ? item.descVi : item.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Venue Features */}
        {activeTab === 'venue' && (
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {venueFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#0e1117] border border-stone-800 hover:border-amber-500/40 transition-colors space-y-3"
              >
                <div className="inline-flex p-2.5 bg-amber-950/30 text-amber-400 border border-amber-500/30">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif text-stone-100 font-medium">
                  {lang === 'vi' ? feat.titleVi : feat.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-stone-400 leading-relaxed font-sans font-light">
                  {lang === 'vi' ? feat.descVi : feat.descEn}
                </p>
              </div>
            ))}

            {/* Direct Directions Card */}
            <div className="md:col-span-2 p-6 bg-gradient-to-r from-amber-950/30 to-stone-900 border border-amber-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-stone-100 font-serif font-medium text-base sm:text-lg">
                  {lang === 'vi' ? 'Chỉ đường tới IKI Gallery' : 'Directions to IKI Gallery'}
                </h4>
                <p className="text-xs text-stone-400 font-sans">
                  {EVENT_DETAILS.address}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://maps.google.com/?q=675+Do+Xuan+Hop+Phuoc+Long+Ho+Chi+Minh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-amber-500 text-stone-950 font-sans font-medium text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{lang === 'vi' ? 'Mở Google Maps' : 'Open in Maps'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
