import { useEffect, useRef, useState } from 'react';
import { Download } from 'lucide-react';
import patternBg from 'figma:asset/ff659488ddca67ce2d2ea51b9e8965e2d85d8a1e.webp';

// Single source of truth for the résumé. The page below renders it on screen, and the same
// markup is what gets printed to Asher_Straus_Resume.pdf (see the print styles).
const PDF_HREF = `${import.meta.env.BASE_URL}Asher_Straus_Resume.pdf`;

interface Entry {
  title: string;       // organization / project
  role?: string;       // italic, after the title
  where?: string;      // location, after the role
  dates: string;
  bullets: string[];
}

const education = {
  school: 'Northwestern University',
  detail: 'McCormick School of Engineering  |  Evanston, IL',
  dates: 'Sept 2023 – Jun 2027',
  degree: 'B.S. Manufacturing & Design Engineering',
  extras: 'Minor in Art  |  Segal Design Certificate  |  Robotics Certificate',
  gpa: 'GPA: 3.6 / 4.0 cumulative  ·  3.9 / 4.0 since sophomore year',
};

const experience: Entry[] = [
  {
    title: 'Siemens Healthineers',
    role: 'Mechanical Engineering Intern, Molecular Imaging',
    where: 'Hoffman Estates, IL',
    dates: 'Jun 2026 – Dec 2026',
    bullets: [
      'Modify SPECT/PET scanner components so they work within the larger system, including resolving a part interference, and assign tolerances and apply GD&T for manufacturability.',
      'Design and prototype in Siemens NX with 3D-printed parts, and support hands-on assembly and troubleshooting.',
      'Produce engineering drawings and exploded views; contribute research on mechanical subsystems for a next-generation SPECT/CT system.',
    ],
  },
  {
    title: 'P1 Motor Club',
    role: 'Promotional Representative, Research Assistant & Test Driver Intern',
    where: 'Tampa, FL',
    dates: 'Apr 2023 – Present',
    bullets: [
      'Tested new track layouts in simulators and gave performance feedback to engineers to inform design changes.',
      'Building a large-scale, mostly 3D-printed model of the track property from the civil engineer\'s Civil 3D files, sized to travel in a truck as a membership sales tool.',
    ],
  },
  {
    title: 'MIT Beaverworks Summer Institute',
    role: 'Teaching Assistant, “Basics of ASICs”',
    where: 'Cambridge, MA',
    dates: 'Jan 2024 – Feb 2024',
    bullets: ['Guided students through ASIC schematic design, simulation, and testing, and helped refine labs and curriculum.'],
  },
  {
    title: 'Monticello Motor Club',
    role: 'Go-Kart Instructor, Technician & Social Media Coordinator',
    where: 'Monticello, NY',
    dates: 'Jun 2018 – Jul 2022',
    bullets: ['Diagnosed and repaired kart systems for safe, reliable operation; coached drivers of all skill levels.'],
  },
];

