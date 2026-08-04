import { Download, FileText } from 'lucide-react';
import patternBg from 'figma:asset/ff659488ddca67ce2d2ea51b9e8965e2d85d8a1e.webp';

import resumePdf from '../../assets/Asher_Straus_Resume.pdf';

// Hide the PDF viewer's chrome so the embed reads as a page, not a document viewer.
const resumeEmbed = `${resumePdf}#toolbar=0&navpanes=0&view=FitH`;

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
        <div className="max-w-4xl mx-auto mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#1B2D5B]/50 mb-1">
              Asher Straus
            </p>
            <h1 className="text-4xl font-bold text-[#1B2D5B] tracking-tight">
              Résumé
            </h1>
          </div>

          <a
            href={resumePdf}
            download="Asher_Straus_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1B2D5B] text-[#F7F3ED] text-sm font-bold tracking-widest uppercase rounded hover:bg-[#2a4080] transition-colors shadow-md"
          >
            <Download size={15} />
            Download
          </a>
        </div>

        {/* Resume PDF card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#1B2D5B]/10">
            <object
              data={resumeEmbed}
              type="application/pdf"
              className="aspect-[8.5/11] w-full block"
              aria-label="Asher Straus résumé"
            >
              {/* Shown where inline PDF rendering is unsupported (most mobile browsers) */}
              <div className="aspect-[8.5/11] w-full flex flex-col items-center justify-center gap-4 bg-[#1B2D5B]/[0.04] text-[#1B2D5B]/45 px-6 text-center">
                <FileText size={40} strokeWidth={1.5} />
                <p className="text-xs font-bold tracking-[0.2em] uppercase">
                  Preview unavailable on this device
                </p>
                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1B2D5B] text-[#F7F3ED] text-sm font-bold tracking-widest uppercase rounded hover:bg-[#2a4080] transition-colors shadow-md"
                >
                  <Download size={15} />
                  Open PDF
                </a>
              </div>
            </object>
          </div>

          {/* Footer download nudge */}
          <div className="mt-6 flex justify-center">
            <a
              href={resumePdf}
              download="Asher_Straus_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#1B2D5B] text-[#1B2D5B] text-sm font-bold tracking-widest uppercase rounded hover:bg-[#1B2D5B] hover:text-[#F7F3ED] transition-colors"
            >
              <Download size={15} />
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
