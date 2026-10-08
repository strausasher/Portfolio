// Print-only layout that is rendered to public/Asher_Straus_Portfolio.pdf (see scripts/ note in README).
// Visit /portfolio-pdf in a browser to preview it; print to PDF with margins set to "None".
import heroBg from 'figma:asset/pdf/heroBg.jpg';

// Formula SAE brake system
import brakeMilling from 'figma:asset/pdf/brakeMilling.jpg';
import brakeGrinding from 'figma:asset/pdf/brakeGrinding.jpg';
import brakeStressFEA from 'figma:asset/pdf/brakeStressFEA.jpg';
import brakeIntegration from 'figma:asset/pdf/brakeIntegration.jpg';

// Bionic wrench
import wrenchV2Stand from 'figma:asset/pdf/wrenchV2Stand.jpg';
import wrenchV7Support from 'figma:asset/pdf/wrenchV7Support.jpg';
import wrenchEquipSetup from 'figma:asset/pdf/wrenchEquipSetup.jpg';
import wrenchLineLayout from 'figma:asset/pdf/wrenchLineLayout.jpg';

// Water Guard
import ctScannerImg from 'figma:asset/pdf/ctScannerImg.jpg';
import wgInstalledFront from 'figma:asset/pdf/wgInstalledFront.jpg';
import wgSlopeTest from 'figma:asset/pdf/wgSlopeTest.jpg';
import wgWeldLeakTest from 'figma:asset/pdf/wgWeldLeakTest.jpg';

// Bike caliper
import bikeTopoOpt from 'figma:asset/pdf/bikeTopoOpt.jpg';
import bikeFirstFEA from 'figma:asset/pdf/bikeFirstFEA.jpg';
import bikeNeedsTable from 'figma:asset/pdf/bikeNeedsTable.jpg';
import bikePrintedCaliper from 'figma:asset/pdf/bikePrintedCaliper.jpg';

// Smart Sheet Smith
import sheetSmithPoster from 'figma:asset/pdf/sheetSmithPoster.jpg';

// ExtendIt
import extendItHero from 'figma:asset/pdf/extendItHero.jpg';
import extendItLoadTest from 'figma:asset/pdf/extendItLoadTest.jpg';
import extendItHinge from 'figma:asset/pdf/extendItHinge.jpg';
import extendItSketch from 'figma:asset/pdf/extendItSketch.jpg';

// In the shop
import engAssemblyBench from 'figma:asset/pdf/engAssemblyBench.jpg';
import engCopperBrazing from 'figma:asset/pdf/engCopperBrazing.jpg';
import engBrazingCloseup from 'figma:asset/pdf/engBrazingCloseup.jpg';
import engHammerForming from 'figma:asset/pdf/engHammerForming.jpg';
import engIronPour1 from 'figma:asset/pdf/engIronPour1.jpg';
import engWaterjet from 'figma:asset/pdf/engWaterjet.jpg';
import personalTeslaUnderCar2 from 'figma:asset/pdf/personalTeslaUnderCar2.jpg';

const SITE = 'https://strausasher.github.io/Portfolio/';
const SITE_LABEL = 'strausasher.github.io/Portfolio';

interface Stat { value: string; label: string }
interface Pic { src: string; caption: string; fit?: 'cover' | 'contain' }
interface ProjectPage {
  n: number;
  title: string;
  meta: string;
  summary: string;
  role: string[];
  stats: Stat[];
  pics: Pic[];
  tall?: boolean;
  pipeline?: string[];
}

