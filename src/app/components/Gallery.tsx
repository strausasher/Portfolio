import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import patternBg from 'figma:asset/ff659488ddca67ce2d2ea51b9e8965e2d85d8a1e.webp';
import { projects, getAllProjectImages } from './Portfolio';
import { dimsFor } from './imageDimensions';

// Art Images
import artCat from 'figma:asset/5cee417e0193e39fee7a6810170438020872701d.webp';
import artField from 'figma:asset/ac51133386d81e89aead318892b53b5efc52cdd1.webp';
// TODO(missing-asset): this image was not included in the Figma export.
// To restore it: save the image to src/assets/dd613cd0b0f374337ee6efe762febd776e0f5a7c.webp then uncomment the two lines below.
// import artCampus from 'figma:asset/dd613cd0b0f374337ee6efe762febd776e0f5a7c.webp';
import artTorch from 'figma:asset/b209b20130571e3a9a1d40c13b20aabd60753d7d.webp';
import artCardboardHand from 'figma:asset/8f6f3a36e6bb445ed579fe22534757d7379817a8.webp';
import artHallway from 'figma:asset/5b1ae5f356afbd5aba632c5c944a1bb8a776bbee.webp';
import artHandSketch from 'figma:asset/32f02bacb93f261ec836820c9e1bafe4367f7e6b.webp';

// New Additions
// TODO(missing-asset): this image was not included in the Figma export.
// To restore it: save the image to src/assets/f7db2bcaee0e512d859c06f9a22ecad88ad98ca1.webp then uncomment the two lines below.
// import artPainting from 'figma:asset/f7db2bcaee0e512d859c06f9a22ecad88ad98ca1.webp';
import artLight from 'figma:asset/afe93b8fb36b3a1f176026cfb5f3067d51dfe582.webp';
import artAnvil from 'figma:asset/b611fb7a41cfd7184ddb4f0b6c2291b82a180473.webp';
import artFigures from 'figma:asset/d4d95224e7f5f73b3b2366dadafc6cc9315837ca.webp';

// New art images
import artRedPainting from 'figma:asset/1a30b5256c61ddd0c124b6e7f825c1934e09de8d.webp';
import artCeramics from 'figma:asset/7427c8a0ec2a5ca6b54ffd3391bdc25cef6a5940.webp';
// TODO(missing-asset): this image was not included in the Figma export.
// To restore it: save the image to src/assets/fc304488c3a7f9212c50b49522c344c0400143ed.webp then uncomment the two lines below.
// import artFormulaCar from 'figma:asset/fc304488c3a7f9212c50b49522c344c0400143ed.webp';

// Process images
import processRobot from 'figma:asset/855c7fe4fa1b4b10045986c1830e5a624914d6fb.webp';
import processElectronics from 'figma:asset/9cfe9259f08f7d6d1896d5f78dec9f9932c1befa.webp';
// TODO(missing-asset): this image was not included in the Figma export.
// To restore it: save the image to src/assets/efd9bd591f8ea54056bae4b29bb76fbcabeabb56.webp then uncomment the two lines below.
// import processWhiteboard from 'figma:asset/efd9bd591f8ea54056bae4b29bb76fbcabeabb56.webp';

// Additional photos
import artCtMockup from 'figma:asset/0b7d6aceecd4965ee53ded4f68832dab8a0d08a0.webp';

// CT scanner (BodyTom) mockup — concept through build
import ctConceptRender1 from 'figma:asset/ct-concept-render-1.webp';
import ctConceptRender2 from 'figma:asset/ct-concept-render-2.webp';
import ctTableMechanismConcept from 'figma:asset/ct-table-mechanism-concept.webp';
import ctCadGantry1 from 'figma:asset/ct-cad-gantry-1.webp';
import ctCadGantry2 from 'figma:asset/ct-cad-gantry-2.webp';
import ctPrintedPanel from 'figma:asset/ct-printed-panel.webp';
import ctShopBoreCut from 'figma:asset/ct-shop-bore-cut.webp';
import ctShopFrameAssembly from 'figma:asset/ct-shop-frame-assembly.webp';
import ctShopBoreRing from 'figma:asset/ct-shop-bore-ring.webp';
import ctShopInternalStructure from 'figma:asset/ct-shop-internal-structure.webp';
import ctShopFinishedBodytom from 'figma:asset/ct-shop-finished-bodytom.webp';

// Projector-mount working sketches (used on the Snap-Fit Projector Mounts project)
import projConceptSketch from 'figma:asset/proj-concept-sketch.webp';
import projAngleSketch from 'figma:asset/proj-angle-sketch.webp';
import artOilPainting from 'figma:asset/341fc91b3513084249553e6967f56281fd6c8645.webp';
import artLaserCut from 'figma:asset/9794f6b646dbc637e8893cf2fc7a0e216b75a36a.webp';

