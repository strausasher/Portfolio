// Print-only layout rendered to public/Asher_Straus_Portfolio.pdf.
// Visit /portfolio-pdf to preview it; print to PDF with margins set to "None".
// Images come from src/assets/pdfbook/ — right-sized JPEGs, because importing the
// site's full-size .webp assets here produces a ~48 MB file.
import coverHero from '../../assets/pdfbook/coverHero.jpg';

import wrenchV7Support from '../../assets/pdfbook/wrenchV7Support.jpg';
import wrenchHero from '../../assets/pdfbook/wrenchHero.jpg';
import wrenchEquipSetup from '../../assets/pdfbook/wrenchEquipSetup.jpg';
import wrenchVSM from '../../assets/pdfbook/wrenchVSM.jpg';

import brakeRotorCAD2 from '../../assets/pdfbook/brakeRotorCAD2.jpg';
import brakeThermalSim from '../../assets/pdfbook/brakeThermalSim.jpg';
import brakeMilling from '../../assets/pdfbook/brakeMilling.jpg';
import brakeIntegration from '../../assets/pdfbook/brakeIntegration.jpg';

import wgInstalledFront from '../../assets/pdfbook/wgInstalledFront.jpg';
import wgInstallAction from '../../assets/pdfbook/wgInstallAction.jpg';
import wgLinerCad from '../../assets/pdfbook/wgLinerCad.jpg';
import ctWeldChart from '../../assets/pdfbook/ctWeldChart.jpg';

import sheetSmithPoster from '../../assets/pdfbook/sheetSmithPoster.jpg';

import bikeTopoOpt from '../../assets/pdfbook/bikeTopoOpt.jpg';
import bikeFirstFEA from '../../assets/pdfbook/bikeFirstFEA.jpg';
import bikePrintedCaliper from '../../assets/pdfbook/bikePrintedCaliper.jpg';

import extendItHero from '../../assets/pdfbook/extendItHero.jpg';
import extendItLoadTestNew from '../../assets/pdfbook/extendItLoadTestNew.jpg';
import extendItUserTestNew from '../../assets/pdfbook/extendItUserTestNew.jpg';
import extendItHinge from '../../assets/pdfbook/extendItHinge.jpg';

import engAssemblyBench from '../../assets/pdfbook/engAssemblyBench.jpg';
import engBrazingCloseup from '../../assets/pdfbook/engBrazingCloseup.jpg';
import engHammerForming from '../../assets/pdfbook/engHammerForming.jpg';
import engIronMoldGlowing from '../../assets/pdfbook/engIronMoldGlowing.jpg';
import engWaterjet from '../../assets/pdfbook/engWaterjet.jpg';
import engMachinedMold from '../../assets/pdfbook/engMachinedMold.jpg';
import personalTeslaUnderCar2 from '../../assets/pdfbook/personalTeslaUnderCar2.jpg';
import sensorNfesNozzle from '../../assets/pdfbook/sensorNfesNozzle.jpg';
import sensorFinished1 from '../../assets/pdfbook/sensorFinished1.jpg';
import engSolidworksPart from '../../assets/pdfbook/engSolidworksPart.jpg';
import engCopperBrazing from '../../assets/pdfbook/engCopperBrazing.jpg';
import engBajaCar from '../../assets/pdfbook/engBajaCar.jpg';

const SITE = 'strausasher.github.io/Portfolio';
const EMAIL = 'asherstraus2027@u.northwestern.edu';
const PHONE = '(914) 924-6220';
const LINKEDIN = 'linkedin.com/in/asher-straus-0330452a9';

/* ------------------------------------------------------------------ pieces */

function Page({ children, n }: { children: React.ReactNode; n?: number }) {
  return (
    <section className="page" id={n ? `p${n}` : undefined}>
      {children}
      {n ? (
        <div className="folio">
          <span>Asher Straus — Engineering Portfolio</span>
          <span>{String(n).padStart(2, '0')}</span>
        </div>
      ) : null}
    </section>
  );
}

function Metrics({ items }: { items: [string, string][] }) {
  return (
    <div className="metrics">
      {items.map(([v, l]) => (
        <div className="metric" key={l}>
          <div className="metric-v">{v}</div>
          <div className="metric-l">{l}</div>
        </div>
      ))}
    </div>
  );
}

function Fig({ src, cap, h, fit }: { src: string; cap: string; h: number; fit?: 'contain' }) {
  return (
    <figure className="fig">
      <div className={'fig-img' + (fit === 'contain' ? ' fig-contain' : '')} style={{ height: h }}>
        <img src={src} alt="" />
      </div>
      <figcaption>{cap}</figcaption>
    </figure>
  );
}

function ProjectHead({
  num,
  title,
  kicker,
  org,
  year,
  lead,
}: {
  num: string;
  title: string;
  kicker: string;
  org: string;
  year: string;
  lead: string;
}) {
  return (
    <div className="hgroup">
      <div className="phead">
        <span className="pnum">{num}</span>
        <span className="pkick">{kicker}</span>
        <span className="pyear">{year}</span>
      </div>
      <h2 className="ptitle">{title}</h2>
      <div className="porg">{org}</div>
      <p className="plead">{lead}</p>
    </div>
  );
}

