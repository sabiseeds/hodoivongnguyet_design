import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  lang: 'vi' | 'en';
}

export const Navbar: React.FC<NavbarProps> = ({
  lang
}) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#chuong-trinh', labelVi: 'Chương Trình', labelEn: 'Program' },
    { href: '#nghe-si', labelVi: 'Nghệ Sĩ', labelEn: 'Artists' },
    { href: '#san-khau', labelVi: 'Sân Khấu', labelEn: 'Stage' },
    { href: '#thu-vien-anh', labelVi: 'Hình Ảnh', labelEn: 'Gallery' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0c10]/90 backdrop-blur-md border-b border-[#d4af37]/20 py-3 shadow-lg'
          : 'bg-transparent border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: Zone 1 (Brand) — Zone 2 (Nav Links) — Zone 3 (Primary Action) */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-3 text-white group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
          >
            <div className="flex flex-col">
              <img
                src="/assets/aistudio/logo-livingheritage.webp"
                alt="Living Heritage"
                className="h-8 w-auto object-contain group-hover:brightness-125 transition-all"
              />
              <span className="font-serif text-lg tracking-wide text-white group-hover:text-[#f7dfa5] transition-colors mt-0.5 font-semibold">
                Hồ Đôi Vọng Nguyệt
              </span>
            </div>
          </a>

          {/* Zone 2: Clean single-line nav links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs tracking-wider uppercase font-medium text-white/70">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#d4af37] hover:after:w-full after:transition-all after:duration-300"
              >
                {lang === 'vi' ? link.labelVi : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white/80 hover:text-white bg-white/5 border border-white/10"
              aria-label="Toggle mobile navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e1017]/98 border-b border-[#d4af37]/20 backdrop-blur-2xl px-6 py-6 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4 text-sm font-medium tracking-wide uppercase text-white/80">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-[#d4af37] border-b border-white/5 transition-colors"
              >
                {lang === 'vi' ? link.labelVi : link.labelEn}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