// More art photos
import artColorBlockSun from 'figma:asset/art-color-block-sun.webp';
import artWallDisplay from 'figma:asset/art-wall-display.webp';
import artJustMarriedSign from 'figma:asset/art-just-married-sign.webp';
import artCardboardHand2 from 'figma:asset/art-cardboard-hand-2.webp';
import artColorBlockCircles from 'figma:asset/art-color-block-circles.webp';
import artSketchbookPov from 'figma:asset/art-sketchbook-pov.webp';
import artTorchLit from 'figma:asset/art-torch-lit.webp';
import artPavilionConcept from 'figma:asset/art-pavilion-concept.webp';

// Engineering photos — shop work, labs, and fabrication
import engSolidworksPart from 'figma:asset/eng-solidworks-part.webp';
import engRobotArms from 'figma:asset/eng-robot-arms.webp';
import engHumanoidRobot from 'figma:asset/eng-humanoid-robot.webp';
import engMachinedMold from 'figma:asset/eng-machined-mold.webp';
import engSoftSensors from 'figma:asset/eng-soft-sensors.webp';
import engSensorCast from 'figma:asset/eng-sensor-cast.webp';
import eng3dPrintTiles from 'figma:asset/eng-3d-print-tiles.webp';
import engBajaCar from 'figma:asset/eng-baja-car.webp';
import engCopperBrazing from 'figma:asset/eng-copper-brazing.webp';
import engWaterjet from 'figma:asset/eng-waterjet.webp';

// Sketchbook scans (one entry per page, in scan order) — too many to import by
// hand, so pull the whole set in at once.
const sketchbookModules = import.meta.glob('../../assets/sketchbook-*.webp', {
  eager: true,
  import: 'default',
}) as Record<string, string>;
// The scans are grouped into series by filename (sketchbook-c<series>-p<page>).
// Each series is one industrial design project. c5 is deliberately absent: those
// pages are the projector-mount working sketches, which already appear (with
// better captions and a link back to the project) via projConceptSketch /
// projAngleSketch on the Snap-Fit Projector Mounts project.
const sketchSeriesCaptions: Record<string, string> = {
  c1: 'Racing shoe concepts',
  c2: 'Transit shelter concepts — Evanston / Northwestern',
  c3: 'Wand controller & potion speaker set',
  c4: 'Lighting concepts',
};

const sketchbookScans = Object.keys(sketchbookModules)
  .sort()
  .map(key => ({
    src: sketchbookModules[key],
    series: key.match(/sketchbook-(c\d+)-/)?.[1] ?? '',
  }))
  .filter(({ series }) => series in sketchSeriesCaptions);

// Sketches pulled in from a portfolio project — working drawings that belong in
// the Sketches tab rather than alongside that project's built/shop photos. (The
// CT concept drawings are handled directly in standaloneImages below.)
const projectSketchUrls = new Set([projConceptSketch, projAngleSketch]);

type GalleryCategory = 'Engineering' | 'Artwork' | 'Sketches';

interface GalleryItem {
  src: string;
  caption?: string;
  category: GalleryCategory;
  projectId?: number;
  projectTitle?: string;
}

