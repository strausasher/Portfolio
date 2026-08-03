import { useEffect } from 'react';
import { Gallery } from './Gallery';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

export function GalleryPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F3ED]">
      {/* Back button - fixed below navbar */}
      <div className="pt-24 px-6 max-w-7xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-[#1B2D5B]/60 hover:text-[#1B2D5B] transition-colors text-sm font-bold tracking-widest uppercase py-4"
        >
          <ArrowLeft size={16} />
          Back to Home
        </button>
      </div>
      <Gallery />
    </div>
  );
}