function Did({ items }: { items: string[] }) {
  return (
    <div className="did">
      <h3 className="h-label">What I did</h3>
      <ul>
        {items.map((t) => (
          <li key={t.slice(0, 24)}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

function Tools({ list }: { list: string }) {
  return (
    <div className="tools">
      <span className="tools-l">Tools</span>
      {list}
    </div>
  );
}

/* -------------------------------------------------------------------- page */

export function PortfolioPdfPage() {
  return (
    <div className="book">
      <style>{css}</style>

      {/* ============================================================ COVER */}
      <section className="page cover" id="p1">
        <img className="cover-img" src={coverHero} alt="" />
        <div className="cover-scrim" />
        <div className="cover-body">
          <div className="cover-top">
            <span className="rule-sm" />
            <span className="cover-eyebrow">Engineering Portfolio · 2026</span>
          </div>
          <div className="cover-mid">
            <h1 className="cover-name">
              ASHER
              <br />
              STRAUS
            </h1>
            <div className="cover-role">Manufacturing &amp; Design Engineer</div>
            <p className="cover-tag">
              I design parts and the processes that make them — moving between CAD, simulation and the
              shop floor, and testing until the model and the real thing agree.
            </p>
          </div>
          <div className="cover-foot">
            <div className="cover-contact">
              <span>{EMAIL}</span>
              <span>{PHONE}</span>
              <span>{LINKEDIN}</span>
            </div>
            <a className="cover-link" href={`https://${SITE}`}>
              {SITE}
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================== PROFILE */}
      <Page n={2}>
        <div className="pad">
          <div className="hgroup">
            <div className="phead">
              <span className="pnum">—</span>
              <span className="pkick">Profile</span>
              <span className="pyear">Northwestern University</span>
            </div>
            <h2 className="ptitle">Manufacturing &amp; Design Engineer</h2>
            <p className="plead">
              I am a Manufacturing and Design Engineering student at Northwestern, with a minor in Art and
              certificates in Segal Design and Robotics. I started wrenching on kart engines at 13, and that
              instinct still shapes how I work: model it, build it, find where the two disagree, and fix the
              real one. The projects in this book span fixture and production design, vehicle systems,
              simulation-driven structures, medical-equipment reliability, and manufacturing research.
            </p>
          </div>

          <div className="two">
            <div>
              <h3 className="h-label">Education</h3>
              <div className="ed">
                <div className="ed-row">
                  <b>Northwestern University</b>
                  <span>Sept 2023 – Mar 2028 (expected)</span>
                </div>
                <div className="ed-sub">McCormick School of Engineering · Evanston, IL</div>
                <div className="ed-deg">B.S. Manufacturing &amp; Design Engineering</div>
                <div className="ed-sub">Minor in Art · Segal Design Certificate · Robotics Certificate</div>
                <div className="ed-sub">GPA 3.6 / 4.0 cumulative · 3.9 / 4.0 since sophomore year</div>
              </div>

              <h3 className="h-label mt">Experience</h3>
              <div className="exp">
                <div className="exp-row">
                  <b>Siemens Healthineers</b>
                  <span>Jun 2026 – Present</span>
                </div>
                <div className="exp-sub">Mechanical Engineering Co-op, Molecular Imaging</div>
                <p>
                  CAD models and drawings for SPECT and PET scanner components — resolving interferences,
                  applying GD&amp;T, and designing fixtures and brackets in Siemens NX. Contributing to a
                  multi-axis stage for the SPECT research team.
                </p>
              </div>
              <div className="exp">
                <div className="exp-row">
                  <b>Advanced Intelligent Manufacturing Lab</b>
                  <span>Nov 2025 – Apr 2026</span>
                </div>
                <div className="exp-sub">Researcher · NSF ERC-HAMMER · Northwestern</div>
                <p>
                  Co-author on the MSEC 2026 / NAMRC54 poster for Smart Sheet Smith. Built the evaluation
                  corpus and an automated drawing-generation pipeline; fabricated flexible tactile sensors.
                </p>
              </div>
              <div className="exp">
                <div className="exp-row">
                  <b>P1 Motor Club</b>
                  <span>Apr 2023 – Present</span>
                </div>
                <div className="exp-sub">Virtual Test Driver, Research &amp; Promotions Intern</div>
                <p>
                  Test new track layouts in simulation and feed performance findings back to the engineers
                  shaping the design.
                </p>
              </div>
              <div className="exp">
                <div className="exp-row">
                  <b>MIT Beaverworks Summer Institute</b>
                  <span>Jun – Aug 2024</span>
                </div>
                <div className="exp-sub">Teaching Assistant, “Basics of ASICs”</div>
              </div>

              <h3 className="h-label mt">Relevant Coursework</h3>
              <div className="cap-v">
                Manufacturing Engineering Design (DFM) · Computer Integrated Manufacturing · Geometry &amp;
                Manufacturing · Mechanical Design &amp; Manufacturing · Materials Selection · Mechatronics ·
                Mechanics of Materials · Electronics Design · Human-Centered Product Design · Optimization
              </div>

              <h3 className="h-label mt">Clubs</h3>
              <div className="cap-v">
                Northwestern Formula Racing (FSAE) · Baja SAE · Combat Robotics · SME Student Chapter
              </div>
            </div>

            <div>
              <h3 className="h-label">Capabilities</h3>
              <div className="cap">
                <div className="cap-k">Design &amp; CAD</div>
                <div className="cap-v">
                  Siemens NX · SolidWorks · Onshape · AutoCAD / Civil 3D · GD&amp;T · engineering drawings ·
                  fixture &amp; jig design · DFM / DFR · snap-fit and compliant design
                </div>
                <div className="cap-k">Analysis</div>
                <div className="cap-v">
                  ANSYS FEA · topology optimization · thermal simulation · MATLAB · Python · FMEA · cost
                  modeling · lean / value stream mapping · line balancing
                </div>
                <div className="cap-k">Fabrication</div>
                <div className="cap-v">
                  CNC, mill &amp; lathe · waterjet · laser cutting · 3D printing (FDM, SLS, PETG) · welding ·
                  brazing · sand &amp; iron casting · sheet metal · metrology
                </div>
              </div>

              <h3 className="h-label mt">In this portfolio</h3>
              <ol className="toc">
                <li>
                  <span>Bionic Wrench Manufacturing</span>
                  <i>Fixture design &amp; production planning</i>
                  <em>03</em>
                </li>
                <li>
                  <span>Formula SAE Brake System</span>
                  <i>Vehicle systems, simulation &amp; machining</i>
                  <em>04</em>
                </li>
                <li>
                  <span>Water Guard</span>
                  <i>Medical equipment reliability</i>
                  <em>05</em>
                </li>
                <li>
                  <span>Smart Sheet Smith</span>
                  <i>Manufacturing AI research</i>
                  <em>06</em>
                </li>
                <li>
                  <span>Bicycle Brake Caliper</span>
                  <i>Simulation-driven structural design</i>
                  <em>07</em>
                </li>
                <li>
                  <span>ExtendIt</span>
                  <i>Human-centered product development</i>
                  <em>08</em>
                </li>
                <li>
                  <span>Hands-On Capability</span>
                  <i>Fabrication &amp; lab work</i>
                  <em>09</em>
                </li>
                <li>
                  <span>Selected Additional Work</span>
                  <i>Research, vehicles &amp; shop projects</i>
                  <em>10</em>
                </li>
              </ol>
            </div>
          </div>

          <div className="row3 profile-strip">
            <Fig src={engSolidworksPart} cap="Part modelling and drawings in CAD" h={176} />
            <Fig src={engCopperBrazing} cap="Brazing a copper assembly in the shop" h={176} />
            <Fig src={engBajaCar} cap="Northwestern Baja SAE off-road racer" h={176} />
          </div>
        </div>
      </Page>

      {/* ==================================================== 01 — WRENCH */}
      <Page n={3}>
        <div className="pad">
          <ProjectHead
            num="01"
            kicker="Manufacturing Engineering · Fixture Design · Production Planning"
            title="Bionic Wrench Manufacturing"
            org="DSGN 386 — Manufacturing Engineering & Design · Northwestern · with Peter Wang"
            year="2025"
            lead="Reverse-engineered a commercial Bionic Wrench, then built everything needed to manufacture it: a seven-iteration assembly fixture, a documented single-operator line, and a production plan scaled to one million units a year — proven in a live 30-minute timed trial."
          />
          <Metrics
            items={[
              ['7', 'Fixture iterations'],
              ['3:58', 'Cycle time per unit'],
              ['1M', 'Units / year plan'],
              ['$10.22', 'Cost per unit'],
            ]}
          />
          <div className="split">
            <Did
              items={[
                'Led the track geometry across all seven fixture versions and drove the metrology and dimensioned CAD drawing set.',
                'Dissected and dimensioned every component with calipers, micrometers and an optical comparator to infer fits, assembly order and the likely process for each part.',
                'Mapped the manufacturing and assembly flows. The maps exposed jaw riveting as the bottleneck and showed a two-worker layout left the second operator idle — so we consolidated to one.',
                'Wrote the SOP, FMEA and value stream map, and balanced a three-station single-operator line to 246 s per wrench.',
                'Sized the high-volume plan: 6 s takt at peak demand, 25 parallel U-shaped cells, ~$1.2M line investment, and a sub-five-minute pin-plate swap between jaw variants.',
              ]}
            />
            <Fig
              src={wrenchV7Support}
              cap="V7 — the final fixture, with the support that braces the inner plates when the wrench is fully open."
              h={196}
              fit="contain"
            />
          </div>
          <div className="result">
            <b>Result</b> The timed trial produced four good wrenches at a 3:58 average cycle time, matching the
            planned rate. Both rejects traced to out-of-spec incoming jaws rather than to the process.
          </div>
          <div className="row3">
            <Fig src={wrenchHero} cap="The commercial wrench we reverse-engineered." h={235} fit="contain" />
            <Fig src={wrenchEquipSetup} cap="The single-operator line: small riveter, assembly bench, large riveter." h={235} />
            <Fig src={wrenchVSM} cap="Value stream map — 18-day lead time against ~16 min of process time." h={235} fit="contain" />
          </div>
          <Tools list="SolidWorks · Metrology · Waterjet · 3D printing · Lean / VSM · FMEA · Line balancing · Cost modeling" />
        </div>
      </Page>

      {/* ===================================================== 02 — BRAKES */}
      <Page n={4}>
        <div className="pad">
          <ProjectHead
            num="02"
            kicker="Vehicle Systems · Rotor Design · Simulation · Manufacturing"
            title="Formula SAE Brake System"
            org="Northwestern Formula Racing — Suspension Member"
            year="2024 – Present"
            lead="Designed the braking system to a 1 G deceleration target, from the analytical force model through ANSYS structural and thermal verification — then machined the rotors, routed the lines and bled the system on the car."
          />
          <Metrics
            items={[
              ['1 G', 'Deceleration target'],
              ['690 lbf', 'Tire braking force'],
              ['42 lbf', 'Driver pedal force'],
              ['~16×', 'System gain'],
            ]}
          />
          <div className="split">
            <Did
              items={[
                'Built the analytical model of the full force chain — pedal ratio, master cylinder pressure, caliper clamp force, pad friction, rotor torque, tire force, vehicle deceleration.',
                'Improved the team’s MATLAB brake simulation so rotor diameter, master cylinder bore and pedal ratio could be swept quickly, and tuned the front/rear bias to cross over without rear lockup.',
                'Designed the rotor in CAD, balancing effective braking radius and thermal mass against rotational inertia and packaging inside the wheel.',
                'Verified in ANSYS: stress and deflection under braking load, then peak rotor temperature and heat distribution between braking events to rule out fade and warping.',
                'Planned the hydraulic routing and fittings BOM; machined, drilled and lathe-finished the rotors, installed the calipers and master cylinders, and bled the system.',
              ]}
            />
            <Fig src={brakeRotorCAD2} cap="Rear rotor CAD — slotting and vane pattern set by thermal mass and inertia." h={196} fit="contain" />
          </div>
          <div className="result">
            <b>Result</b> A fully modelled, simulated and manufactured brake system. The simulation work also left
            the team a framework for evaluating rotor size, master cylinder and bias changes on future cars.
          </div>
          <div className="row3">
            <Fig src={brakeThermalSim} cap="Thermal simulation of the rear rotor at t = 20 s of braking." h={235} fit="contain" />
            <Fig src={brakeMilling} cap="Machining rotor features on the mill." h={235} />
            <Fig src={brakeIntegration} cap="Rotor and upright integrated on the car." h={235} />
          </div>
          <Tools list="SolidWorks · ANSYS (structural & thermal) · MATLAB · Mill, lathe & surface grinder · Hydraulic system integration" />
        </div>
      </Page>

      {/* ================================================= 03 — WATER GUARD */}
      <Page n={5}>
        <div className="pad">
          <ProjectHead
            num="03"
            kicker="Design for Reliability · Medical Equipment · Polymer Testing"
            title="Water Guard"
            org="Client project — major Chicago aquarium · team of five"
            year="2025 – 2026"
            lead="A removable, reusable waterproofing system that protects a ~$1M portable CT scanner during aquatic animal imaging — replacing 45 minutes of plastic sheeting and painters tape with a pre-formed liner that installs in under four."
          />
          <Metrics
            items={[
              ['45 → 4 min', 'Setup time'],
              ['~$1M', 'Asset protected'],
              ['12.5°', 'Runoff slope'],
              ['106 N', 'Weld strength, wet'],
            ]}
          />
          <div className="split">
            <Did
              items={[
                'Led the gantry liner geometry — an oblique frustum that turns the bore into a sloped surface draining to the rear, sized to hold a 12.5° slope inside the 6″ clearance beneath the gantry.',
                'Designed the overlapping seam strategy from tensile data and ran the saltwater degradation study on heat-welded LDPE (n = 5 per condition, 24 h at 1.025 g/cm³): 94.8 N dry against 106.4 N after exposure, failing cohesively rather than at the weld.',
                'Validated the runoff slope on a full-scale LDPE mockup, designing to the wrinkled-liner case rather than the taut one because the liner will wrinkle in storage.',
                'Synthesized NeuroLogica engineering interviews into hard design constraints, and contributed the FMEA that ranked seam integrity, attachment and runoff as the controlling risks.',
                'Added a clear PETG laser window after on-site testing showed the liner diffused the positioning laser past 15–20 cm — staff required it fully visible.',
              ]}
            />
            <Fig src={wgInstallAction} cap="Fitting the gantry liner to the scanner on site." h={300} />
          </div>
          <div className="result">
            <b>Result</b> A full-scale prototype — sloped liner, front and back faces, laser window and runoff
            collector — handed over ready for use, with installation and field-repair instructions.
          </div>
          <div className="row3">
            <Fig src={wgInstalledFront} cap="The finished liner installed on the scanner." h={250} />
            <Fig src={wgLinerCad} cap="Liner architecture: gantry frustum, faces and rear collection." h={250} fit="contain" />
            <Fig src={ctWeldChart} cap="LDPE weld strength, dry control against 24 h saltwater exposure." h={250} fit="contain" />
          </div>
          <Tools list="Polymer materials testing · Heat welding · Tensile & leak testing · FMEA · Stakeholder interviews · Design for serviceability" />
        </div>
      </Page>

      {/* ================================================ 04 — SHEET SMITH */}
      <Page n={6}>
        <div className="pad">
          <ProjectHead
            num="04"
            kicker="Research · Manufacturing AI · Multi-Agent LLM Systems"
            title="Smart Sheet Smith"
            org="Advanced Intelligent Manufacturing Lab, Northwestern · NSF ERC-HAMMER (EEC-2133630)"
            year="2025 – 2026"
            lead="A five-agent system that turns a 2D sheet-metal drawing into a verified, physics-grounded bending process plan — no 3D CAD model and no labeled training data. Co-authored and presented at MSEC 2026 / NAMRC54."
          />
          <Metrics
            items={[
              ['5', 'Specialized agents'],
              ['50', 'Industrial drawings'],
              ['2', 'Self-correcting loops'],
              ['100s', 'Drawings auto-generated'],
            ]}
          />

          <div className="pipe">
            <div className="pipe-step">
              Vision<span>layout &amp; thickness</span>
            </div>
            <div className="pipe-arrow">→</div>
            <div className="pipe-step hi">
              Tracer<span>geometry → JSON</span>
            </div>
            <div className="pipe-arrow">⇄</div>
            <div className="pipe-step">
              Geometric Judge<span>reference-free</span>
            </div>
            <div className="pipe-arrow">→</div>
            <div className="pipe-step">
              Engineering<span>physics via RAG</span>
            </div>
            <div className="pipe-arrow">⇄</div>
            <div className="pipe-step">
              Performance Judge<span>plan check</span>
            </div>
            <div className="pipe-arrow">→</div>
            <div className="pipe-out">Flat-pattern blueprint</div>
          </div>

          <div className="split">
            <Did
              items={[
                'Worked on the Tracer Agent — the stage that extracts a drawing’s full geometric topology into structured JSON — and owned much of the data foundation it was developed and validated against.',
                'Modelled the parts in CAD, produced the multi-view orthographic drawings, hand-derived the ground truth, and did the bend math — bend allowances, developed lengths, segment sequences — case by case.',
                'Applied a manufacturability check the math alone cannot: reasoning through the forming process to judge whether a plan was actually realizable on a press brake. That drove several corrections to bend ordering and tool access.',
                'Reviewed Engineering Agent output as the manufacturing engineer in the loop — found bend deduction computed from the outer instead of the inner radius, a K-factor that had to be fixed before deduction, and V-die selection reported as one number rather than a realistic 8t–10t range.',
                'Built a SolidWorks VBA pipeline that randomizes a base model’s dimensions and exports fully-dimensioned drawings automatically, with a rebuild and “safe box” check that retries failures instead of emitting bad samples — cutting dataset creation from days to minutes at an 85–90% yield across three part families.',
              ]}
            />
            <Fig
              src={sheetSmithPoster}
              cap="Our poster at MSEC 2026 / NAMRC54, presented by Zahra Sadeghi, the graduate student I worked with."
              h={214}
            />
          </div>
          <div className="result">
            <b>Result</b> The reference-free judge–patcher loop lifted accuracy substantially over the single-pass
            baseline without a single labeled example — an automated path from a 2D print to a verified bending
            plan for job shops that 3D-CAD pipelines cannot serve.
          </div>

          <h3 className="h-label">The six checks that drive self-correction</h3>
          <div className="checks">
            <div className="check">
              <b>SSA</b>
              <span>Segment sequence alignment</span>
              <i>Geometric judge</i>
            </div>
            <div className="check">
              <b>RAA</b>
              <span>Feature anchor accuracy</span>
              <i>Geometric judge</i>
            </div>
            <div className="check">
              <b>GDD</b>
              <span>Developed length deviation</span>
              <i>Geometric judge</i>
            </div>
            <div className="check">
              <b>PMA</b>
              <span>Physics math accuracy</span>
              <i>Performance judge</i>
            </div>
            <div className="check">
              <b>OSA</b>
              <span>Operation sequence alignment</span>
              <i>Performance judge</i>
            </div>
            <div className="check">
              <b>FVA</b>
              <span>Feasibility validation</span>
              <i>Performance judge</i>
            </div>
          </div>
          <p className="note">
            Each judge re-derives the expected value from the input drawing itself rather than from an answer
            key, so a failed check can rewrite the upstream agent’s prompt and re-run that stage. Evaluated on
            SIMBA — 50 real industrial V-bending drawings with four-view orthographic projections, spanning
            simple through complex geometries.
          </p>

          <Tools list="Multi-agent LLM orchestration · Vision-language models · RAG · SolidWorks API / VBA · Sheet-metal bend analysis · Dataset construction" />
        </div>
      </Page>

      {/* ==================================================== 05 — CALIPER */}
      <Page n={7}>
        <div className="pad">
          <ProjectHead
            num="05"
            kicker="Simulation-Driven Design · Structural Optimization · ISO 4210"
            title="Performance Bicycle Brake Caliper"
            org="Mechanical Design & Manufacturing · Northwestern"
            year="2025"
            lead="Designed, simulated, printed and road-tested a topology-optimized bicycle brake caliper against ISO 4210 — then proved with a second iteration that the lighter part was the worse engineering answer."
          />
          <Metrics
            items={[
              ['41.3 g', 'Final mass'],
              ['11.3 m', 'Stopping distance'],
              ['68.9 N', 'Rider input force'],
              ['$8.26', 'Cost per part'],
            ]}
          />
          <div className="split">
            <Did
              items={[
                'Translated qualitative user needs into quantified targets drawn from ISO 4210 and benchmarks: stop a 150 lb rider within 15 m from 10 mph, at or under 70 N input, with tip deflection at or under 11 mm and 500,000 load cycles.',
                'Ran FEA across the full allowable design envelope to find where the material was doing no work, then used topology optimization to pull it onto the load paths.',
                'Printed in SLS Nylon-12 and tested on a bicycle: 41.3 g, 11.3 m stop, 68.9 N input, 3 mm and 5 mm arm deflection — every critical metric passed, with the calipers locking the wheels.',
                'Iteration 2 cut 14% of the mass through larger cutouts and wider pivots. The lost stiffness raised required input force 48% to 102 N, breaking the requirement — so iteration 1 stayed.',
                'Analyzed manufacturing across three volumes: die casting at 50k/yr, forging plus CNC at 10k/yr, and additive at 200/yr for custom builds.',
              ]}
            />
            <Fig src={bikePrintedCaliper} cap="The SLS Nylon-12 caliper, printed from the optimized geometry." h={196} />
          </div>
          <div className="result">
            <b>Result</b> All safety metrics met, and a documented stiffness–weight tradeoff: six grams of mass
            saved cost 48% more rider input force. The heavier design was the right one.
          </div>
          <div className="row2">
            <Fig src={bikeTopoOpt} cap="Topology optimization resolving the load paths into rib-like structure." h={250} fit="contain" />
            <Fig src={bikeFirstFEA} cap="FEA on the first design: stress and displacement, safety factor ≈ 2.75 on deflection." h={250} fit="contain" />
          </div>
          <Tools list="FEA · Topology optimization · ISO 4210 · SLS Nylon-12 · Experimental validation · DFM at volume" />
        </div>
      </Page>

      {/* =================================================== 06 — EXTENDIT */}
      <Page n={8}>
        <div className="pad">
          <ProjectHead
            num="06"
            kicker="Human-Centered Design · Product Development · Structural Testing"
            title="ExtendIt"
            org="Human-Centered Product Design · Northwestern"
            year="2024"
            lead="A permanently installed hinged desk extender that adds 81 sq. in. of usable lecture-hall workspace, folds flush beneath the desk when stored, and was preferred by 8 of 10 users over four alternative concepts."
          />
          <Metrics
            items={[
              ['+81 in²', 'Added workspace'],
              ['8 / 10', 'User preference'],
              ['33.5 lb', 'Tested load'],
              ['$10.19', 'Cost per unit'],
            ]}
          />
          <div className="split">
            <Did
              items={[
                'Ran 22 exploratory user interviews and ranked the opportunity spaces on a weighted scoring matrix before committing to a direction.',
                'Tested seven physical mockups with ten users each; students consistently chose a permanent, stable fixture over portable clip-on attachments.',
                'Contributed the mechanical design and hinge selection — a galvanized locking hinge with the 90° detent ground off, so it locks only at 0° stored and 180° deployed.',
                'Built a dedicated load-test rig to avoid damaging the prototype: a 33.5 lb suspended load gave ⅜″ deflection 6″ from the hinge, inside the ≤0.5″ target, with 9.5″ of seating clearance when folded.',
                'Modelled unit economics at $10.19 — $6.02 materials and $4.17 of labor — against a U.S. school furniture market above $2B, with B2B university sales and licensing as the route to scale.',
              ]}
            />
            <Fig src={extendItHero} cap="The final prototype deployed on a lecture hall chair." h={196} fit="contain" />
          </div>
          <div className="result">
            <b>Result</b> A prototype that exceeded its strength requirement and won head-to-head user preference,
            with the hinge, clearance and cost structure all resolved for a permanent installation.
          </div>
          <div className="row3">
            <Fig src={extendItLoadTestNew} cap="Load and deflection testing on the dedicated rig." h={220} />
            <Fig src={extendItUserTestNew} cap="Simulated real-world loading during user testing." h={220} />
            <Fig src={extendItHinge} cap="The modified locking hinge installed beneath the desk." h={220} />
          </div>
          <Tools list="User research & interviews · Mechanical design · Structural load testing · Rapid prototyping · Cost modeling" />
        </div>
      </Page>

      {/* ================================================= 07 — HANDS-ON */}
      <Page n={9}>
        <div className="pad">
          <div className="hgroup">
            <div className="phead">
              <span className="pnum">07</span>
              <span className="pkick">Fabrication · Machining · Casting · Lab Work</span>
              <span className="pyear">2023 – 2026</span>
            </div>
            <h2 className="ptitle">Hands-On Capability</h2>
            <p className="plead">
              I make the parts I draw. Across coursework, research and club work I have machined, brazed, formed,
              cast, printed and waterjet-cut my own designs — and that is most of why they come out manufacturable.
              A sample of the work behind the projects in this book.
            </p>
          </div>
          <div className="grid9">
            <Fig src={engAssemblyBench} cap="Assembling a mechanism at the bench" h={232} />
            <Fig src={brakeMilling} cap="Machining rotor features on the mill" h={232} />
            <Fig src={engMachinedMold} cap="CNC-machined aluminum mold" h={232} />
            <Fig src={engBrazingCloseup} cap="Torch-brazing a copper joint" h={232} />
            <Fig src={engHammerForming} cap="Hand-forming metal" h={232} />
            <Fig src={engWaterjet} cap="Abrasive waterjet cutting" h={232} />
            <Fig src={engIronMoldGlowing} cap="Sand mold during an iron pour" h={232} />
            <Fig src={sensorNfesNozzle} cap="Near-field electrospinning at 10 kV, AIM Lab" h={232} />
            <Fig src={personalTeslaUnderCar2} cap="Under a Model S at Jordan’s Tesla Repair" h={232} />
          </div>
          <Tools list="Mill, lathe & CNC · Waterjet · Laser cutting · FDM, SLS & PETG printing · Welding & brazing · Sand and iron casting · Sheet metal · Metrology" />
        </div>
      </Page>

      {/* ===================================================== 08 — MORE */}
      <Page n={10}>
        <div className="pad">
          <div className="hgroup">
            <div className="phead">
              <span className="pnum">08</span>
              <span className="pkick">Selected Additional Work</span>
              <span className="pyear">Full write-ups online</span>
            </div>
            <h2 className="ptitle">More Work</h2>
            <p className="plead">
              Each of these has a full write-up — process, drawings, test data and photographs — on the portfolio
              site, along with a gallery of fabrication and studio work.
            </p>
          </div>

          <div className="more">
            <div className="more-item">
              <div className="more-h">
                <b>Flexible Tactile Sensors</b>
                <span>AIM Lab · 2025</span>
              </div>
              <p>
                Hand-fabricated more than ten flexible resistive sensors — carbon nanotubes and nanoparticles
                embedded in Ecoflex silicone — for a soft robotic hand, and ran the near-field electrospinning
                rig at 10 kV.
              </p>
            </div>
            <div className="more-item">
              <div className="more-h">
                <b>Drivetrain Efficiency Test Rig</b>
                <span>Baja SAE · 2025 – 2026</span>
              </div>
              <p>
                A bench-top rig that measures CVT and gearbox power losses separately under repeatable
                controlled load, instrumented with torque sensors and a Teensy 4.1 DAQ.
              </p>
            </div>
            <div className="more-item">
              <div className="more-h">
                <b>Midwest EV — Openpilot Retrofit</b>
                <span>2026 · in progress</span>
              </div>
              <p>
                Enclosure design for the custom PCB in an openpilot retrofit for Tesla Model S cars built before
                factory Autopilot, iterating as the board moves through design review.
              </p>
            </div>
            <div className="more-item">
              <div className="more-h">
                <b>P1 Motor Club Track Model</b>
                <span>2026 · in progress</span>
              </div>
              <p>
                A large-scale, mostly 3D-printed model of the club’s racetrack property, built from the civil
                engineer’s Civil 3D files and sized to travel in the back of a truck as a sales tool.
              </p>
            </div>
            <div className="more-item">
              <div className="more-h">
                <b>SME Dorm Accessibility Project</b>
                <span>2026 – 2027 · in progress</span>
              </div>
              <p>
                Leading a team of five in SME’s National Student Manufacturing Innovation Challenge, designing
                for residence-hall accessibility.
              </p>
            </div>
            <div className="more-item">
              <div className="more-h">
                <b>StimSpin &amp; Patchwork Plush</b>
                <span>Misericordia · 2024</span>
              </div>
              <p>
                Sensory devices for adults with cerebral palsy and developmental disabilities — a customizable
                spinning wheel and two tactile textile designs — developed with staff and tested with users.
              </p>
            </div>
            <div className="more-item">
              <div className="more-h">
                <b>Kerf-Bent Walnut Turntable Stand</b>
                <span>2026 · in progress</span>
              </div>
              <p>
                An S-curved kerf-bent walnut stand with three platforms and brass accents, tuned for vibration
                isolation; CAD and BOM finalized, awaiting CNC router time.
              </p>
            </div>
            <div className="more-item">
              <div className="more-h">
                <b>Shop Projects</b>
                <span>2026</span>
              </div>
              <p>
                Iron sand casting from a coke-fired furnace I built, a modular dodecahedron lamp, snap-fit PETG
                projector mounts, and a laser-cut acrylic light tracing board.
              </p>
            </div>
          </div>

          <div className="row2 tail">
            <Fig src={sensorFinished1} cap="A finished flexible resistive sensor — conductive network embedded in Ecoflex." h={300} />
            <Fig src={engBajaCar} cap="The Baja SAE car the drivetrain efficiency rig is being built around." h={300} />
          </div>

          <div className="closing">
            <div className="closing-l">
              <div className="closing-k">Full portfolio</div>
              <div className="closing-url">{SITE}</div>
            </div>
            <div className="closing-r">
              <div>{EMAIL}</div>
              <div>{PHONE}</div>
              <div>{LINKEDIN}</div>
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
}

/* --------------------------------------------------------------------- css */

const css = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@500;600&display=swap');

.book {
  --navy: #14254F;
  --blue: #3B5998;
  --ink: #1A2233;
  --muted: #5F6B80;
  --faint: #8A94A6;
  --rule: #DCE0E8;
  --cream: #F7F3ED;
  background: #9AA0AA;
  padding: 24px 0;
}
.book * { box-sizing: border-box; }

.page {
  position: relative;
  width: 816px;
  height: 1056px;
  margin: 0 auto 24px;
  background: #fff;
  color: var(--ink);
  font-family: Inter, 'Segoe UI', system-ui, sans-serif;
  font-size: 10.2px;
  line-height: 1.45;
  overflow: hidden;
  box-shadow: 0 4px 22px rgba(0,0,0,.28);
}
.pad { padding: 50px 54px 44px; height: 100%; display: flex; flex-direction: column; justify-content: space-between; }

.folio {
  position: absolute; left: 54px; right: 54px; bottom: 20px;
  display: flex; justify-content: space-between;
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
  font-size: 7.6px; letter-spacing: .09em; text-transform: uppercase; color: var(--faint);
  border-top: 1px solid var(--rule); padding-top: 7px;
}

/* ------------------------------------------------------------------ cover */
.cover { padding: 0; background: #14254F; }
.cover-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.cover-scrim {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(10,18,38,.88) 0%, rgba(10,18,38,.40) 33%, rgba(10,18,38,.76) 68%, rgba(10,18,38,.96) 100%);
}
.cover-body {
  position: relative; height: 100%; padding: 56px 58px 50px;
  display: flex; flex-direction: column; justify-content: space-between; color: #fff;
}
.cover-top { display: flex; align-items: center; gap: 14px; }
.rule-sm { display: block; width: 44px; height: 2px; background: #fff; opacity: .85; }
.cover-eyebrow {
  font-family: 'IBM Plex Mono', monospace; font-size: 9px; letter-spacing: .22em;
  text-transform: uppercase; opacity: .9;
}
.cover-name { font-size: 78px; line-height: .92; font-weight: 800; letter-spacing: -.028em; margin: 0 0 20px; }
.cover-role {
  font-size: 17.5px; font-weight: 600; letter-spacing: .015em; margin-bottom: 14px;
  padding-top: 15px; border-top: 1px solid rgba(255,255,255,.35); display: inline-block;
}
.cover-tag { font-size: 12.4px; line-height: 1.62; max-width: 430px; color: rgba(255,255,255,.88); margin: 0; }
.cover-foot { display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; }
.cover-contact {
  display: flex; flex-direction: column; gap: 3px;
  font-size: 9.6px; color: rgba(255,255,255,.82);
}
.cover-link {
  font-family: 'IBM Plex Mono', monospace; font-size: 10.4px; font-weight: 600;
  color: #fff; text-decoration: none; letter-spacing: .02em;
  border: 1px solid rgba(255,255,255,.5); border-radius: 2px; padding: 8px 14px; white-space: nowrap;
}

/* ------------------------------------------------------------- page heads */
.phead {
  display: flex; align-items: baseline; gap: 12px;
  border-bottom: 1.6px solid var(--navy); padding-bottom: 7px; margin-bottom: 12px;
}
.pnum { font-family: 'IBM Plex Mono', monospace; font-size: 15px; font-weight: 600; color: var(--blue); }
.pkick {
  flex: 1; font-size: 8.4px; font-weight: 600; letter-spacing: .13em;
  text-transform: uppercase; color: var(--muted);
}
.pyear { font-family: 'IBM Plex Mono', monospace; font-size: 8.6px; color: var(--muted); white-space: nowrap; }
.ptitle { font-size: 31px; font-weight: 800; letter-spacing: -.021em; color: var(--navy); margin: 0 0 5px; line-height: 1.07; }
.porg { font-size: 9.4px; color: var(--muted); font-weight: 500; margin-bottom: 10px; }
.plead { font-size: 11.6px; line-height: 1.55; color: #26314A; margin: 0 0 12px; }

.h-label {
  font-size: 8.2px; font-weight: 700; letter-spacing: .15em; text-transform: uppercase;
  color: var(--blue); margin: 0 0 6px;
}
.h-label.mt { margin-top: 15px; }
.hgroup { flex: 0 0 auto; }
.hgroup .plead { margin-bottom: 0; }

/* --------------------------------------------------------------- metrics */
.metrics { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--rule); margin-bottom: 13px; }
.metric { background: var(--cream); padding: 10px 11px 9px; }
.metric-v {
  font-family: 'IBM Plex Mono', monospace; font-size: 18px; font-weight: 600;
  color: var(--navy); letter-spacing: -.012em; line-height: 1.1; white-space: nowrap;
}
.metric-l {
  font-size: 7.6px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase;
  color: var(--muted); margin-top: 3px;
}

/* ------------------------------------------------------------------ body */
.split { display: grid; grid-template-columns: 1fr 250px; gap: 20px; align-items: start; }
.did ul { margin: 0; padding-left: 13px; }
.did li { margin-bottom: 5.5px; line-height: 1.46; }
.did li::marker { color: var(--blue); }

.result {
  background: var(--cream); border-left: 2.5px solid var(--blue);
  padding: 9px 12px; margin: 12px 0; font-size: 10px; line-height: 1.5; color: #26314A;
}
.result b {
  font-size: 8px; letter-spacing: .13em; text-transform: uppercase; color: var(--blue);
  margin-right: 8px; font-weight: 700;
}

.tools {
  padding-top: 10px; border-top: 1px solid var(--rule);
  font-size: 8.8px; color: var(--muted); line-height: 1.5;
}
.tools-l {
  font-size: 7.8px; font-weight: 700; letter-spacing: .13em; text-transform: uppercase;
  color: var(--blue); margin-right: 9px;
}

/* ------------------------------------------------------------------ figs */
.fig { margin: 0; }
.fig-img { width: 100%; overflow: hidden; background: #EEF0F3; }
.fig-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
.fig-contain { background: #F4F5F7; }
.fig-contain img { object-fit: contain; }
.fig figcaption { font-size: 8.2px; line-height: 1.38; color: var(--muted); margin-top: 4px; }

.row3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 13px; }
.row2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; }
.row2.tail { margin-top: 2px; margin-bottom: 13px; }
.grid9 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px 13px; }

/* --------------------------------------------------------------- profile */
.two { display: grid; grid-template-columns: 1fr 1fr; gap: 26px; }
.ed-row, .exp-row { display: flex; justify-content: space-between; gap: 10px; align-items: baseline; }
.ed-row b, .exp-row b { font-size: 10.6px; color: var(--navy); }
.ed-row span, .exp-row span {
  font-family: 'IBM Plex Mono', monospace; font-size: 8.2px; color: var(--muted); white-space: nowrap;
}
.ed-deg { font-size: 10px; font-weight: 600; margin-top: 2px; }
.ed-sub { font-size: 9.2px; color: var(--muted); }
.exp { margin-bottom: 9px; }
.exp-sub { font-size: 9.2px; color: var(--blue); font-weight: 500; margin-bottom: 2px; }
.exp p { margin: 0; font-size: 9.4px; line-height: 1.45; color: #3A465E; }

.cap-k { font-size: 9.4px; font-weight: 700; color: var(--navy); margin-top: 8px; }
.cap-k:first-child { margin-top: 0; }
.cap-v { font-size: 9.2px; line-height: 1.5; color: #3A465E; }

.toc { list-style: none; margin: 0; padding: 0; }
.toc li {
  display: grid; grid-template-columns: 1fr auto; gap: 1px 10px;
  padding: 5px 0; border-bottom: 1px solid var(--rule); align-items: baseline;
}
.toc li span { font-size: 10px; font-weight: 600; color: var(--navy); }
.toc li i { grid-column: 1; font-size: 8.6px; font-style: normal; color: var(--muted); }
.toc li em {
  grid-row: 1 / span 2; grid-column: 2; align-self: center;
  font-family: 'IBM Plex Mono', monospace; font-style: normal; font-size: 10px; color: var(--blue);
}

/* -------------------------------------------------------------- pipeline */
.pipe { display: flex; align-items: stretch; gap: 4px; margin-bottom: 13px; background: var(--cream); padding: 9px 10px; }
.pipe-step {
  flex: 1; background: #fff; border: 1px solid var(--rule); border-radius: 2px;
  padding: 6px 4px; text-align: center; font-size: 8.4px; font-weight: 700; color: var(--navy);
  line-height: 1.18; display: flex; flex-direction: column; justify-content: center;
}
.pipe-step.hi { border-color: var(--blue); border-width: 1.6px; }
.pipe-step span { display: block; font-size: 7px; font-weight: 500; color: var(--muted); margin-top: 3px; }
.pipe-arrow { align-self: center; font-size: 10px; color: var(--blue); font-weight: 600; }
.pipe-out {
  flex: 1; background: var(--navy); color: #fff; border-radius: 2px;
  padding: 6px 4px; text-align: center; font-size: 8.4px; font-weight: 700; line-height: 1.18;
  display: flex; align-items: center; justify-content: center;
}

/* ---------------------------------------------------------------- checks */
.checks { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--rule); margin-bottom: 9px; }
.check { background: var(--cream); padding: 8px 10px; }
.check b { font-family: 'IBM Plex Mono', monospace; font-size: 11.5px; color: var(--navy); display: block; }
.check span { display: block; font-size: 8.8px; color: #3A465E; margin-top: 1px; line-height: 1.3; }
.check i {
  display: block; font-style: normal; font-size: 7.2px; letter-spacing: .1em;
  text-transform: uppercase; color: var(--blue); margin-top: 3px; font-weight: 600;
}
.note { font-size: 9.1px; line-height: 1.45; color: var(--muted); margin: 0; }

.profile-strip { padding-top: 10px; }

/* ------------------------------------------------------------------ more */
.more { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 26px; margin-bottom: 12px; }
.more-item { border-top: 1px solid var(--rule); padding-top: 6px; }
.more-h { display: flex; justify-content: space-between; gap: 10px; align-items: baseline; }
.more-h b { font-size: 10.2px; color: var(--navy); }
.more-h span { font-family: 'IBM Plex Mono', monospace; font-size: 7.6px; color: var(--faint); white-space: nowrap; }
.more-item p { margin: 2px 0 0; font-size: 9.1px; line-height: 1.44; color: #3A465E; }

.closing {
  background: var(--navy); color: #fff; padding: 15px 18px;
  display: flex; justify-content: space-between; align-items: center; gap: 20px;
}
.closing-k { font-size: 7.8px; letter-spacing: .16em; text-transform: uppercase; color: rgba(255,255,255,.68); margin-bottom: 3px; }
.closing-url { font-family: 'IBM Plex Mono', monospace; font-size: 15px; font-weight: 600; }
.closing-r { text-align: right; font-size: 9.2px; color: rgba(255,255,255,.86); line-height: 1.55; }

/* ----------------------------------------------------------------- print */
@page { size: 8.5in 11in; margin: 0; }
@media print {
  html, body { background: #fff !important; margin: 0 !important; padding: 0 !important; }
  .book { background: #fff !important; padding: 0 !important; }
  .page { margin: 0 !important; box-shadow: none !important; break-after: page; page-break-after: always; }
  .page:last-child { break-after: auto; page-break-after: auto; }
}
`;
