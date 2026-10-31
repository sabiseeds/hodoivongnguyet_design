import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, ArrowDown } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

interface HeroProps {
  lang: 'vi' | 'en';
}

export const Hero: React.FC<HeroProps> = ({
  lang
}) => {
  // Countdown to Nov 21, 2026, 18:30
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-11-21T18:30:00+07:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Architectural Canvas */}
      <div className="absolute inset-0 z-0">
        <img
          src="/public/assets/aistudio/01_393d3ab4.jpg"
          alt="Sân khấu Living Heritage Hồ Đợi Vọng Nguyệt"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.4] scale-105 transform duration-1000 ease-out"
        />
        {/* Subtle radial and linear scrims for guaranteed WCAG AA contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-[#0b0c10]/70 to-[#0b0c10]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#d4af37]/10 via-transparent to-[#0b0c10]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Editorial Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left pt-6 lg:pt-0">
            {/* Living Heritage Badge */}
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white/5 border border-[#d4af37]/30 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              <span className="font-display tracking-[0.25em] text-[11px] font-semibold uppercase text-gold-gradient">
                LIVING HERITAGE CONCERT SERIES
              </span>
            </div>

            {/* Master Title */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-4 text-balance">
              Hồ Đôi <br />
              <span className="text-gold-gradient font-serif italic font-normal text-[54px] sm:text-[90px] lg:text-[108px] leading-[1.3] inline-block mt-1 pb-2">
                Vọng Nguyệt
              </span>
            </h1>

            {/* Swing Journal Accolade Banner */}
            <div className="mb-6 p-4 rounded-xl bg-black/40 border border-[#d4af37]/25 backdrop-blur-md max-w-xl">
              <p className="font-serif italic text-base sm:text-lg text-[#f7dfa5] mb-1">
                “Nghệ sĩ Piano tài năng nhất của thế hệ”
              </p>
              <div className="flex items-center justify-between text-xs text-white/70">
                <span className="uppercase tracking-widest text-[#d4af37] font-semibold">
                  (Swing Journal · Nhật Bản)
                </span>
                <span className="font-display tracking-wider text-white font-medium">
                  SIR. NIELS LAN DOKY
                </span>
              </div>
            </div>

            {/* Sub-headline description */}
            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 max-w-xl font-light">
              {lang === 'vi'
                ? 'Đêm giao hòa tráng lệ giữa tài hoa Dương cầm của Hiệp sĩ Đan Mạch Niels Lan Doky, 5 bậc thầy kịch múa đương đại quốc tế trong tác phẩm “The Five - Mùa thịnh vượng”, và khám phá khoa học não bộ cùng Piano Sanctuary tại IKI Gallery.'
                : 'A magnificent synergy uniting Danish Knight & Jazz virtuoso Sir Niels Lan Doky, five international dance masters in “The Five - Full Prosperity”, and neuro-acoustic wellness exploration at IKI Gallery.'}
            </p>

            {/* Date & Location Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl mb-8">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">
                <Clock className="w-5 h-5 text-[#d4af37] shrink-0" />
                <div>
                  <span className="text-[11px] text-white/50 uppercase tracking-wider block">
                    {lang === 'vi' ? 'Thời gian' : 'Date & Time'}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    18:30 · 21/11/2026
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">
                <MapPin className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] text-white/50 uppercase tracking-wider block">
                    {lang === 'vi' ? 'Địa điểm' : 'Venue'}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white block">
                    IKI Gallery
                  </span>
                  <span className="text-[11px] sm:text-xs text-white/70 block mt-0.5 leading-snug">
                    675 Đỗ Xuân Hợp, P. Phước Long, TP. Hồ Chí Minh
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Featured Hero Visual Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md mx-auto">
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-b from-[#d4af37]/40 via-[#d4af37]/10 to-transparent blur-xl opacity-70" />

              <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/40 bg-[#12141c]/90 shadow-2xl">
                {/* Hero Artist Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#181a24]">
                  <img
                    src="/public/assets/aistudio/Niels-Lan-Doky-06-09-24-SM-68_ebd2b49a.png"
                    alt="Sir Niels Lan Doky"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top filter grayscale contrast-115 hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-[#0e1017]/30 to-transparent" />

                  {/* Floating Knight Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 border border-[#d4af37]/40 backdrop-blur-md">
                    <span className="text-[10px] font-semibold text-[#f7dfa5] uppercase tracking-widest font-display">
                      Danish Knight · 2010
                    </span>
                  </div>

                  {/* Bottom caption on image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[11px] uppercase tracking-widest text-[#d4af37] font-semibold block">
                      {lang === 'vi' ? 'Nghệ Sĩ Dương Cầm' : 'Concert Pianist'}
                    </span>
                    <h2 className="font-serif text-2xl font-bold text-white">
                      Sir Niels Lan Doky
                    </h2>
                    <p className="text-xs text-white/70 line-clamp-2 mt-1">
                      {lang === 'vi'
                        ? 'Hơn 47 album, vinh danh tại Royal Albert Hall & Carnegie Hall'
                        : 'Over 47 albums, featured at Royal Albert Hall & Carnegie Hall'}
                    </p>
                  </div>
                </div>

                {/* Countdown Timer Strip */}
                <div className="p-4 bg-black/70 border-t border-[#d4af37]/20">
                  <div className="text-[11px] uppercase tracking-widest text-center text-white/60 mb-2 font-medium flex items-center justify-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{lang === 'vi' ? 'Đếm ngược đến đêm hòa nhạc' : 'Countdown to Concert'}</span>
                  </div>

                  <div className="grid grid-cols-4 gap-2 text-center">
                    {[
                      { val: timeLeft.days, labelVi: 'Ngày', labelEn: 'Days' },
                      { val: timeLeft.hours, labelVi: 'Giờ', labelEn: 'Hours' },
                      { val: timeLeft.minutes, labelVi: 'Phút', labelEn: 'Mins' },
                      { val: timeLeft.seconds, labelVi: 'Giây', labelEn: 'Secs' },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg py-1.5 px-1 border border-white/10">
                        <span className="font-mono text-lg sm:text-xl font-bold text-gold-gradient tabular-nums block">
                          {String(item.val).padStart(2, '0')}
                        </span>
                        <span className="text-[10px] text-white/50 uppercase tracking-wider block">
                          {lang === 'vi' ? item.labelVi : item.labelEn}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#chuong-trinh"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/40 hover:text-[#d4af37] transition-colors focus-visible:outline-none"
        aria-label="Scroll to Program"
      >
        <span className="text-[10px] uppercase tracking-widest mb-1 font-mono">
          {lang === 'vi' ? 'Khám Phá' : 'Explore'}
        </span>
        <ArrowDown className="w-4 h-4 animate-bounce text-[#d4af37]" />
      </a>
    </section>
  );
};
