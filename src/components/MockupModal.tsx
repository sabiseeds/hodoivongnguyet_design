import React from 'react';
import { X, ExternalLink, Download, FileText, CheckCircle2, Eye } from 'lucide-react';

interface MockupModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'vi' | 'en';
}

export const MockupModal: React.FC<MockupModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  const mockupImg = '/public/assets/aistudio/Ho_Doi_Vong_Nguyet__-_Page_02_0227bc3b.jpg';
  const mockupPdf = '/public/assets/aistudio/Ho_Doi_Vong_Nguyet__-_Page_02_10ce363a.pdf';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#0e1117] border border-amber-500/50 max-w-5xl w-full max-h-[94vh] flex flex-col shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-stone-800 bg-stone-950/80">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-950/40 border border-amber-500/30 text-amber-400">
              <Eye className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-serif text-stone-100 font-medium">
                {lang === 'vi' ? 'Bản Phác Thảo Gốc: Ho Doi Vong Nguyet - Page 02' : 'Original Design Mockup: Ho Doi Vong Nguyet - Page 02'}
              </h3>
              <p className="text-xs text-stone-400 font-sans">
                {lang === 'vi' ? 'Bản thiết kế gốc để đối chiếu nội dung' : 'Original design reference for content comparison'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={mockupPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-amber-300 bg-amber-950/30 border border-amber-500/30 hover:bg-amber-900/40 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{lang === 'vi' ? 'Mở PDF Gốc' : 'Open PDF'}</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-white bg-black/60 hover:bg-stone-800 border border-stone-700 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body: Image Viewer */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#07090d] flex flex-col items-center">
          <div className="relative max-w-3xl w-full border border-stone-800 shadow-2xl bg-black">
            <img
              src={mockupImg}
              alt="Ho Doi Vong Nguyet - Page 02 Mockup"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Verification checklist badges */}
          <div className="mt-6 max-w-3xl w-full grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-sans">
            <div className="p-3 bg-stone-900/80 border border-stone-800 flex items-center gap-2 text-stone-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Chương 1, 2, 3 đầy đủ văn bản & tín hiệu</span>
            </div>
            <div className="p-3 bg-stone-900/80 border border-stone-800 flex items-center gap-2 text-stone-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>4 góc nhìn sân khấu kiến trúc chuẩn phối cảnh</span>
            </div>
            <div className="p-3 bg-stone-900/80 border border-stone-800 flex items-center gap-2 text-stone-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>9 Nghệ sĩ & Bậc thầy quốc tế với tiểu sử đầy đủ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