const pages: ProjectPage[] = [
  {
    n: 1,
    title: 'Formula SAE Brake System',
    meta: 'Northwestern Formula Racing · 2024–Present',
    summary:
      'A brake system designed backwards from a target: stop the car at 1 G. I worked through the analytical force model, improved the team’s MATLAB simulation, verified the rotors in ANSYS, then machined and finished them myself and routed the lines on the car.',
    role: [
      'Sized the system for 1 G with an analytical pedal-to-tire force model (~42 lbf pedal to ~690 lbf at the tires).',
      'Improved the team’s MATLAB brake simulation so rotor diameter, master-cylinder bore and pedal ratio could be traded off quickly.',
      'Checked rotor stress and heat in ANSYS (structural and thermal) before cutting any metal.',
      'Machined and lathe-finished the rotors; routed lines and bled the system on the car.',
    ],
    stats: [
      { value: '1 G', label: 'deceleration target' },
      { value: '~690 lbf', label: 'braking force at the tires' },
      { value: '~42 lbf', label: 'driver pedal force' },
      { value: '~16×', label: 'brake system gain' },
    ],
    pics: [
      { src: brakeMilling, caption: 'Milling a rotor blank' },
      { src: brakeGrinding, caption: 'Grinding the braking surface' },
      { src: brakeStressFEA, caption: 'ANSYS rotor stress analysis', fit: 'contain' },
      { src: brakeIntegration, caption: 'Rotor installed on the car' },
    ],
  },
  {
    n: 2,
    title: 'Bionic Wrench Manufacturing',
    meta: 'DSGN 386 · Manufacturing Engineering & Design · 2025',
    summary:
      'We reverse-engineered a commercial Bionic Wrench, then built everything needed to manufacture it: a seven-version assembly fixture, a single-operator line, the SOP, FMEA and value stream map, and a plan to scale to one million wrenches a year.',
    role: [
      'Led the fixture track design across all seven versions, from a flip-based locating fixture to the final angled, supported version.',
      'Drove the metrology and the CAD drawings; co-developed the SOP, FMEA and high-volume manufacturing plan.',
      'Planned for seasonal demand: 6 s takt time and 25 parallel cells at peak, as few as 4 off-peak.',
      'Pilot run: four good wrenches and two defective in a 30-minute timed trial (defects traced to out-of-spec jaws, not the process).',
    ],
    stats: [
      { value: '7', label: 'fixture versions' },
      { value: '3:58', label: 'pilot cycle time' },
      { value: '1M / yr', label: 'planned volume' },
      { value: '18 days', label: 'mapped lead time' },
    ],
    pics: [
      { src: wrenchV2Stand, caption: 'V2 fixture on its angled stand, with steel locating pins', fit: 'contain' },
      { src: wrenchV7Support, caption: 'V7, the final fixture', fit: 'contain' },
      { src: wrenchEquipSetup, caption: 'Single-operator line, equipment setup' },
      { src: wrenchLineLayout, caption: 'Production line layout', fit: 'contain' },
    ],
  },
  {
    n: 3,
    title: 'Water Guard',
    meta: 'Aquatic CT scanner waterproofing · 2025–2026',
    summary:
      'A removable waterproofing system that protects a ~$1M portable CT scanner at a major Chicago aquarium while it images aquatic animals. Staff were spending 45+ minutes taping plastic sheeting before every scan; the scanner was never fully protected.',
    role: [
      'Led the gantry liner geometry (an oblique frustum shape) and the overlapping seam strategy.',
      'Ran saltwater degradation and tensile tests on heat-welded LDPE seams to choose the weld design.',
      'Contributed to the FMEA and reliability analysis; synthesized the scanner manufacturer’s engineering interviews into design constraints.',
      'Assisted with fabrication of the full-scale prototype.',
    ],
    stats: [
      { value: '45 → <4 min', label: 'setup time per scan' },
      { value: '~$1M', label: 'scanner protected' },
      { value: '1 liner', label: 'replaces plastic and tape' },
      { value: 'On-site', label: 'full-scale prototype' },
    ],
    pics: [
      { src: ctScannerImg, caption: 'The scanner the system protects' },
      { src: wgInstalledFront, caption: 'Water Guard installed on the scanner' },
      { src: wgSlopeTest, caption: 'Full-scale slope test mockup' },
      { src: wgWeldLeakTest, caption: 'Weld seam leak test' },
    ],
  },
  {
    n: 4,
    title: 'Performance Bicycle Brake Caliper',
    meta: 'Design, simulation and testing · 2025',
    summary:
      'A lightweight bicycle brake caliper designed to ISO 4210 safety requirements: translated needs into metrics, used FEA and topology optimization to cut mass, printed it in SLS Nylon-12, and tested it on a real bike.',
    role: [
      'Scheduling lead for the team.',
      'Led the stiffness-versus-mass trade-off evaluation and contributed to the FEA iteration decisions.',
      'Helped reduce the design space and validate the prototype on the bicycle.',
    ],
    stats: [
      { value: '35.5 g', label: 'final mass (−14%)' },
      { value: '11.3 m', label: 'braking distance, iteration 1' },
      { value: '$8.26', label: 'cost per part' },
      { value: 'ISO 4210', label: 'safety standard' },
    ],
    pics: [
      { src: bikeTopoOpt, caption: 'Topology optimization', fit: 'contain' },
      { src: bikeFirstFEA, caption: 'FEA validation of the first design', fit: 'contain' },
      { src: bikePrintedCaliper, caption: 'SLS Nylon-12 caliper' },
      { src: bikeNeedsTable, caption: 'Performance targets derived from the safety standard', fit: 'contain' },
    ],
  },
  {
    n: 5,
    title: 'Smart Sheet Smith',
    meta: 'Advanced Intelligent Manufacturing Lab · NSF ERC-HAMMER · 2026',
    summary:
      'A five-agent AI system that turns a 2D sheet-metal drawing into a verified bending process plan, with no 3D CAD model and no labeled data. Presented as a poster at MSEC 2026 / NAMRC54; I’m a co-author.',
    role: [
      'Built the evaluation data for the Tracer Agent: CAD parts, multi-view drawings and hand-derived bend math.',
      'Hand-labeled ground truth, logged the Tracer’s failure modes, and reviewed Engineering Agent output as the manufacturing engineer (K-factor, inner-radius bend deduction, V-die ranges).',
      'Wrote a SolidWorks VBA pipeline that randomizes a part’s dimensions and exports hundreds of valid drawings, cutting data creation from days to minutes.',
      'Gathered and sorted the engineering references for the system’s knowledge base.',
    ],
    stats: [
      { value: '5', label: 'cooperating AI agents' },
      { value: '50', label: 'drawings in the SIMBA dataset' },
      { value: '6', label: 'judge metrics' },
      { value: 'Hundreds', label: 'drawings generated by script' },
    ],
    pics: [{ src: sheetSmithPoster, caption: 'The Smart Sheet Smith poster at MSEC 2026 / NAMRC54', fit: 'contain' }],
    tall: true,
    pipeline: ['Vision Agent', 'Tracer Agent', 'Geometric Judge', 'Engineering Agent', 'Performance Judge'],
  },
  {
    n: 6,
    title: 'ExtendIt',
    meta: 'Lecture-hall desk extension · 2024',
    summary:
      'A permanent, hinged desk extension for cramped lecture-hall desks, developed from user interviews through mockups to a load-tested prototype.',
    role: [
      'Ran 22 user interviews and led opportunity evaluation and the alternatives matrix.',
      'Contributed to the hinge selection and mechanical design; built the load-testing rig and performed the structural tests.',
      'Helped develop the business model and cost structure.',
    ],
    stats: [
      { value: '+50%', label: 'usable desk surface' },
      { value: '8 / 10', label: 'users preferred it' },
      { value: '30+ lb', label: 'held, under ½″ deflection' },
      { value: '7', label: 'physical mockups tested' },
    ],
    pics: [
      { src: extendItHero, caption: 'Final prototype in a lecture hall', fit: 'contain' },
      { src: extendItLoadTest, caption: 'Load and deflection testing' },
      { src: extendItHinge, caption: 'Locking hinge under the desk' },
      { src: extendItSketch, caption: 'Early hinge sketch', fit: 'contain' },
    ],
  },
];