// Standalone art / process photos (not tied to a portfolio project)
const standaloneImages: GalleryItem[] = [
    // --- ARTWORK ---
    { src: artTorch, category: 'Artwork' },
    { src: artCardboardHand, caption: "Fully Cardboard Hand Sculpture, with Functional Tendon Mechanism", category: 'Artwork' },
    { src: artCat, category: 'Artwork' },
    { src: artRedPainting, category: 'Artwork' },
    { src: artField, category: 'Artwork' },
    { src: artHallway, category: 'Artwork' },
    { src: artHandSketch, category: 'Sketches' },
    { src: artCeramics, category: 'Artwork' },
    // { src: artCampus, category: 'Artwork' },  // TODO(missing-asset): re-enable once image is restored
    // { src: artPainting, category: 'Artwork' },  // TODO(missing-asset): re-enable once image is restored
    { src: artOilPainting, category: 'Artwork' },
    { src: artLight, category: 'Artwork' },
    { src: artAnvil, category: 'Artwork' },
    { src: artFigures, category: 'Artwork' },
    { src: artColorBlockSun, category: 'Artwork' },
    { src: artWallDisplay, caption: 'Wall of studies and small paintings', category: 'Artwork' },
    { src: artJustMarriedSign, caption: 'Hand-lettered "Just Married" floral sign', category: 'Artwork' },
    { src: artCardboardHand2, category: 'Artwork' },
    { src: artColorBlockCircles, category: 'Artwork' },
    { src: artSketchbookPov, category: 'Artwork' },
    { src: artTorchLit, category: 'Artwork' },
    { src: artPavilionConcept, caption: 'Pavilion seating concept sketch', category: 'Sketches' },

    // --- ENGINEERING ---
    // { src: processWhiteboard, category: 'Engineering' },  // TODO(missing-asset): re-enable once image is restored
    { src: processElectronics, category: 'Engineering' },
    // { src: artFormulaCar, category: 'Engineering' },  // TODO(missing-asset): re-enable once image is restored
    { src: processRobot, category: 'Engineering' },
    { src: artCtMockup, category: 'Engineering' },
    { src: ctConceptRender1, caption: 'BodyTom CT scanner — early concept drawing', category: 'Sketches' },
    { src: ctConceptRender2, caption: 'Bore ring concept sketch', category: 'Sketches' },
    { src: ctTableMechanismConcept, caption: 'Patient table drive mechanism concept', category: 'Sketches' },
    { src: ctCadGantry1, caption: 'CAD model of the gantry housing', category: 'Engineering' },
    { src: ctCadGantry2, category: 'Engineering' },
    { src: ctPrintedPanel, caption: '3D-printed gantry panel', category: 'Engineering' },
    { src: ctShopBoreCut, caption: 'Cutting the bore opening', category: 'Engineering' },
    { src: ctShopFrameAssembly, caption: 'Assembling the support frame', category: 'Engineering' },
    { src: ctShopBoreRing, caption: 'Bore ring installed', category: 'Engineering' },
    { src: ctShopInternalStructure, caption: 'Internal bore structure', category: 'Engineering' },
    { src: ctShopFinishedBodytom, caption: 'Finished BodyTom mockup', category: 'Engineering' },
    { src: artLaserCut, category: 'Engineering' },
    { src: engSolidworksPart, category: 'Engineering' },
    { src: engRobotArms, caption: 'Bimanual robot with prosthetic hands, Northwestern Engineering robotics lab', category: 'Engineering' },
    { src: engHumanoidRobot, caption: 'Humanoid robot rigged for testing', category: 'Engineering' },
    { src: engMachinedMold, caption: 'CNC-machined aluminum mold', category: 'Engineering' },
    { src: engSoftSensors, caption: 'Cast silicone tactile sensors', category: 'Engineering' },
    { src: engSensorCast, category: 'Engineering' },
    { src: eng3dPrintTiles, caption: '3D-printed tessellated tile array', category: 'Engineering' },
    { src: engBajaCar, caption: 'Northwestern Baja SAE off-road racer', category: 'Engineering' },
    { src: engCopperBrazing, caption: 'Brazing copper tubing', category: 'Engineering' },
    { src: engWaterjet, caption: 'Abrasive waterjet cutting', category: 'Engineering' },

    // --- SKETCHES ---
    ...sketchbookScans.map(({ src, series }): GalleryItem => ({
      src,
      caption: sketchSeriesCaptions[series],
      category: 'Sketches',
    })),
];

// Look up the caption an image was given inside its project (if any)
function findCaption(project: (typeof projects)[number], url: string): string | undefined {
  for (const section of project.content) {
    const match = section.images?.find(img => img.url === url);
    if (match?.caption) return match.caption;
  }
  return undefined;
}

// Every image used across the portfolio projects, linked back to its project
const projectImages: GalleryItem[] = projects.flatMap(project =>
  getAllProjectImages(project).map(url => ({
    src: url,
    caption: findCaption(project, url),
    category: (projectSketchUrls.has(url) ? 'Sketches' : 'Engineering') as GalleryCategory,
    projectId: project.id,
    projectTitle: project.title,
  }))
);

const galleryImages: GalleryItem[] = [...standaloneImages, ...projectImages];

const tabs: Array<'All' | GalleryCategory> = ['All', 'Engineering', 'Sketches', 'Artwork'];