const projects: Entry[] = [
  {
    title: 'Advanced Intelligent Manufacturing Lab',
    role: 'Undergraduate Researcher · NSF ERC-HAMMER · Co-author, MSEC 2026 / NAMRC54',
    dates: 'Nov 2025 – Jun 2026',
    bullets: [
      'Smart Sheet Smith: co-authored a paper on a five-agent AI pipeline that turns a 2D sheet-metal drawing into a verified bending process plan, with no 3D CAD or labeled data.',
      'Built the Tracer Agent\'s evaluation corpus (CAD parts, multi-view drawings, hand-derived bend math) and a SolidWorks VBA pipeline that generates hundreds of valid drawings, cutting data creation from days to minutes.',
      'Fall 2025: fabricated 10+ flexible resistive tactile sensors (carbon nanotubes in Ecoflex) and ran near-field electrospinning at 10 kV.',
    ],
  },
  {
    title: 'Formula SAE Brake System',
    role: 'Design, Analysis & Fabrication Lead · Northwestern Formula Racing',
    dates: 'Sep 2024 – Sep 2025',
    bullets: [
      'Designed the brake system for 1 G deceleration (~42 lbf pedal to ~690 lbf tire force) using an analytical model and an improved team MATLAB sim; verified limits with ANSYS FEA.',
      'Machined and lathe-finished rotors, routed lines, and bled the system on the car.',
    ],
  },
  {
    title: 'CT Scanner for Aquatic Animals',
    role: 'Design & Build Engineer · Major Aquarium',
    where: 'Chicago, IL',
    dates: 'Sept 2025 – Present',
    bullets: ['Adapting a medical CT scanner for fish with a veterinarian: stabilization and ventilation systems, and corrosion protection against saltwater.'],
  },
  {
    title: 'Door Signal',
    role: 'Team Lead & Designer · SME National Student Manufacturing Innovation Challenge',
    dates: 'Aug 2026 – Present',
    bullets: ['Leading a team of five on an adhesive-mounted device that tells a knock from a slam and alerts Deaf and hard-of-hearing students with light; in the proposal stage.'],
  },
  {
    title: 'Bionic Wrench Assembly Fixture',
    role: 'Designer & Manufacturing Engineer · DSGN 386',
    dates: 'Mar 2025 – Jun 2025',
    bullets: ['Iterated 7 fixture versions; wrote the SOP, value stream map and line balance for a 1M-unit/year plan, with a pilot cycle time of 3:58.'],
  },
  {
    title: 'ExtendIt Desk Extension and Assistive Devices',
    role: 'Designer & Engineer · Project Manager (Misericordia)',
    dates: 'Jan 2024 – Mar 2025',
    bullets: ['ExtendIt: locking lecture-hall desk extension (+50% surface) after 22 user interviews and 7 mockups. StimSpin and Pillowscape: sensory devices for adults with cerebral palsy, tested with users.'],
  },
];

const skills = [
  ['Design & Fabrication', 'Siemens NX, SolidWorks, GD&T, Engineering Drawings, 3D Printing, Machining (Lathe, CNC, Mill), Welding, Rapid Prototyping, DFM/DFR'],
  ['Analysis & Software', 'Ansys, MATLAB, Python, VBA, Unity, GitHub, Adobe Photoshop, Circuit Design, Radio Control'],
  ['Relevant Courses', 'Manufacturing Engineering Design (DFM), Computer Integrated Manufacturing, Geometry & Manufacturing, Mechanical Design & Manufacturing, Materials Selection, Mechatronics, Mechanics of Materials, Electronics Design, Human-Centered Product Design, Optimization'],
  ['Clubs', 'Formula SAE, Combat Robotics, SME Student Chapter'],
];