const shopPics: Pic[] = [
  { src: engAssemblyBench, caption: 'Assembling a mechanism at the bench' },
  { src: engCopperBrazing, caption: 'Brazing copper tubing' },
  { src: engBrazingCloseup, caption: 'Torch-brazing a joint' },
  { src: engHammerForming, caption: 'Hand-forming metal' },
  { src: engIronPour1, caption: 'Molten iron at a casting pour' },
  { src: engWaterjet, caption: 'Abrasive waterjet cutting' },
  { src: personalTeslaUnderCar2, caption: 'Working under a Tesla at a repair shop' },
  { src: brakeMilling, caption: 'Milling brake rotors' },
];

const coverPics: Pic[] = [
  { src: brakeMilling, caption: 'Milling brake rotors' },
  { src: engBrazingCloseup, caption: 'Torch-brazing copper' },
  { src: engHammerForming, caption: 'Hand-forming metal' },
  { src: personalTeslaUnderCar2, caption: 'Tesla repair' },
];

const moreProjects = [
  ['Flexible Tactile Sensors', 'Resistive soft sensors and near-field electrospinning'],
  ['Midwest EV Openpilot Retrofit', 'Enclosure design for a Tesla Model S retrofit'],
  ['P1 Motor Club Track Model', 'Large 3D-printed model of a racetrack property'],
  ['Drivetrain Efficiency Test Rig', 'Baja SAE CVT and gearbox loss measurement'],
  ['SME Dorm Accessibility Project', 'Competition team lead, in concept development'],
  ['StimSpin, Patchwork Plush, Iron Sand Casting', 'and more design and fabrication work'],
];

