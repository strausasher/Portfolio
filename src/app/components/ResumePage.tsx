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
  dates: 'Sept 2023 – Mar 2028 (expected)',
  degree: 'B.S. Manufacturing & Design Engineering',
  extras: 'Minor in Art  |  Segal Design Certificate  |  Robotics Certificate',
  gpa: 'GPA: 3.6 / 4.0 cumulative  ·  3.9 / 4.0 since sophomore year',
};

const experience: Entry[] = [
  {
    title: 'Siemens Healthineers',
    role: 'Mechanical Engineering Co-op, Molecular Imaging',
    where: 'Hoffman Estates, IL',
    dates: 'Jun 2026 – Present',
    bullets: [
      'Updated CAD models and drawings for mechanical components in SPECT and PET scanners to resolve interferences and improve manufacturability. Applied GD&T to fully define part requirements.',
      'Designed fixtures and brackets in Siemens NX/Designcenter. Used 3D printing to evaluate and iterate on design.',
      'Contributed to the development of a multi-axis stage and investigated motorized drives to support SPECT research team.',
    ],
  },
  {
    title: 'P1 Motor Club',
    role: 'Virtual Test Driver, Research & Promotions Intern',
    where: 'Tampa, FL',
    dates: 'Apr 2023 – Present',
    bullets: [
      'Test new track layouts in simulators and give performance feedback to engineers to inform design changes.',
      'Promote the club and its track property to prospective members, including by building a large-scale, mostly 3D-printed model from the civil engineer’s Civil 3D files, sized to travel in a truck as a membership sales tool.',
    ],
  },
  {
    title: 'MIT Beaverworks Summer Institute',
    role: 'Teaching Assistant, “Basics of ASICs”',
    where: 'Cambridge, MA',
    dates: 'Jun 2024 – Aug 2024',
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
    role: 'Researcher · NSF ERC-HAMMER · MSEC 2026 Poster Co-author',
    dates: 'Nov 2025 – Apr 2026',
    bullets: [
      'Smart Sheet Smith: co-author on the MSEC 2026 / NAMRC54 poster for a five-agent AI pipeline that turns a 2D sheet-metal drawing into a verified bending process plan, with no 3D CAD or labeled data.',
      'Built the Tracer Agent\'s evaluation corpus (CAD parts, multi-view drawings, hand-derived bend math) and a SolidWorks VBA pipeline that generates hundreds of valid drawings, cutting data creation from days to minutes.',
      'Fabricated 10+ flexible resistive tactile sensors (carbon nanotubes in Ecoflex) and ran near-field electrospinning at 10 kV (Fall 2025).',
    ],
  },
  {
    title: 'Formula SAE Brake System',
    role: 'Suspension Member · Northwestern Formula Racing',
    dates: 'Sep 2024 – Present',
    bullets: [
      'Hand-calculated the pedal force for a 1 G stop (~42 lbf pedal to ~690 lbf tire force), improved the team MATLAB brake sim, and verified rotor limits with ANSYS FEA.',
      'Machined and lathe-finished rotors, routed lines, and bled the system on the car.',
    ],
  },
  {
    title: 'WaterGuard: CT Scanner for Aquatic Animals',
    role: 'Design & Build Engineer · Major Aquarium',
    where: 'Chicago, IL',
    dates: 'Sept 2025 – Mar 2026',
    bullets: [
      'Designed a removable, reusable LDPE liner and runoff collector that waterproofs a ~$1M CT scanner used to image aquatic animals.',
      'Led liner geometry: an oblique frustum with a 12.5° runoff slope inside 6″ of table clearance, set by full-scale wrinkled-liner tests.',
      'Tensile-tested heat-welded seams: 94.8 N dry vs. 106.4 N after 24 h in saltwater, no weld separation; co-wrote the FMEA.',
      'On-site tests with veterinary staff cut setup from 45+ min to under 4; their laser-visibility feedback drove a clear PETG window.',
    ],
  },
  {
    title: 'Performance Bicycle Brake Caliper',
    role: 'Simulation-Driven Design',
    dates: '2025',
    bullets: [
      'Turned rider needs into specs (≤70 N input, ≤11 mm deflection, 15 m stop, ISO 4210); cut mass with FEA and topology optimization.',
      'SLS Nylon-12 prototype passed every metric on the bike: 41.3 g, 11.3 m stop at 68.9 N input, $8.26 per part.',
      'Led the stiffness–mass trade-off: a 14% lighter v2 needed 102 N at the lever, so we kept the first.',
    ],
  },

  {
    title: 'Midwest EV',
    role: 'Mechanical Engineer · Tesla retrofit hardware and drive unit parts',
    dates: '2026 – Present',
    bullets: [
      'Own the enclosure for the custom PCB in a Model S openpilot retrofit now sold at $2,280; five versions driven by weekly design reviews.',
      'Designing a replacement oil/coolant routing part for the Tesla large drive unit: converts rotor cooling from glycol to oil, so the rotor seal is lubricated and a leak can no longer rust the stator.',
    ],
  },
  {
    title: 'Bionic Wrench Assembly Fixture',
    role: 'Designer & Manufacturing Engineer · DSGN 386',
    dates: 'Mar 2025 – Jun 2025',
    bullets: ['Iterated 7 fixture versions; wrote the SOP, value stream map and line balance for a 1M-unit/year plan, with a pilot cycle time of 3:58.'],
  },
  {
    title: 'ExtendIt Desk Extension',
    role: 'Designer & Engineer · Human-Centered Product Design',
    dates: '2024',
    bullets: [
      'Ran 22 user interviews and tested 7 mockups with 10 users each; 8 of 10 preferred the final locking desk extension (+50% surface).',
      'Built a load-test rig: held 33.5 lb at 3/8″ deflection against a 30 lb / 0.5″ target. Costed at $10.19 per unit for sale to universities.',
    ],
  },
  {
    title: 'Pillowscape Sensory Pillow',
    role: 'Designer & Project Manager · Misericordia',
    dates: '2024 – Mar 2025',
    bullets: [
      'Designed a customizable multi-texture sensory pillow for adults with developmental disabilities: swappable Velcro patches and a choice of filling, under $15 per unit against hundreds for commercial sensory devices.',
      'On-site testing with residents drove the huggable 20 × 30″ format; residents picked their own patches at handoff.',
    ],
  },
];

