import { Mail, Linkedin, Phone } from 'lucide-react';
import patternBg from 'figma:asset/ff659488ddca67ce2d2ea51b9e8965e2d85d8a1e.webp';

export function Contact() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Pattern Background */}
      <div className="absolute inset-0 z-0">
        <img src={patternBg} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover opacity-[0.15]" />
        <div className="absolute inset-0 bg-[#1B2D5B]/92" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's Create Together</h2>
        <p className="text-white/60 text-lg mb-12">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <a 
            href="mailto:asherstraus2027@u.northwestern.com"
            className="group flex flex-col items-center gap-3 text-white/70 hover:text-white transition-colors"
          >
            <div className="p-4 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
              <Mail size={24} />
            </div>
            <span className="font-medium">asherstraus2027@u.northwestern.com</span>
          </a>

          <a 
            href="tel:914-924-6220"
            className="group flex flex-col items-center gap-3 text-white/70 hover:text-white transition-colors"
          >
            <div className="p-4 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
              <Phone size={24} />
            </div>
            <span className="font-medium">914-924-6220</span>
          </a>

          <a 
            href="https://www.linkedin.com/in/asher-straus-0330452a9/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 text-white/70 hover:text-white transition-colors"
          >
            <div className="p-4 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
              <Linkedin size={24} />
            </div>
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}