const TOTAL = pages.length + 3; // cover + projects + shop + closing

function Footer({ page }: { page: number }) {
  return (
    <div className="foot">
      <span>Asher Straus · Portfolio</span>
      <a href={SITE}>{SITE_LABEL}</a>
      <span>{page} / {TOTAL}</span>
    </div>
  );
}

function PicGrid({ pics, cols, h }: { pics: Pic[]; cols: number; h?: number }) {
  return (
    <div className="grid" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
      {pics.map((p) => (
        <figure key={p.caption}>
          <div className="imgbox" style={h ? { height: h } : undefined}>
            <img src={p.src} alt={p.caption} style={{ objectFit: p.fit ?? 'cover' }} loading="eager" decoding="sync" />
          </div>
          <figcaption>{p.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function PortfolioPdfPage() {
  return (
    <div className="pdf-root">
      <style>{`
        .pdf-root { background: #d9d4cc; padding: 24px 0; }
        .pdf-root * { box-sizing: border-box; }
        .pdf-page { position: relative; width: 816px; height: 1056px; margin: 0 auto 24px; background: #fff; color: #1a1a1a;
          overflow: hidden; page-break-after: always; break-after: page; font-size: 12.5px; line-height: 1.45;
          font-family: 'Segoe UI', Inter, Helvetica, Arial, sans-serif; }
        .pdf-page:last-child { page-break-after: auto; break-after: auto; }
        .navy { color: #1B2D5B; }
        .band { background: #1B2D5B; color: #fff; padding: 30px 48px 22px; }
        .band .num { font-size: 11px; letter-spacing: .22em; text-transform: uppercase; opacity: .65; }
        .band h2 { font-size: 30px; line-height: 1.1; margin: 4px 0 6px; font-weight: 700; letter-spacing: .01em; }
        .band .meta { font-size: 12.5px; opacity: .85; }
        .body { padding: 22px 48px 0; }
        .summary { font-size: 14px; line-height: 1.5; color: #2a2a2a; }
        .stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin: 18px 0 16px; }
        .stat { border: 1.5px solid #1B2D5B; border-radius: 4px; padding: 9px 8px 8px; text-align: center; }
        .stat b { display: block; font-size: 19px; color: #1B2D5B; line-height: 1.1; }
        .stat span { display: block; font-size: 10.5px; color: #555; margin-top: 3px; line-height: 1.25; }
        .pipe { display: flex; align-items: stretch; gap: 0; margin: 0 0 16px; }
        .pipe-item { display: flex; align-items: center; flex: 1; }
        .pipe-item span { flex: 1; text-align: center; background: #eef1f8; border: 1px solid #1B2D5B; border-radius: 4px; padding: 7px 4px; font-size: 11px; font-weight: 600; color: #1B2D5B; }
        .pipe-item i { font-style: normal; color: #1B2D5B; padding: 0 3px; font-size: 13px; }
        .strip { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 18px; }
        .strip .imgbox { height: 130px; }
        h3 { font-size: 11.5px; letter-spacing: .14em; text-transform: uppercase; color: #1B2D5B; margin: 0 0 6px;
          border-bottom: 1.5px solid #1B2D5B; padding-bottom: 2px; }
        ul { margin: 0 0 16px; padding-left: 17px; }
        li { margin: 0 0 4px; }
        .grid { display: grid; gap: 12px; margin-top: 4px; }
        figure { margin: 0; }
        .imgbox { background: #f1eee8; border-radius: 3px; overflow: hidden; height: 205px; }
        .imgbox img { width: 100%; height: 100%; display: block; }
        figcaption { font-size: 10.5px; color: #555; margin-top: 4px; line-height: 1.3; }
        .foot { position: absolute; left: 48px; right: 48px; bottom: 22px; display: flex; justify-content: space-between;
          font-size: 10.5px; color: #777; border-top: 1px solid #ddd; padding-top: 8px; }
        .foot a { color: #1B2D5B; font-weight: 600; text-decoration: none; }
        .cover-hero { height: 470px; position: relative; background: #222; }
        .cover-hero img { width: 100%; height: 100%; object-fit: cover; object-position: center 40%; display: block; }
        .cover-hero .shade { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(27,45,91,.15) 0%, rgba(27,45,91,.88) 100%); }
        .cover-hero .title { position: absolute; left: 48px; right: 48px; bottom: 34px; color: #fff; }
        .cover-hero .title small { letter-spacing: .24em; text-transform: uppercase; font-size: 12px; opacity: .85; }
        .cover-hero .title h1 { font-size: 54px; line-height: 1; margin: 6px 0 8px; font-weight: 700; letter-spacing: .02em; }
        .cover-hero .title p { font-size: 15px; margin: 0; opacity: .92; }
        .linkbtn { display: inline-block; background: #1B2D5B; color: #fff !important; padding: 10px 18px; border-radius: 999px;
          font-weight: 700; text-decoration: none; font-size: 13px; letter-spacing: .03em; }
        .toc { display: grid; grid-template-columns: 1fr 1fr; gap: 6px 28px; margin: 6px 0 0; }
        .toc div { display: flex; gap: 10px; font-size: 13px; }
        .toc b { color: #1B2D5B; width: 18px; }
        .more { display: grid; grid-template-columns: 1fr 1fr; gap: 10px 22px; }
        .more div { border-left: 3px solid #1B2D5B; padding-left: 10px; }
        .more b { display: block; font-size: 13px; }
        .more span { font-size: 11.5px; color: #555; }
        @page { size: 8.5in 11in; margin: 0; }
        @media print {
          html, body { background: #fff !important; margin: 0; }
          .pdf-root { background: #fff; padding: 0; }
          .pdf-page { margin: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>

      {/* COVER */}
      <section className="pdf-page">
        <div className="cover-hero">
          <img src={heroBg} alt="Asher Straus working at a bench" loading="eager" decoding="sync" />
          <div className="shade" />
          <div className="title">
            <small>Engineer &amp; Designer</small>
            <h1>Asher Straus</h1>
            <p>Manufacturing &amp; Design Engineering · Northwestern University, Class of 2027</p>
          </div>
        </div>
        <div className="body" style={{ paddingTop: 26 }}>
          <p className="summary" style={{ marginTop: 0 }}>
            I design, analyze and build: from brake rotors machined on a mill, to a fixture for a million-unit-a-year line, to an AI system
            that plans sheet-metal bending. This is a selection of that work, with the full portfolio, more projects and photos online.
          </p>
          <p style={{ margin: '14px 0 20px' }}>
            <a className="linkbtn" href={SITE}>View the full portfolio &rarr; {SITE_LABEL}</a>
          </p>
          <h3>Selected projects</h3>
          <div className="toc">
            {pages.map((p) => (
              <div key={p.n}><b>{p.n}</b><span>{p.title}</span></div>
            ))}
            <div><b>+</b><span>Hands-on shop work, and more online</span></div>
          </div>
          <div style={{ marginTop: 22, fontSize: 12.5, color: '#444' }}>
            asherstraus2027@u.northwestern.edu · (914) 924-6220 · Tampa, FL<br />
            LinkedIn: linkedin.com/in/asher-straus-0330452a9
          </div>
          <div className="strip">
            {coverPics.map((c) => (
              <figure key={c.caption}><div className="imgbox"><img src={c.src} alt={c.caption} style={{ objectFit: 'cover' }} loading="eager" decoding="sync" /></div><figcaption>{c.caption}</figcaption></figure>
            ))}
          </div>
        </div>
        <Footer page={1} />
      </section>

      {/* PROJECT PAGES */}
      {pages.map((p, i) => (
        <section className="pdf-page" key={p.n}>
          <div className="band">
            <div className="num">Project {p.n}</div>
            <h2>{p.title}</h2>
            <div className="meta">{p.meta}</div>
          </div>
          <div className="body">
            <p className="summary" style={{ marginTop: 0 }}>{p.summary}</p>
            <div className="stats">
              {p.stats.map((s) => (
                <div className="stat" key={s.label}><b>{s.value}</b><span>{s.label}</span></div>
              ))}
            </div>
            <h3>What I did</h3>
            <ul>{p.role.map((r) => <li key={r}>{r}</li>)}</ul>
            {p.pipeline && (
              <div className="pipe">
                {p.pipeline.map((a, k) => (
                  <div key={a} className="pipe-item"><span>{a}</span>{k < p.pipeline!.length - 1 && <i>→</i>}</div>
                ))}
              </div>
            )}
            <PicGrid pics={p.pics} cols={p.pics.length === 1 ? 1 : p.pics.length === 3 ? 3 : 2} h={p.tall ? 470 : p.pics.length === 3 ? 200 : undefined} />
          </div>
          <Footer page={i + 2} />
        </section>
      ))}

      {/* IN THE SHOP */}
      <section className="pdf-page">
        <div className="band">
          <div className="num">Hands-on</div>
          <h2>In the Shop</h2>
          <div className="meta">Machining, brazing, forming, casting, and repair</div>
        </div>
        <div className="body">
          <p className="summary" style={{ marginTop: 0 }}>
            I learn by making. Most of my projects run through a shop: the mill and surface grinder, the torch, the waterjet, the foundry, and the bench.
          </p>
          <PicGrid pics={shopPics} cols={2} h={150} />
        </div>
        <Footer page={pages.length + 2} />
      </section>

      {/* CLOSING */}
      <section className="pdf-page">
        <div className="band">
          <div className="num">More</div>
          <h2>There&rsquo;s more online</h2>
          <div className="meta">Full write-ups, more projects, and a photo gallery</div>
        </div>
        <div className="body">
          <p className="summary" style={{ marginTop: 0 }}>
            The site has a complete write-up for each project here, plus the work below, with more photos, drawings, and test data.
          </p>
          <p style={{ margin: '14px 0 24px' }}>
            <a className="linkbtn" href={SITE}>{SITE_LABEL}</a>
          </p>
          <h3>Also on the site</h3>
          <div className="more">
            {moreProjects.map(([t, d]) => (
              <div key={t}><b>{t}</b><span>{d}</span></div>
            ))}
          </div>
          <h3 style={{ marginTop: 28 }}>Contact</h3>
          <p style={{ margin: 0 }}>
            asherstraus2027@u.northwestern.edu<br />
            (914) 924-6220<br />
            LinkedIn: linkedin.com/in/asher-straus-0330452a9
          </p>
        </div>
        <Footer page={pages.length + 3} />
      </section>
    </div>
  );
}
