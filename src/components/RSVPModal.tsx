import React, { useState } from 'react';
import { X, Check, Calendar, Download, Share2, Phone, Ticket } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'vi' | 'en';
}

interface TicketData {
  id: string;
  name: string;
  phone: string;
  email: string;
  guests: number;
  tier: string;
  tierNameVi: string;
  tierNameEn: string;
  notes: string;
  issueDate: string;
}

export const RSVPModal: React.FC<RSVPModalProps> = ({ isOpen, onClose, lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    guests: '2',
    tier: 'vip-gold',
    notes: ''
  });

  const [confirmedTicket, setConfirmedTicket] = useState<TicketData | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen) return null;

  const tiers = [
    {
      id: 'vip-gold',
      nameVi: 'VIP Hoàng Kim · Vành Khuyên Bösendorfer',
      nameEn: 'Imperial Gold VIP · Bösendorfer Circle',
      descVi: 'Hàng ghế đầu diện kiến nghệ sĩ, phục vụ rượu vang Pháp hảo hạng',
      descEn: 'Front-row acoustic excellence with vintage reserve champagne'
    },
    {
      id: 'vip-diamond',
      nameVi: 'VIP Kim Cương · Khán Phòng IKI Gallery',
      nameEn: 'Diamond Salon · IKI Gallery View',
      descVi: 'Tầm nhìn toàn cảnh sân khấu Living Heritage',
      descEn: 'Panoramic elevated seating with full stage vistas'
    },
    {
      id: 'heritage',
      nameVi: 'Thưởng Ngoạn · Living Heritage Salon',
      nameEn: 'Living Heritage · Grand Gallery Salon',
      descVi: 'Không gian thính phòng trang nhã, âm học nguyên bản',
      descEn: 'Intimate salon ambience with pure balanced acoustics'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    const selectedTierObj = tiers.find(t => t.id === formData.tier) || tiers[0];
    const ticketId = `HDVN-${Math.floor(1000 + Math.random() * 9000)}-${formData.tier.toUpperCase()}`;

    setConfirmedTicket({
      id: ticketId,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      guests: parseInt(formData.guests, 10),
      tier: formData.tier,
      tierNameVi: selectedTierObj.nameVi,
      tierNameEn: selectedTierObj.nameEn,
      notes: formData.notes,
      issueDate: new Date().toLocaleDateString(lang === 'vi' ? 'vi-VN' : 'en-US')
    });
  };

  const handleDownloadCalendar = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Ho Doi Vong Nguyet//Living Heritage//VI',
      'BEGIN:VEVENT',
      'SUMMARY:Hồ Đôi Vọng Nguyệt - Living Heritage Concert Series',
      'DESCRIPTION:Hồ Đôi Vọng Nguyệt - Living Heritage với Sir Niels Lan Doky, Nguyễn Ngọc Anh, Trí Minh\\nĐịa điểm: IKI Gallery\\nHotline: 0773 369 369 / 0968 268 879',
      'LOCATION:IKI Gallery, 675 Đỗ Xuân Hợp, P. Phước Long, TP. Hồ Chí Minh',
      'DTSTART:20261121T113000Z', // 18:30 UTC+7 is 11:30 UTC
      'DTEND:20261121T143000Z',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Ho_Doi_Vong_Nguyet_2026.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyCode = () => {
    if (confirmedTicket) {
      navigator.clipboard.writeText(confirmedTicket.id);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#0e1117] border border-amber-500/40 max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-stone-400 hover:text-white bg-black/60 hover:bg-stone-800 border border-stone-700 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!confirmedTicket ? (
          /* RSVP Form */
          <div className="p-6 sm:p-8 space-y-6">
            <div className="text-center space-y-2 border-b border-stone-800 pb-5">
              <h3 className="text-2xl sm:text-3xl font-serif text-stone-100 font-light">
                {lang === 'vi' ? 'Đăng Ký Tham Dự' : 'RSVP'}
              </h3>
              <p className="text-xs text-stone-400 font-sans max-w-md mx-auto leading-relaxed">
                {lang === 'vi'
                  ? 'Đêm diễn Hồ Đôi Vọng Nguyệt - Living Heritage, do An Khai Hung Investment và GG Corporation tổ chức.'
                  : 'Ho Doi Vong Nguyet - Living Heritage, organized by An Khai Hung Investment and GG Corporation.'}
              </p>
              <p className="text-xs text-amber-400/90 font-sans tracking-wide pt-1">
                {EVENT_DETAILS.dateFormattedVi} · IKI Gallery
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-300 font-sans mb-1.5">
                    {lang === 'vi' ? 'Họ và Tên *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={lang === 'vi' ? 'Nguyễn Văn A' : 'John Doe'}
                    className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 text-stone-100 text-xs sm:text-sm focus:border-amber-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-300 font-sans mb-1.5">
                    {lang === 'vi' ? 'Số Điện Thoại *' : 'Phone Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0901 234 567"
                    className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 text-stone-100 text-xs sm:text-sm focus:border-amber-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Email & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-300 font-sans mb-1.5">
                    {lang === 'vi' ? 'Địa Chỉ Email' : 'Email Address'}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 text-stone-100 text-xs sm:text-sm focus:border-amber-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-300 font-sans mb-1.5">
                    {lang === 'vi' ? 'Số Lượng Khách Mời' : 'Number of Guests'}
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 text-stone-100 text-xs sm:text-sm focus:border-amber-500 focus:outline-none transition-colors"
                  >
                    <option value="1">{lang === 'vi' ? '1 Khách (Cá nhân)' : '1 Guest'}</option>
                    <option value="2">{lang === 'vi' ? '2 Khách (Đi cùng bạn đời / đối tác)' : '2 Guests (Pair)'}</option>
                    <option value="4">{lang === 'vi' ? '4 Khách (Bàn VIP Salon)' : '4 Guests (VIP Salon Table)'}</option>
                    <option value="6">{lang === 'vi' ? '6 Khách (Bàn Doanh Nghiệp)' : '6 Guests (Corporate)'}</option>
                  </select>
                </div>
              </div>

              {/* Seating Tier Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-300 font-sans mb-2">
                  {lang === 'vi' ? 'Khu Vực Thưởng Thức Mong Muốn' : 'Preferred Salon Seating Tier'}
                </label>
                <div className="space-y-2">
                  {tiers.map((t) => {
                    const isSelected = formData.tier === t.id;
                    return (
                      <div
                        key={t.id}
                        onClick={() => setFormData({ ...formData, tier: t.id })}
                        className={`p-3 border cursor-pointer transition-all flex items-start gap-3 ${
                          isSelected
                            ? 'bg-amber-950/30 border-amber-500 text-amber-200'
                            : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:border-stone-700'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center shrink-0 ${
                          isSelected ? 'border-amber-400 bg-amber-500' : 'border-stone-600'
                        }`}>
                          {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-stone-950" />}
                        </div>
                        <div className="flex-1">
                          <p className="text-xs sm:text-sm font-medium font-serif">
                            {lang === 'vi' ? t.nameVi : t.nameEn}
                          </p>
                          <p className="text-[11px] text-stone-400 font-sans mt-0.5">
                            {lang === 'vi' ? t.descVi : t.descEn}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-300 font-sans mb-1.5">
                  {lang === 'vi' ? 'Ghi Chú Đón Tiếp (Dị ứng, xe đón, v.v.)' : 'Special Concierge Requests'}
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={lang === 'vi' ? 'Yêu cầu phục vụ đồ uống không cồn, lối đi xe lăn...' : 'Dietary notes, accessibility...'}
                  className="w-full px-3.5 py-2 bg-stone-900 border border-stone-700 text-stone-100 text-xs sm:text-sm focus:border-amber-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Hotline support info */}
              <div className="p-3 bg-stone-900/90 border border-stone-800 text-[11px] text-stone-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Hotline: 0773 369 369 / 0968 268 879</span>
                </span>
                <span className="text-amber-400/80">An Khai Hung & GG Corp</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-stone-950 font-sans font-medium text-xs sm:text-sm uppercase tracking-widest hover:brightness-110 transition-all duration-300 shadow-[0_4px_20px_rgba(217,119,6,0.3)] cursor-pointer"
              >
                {lang === 'vi' ? 'Xác Nhận Đăng Ký Thư Mời VIP' : 'Confirm Private VIP Invitation'}
              </button>
            </form>
          </div>
        ) : (
          /* Confirmed VIP Pass Card */
          <div className="p-6 sm:p-8 space-y-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/20 border border-amber-500 flex items-center justify-center text-amber-400">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif text-stone-100 font-light">
                {lang === 'vi' ? 'Đăng Ký Thành Công!' : 'Reservation Confirmed!'}
              </h3>
              <p className="text-xs text-stone-400 font-sans">
                {lang === 'vi'
                  ? 'Ban Tổ Chức trân trọng gửi Quý khách Thẻ Khách Mời Danh Dự điện tử.'
                  : 'The Organizing Committee presents your Official Electronic VIP Guest Pass.'}
              </p>
            </div>

            {/* Electronic Invitation Pass */}
            <div className="relative bg-gradient-to-br from-stone-900 via-[#131720] to-stone-950 border-2 border-amber-500/60 p-6 shadow-2xl overflow-hidden">
              {/* Gold watermark */}
              <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full border border-amber-500/10 pointer-events-none" />
              <div className="absolute -left-12 -top-12 w-48 h-48 rounded-full border border-amber-500/10 pointer-events-none" />

              {/* Top Banner */}
              <div className="flex items-center justify-between border-b border-amber-500/30 pb-4 mb-4">
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-amber-400 font-sans font-semibold">
                    LIVING HERITAGE CONCERT SERIES
                  </span>
                  <h4 className="text-lg font-serif text-stone-100">HỒ ĐÔI VỌNG NGUYỆT</h4>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-stone-400 block font-sans">MÃ THẺ / PASS ID</span>
                  <button
                    onClick={handleCopyCode}
                    className="text-xs font-mono text-amber-300 font-bold hover:underline"
                    title="Click to copy"
                  >
                    {confirmedTicket.id} {isCopied && '✓'}
                  </button>
                </div>
              </div>

              {/* Body Details */}
              <div className="grid grid-cols-2 gap-4 py-2 text-xs font-sans">
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase">{lang === 'vi' ? 'Khách Mời Danh Dự' : 'Honored Guest'}</span>
                  <span className="text-stone-100 font-medium text-sm">{confirmedTicket.name}</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase">{lang === 'vi' ? 'Số Lượng Khách' : 'Party Size'}</span>
                  <span className="text-stone-100 font-medium text-sm">{confirmedTicket.guests} {lang === 'vi' ? 'Vị trí VIP' : 'VIP Guests'}</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase">{lang === 'vi' ? 'Thời Gian' : 'Date & Time'}</span>
                  <span className="text-amber-300 font-medium">18:30 · 21/11/2026</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase">{lang === 'vi' ? 'Địa Điểm' : 'Venue'}</span>
                  <span className="text-stone-200">IKI Gallery, TP. HCM</span>
                </div>
                <div className="col-span-2 pt-2 border-t border-stone-800">
                  <span className="text-stone-400 block text-[10px] uppercase">{lang === 'vi' ? 'Hạng Vé / Vị Trí' : 'Seating Category'}</span>
                  <span className="text-amber-400 font-serif text-sm">
                    {lang === 'vi' ? confirmedTicket.tierNameVi : confirmedTicket.tierNameEn}
                  </span>
                </div>
              </div>

              {/* QR Code Barcode Representation */}
              <div className="mt-4 pt-4 border-t border-dashed border-stone-700/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-white p-1 shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <rect width="100" height="100" fill="#fff" />
                      {/* Corner markers */}
                      <rect x="5" y="5" width="30" height="30" fill="#000" />
                      <rect x="10" y="10" width="20" height="20" fill="#fff" />
                      <rect x="15" y="15" width="10" height="10" fill="#000" />

                      <rect x="65" y="5" width="30" height="30" fill="#000" />
                      <rect x="70" y="10" width="20" height="20" fill="#fff" />
                      <rect x="75" y="15" width="10" height="10" fill="#000" />

                      <rect x="5" y="65" width="30" height="30" fill="#000" />
                      <rect x="10" y="70" width="20" height="20" fill="#fff" />
                      <rect x="15" y="75" width="10" height="10" fill="#000" />

                      {/* Data dots */}
                      <rect x="45" y="10" width="10" height="10" fill="#000" />
                      <rect x="45" y="30" width="10" height="10" fill="#000" />
                      <rect x="10" y="45" width="10" height="10" fill="#000" />
                      <rect x="30" y="45" width="10" height="10" fill="#000" />
                      <rect x="45" y="45" width="10" height="10" fill="#000" />
                      <rect x="65" y="45" width="10" height="10" fill="#000" />
                      <rect x="85" y="45" width="10" height="10" fill="#000" />
                      <rect x="45" y="65" width="10" height="10" fill="#000" />
                      <rect x="65" y="65" width="10" height="10" fill="#000" />
                      <rect x="65" y="85" width="10" height="10" fill="#000" />
                      <rect x="85" y="85" width="10" height="10" fill="#000" />
                    </svg>
                  </div>
                  <div className="text-[11px] text-stone-400 font-sans">
                    <p className="text-stone-200 font-medium">{lang === 'vi' ? 'Quét mã khi vào cửa' : 'Scan for admission'}</p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1 text-[10px] text-stone-400 font-sans">
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/aistudio/AKH_Logo_6574c649.png"
                      alt="An Khai Hung"
                      className="h-7 w-auto object-contain"
                    />
                    <img
                      src="/assets/aistudio/logogg_bd8491d8.webp"
                      alt="GG Corp"
                      className="h-5 w-auto object-contain"
                    />
                  </div>
                  <span className="text-stone-500 text-[9px]">Hotline: 0773 369 369</span>
                </div>
              </div>
            </div>

            {/* Actions: Download Calendar, Copy, Done */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleDownloadCalendar}
                className="w-full sm:flex-1 py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 text-xs uppercase tracking-wider font-sans inline-flex items-center justify-center gap-2 transition-colors"
              >
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>{lang === 'vi' ? 'Thêm Vào Lịch (iCal / Google)' : 'Add to Calendar'}</span>
              </button>
              <button
                onClick={() => setConfirmedTicket(null)}
                className="w-full sm:w-auto py-2.5 px-6 bg-amber-500 hover:bg-amber-400 text-stone-950 font-sans font-medium text-xs uppercase tracking-wider transition-colors"
              >
                {lang === 'vi' ? 'Đăng Ký Khác' : 'New RSVP'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