function EntryBlock({ entry }: { entry: Entry }) {
  return (
    <div className="entry">
      <div className="entry-head">
        <span>
          <b>{entry.title}</b>
          {entry.role && <i> — {entry.role}</i>}
          {entry.where && <i>  ·  {entry.where}</i>}
        </span>
        <span className="dates">{entry.dates}</span>
      </div>
      <ul>
        {entry.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

const PAPER_W = 816; // 8.5 in at 96 dpi

export function ResumePage() {
  // Shrink the paper to fit narrow screens (phones), but never enlarge it past real size
  const frameRef = useRef<HTMLDivElement>(null);
  const paperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [paperH, setPaperH] = useState(1056);

  useEffect(() => {
    const update = () => {
      const w = frameRef.current?.clientWidth ?? PAPER_W;
      setScale(Math.min(1, w / PAPER_W));
      setPaperH(paperRef.current?.offsetHeight ?? 1056);
    };
    update();
    const ro = new ResizeObserver(update);
    if (frameRef.current) ro.observe(frameRef.current);
    window.addEventListener('resize', update);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="resume-page relative min-h-screen bg-[#F0EBE3]">
      <style>{`
        .paper { width: ${PAPER_W}px; min-height: 1056px; padding: 34px 44px; box-sizing: border-box;
          background: #fff; color: #1a1a1a; font-size: 12px; line-height: 1.33; }
        .paper h1 { font-size: 26px; line-height: 1.1; font-weight: 700; letter-spacing: .02em; color: #1B2D5B; text-align: center; margin: 0; }
        .paper .contact { text-align: center; font-size: 10.8px; color: #333; margin-top: 3px; }
        .paper .contact a { color: #1B2D5B; font-weight: 600; text-decoration: none; }
        .paper h2 { font-size: 11.6px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: #1B2D5B;
          border-bottom: 1.5px solid #1B2D5B; padding-bottom: 1px; margin: 9px 0 4px; }
        .paper .entry { margin-top: 4px; }
        .paper .entry-head { display: flex; justify-content: space-between; gap: 12px; }
        .paper .dates { white-space: nowrap; color: #333; }
        .paper ul { margin: 1px 0 0; padding-left: 15px; list-style: disc; }
        .paper li { margin: 0; padding: 0; }
        .paper .edu-row { display: flex; justify-content: space-between; gap: 12px; }
        .paper .skill { margin-top: 2px; }
        @page { size: 8.5in 11in; margin: 0; }
        @media print {
          html, body { background: #fff !important; }
          nav, .no-print { display: none !important; }
          .resume-page { background: #fff !important; min-height: 0 !important; }
          .resume-page > * { position: static !important; }
          .resume-inner { padding: 0 !important; }
          .paper-frame { width: auto !important; height: auto !important; margin: 0 !important; }
          .paper-scaler { transform: none !important; }
          .paper { box-shadow: none !important; border-radius: 0 !important; min-height: 0 !important; }
        }
      `}</style>

      {/* Pattern background, same treatment as the Photo Gallery */}
      <div className="no-print absolute inset-0 z-0 pointer-events-none">
        <img src={patternBg} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover opacity-[0.15]" />
        <div className="absolute inset-0 bg-[#F0EBE3]/70" />
      </div>

      <div className="resume-inner relative z-10 pt-28 pb-16 px-4 sm:px-6">
        <div className="no-print max-w-[816px] mx-auto mb-8 flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#1B2D5B]/50 mb-1">Asher Straus</p>
            <h1 className="text-4xl font-bold text-[#1B2D5B] tracking-tight">Résumé</h1>
          </div>
          <a
            href={PDF_HREF}
            download="Asher_Straus_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1B2D5B] text-white text-sm font-bold tracking-wide hover:bg-[#3B5998] transition-colors shadow-md"
          >
            <Download size={16} />
            Download PDF
          </a>
        </div>

        <div ref={frameRef} className="paper-frame max-w-[816px] mx-auto" style={{ height: paperH * scale }}>
          <div className="paper-scaler" style={{ width: PAPER_W, transform: `scale(${scale})`, transformOrigin: 'top left' }}>
            <div ref={paperRef} className="paper shadow-xl rounded-sm">
              <h1>Asher Straus</h1>
              <div className="contact">
                624 Ontario Ave, Tampa, FL 33606  |  asherstraus2027@u.northwestern.edu  |  (914) 924-6220
              </div>
              <div className="contact">
                Portfolio: <a href="https://strausasher.github.io/Portfolio/">strausasher.github.io/Portfolio</a>  |  LinkedIn: <a href="https://www.linkedin.com/in/asher-straus-0330452a9/">linkedin.com/in/asher-straus-0330452a9</a>
              </div>

              <h2>Education</h2>
              <div className="edu-row">
                <span><b>{education.school}</b>  |  {education.detail}</span>
                <span className="dates">{education.dates}</span>
              </div>
              <div>{education.degree}  |  <i>{education.extras}</i></div>
              <div><b>{education.gpa}</b></div>

              <h2>Work Experience</h2>
              {experience.map((e) => <EntryBlock key={e.title} entry={e} />)}

              <h2>Research & Projects</h2>
              {projects.map((p) => <EntryBlock key={p.title} entry={p} />)}

              <h2>Technical Skills</h2>
              {skills.map(([label, text]) => (
                <div key={label} className="skill"><b>{label}:</b> {text}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