const skills = [
  ['Design & Fabrication', 'Siemens NX/Designcenter, SolidWorks, Onshape, AutoCAD/Civil 3D, GD&T, Engineering Drawings, Fixture & Jig Design, 3D Printing, Laser Cutting, Waterjet, Machining (Lathe/CNC/Mill), Welding, Sand/Iron Casting, Sheet Metal, Metrology, Snap-Fit/Compliant Design, Rapid Prototyping, DFM/DFR'],
  ['Analysis & Software', 'Ansys, FEA/Topology Opt., Thermal Sim., MATLAB, Python, VBA, SolidWorks API, LLM Pipelines, Embedded Systems/Raspberry Pi, FMEA, Cost Modeling, Lean/VSM, Line Balancing, Excel, Unity, GitHub, Photoshop, Circuit Design, Radio Control'],
  ['Clubs', 'Formula SAE, Baja SAE, Combat Robotics, SME Student Chapter'],
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
        .paper { width: ${PAPER_W}px; min-height: 1056px; padding: 24px 44px; box-sizing: border-box;
          background: #fff; color: #1a1a1a; font-size: 11.7px; line-height: 1.24; }
        .paper h1 { font-size: 26px; line-height: 1.1; font-weight: 700; letter-spacing: .02em; color: #1B2D5B; text-align: center; margin: 0; }
        .paper .contact { text-align: center; font-size: 10.8px; color: #333; margin-top: 3px; }
        .paper .contact a { color: #1B2D5B; font-weight: 600; text-decoration: none; }
        .paper h2 { font-size: 11.6px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: #1B2D5B;
          border-bottom: 1.5px solid #1B2D5B; padding-bottom: 1px; margin: 7px 0 3px; }
        .paper .entry { margin-top: 3px; }
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