export function Gallery() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'All' | GalleryCategory>('All');
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);

  const openProject = useCallback((projectId: number) => {
    navigate(`/?project=${projectId}`);
  }, [navigate]);

  const filteredImages = useMemo(() => {
    if (activeTab === 'All') return galleryImages;
    return galleryImages.filter(img => img.category === activeTab);
  }, [activeTab]);

  const goNext = useCallback(() => {
    setZoomedIndex(prev => prev !== null ? (prev + 1) % filteredImages.length : null);
  }, [filteredImages.length]);

  const goPrev = useCallback(() => {
    setZoomedIndex(prev => prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null);
  }, [filteredImages.length]);

  useEffect(() => {
    if (zoomedIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      else if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'Escape') setZoomedIndex(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [zoomedIndex, goNext, goPrev]);

  // Close lightbox when switching tabs
  useEffect(() => {
    setZoomedIndex(null);
  }, [activeTab]);

  if (galleryImages.length === 0) return null;

  const currentImage = zoomedIndex !== null ? filteredImages[zoomedIndex] : null;

  return (
    <section className="relative py-12 pb-24 overflow-hidden">
      {/* Pattern Background — fixed to the viewport so it doesn't rescale when
          switching tabs changes the section's content height */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img src={patternBg} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover opacity-[0.15]" />
        <div className="absolute inset-0 bg-[#F7F3ED]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1B2D5B] mb-4 tracking-wide">PHOTO GALLERY</h2>
          <p className="text-[#1B2D5B]/50 font-light text-lg">Engineering work, project photos, and artistic explorations</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center flex-wrap gap-8 mb-12">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm font-bold tracking-widest uppercase pb-2 border-b-2 transition-colors duration-300 ${
                activeTab === tab
                  ? 'border-[#1B2D5B] text-[#1B2D5B]'
                  : 'border-transparent text-[#1B2D5B]/40 hover:text-[#1B2D5B]/70'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <ResponsiveMasonry
          columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
        >
          <Masonry gutter="24px">
            {filteredImages.map((image, i) => (
              <div
                key={`${activeTab}-${i}`}
                className="overflow-hidden rounded-sm cursor-zoom-in group relative"
                onClick={() => setZoomedIndex(i)}
              >
                <img
                  src={image.src}
                  {...dimsFor(image.src)}
                  loading="lazy"
                  decoding="async"
                  style={{width: "100%", height: "auto", display: "block"}}
                  alt={image.caption || `Gallery item ${i}`}
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                {/* Hover overlay + caption */}
                <div className="absolute inset-0 bg-[#F0EBE3]/0 group-hover:bg-[#F0EBE3]/40 transition-colors duration-300 flex flex-col items-center justify-end gap-2 p-4 text-center">
                  {image.caption && (
                    <p className="text-[#1B2D5B] text-base tracking-wide opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">{image.caption}</p>
                  )}
                  {image.projectTitle && (
                    <span className="inline-flex items-center gap-1 text-[#1B2D5B] text-xs font-bold uppercase tracking-widest bg-[#F7F3ED]/90 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {image.projectTitle}
                      <ArrowUpRight size={12} />
                    </span>
                  )}
                </div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>

        {/* --- LIGHTBOX POPUP --- */}
        <AnimatePresence>
          {currentImage && zoomedIndex !== null && (
            <div
              className="fixed inset-0 z-[80] flex items-center justify-center p-8"
              onClick={() => setZoomedIndex(null)}
            >
              {/* Semi-transparent backdrop - page still visible */}
              <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

              {/* Close button */}
              <button 
                className="absolute top-6 right-6 z-10 text-white/70 hover:text-white transition-colors bg-black/30 rounded-full p-2"
                onClick={() => setZoomedIndex(null)}
              >
                <X size={24} />
              </button>

              {/* Left arrow */}
              <button
                className="absolute left-4 md:left-8 z-10 text-white/70 hover:text-white transition-colors bg-black/30 hover:bg-black/50 rounded-full p-3"
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
              >
                <ChevronLeft size={28} />
              </button>

              {/* Right arrow */}
              <button
                className="absolute right-4 md:right-8 z-10 text-white/70 hover:text-white transition-colors bg-black/30 hover:bg-black/50 rounded-full p-3"
                onClick={(e) => { e.stopPropagation(); goNext(); }}
              >
                <ChevronRight size={28} />
              </button>

              {/* Image container - smaller, centered popup */}
              <motion.div
                key={`${activeTab}-${zoomedIndex}`}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.2 }}
                className="relative z-[5] flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={currentImage.src}
                  alt={currentImage.caption || 'Gallery view'}
                  className="max-w-[90vw] max-h-[70vh] w-auto h-auto object-contain rounded-md shadow-2xl"
                />
                {currentImage.caption && (
                  <div className="mt-3 text-center">
                    <p className="text-white/80 text-sm tracking-wide">{currentImage.caption}</p>
                  </div>
                )}
                {/* Link back to the source project */}
                {currentImage.projectId !== undefined && (
                  <button
                    onClick={(e) => { e.stopPropagation(); openProject(currentImage.projectId!); }}
                    className="mt-4 inline-flex items-center gap-2 bg-[#F7F3ED] hover:bg-white text-[#1B2D5B] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full transition-colors shadow-lg"
                  >
                    View Project: {currentImage.projectTitle}
                    <ArrowUpRight size={14} />
                  </button>
                )}
                {/* Image counter */}
                <div className="mt-3 text-center">
                  <p className="text-white/40 text-xs">{zoomedIndex + 1} / {filteredImages.length}</p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
