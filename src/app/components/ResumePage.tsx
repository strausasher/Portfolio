import { FileText } from 'lucide-react';
import patternBg from 'figma:asset/ff659488ddca67ce2d2ea51b9e8965e2d85d8a1e.webp';

export function ResumePage() {
  return (
    <div className="relative min-h-screen bg-[#F0EBE3]">
      {/* Pattern background — same treatment as the Photo Gallery */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img src={patternBg} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover opacity-[0.15]" />
        <div className="absolute inset-0 bg-[#F0EBE3]/70" />
      </div>

      <div className="relative z-10 pt-28 pb-16 px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#1B2D5B]/50 mb-1">
            Asher Straus
          </p>
          <h1 className="text-4xl font-bold text-[#1B2D5B] tracking-tight">
            Résumé
          </h1>
        </div>

        {/* Coming soon card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#1B2D5B]/10">
            <div className="aspect-[8.5/11] w-full flex flex-col items-center justify-center gap-4 bg-[#1B2D5B]/[0.04] text-[#1B2D5B]/45 px-6 text-center">
              <FileText size={40} strokeWidth={1.5} />
              <p className="text-xs font-bold tracking-[0.2em] uppercase">
                Coming Soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
