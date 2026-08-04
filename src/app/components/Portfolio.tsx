import { useState, useEffect, forwardRef } from 'react';
import { useSearchParams } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Wrench, ZoomIn, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { dimsFor } from './imageDimensions';

// Import assets
import extendItThumb from 'figma:asset/baf09441eaec422eef72f951d09ce50d1e0cf702.webp';
import extendItConcept from 'figma:asset/c304c5a140180875ee400ad12926e35368f74a41.webp';
import extendItSketch from 'figma:asset/f232760bcf0145253c281f4b4f1f06048dce537f.webp';
import extendItUserTest from 'figma:asset/72fc3068db2c54d65007e0d0de4e75aa2d7810bc.webp';
import extendItLoadTest from 'figma:asset/61495f2f3972a37806c764376ced254c1023b957.webp';
import extendItHero from 'figma:asset/baf09441eaec422eef72f951d09ce50d1e0cf702.webp';
import extendItHinge from 'figma:asset/d57e0cf4c5c508756bddc826ab9044e1fd9a743e.webp';
import extendItCupHolder from 'figma:asset/4beb1f92bb835754bb2566c92a7370ee22877fbb.webp';
import extendItLoadTestNew from 'figma:asset/1d18a7808e8709de495f1254f14773c637ad686b.webp';
import extendItUserTestNew from 'figma:asset/cd5d7ada40db3d957daea1ac3cff6db6d8e80c86.webp';

import ctScannerImg from 'figma:asset/4912cd11da20c60b00c965ea83b87634b57600b8.webp';
import ctFrustum from 'figma:asset/3b5611915cfa8c0522559efe6b31ea2a9eb1adc0.webp';
import ctLinerSide from 'figma:asset/d49ce2b4da6a0e33e564535e6cc619d30f5b5dcd.webp';
import ctWeldChart from 'figma:asset/a16c216657da11ee1f80bf06965f4bb55df125c6.webp';
import ctLinerFront from 'figma:asset/75bb6d7fa5b40b10fe624772fa2650c2d6f33de0.webp';
import wgInstalledFront from '../../imports/waterguard/wg-installed-front.webp';
import wgInstalledRear from '../../imports/waterguard/wg-installed-rear.webp';
import wgRunoffRear from '../../imports/waterguard/wg-runoff-rear.webp';
import wgFrontDome from '../../imports/waterguard/wg-front-dome.webp';
import wgFrontPanel from '../../imports/waterguard/wg-front-panel.webp';
import wgSlopeTest from '../../imports/waterguard/wg-slope-test.webp';
import wgWeldLeakTest from '../../imports/waterguard/wg-weld-leak-test.webp';
import wgRunoffSketch from '../../imports/waterguard/wg-runoff-sketch.webp';

import bikeCaliperImg from 'figma:asset/0c930a2a913495aa9b1d94e33057b7d9868884a5.webp';
import bikeInitialFEA from 'figma:asset/95c90a41bda86117a9907b3b13affa564ef736e5.webp';
import bikeNeedsTable from 'figma:asset/67df7d20c56a35cc1886b1a1ac222d25f068f33f.webp';
import bikePrintedCaliper from 'figma:asset/134ccdf2ef97521532df170a438af63ee9c27808.webp';
import bikeFirstFEA from 'figma:asset/7b7a8d330415d2d8c94cdec9942f41b950aefcf0.webp';
import bikeTopoOpt from 'figma:asset/68a526a5c922e5ab9f4266241352abe1973792f8.webp';
import formulaBrakeImg from 'figma:asset/29f7fee3d4abf8c0036a9ec2ed22cb709df1d475.webp';
import brakeMilling from 'figma:asset/7d7800d37d6621032f1d80a4f4b579540d7cac5e.webp';
import brakeGrinding from 'figma:asset/b7ccff613803cc12fb0982f00b28c21d2e99b4c3.webp';
import brakeLineRouting from 'figma:asset/e880e8b1aee3f2d543d70198b331935027f8f808.webp';
import brakeIntegration from 'figma:asset/ef0d378cfbd2332dd42290ab0d7c96abcd9f00b0.webp';
import brakeThermalSim from 'figma:asset/9ca8735e78ca466a53244803b9120e281979b4cc.webp';
import brakeStressFEA from 'figma:asset/96d3b7ea91351b38a4e051cdb802ac4915721f4e.webp';
import brakeRotorCAD1 from 'figma:asset/90db89c8c1d7788fc96270ad95185295051741c8.webp';
import brakeRotorCAD2 from 'figma:asset/f76e05ff05fe1a25986acbf32ad034cd75c5f966.webp';
import brakeFrontRotorDwg from 'figma:asset/3d94ecf2fb9bc0ccd594db6d4135fcb6c4c64658.webp';
import brakeRearRotorDwg from 'figma:asset/fd3705c67233eed8d5e4aaf424c71b24f8685dc1.webp';
import brakePedalForcePlot from 'figma:asset/89f206ac09798ea1c47f84428c7ec369962f1e78.webp';
import brakeWhiteboardCalc from 'figma:asset/c5e02822aa53a05bfacebd326cbc09d041ca0b4d.webp';
import stimSpinImg from 'figma:asset/05b77ea1a86341595dc1893c29562b5cdf00ccdf.webp';
import stimSpinHandle from 'figma:asset/0618a99fac31a4b599e1bd742d40be07567a8984.webp';
import stimSpinScience from 'figma:asset/633353b4b72dc0dbc1d456088ec370adeeb2d911.webp';
import stimSpinDisney from 'figma:asset/b707207661364e701a223bac11e846c5d7451d6c.webp';
import stimSpinInUse from 'figma:asset/796b3fa8b16982c6bbf592edfa22d051d63b3e2d.webp';
import stimSpinTexture from 'figma:asset/393d470593ff653ebfaa60468f1a33d6fdc77742.webp';
import stimSpinSketch from 'figma:asset/05940af68dd4baf865ad8f3c9cf984dd2f00c23d.webp';
import stimSpinClicker from 'figma:asset/bc407c2a561416993c60bb74fbd2163f0984ffc6.webp';
import stimSpinWhiteboard from 'figma:asset/842b7f02835e24e02409becfc9b36ec43e4de781.webp';
import stimSpinKnob from 'figma:asset/6ed8612593887b9aed22bafeb70c6a707ef7b9e3.webp';
import patchworkImg from 'figma:asset/d1b2c94414d2afe52ca117dcc2c5abc3119782e7.webp';
import patchworkMaze from 'figma:asset/e83edb8bb8ec5cb0b40c79e5ae7b8e1359546baf.webp';
import patchworkPillowDim from 'figma:asset/d83342724cbc50b362e5ca9d8593f60f456abcd8.webp';
import patchworkMockup from 'figma:asset/2db359936a3d16f421f5cdfeb24d599ebbb304bb.webp';
import patchworkCrossSection from 'figma:asset/3d1001aaaadf39cac5581426cd1b1ce32f967ffa.webp';
import patchworkSensoryRoom from 'figma:asset/9ef7d8d4e2fe940d318007df98509c59079bb4ca.webp';
import patchworkBookCover from 'figma:asset/b0b82af46ce1e6db6a9a0a3fccd9728443f1195e.webp';
import lampImg from 'figma:asset/6f4325245aa689e63a3b4eb0653b90c207882c29.webp';
import lampLitGlow from 'figma:asset/lamp-lit-glow.webp';
import lampHanging from 'figma:asset/lamp-hanging.webp';
import lampHinged from 'figma:asset/04364e8a8e32e2ac680bc5eceae50dae3c413998.webp';
import lampWelding from 'figma:asset/03ed3a93bcfbfaca1b365a293a02bbbc999da73f.webp';
import lampPanelsTable from 'figma:asset/9cd3729e78f71bd38f4585d1bab1cfd08586e862.webp';
import lampLaserCut from 'figma:asset/5e0b5e24d0664f57617d6cecfa722e59f6a3cc65.webp';
import lampPrintFail from 'figma:asset/b279dde34844bf811593002f3c7a9cc64efd09f4.webp';
import lampSlicer from 'figma:asset/74d139f8b070cd88eca71f5874788d4232ca87cf.webp';
import lampCADSketch from 'figma:asset/8245392aa6ee2b4d710b552de641679ad8f4bc12.webp';
import lampAcrylicSheet from 'figma:asset/5ca57543960765bbe4baf8c8a0d5ac7b885bd760.webp';
import portfolioBg from 'figma:asset/8e0e8033d043030122e4156d932b40a343273916.webp';
import drivetrainBajaCar from 'figma:asset/eng-baja-car.webp';
import projPlacementIdea from 'figma:asset/proj-placement-idea.webp';
import projConceptSketch from 'figma:asset/proj-concept-sketch.webp';
import projAngleSketch from 'figma:asset/proj-angle-sketch.webp';
import projCadBedClip from 'figma:asset/proj-cad-bed-clip.webp';
import projWoodMockup from 'figma:asset/proj-wood-mockup.webp';
import projMockupVsPrint from 'figma:asset/proj-mockup-vs-print.webp';
import projBedClipFinished from 'figma:asset/proj-bed-clip-finished.webp';
import projCadTableClamp from 'figma:asset/proj-cad-table-clamp.webp';
import castFurnaceHero from 'figma:asset/cast-furnace-hero.webp';
import castFurnaceScaffold from 'figma:asset/cast-furnace-scaffold.webp';
import castPourCloseup from 'figma:asset/cast-pour-closeup.webp';
import castTeamMolds from 'figma:asset/cast-team-molds.webp';
import castNameplateFinished from 'figma:asset/cast-nameplate-finished.webp';
import castMoldsCooling from 'figma:asset/cast-molds-cooling.webp';
import turntableCadRender from 'figma:asset/turntable-cad-render.webp';
import turntablePracticeKerfs from 'figma:asset/turntable-practice-kerfs.webp';
import turntableBom from 'figma:asset/turntable-bom.webp';
import tracingBoardInUse from 'figma:asset/tracing-board-in-use.webp';
import tracingBoardLit from 'figma:asset/tracing-board-lit.webp';
import tracingBoardElevated from 'figma:asset/tracing-board-elevated.webp';

// Bionic Wrench manufacturing project (DSGN 386) — figures extracted from the final report
import wrenchHero from '../../imports/dsgn386/p01_0.webp';
import wrenchV1TopPlate from '../../imports/dsgn386/p04_0.webp';
import wrenchV1Loaded from '../../imports/dsgn386/p04_1.webp';
import wrenchV1Bare from '../../imports/dsgn386/p04_2.webp';
import wrenchV2Stand from '../../imports/dsgn386/p05_0.webp';
import wrenchV2Back from '../../imports/dsgn386/p06_0.webp';
import wrenchV2InnerTrack from '../../imports/dsgn386/p06_1.webp';
import wrenchV2OuterTrack from '../../imports/dsgn386/p06_2.webp';
import wrenchV3Back from '../../imports/dsgn386/p07_0.webp';
import wrenchV4Track from '../../imports/dsgn386/p07_1.webp';
import wrenchV5Stand from '../../imports/dsgn386/p08_0.webp';
import wrenchV5Track from '../../imports/dsgn386/p08_1.webp';
import wrenchV6 from '../../imports/dsgn386/p09_0.webp';
import wrenchV7Support from '../../imports/dsgn386/p10_0.webp';
import wrenchV7Stand from '../../imports/dsgn386/p10_1.webp';
import wrenchEquipSetup from '../../imports/dsgn386/p12_0.webp';
import wrenchMfgMap from '../../imports/dsgn386/p13_0.webp';
import wrenchAsmMap from '../../imports/dsgn386/p13_1.webp';
import wrenchVSM from '../../imports/dsgn386/p16_0.webp';
import wrenchLineLayout from '../../imports/dsgn386/p21_0.webp';
import wrenchCadOuterPlate from '../../imports/dsgn386/p27_0.webp';
import wrenchCadInnerPlate from '../../imports/dsgn386/p27_1.webp';
import wrenchCadWaterjet from '../../imports/dsgn386/p28_0.webp';
import wrenchCadFixture from '../../imports/dsgn386/p28_1.webp';
import wrenchCadJaw from '../../imports/dsgn386/p29_0.webp';
import wrenchCadStand from '../../imports/dsgn386/p29_1.webp';

// Smart Sheet Smith — NSF HAMMER research (AIM Lab, Northwestern)
import sheetSmithPoster from '../../imports/1781900331401__2_.webp';

export interface ProjectSection {
  heading?: string;
  text?: string;
  images?: { url: string; caption?: string }[];
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  content: ProjectSection[]; 
  tools: string[];
  date?: string;
  filterCategory: 'Design' | 'Personal Projects';
}

export const projects: Project[] = [
  {
    id: 10,
    title: 'Water Guard',
    category: 'Design for Reliability · Medical Equipment · Polymer Testing',
    image: wgInstalledFront,
    description: 'A fully removable waterproofing system that protects a ~$1M CT scanner at Shedd Aquarium during aquatic animal imaging.',
    filterCategory: 'Design',
    date: '2025–2026',
    tools: ['Human-Centered Engineering', 'Risk Mitigation & FMEA', 'Polymer Materials Testing', 'Saltwater Degradation Analysis', 'Mechanical Design Under Constraints', 'Stakeholder Interview Synthesis', 'Medical Equipment Integration', 'Design for Serviceability'],
    content: [
      {
        text: `Shedd Aquarium uses a ~$1M portable NeuroLogica BodyTom 32 CT scanner to image aquatic animals — from small fish up to beluga whales. The scanner was built for human clinical use, not wet or saltwater environments, so water reaching the gantry can cause electric shorting, corrosion, calibration errors, and hazards to nearby staff and animals.

Today, staff protect it by taping plastic sheeting across the gantry and towel-drying the floor and scanner before and after every scan.

WaterGuard is a fully removable, reusable waterproofing system that covers the gantry and both faces of the CT scanner with a heat-welded LDPE liner. A sloped liner bottom actively redirects runoff into a rear Runoff Collector, and a clear PETG window keeps the positioning laser fully visible.

Team: Asher Straus, Selin Orbay, Gabriela Hernandez, Eunsoo Kim, and Tyler Gant.`,
        images: [
            { url: ctScannerImg, caption: 'Shedd Aquarium’s NeuroLogica BodyTom 32 portable CT scanner.' }
        ]
      },
      {
        heading: 'The Challenge',
        text: `Veterinary staff reported spending 45+ minutes before each scan carefully placing plastic sheeting, securing it with painters tape, and towel-drying everything from the CT table to the floor. The scanner drives forward on wheels to scan, so exposing them to saltwater risks corrosion. Because the scanner is nearly irreplaceable, staff felt real stress that it was never 100% protected.

NeuroLogica's engineering team confirmed the BodyTom is not designed for wet environments: moisture entering the front seam, concentric gantry seam, or open bottom can spread internally to the X-ray tube, detector, and high-voltage supply sitting ~0.3″ beneath the shell.

The solution had to:
• Prevent saltwater contact with the gantry interior and front/back faces
• Preserve CT image quality (minimal to zero radiographic artifacts)
• Keep the positioning laser fully visible
• Avoid permanent modification to the scanner
• Stay compatible with existing animal-care workflows and reduce setup time
• Account for large animals (largest is beluga whales)`
      },
      {
        heading: 'My Role',
        text: `• Led gantry liner geometry development (oblique frustum design)
• Designed the overlapping seam strategy based on tensile test data
• Conducted saltwater degradation testing to validate LDPE welds
• Contributed to the FMEA and reliability analysis
• Synthesized NeuroLogica engineering interviews into design constraints
• Assisted with full-scale prototype fabrication`
      },
      {
        heading: 'System Architecture',
        text: `WaterGuard has two integrated components:

1. Water-Resistant Liner — a removable barrier between saltwater and the scanner, covering the full gantry plus both faces, with a sloped bottom that directs runoff to the rear. The front and back faces are heat-welded to the gantry piece to form one large liner that installs as a single unit.

2. Runoff Collector — a rear-mounted frame and collection bin that catches redirected water in one defined location.

A clear PETG laser window at the top of the gantry liner preserves full visibility of the vertical alignment laser.`,
        images: [
            { url: wgInstalledFront, caption: 'Front view of the WaterGuard installed on Shedd’s CT scanner.' },
            { url: wgInstalledRear, caption: 'Back view of the installed liner and Runoff Collector.' },
            { url: ctLinerFront, caption: 'Integrated waterproofing architecture showing the liner and collection system.' }
        ]
      },
      {
        heading: 'Gantry Liner Design',
        text: `Geometry:
The gantry liner forms an oblique frustum cone that creates a slope inside the bore. The rear end matches the 33″ gantry diameter; the front end is 31.8″ (1.2″ smaller), turning the circular face into a dome with a flat bottom elevated 5.4″ above the gantry base. This geometry produces a natural slope toward the rear. The front diameter was chosen to achieve a 12.5° slope while keeping the flat bottom within the 6″ clearance between the gantry and the CT table at its lowest setting. The liner also extends 1″ beyond the gantry on each side to keep water off the gantry–face welds.

Front Face:
The front face is built from eight identical fan-shaped panels arranged in a ring, plus one flat piece along the bottom. Each panel narrows toward the bore, where its edge is divided into small tabs that let the flat LDPE film fold into the round opening without wrinkling. Neighboring panels overlap so there are no gaps, and the assembled outer edge forms a roughly dodecagonal shape ~5 ft across that sits flush against the BodyTom housing.

Seam Engineering:
Overlapping welds outperform single-edge seams in both strength and leak resistance:
• Overlapped welds (dry): 94.8 N avg peak force
• Overlapped welds (24 hr saltwater): 106.4 N avg
• No delamination, bubbling, or separation
• Failures were cohesive (material tear), not adhesive (weld separation)

Laser Window:
A cutout ~1″ from the front face is covered with clear PETG sandwiched between two heat-welded LDPE layers, preserving 100% laser visibility.

Materials:
• 10 mil low-density polyethylene (LDPE) film, heat welded with a constant-temperature soldering iron
• 3M Dual Lock reclosable fasteners for tool-free install/removal, bonded to the liner with 3M 9495LE double-coated tape and to the scanner with 3M VHB 4950 tape on the painted fiberglass shell
• Clear PETG laser window
• All materials selected to avoid gantry-interior interference, preserve calibration, resist corrosion, and remain fully removable for service`,
        images: [
            { url: wgFrontDome, caption: 'Dome-with-flat-bottom shape formed by the front face of the installed liner.' },
            { url: wgFrontPanel, caption: 'Front-face panel showing the folding tabs that let flat film wrap the round bore.' },
            { url: ctFrustum, caption: 'Diagram of the oblique frustum cone geometry.' },
            { url: ctLinerSide, caption: 'Side-view of the gantry liner showing the frustum slope and 1″ overhang on each end.' },
        ]
      },
      {
        heading: 'Runoff Collector',
        text: `The Runoff Collector catches spilled water inside the gantry liner so runoff never reaches the floor or the scanner's wheels. It is mounted at the rear to stay out of the staff's workspace, avoid interfering with scanning, resist being knocked over, and keep water behind the scanner rather than under its wheels.

• Frame: 1½″ PVC pipe with matching joints, bonded with PVC cement, resting on the two rear extrusions — no drilling or permanent modification
• Bin: a 7-gallon plastic wastebasket (14″ × 10″ × 15″), chosen for low cost, easy replacement, and salt/chemical resistance
• Emptying: lift the bin out of the frame and dump it into a nearby drain

The bin can be swapped for a larger capacity with a corresponding frame adjustment.`,
        images: [
            { url: wgRunoffSketch, caption: 'Runoff Collector concept sketch.' },
            { url: wgRunoffRear, caption: 'Runoff Collector installed at the rear of the CT scanner.' },
        ]
      },
      {
        heading: 'Slope Validation',
        text: `To set the runoff slope, we built a full-scale LDPE mockup of the gantry bottom, poured water at the back edge, and lifted it until all water collected at the front, measuring the incline with an attached ruler. We tested both a perfectly taut liner and a wrinkled one.

Because the liner will inevitably wrinkle over repeated use and storage, we designed to the wrinkled-liner results rather than the smooth ones. The wrinkled test required a 5.5″ rise, which stayed within the 6″ table clearance. Applied to the true gantry width, this yielded a 12.4° slope — rounded up to the final 12.5° incline that reliably drives water to the rear.`,
        images: [
            { url: wgSlopeTest, caption: 'Full-scale LDPE mockup used for slope testing.' },
        ]
      },
      {
        heading: 'Saltwater Weld Testing',
        text: `We tested whether prolonged saltwater exposure degrades LDPE heat-welded seams, since the liner sees saltwater during aquatic scans. Standardized LDPE strips were welded in overlapped and folded configurations (n = 5 per condition) and tensile-tested with a force gauge — a dry control group and a group submerged 24 hours in Neomarine salt solution (specific gravity 1.025 g/cm³).

Results:
• Overlapped welds: 94.8 N dry vs. 106.4 N after saltwater — equal or greater strength
• No visible delamination, bubbling, or separation
• Cohesive failures (material tear) rather than adhesive (weld separation)
• Folded-seam leak testing showed creases and folded corners as the most common failure points, confirming overlapped welds as the preferred watertight geometry

Conclusion: short-term saltwater exposure does not weaken LDPE heat-welded seams under controlled welding conditions.`,
        images: [
            { url: ctWeldChart, caption: 'LDPE heat weld tensile performance before and after saltwater exposure.' },
            { url: wgWeldLeakTest, caption: 'Water-filled LDPE pouch leak test comparing seam geometries.' }
        ]
      },
      {
        heading: 'Prototype User Testing at Shedd',
        text: `We ran an on-site session with Dr. Megan Strobel (Veterinary) and Richard Kasbee (Veterinary Technician), who regularly operate the scanner.

Key findings that shaped the final design:
• Installation: Staff installed the liner in under 4 minutes and removed it in under 2 — versus 45+ minutes for the current taped-sheet method. They praised its pre-formed shape, single-piece coverage, and reusability.
• Laser visibility: The liner material diffused the front positioning laser beyond ~15–20 cm. Staff required it be 100% visible, which drove the addition of the clear PETG laser window. The secondary in-gantry laser only needed the liner held taut — no window.
• Imaging artifacts: Scans with a runoff insert showed artifacts from wrinkled plastic and from the insert geometry itself; scanning with the liner only cleaned these up, reinforcing the need to keep the liner taut and wrinkle-free.
• Attachment & runoff: Staff preferred Dual Lock for its large alignment area, and a simple detachable, hand-emptied Runoff Collector over a spigot-and-hose approach.`
      },
      {
        heading: 'Reliability & FMEA',
        text: `We used a Failure Modes and Effects Analysis (RPN = Severity × Occurrence × Detection) to prioritize risks. The highest-priority failure modes were seam integrity, attachment reliability, and runoff management — each capable of letting water reach vulnerable components.

Mitigations built into the design:
• Overlapping welded seam geometry (validated by tensile and leak testing)
• A sloped runoff path with a defined rear collection point
• A tool-free, removable Dual Lock attachment
• Moisture-detection paper in seams for early leak detection

This analysis directly informed the next-steps recommendations: validate long-term seam durability, confirm adhesive reliability, and verify maximum expected water volume.`
      },
      {
        heading: 'Maintenance & Serviceability',
        text: `The liner is designed to be maintained by Shedd staff without specialized tools:

• Storage: Lay the liner flat, smooth out bunching, and fold over the center of the gantry piece — avoiding folds across the laser window, which can create white stress lines that reduce laser visibility.
• Field repairs: Small tears can be patched by heat-welding a spare LDPE square over the damage with a soldering iron (~450°F), or sealed with silicone caulk if no welding tool is available.
• Before first use: Run a quality scan to characterize the liner's imaging behavior, keeping the gantry portion as wrinkle-free as possible to minimize artifacts.

Full step-by-step installation instructions for both the liner and Runoff Collector are documented for handoff to Shedd.`
      },
      {
        heading: 'Outcome',
        text: `Our team built a full-scale prototype — sloped gantry liner, front and back face covers, laser window, and Runoff Collector — that is ready for immediate use on Shedd's CT scanner and intended as a long-term solution.

WaterGuard:
• Cuts setup from 45+ minutes to under 4
• Replaces the improvised plastic-and-tape method with one reusable, pre-formed liner
• Protects a nearly irreplaceable imaging asset from saltwater damage
• Reduces staff stress and enables a safer aquatic imaging workflow

The only remaining step is for Shedd to run a quality scan confirming the liner introduces no imaging artifacts.`
      }
    ]
  },
  {
    id: 15,
    title: 'Bionic Wrench Manufacturing',
    category: 'Manufacturing Engineering · Fixture Design · Production Planning',
    image: wrenchHero,
    description: 'Reverse-engineered the Bionic Wrench, then designed a seven-version assembly fixture and a full high-volume manufacturing plan to build one million wrenches per year.',
    filterCategory: 'Design',
    date: '2025',
    tools: ['Reverse Engineering', 'Fixture & Tooling Design', 'SolidWorks', 'Metrology', 'DFM', 'Lean / Value Stream Mapping', 'FMEA', 'Process & Line Balancing', 'Cost Modeling', 'CNC / Waterjet / 3D Printing'],
    content: [
      {
        text: `DSGN 386 — Manufacturing Engineering & Design (Final Project, with Peter Wang). We took a commercial Bionic Wrench, reverse-engineered how it is made, and then built everything needed to manufacture it ourselves: an assembly fixture, a standard operating procedure, full process documentation, and a high-volume production plan scaled to one million wrenches per year.

The work spanned five phases — reverse engineering the wrench, mapping the manufacturing and assembly workflows, developing the assembly fixture through seven versions, documenting the process (SOP, FMEA, VSM), and finally running a live 30-minute timed trial that produced four good wrenches at a 3:58 average cycle time.`,
        images: [
          { url: wrenchHero, caption: 'The commercial Bionic Wrench we reverse-engineered and designed a production process to build.' }
        ]
      },
      {
        heading: 'Approach',
        text: `1. Reverse engineering — We dissected the wrench to document how each component fit together (press fit, loose, interference), the geometric relationships between parts, and every dimension using calipers, micrometers, and an optical comparator. From that we inferred a logical assembly order and the likely material and process for each part.

2. Workflow creation — We built manufacturing and assembly journey maps. Mapping revealed jaw insertion and jaw riveting as the bottleneck, and showed a two-worker layout left the second worker idle — so we consolidated to a single-operator line.

3. Fixture & process development — Six major fixture versions plus several minor revisions, ending in a 3D-printed body holding steel locating pins on an angled stand, with a waterjet steel plate over the rivet zone and a track that constrains the riveter.

4. Manufacturing documentation — SOP, journey maps, value stream map, and production planning for scale-up to one million wrenches per year.

5. Pilot testing — A 30-minute timed trial: four good wrenches, two defective, 3:58 average cycle time. Defects traced to out-of-spec jaws rather than the process.`
      },
      {
        heading: 'My Role',
        text: `Peter and I initially split the fixture work by component — I owned the track geometry, he owned the pin layout — but the two were so tightly coupled that we ended up at the bench together for nearly every iteration. I led the track design across all seven versions, drove the metrology and CAD drawings, and co-developed the SOP, FMEA, and high-volume manufacturing plan.`
      },
      {
        heading: 'Fixture Design — The Problem',
        text: `The fixture has four jobs: locate the wrench plates accurately, hold them rigidly while they are riveted, absorb the riveter's force without damaging the tooling, and constrain the riveter to the correct rivet locations via a track. Almost every design change below was driven by something we could not have predicted on a computer — that sheet metal compresses under riveter force, that a two-pin track over-constrains orientation, that inverting the whole track logic simplifies everything.`
      },
      {
        heading: 'V1 — Flip-Based Locating Fixture (no track)',
        text: `Our first version was a flat 3D-printed base with the wrench profile cut into it. Inner plates, outer plates, spacers, and rivets were all loaded face-up at once, a flat steel top plate was placed over the assembly, and the whole thing was flipped so the rivets could be set from underneath. At this stage we planned to rivet by hand and had not yet realized how critical precise rivet location would be — so there was no track.`,
        images: [
          { url: wrenchV1TopPlate, caption: 'V1 — flat steel top plate placed over the assembly before flipping.' },
          { url: wrenchV1Loaded, caption: 'V1 fixture loaded with an outer and an inner plate.' },
          { url: wrenchV1Bare, caption: 'V1 bare fixture showing the cutout geometry.' }
        ]
      },
      {
        heading: 'V2 — Flip the Plates, Not the Fixture',
        text: `V2 was a complete redesign with four simultaneous changes:
• We stopped flipping the fixture and instead flipped the plates onto it. The fixture sat on a stand at a fixed angle, which also meant rivets would not fall out of the plates during handling.
• Plate location moved from a printed cutout to steel pins passing through the printed body — more rigid, still easy to remove.
• A sheet-metal plate was bolted on top to absorb the rivet force (bare PLA would not survive).
• Two guide pins on the back rode in two external tracks screwed to the riveter — one for inner plates, one for outer plates.`,
        images: [
          { url: wrenchV2Stand, caption: 'V2 fixture mounted on its angled stand, with steel pins constraining the plates.' },
          { url: wrenchV2Back, caption: 'V2 fixture back, showing the two guide pins and four bolt holes for the steel plate.' },
          { url: wrenchV2InnerTrack, caption: 'V2 inner-plate track that screwed onto the riveter.' },
          { url: wrenchV2OuterTrack, caption: 'V2 outer-plate track (wrench-head geometry and handle paths).' }
        ]
      },
      {
        heading: 'V3 — Inverting the Track Logic',
        text: `In V3 we inverted the track relationship. Instead of the fixture carrying two pins that followed external tracks on the riveter, we cut a single track into the fixture body and let it follow one fixed pin mounted to the riveter. This eliminated the orientation constraint the two-pin setup imposed, made the tracks easier to navigate, and reduced material and setup. This insight didn't come from analysis — it came from standing at the riveter and realizing the thing we thought was fixed didn't need to be.`,
        images: [
          { url: wrenchV3Back, caption: 'V3 back of fixture, with the track now cut directly into the fixture body.' }
        ]
      },
      {
        heading: 'V4 — Thicker Steel Plate and Separated Rivet Zones',
        text: `V2 used sheet metal too thin to take the rivet force; V3 used 1/16" waterjet steel, better but still too thin. In V4 we waterjet a thicker, harder steel plate that finally held up under repeated riveting. We also separated the jaw and body sections on the track — visually and physically — and added clearance between rivet-stop locations to remove ambiguity about where to position the riveter.`,
        images: [
          { url: wrenchV4Track, caption: 'V4 fixture with redesigned track — jaw and body rivet zones separated, waterjet steel outline in orange.' }
        ]
      },
      {
        heading: 'V5 — Stand Resized, Track Entrances Opened',
        text: `Two ergonomics-driven changes. We redesigned the stand to fit the entire wrench in its open position — previously we had to hang the fixture off the table edge to accommodate the open wrench. We also gave each rivet path an open entrance from the outside edge, letting the riveter pin slide in laterally instead of being lifted and dropped into the track each time.`,
        images: [
          { url: wrenchV5Stand, caption: 'V5 fixture on the redesigned wider stand that accommodates the fully-open wrench.' },
          { url: wrenchV5Track, caption: 'V5 track with open entrances from the outside edges for lateral riveter pin entry.' }
        ]
      },
      {
        heading: 'V6 — Refinements for Dual-Riveter Operation',
        text: `V6 introduced four refinements:
• Rivet "corner" positions were tightened so each location slotted in positively, keeping the extra spacing V4 introduced.
• Every track segment got its own entrance (four segments now), so the operator no longer had to pick up the fixture to start the jaw section.
• The inner-plate region was redesigned around a 3/8" pin (vs. the 1/4" pin used elsewhere), and we built a second fixture plate carrying that pin so we could finally run both riveters simultaneously.
• Steel pins were seated deeper into the body to remove flex at the pin tops.

Running both riveters together and hitting a sub-4-minute cycle for the first time felt like the project clicking into place.`,
        images: [
          { url: wrenchV6, caption: 'V6; track segments separately entered, inner-plate region resized for 3/8" pin, pins seated deeper.' }
        ]
      },
      {
        heading: 'V7 — Final Fixture',
        text: `V7 is the fixture used in the timed trial, plus one refinement added afterward: a protruding support piece that braces the handle end of the inner plates when the wrench is fully open. During the trial, the open inner-plate handles cantilevered slightly, introducing play that could affect alignment during riveting. The support piece addresses this directly, and the stand was redesigned to accommodate the new geometry.`,
        images: [
          { url: wrenchV7Support, caption: 'V7 fixture with support for the inner plate on the angled stand.' },
          { url: wrenchV7Stand, caption: 'V7 fixture on the raised stand to accommodate the new supporting component.' }
        ]
      },
      {
        heading: 'Standard Operating Procedure',
        text: `The line is run by a single worker across three co-located stations on one bench: a small riveter on the left (S2), a central assembly area (S1), and a large riveter on the right (S3). The operator assembles at the center, steps left to rivet inner plates, returns to build the outer body, steps right to rivet the body and jaws, and returns for spring, handles, and final inspection. An in-process quality check (open/close action) is performed before jaws are installed so out-of-tolerance body assemblies are caught early.

Total cycle time is 246 s per wrench (3:58): S1 (all non-riveting work) = 158 s, S2 (inner-plate riveting) = 38 s, S3 (outer-body and jaw riveting plus head swap) = 50 s. All three stations are within reach of a single operator.`,
        images: [
          { url: wrenchEquipSetup, caption: 'Equipment setup for the single-operator line — small riveter, central assembly bench, and large riveter.' }
        ]
      },
      {
        heading: 'Process Flow Documentation',
        text: `We built two journey maps: a manufacturing map from raw materials to finished parts, and an assembly map for the single-operator workflow. The mapping is what revealed the second worker was idle too often to justify, and where the bottleneck (jaw insertion and riveting) lived.

We also documented KPIs to track at scale — cycle time, yield rate, rework rate, takt time, operator efficiency, downtime, and cost per unit — and ran an FMEA covering both process/quality failure modes (uneven rivets, plate misalignment, jaws not seating) and operator safety risks (crush injuries, dropped small parts, spring projectiles).`,
        images: [
          { url: wrenchMfgMap, caption: 'Manufacturing journey map — raw materials to finished parts.' },
          { url: wrenchAsmMap, caption: 'Assembly journey map — single-operator workflow with three co-located stations.' }
        ]
      },
      {
        heading: 'High-Volume Manufacturing Plan',
        text: `The plan targets 1,000,000 wrenches per year against a highly seasonal demand profile: 60% in Oct–Dec (holiday retail), 20% in a May–June spring surge, and 20% across the rest of the year. Capacity is flexed by activating the right number of parallel U-shaped workcells and staffing one or two operators per cell by season, with a third shift held in reserve.

At peak (200,000 units/month) the takt time is 6 s/unit, requiring 25 parallel cells and 50 operators; off-peak months run as few as 4 cells. The line also supports two to three jaw-size variants with only a sub-five-minute fixture pin-plate swap between models.

The value stream map covers the full flow from supplier to customer: total production lead time is 18 days against ~16 minutes of process time per wrench — highlighting the lean opportunity in the 6-day and 4-day inventory buffers at the front of the line.`,
        images: [
          { url: wrenchVSM, caption: 'Value stream map — information and material flow, 18-day lead time vs. ~16 min process time.' },
          { url: wrenchLineLayout, caption: 'Production line layout — two parallel rows of U-shaped workcells sharing a central conveyor and replenishment aisle.' }
        ]
      },
      {
        heading: 'Cost & Capital Investment',
        text: `Projected fully-loaded cost is $10.22 per unit — $7.03 direct material (9-component BOM at high-volume pricing), $1.00 direct labor (150 s/unit at $24/hr), $1.16 amortized machinery, $0.35 overhead, $0.65 packaging & shipping, and $0.03 amortized tooling.

Total line investment for one million units is ~$1,196,000: $33,500 in fixtures and tooling (riveting fixtures, assembly fixtures, angled stands, spring tools, inspection gauges) and $1,162,500 in capital equipment (50 riveters, material-handling, packaging).`
      },
      {
        heading: 'CAD Drawings',
        text: `Fully dimensioned SolidWorks drawings for the wrench components and the fixture tooling.`,
        images: [
          { url: wrenchCadOuterPlate, caption: 'Outer plate CAD drawing.' },
          { url: wrenchCadInnerPlate, caption: 'Inner plate CAD drawing.' },
          { url: wrenchCadJaw, caption: 'Bionic Wrench jaw CAD drawing.' },
          { url: wrenchCadWaterjet, caption: 'Waterjet steel plate CAD drawing.' },
          { url: wrenchCadFixture, caption: '3D-printed fixture CAD drawing.' },
          { url: wrenchCadStand, caption: 'Fixture stand CAD drawing.' }
        ]
      },
      {
        heading: 'Trial Run & Outcome',
        text: `In the 30-minute timed trial we produced four good wrenches and two defective ones at a 3:58 average cycle time. We completed every assembly step except seating all six jaws on the two defective units — the professor attributed this to out-of-spec jaws rather than the process. Early in the run the jaws wouldn't seat until we learned to tap the assembled body against a steel plate to re-align the stacked plates.

What worked: we hit our planned cycle time; the single-operator, co-located-riveter workflow held together with no station running dry; the angled flip-the-plates approach (V2) kept rivets seated through handling; open-entrance tracks (V5) sped up riveter navigation; and dual riveters (V6) eliminated the head-swap delay.`
      },
      {
        heading: 'What I Learned',
        text: `Two lessons no lecture could have taught: physical reality always overrules your model, and the only way to a good answer is to build something wrong first. The hardest part wasn't any single fixture version — it was the early metrology. Small errors on the optical comparator propagated into misaligned tracks, then uneven rivets, and took several iterations to trace back to their source. Precision at the measurement stage isn't optional, because every downstream decision is only as good as the data it's built on.

The highest-leverage next step would be CNC-machining the fixture from a single piece of steel with integrated pins — eliminating the waterjet step and removing the small pin flex that PLA holes still allow — plus incoming-jaw inspection to catch bad parts upstream of the line.`
      }
    ]
  },
  {
    id: 12,
    title: 'Formula SAE Brake System',
    category: 'Automotive Systems · Rotor Engineering · Manufacturing Integration',
    image: formulaBrakeImg,
    description: 'Contributed to rotor design, simulation, and manufacturing for a Formula SAE braking system.',
    filterCategory: 'Design',
    date: '2024–2025',
    tools: ['SolidWorks', 'Thermal Simulation', 'Structural Analysis', 'Manufacturing', 'Jig Design'],
    content: [
      {
        text: `As part of Northwestern Formula Racing, I worked on the design, analysis, and implementation of the vehicle's braking system for the Formula SAE race car.

The brake system must reliably stop a lightweight race car under repeated high-load conditions while maintaining predictable pedal feel, thermal stability, and minimal mass.

My contributions spanned the full development pipeline:
• Analytical brake system modeling
• Improving a MATLAB brake simulation tool
• Brake rotor CAD design
• Structural and thermal simulation (ANSYS)
• Rotor machining and finishing
• Brake system routing and hydraulic installation

This work required integrating vehicle dynamics, simulation, mechanical design, and hands-on fabrication.`
      },
      {
        heading: 'Design Target: 1G Deceleration',
        text: `One of the primary design targets was achieving 1G vehicle deceleration, meaning the braking force equals the vehicle's weight.

Using Newton's second law:
F = ma

Where
• vehicle mass = 21.4459 slugs
• target deceleration = 32.17 ft/s² (1G)

F_brake = (21.4459)(32.17)
F_brake ≈ 690 lbf

This means the tires must generate approximately 690 pounds of braking force to achieve 1G deceleration.

Working backwards through the brake system, this corresponds to approximately:
42 lbf of driver pedal force

This results in an overall brake system gain of ~16×, produced by the pedal ratio and hydraulic amplification.`,
        images: [
            { url: brakeWhiteboardCalc }
        ]
      },
      {
        heading: 'Analytical Brake System Model',
        text: `The brake system can be modeled as a chain of force transformations:
Pedal Force → Pedal Ratio → Master Cylinder Pressure → Caliper Clamp Force → Pad Friction → Rotor Torque → Tire Braking Force → Vehicle Deceleration

Brake torque is determined by:
T = μF_c r

Where
• T = braking torque
• μ = pad friction coefficient
• F_c = caliper clamp force
• r = effective rotor radius

Hydraulic pressure is generated by the master cylinder:
P = (F_p · R) / A_MC

Where
• F_p = pedal force
• R = pedal ratio
• A_MC = master cylinder piston area

Understanding this relationship allowed us to determine how design choices affect braking performance.`
      },
      {
        heading: 'MATLAB Brake Simulation',
        text: `The analytical model was implemented in MATLAB to simulate brake system performance across vehicle speeds.

The simulation calculates:
• Required pedal force
• Braking torque distribution
• Front/rear brake bias

A key design goal is ensuring the front and rear braking forces intersect at the correct crossover point, allowing both axles to contribute effectively to braking while avoiding rear wheel lockup.

The simulation allowed rapid exploration of design variables including:
• Rotor outer diameter
• Master cylinder bore size
• Pedal ratio

I also improved the MATLAB code used by the team, making it easier to evaluate design changes and system tradeoffs.`,
        images: [
            { url: brakePedalForcePlot }
        ]
      },
      {
        heading: 'Brake Rotor Design (CAD)',
        text: `Using the results of the brake model, I designed the brake rotor geometry in CAD.

Design considerations included:
• Effective braking radius
• Structural stiffness
• Thermal mass
• Packaging constraints within the wheel assembly

The rotor geometry balances braking torque capability with minimal rotational inertia, which improves vehicle performance.`,
        images: [
            { url: brakeRotorCAD1 },
            { url: brakeRotorCAD2 },
            { url: brakeFrontRotorDwg },
            { url: brakeRearRotorDwg }
        ]
      },
      {
        heading: 'Structural Analysis (FEA)',
        text: `Finite Element Analysis was performed in ANSYS to verify rotor strength under braking loads.

The simulation evaluated:
• Stress distribution during braking
• Deformation under load
• Safety factor relative to material limits

This ensured the rotor could withstand repeated braking events without cracking or excessive deformation.`,
        images: [
            { url: brakeStressFEA }
        ]
      },
      {
        heading: 'Thermal Simulation',
        text: `During braking, the vehicle's kinetic energy is converted to heat through friction:
E = ½mv²

Thermal simulations were conducted to estimate:
• Peak rotor temperatures
• Heat distribution across the rotor
• Cooling between braking events

Ensuring adequate thermal capacity prevents:
• Brake fade
• Pad degradation
• Rotor warping`,
        images: [
            { url: brakeThermalSim }
        ]
      },
      {
        heading: 'Brake Line Routing',
        text: `In addition to modeling and simulation, I planned the hydraulic brake line routing for the vehicle.

The routing diagram was used to determine:
• Brake line paths
• Required fittings
• Component layout
• Part quantities needed for assembly

This ensured the brake system could be assembled efficiently and serviced easily.`,
        images: [
            { url: brakeLineRouting }
        ]
      },
      {
        heading: 'Rotor Manufacturing',
        text: `After validating the design through simulation, the rotors were manufactured.

Fabrication steps included:
• Machining rotor blanks
• Drilling mounting features
• Grinding rotor braking surfaces

The rotor surfaces were finished on a lathe to ensure flatness and proper braking contact.`,
        images: [
            { url: brakeMilling },
            { url: brakeGrinding }
        ]
      },
      {
        heading: 'Brake System Integration',
        text: `The final stage involved installing the brake system into the car.

This included:
• Routing hydraulic brake lines
• Installing calipers and master cylinders
• Bleeding the brake system
• Verifying pedal feel and brake response

Proper bleeding removes air from the hydraulic lines and ensures consistent braking pressure transmission.`,
        images: [
            { url: brakeIntegration }
        ]
      },
      {
        heading: 'Skills Demonstrated',
        text: `• Vehicle Dynamics: Brake force modeling and deceleration analysis
• Programming: MATLAB brake system simulation and improvements
• Mechanical Design: Rotor CAD modeling and packaging
• Simulation: ANSYS structural and thermal analysis
• Manufacturing: Rotor machining and surface finishing
• Systems Engineering: Hydraulic brake routing and system integration`
      },
      {
        heading: 'Impact',
        text: `This work contributed to the development of a fully modeled, simulated, and manufactured braking system capable of achieving the required vehicle deceleration while maintaining thermal reliability and predictable driver control.

The modeling tools and design framework developed also allow future team members to quickly evaluate changes to rotor size, master cylinders, or brake bias.`
      }
    ]
  },
  {
    id: 11,
    title: 'Performance Bicycle Brake Caliper',
    category: 'Simulation-Driven Design · Structural Optimization',
    image: bikeCaliperImg,
    description: 'Designed, simulated, prototyped, and tested a high-performance bicycle brake caliper meeting ISO 4210 safety standards while minimizing weight.',
    filterCategory: 'Design',
    date: '2025',
    tools: ['Finite Element Analysis', 'Topology Optimization', 'Design for Manufacturing', 'Standards-Based Engineering (ISO 4210)', 'Tradeoff Analysis', 'Rapid Prototyping (SLS Nylon-12)', 'Experimental Validation', 'Data-Driven Iteration'],
    content: [
      {
        text: `Design, simulate, prototype, and test a high-performance bicycle brake caliper that meets strict safety, durability, and regulatory constraints while minimizing weight and cost.

We translated user needs into engineering metrics, validated performance through FEA and topology optimization, and tested two physical iterations under real braking conditions.`
      },
      {
        heading: 'The Challenge',
        text: `The caliper had to:
• Stop a 150 lb rider within 15 m from 10 mph
• Require ≤70 N rider input force
• Maintain ≤11 mm tip deflection
• Survive 500,000 load cycles
• Comply with ISO 4210 bicycle safety standards
• Weigh under 150 g (ideal target)

All metrics were derived from engineering standards and safety requirements.`
      },
      {
        heading: 'My Role',
        text: `• Scheduling Lead
• Contributed to FEA iteration decisions
• Participated in design-space reduction strategy
• Assisted in prototype validation testing
• Led design trade-off evaluation between stiffness and mass`
      },
      {
        heading: 'Needs → Metrics Translation',
        text: `We began by converting qualitative needs into measurable engineering targets:

• Stopping distance (dry): Ideal 8 ft, Marginal 15 ft
• Input force: Ideal 40–50 N, Marginal 70 N
• Brake mass: Ideal 150 g, Marginal 250 g
• No deformation at 300°C
• ISO 4210 compliance

This structured approach grounded every design decision in quantitative targets.`,
        images: [
            { url: bikeNeedsTable, caption: 'Quantified performance targets derived from safety standards and engineering benchmarks.' }
        ]
      },
      {
        heading: 'Simulation-Driven Design',
        text: `Initial FEA on Design Space:
We began with the maximum allowable design envelope and applied load cases to identify stress distribution. The initial design space was well below allowable stress — indicating opportunity for mass removal.

Topology Optimization:
We applied topology optimization to identify load paths and remove low-stress regions. Result: organic rib-like geometry focusing material along stress trajectories.`,
        images: [
            { url: bikeInitialFEA, caption: 'Initial FEA on full design space showing stress and displacement results.' },
            { url: bikeTopoOpt, caption: 'Topology optimization highlighting optimal structural load paths.' },
        ]
      },
      {
        heading: 'First Prototype (SLS Nylon-12)',
        text: `Simulation Results:
• Max tip deflection: ~4 mm
• Allowable cap: 11 mm
• Displacement safety factor ≈ 2.75
• Most material <50 MPa

We strategically removed low-stress material and reduced stress concentrations via filleting.`,
        images: [
            { url: bikeFirstFEA, caption: 'FEA validation of first design iteration showing stress and displacement.' }
        ]
      },
      {
        heading: 'Physical Testing — Iteration 1',
        text: `Printed via SLS in Nylon-12 and mounted to bicycle.

Measured Results:
• Mass: 41.3 g
• Braking Distance: 11.3 m
• Input Force: 68.9 N
• Upper Arm Deflection: 3 mm
• Lower Arm Deflection: 5 mm
• Manufacturing Cost: $8.26

The calipers locked the wheels, indicating maximum braking capacity. All critical metrics passed.`,
        images: [
            { url: bikePrintedCaliper, caption: 'SLS-printed Nylon-12 brake caliper with topology-optimized geometry.' }
        ]
      },
      {
        heading: 'Iteration 2 — Aggressive Mass Reduction',
        text: `After passing performance requirements, we pursued additional weight reduction and improved cable routing to eliminate twisting.

Changes included enlarged cutouts, increased fillets, widened pivot holes, and added cable nub for vertical load alignment.

Results Comparison:
• Mass: 41.4 g → 35.5 g (−14%)
• Braking Distance: 11.3 m → 14.8 m
• Input Force: 68.9 N → 102 N (exceeded 70 N requirement)

While still under 15 m stopping distance, the lighter version exceeded the force requirement.`
      },
      {
        heading: 'Engineering Insight',
        text: `Reducing stiffness to save ~6 g resulted in increased deflection, reduced pad contact force, and a 48% increase in rider input force.

This highlighted the stiffness–weight tradeoff. The first design was ultimately the better engineering balance.`
      },
      {
        heading: 'Manufacturing Strategy Analysis',
        text: `We evaluated production methods across three scenarios:

Entry-Level Bike (50k units/year):
Die casting — low cost per part, moderate finish.

High-Performance Road Bike (10k/year):
Forged + CNC machined — higher strength, premium finish.

Custom Bike (200/year):
Additive manufacturing — low tooling cost, design flexibility.

This demonstrated scalability awareness beyond prototype design.`
      },
      {
        heading: 'Final Performance Summary',
        text: `• All safety metrics passed
• ISO standards considered
• Optimized via simulation before fabrication
• Demonstrated real-world braking functionality
• Iterative refinement based on test data`
      }
    ]
  },
  {
    id: 16,
    title: 'Smart Sheet Smith',
    category: 'Research · Manufacturing AI · Multi-Agent LLM Systems',
    image: sheetSmithPoster,
    description: 'An end-to-end LLM-driven multi-agent system that turns a 2D sheet-metal drawing into a verified, physics-grounded bending process plan — no 3D CAD, no labeled data. Presented at MSEC 2026 / NAMRC54.',
    filterCategory: 'Design',
    date: '2025–2026',
    tools: ['Multi-Agent LLM Orchestration', 'Vision-Language Models', 'Retrieval-Augmented Generation', 'Reference-Free Evaluation', 'SolidWorks API / VBA', 'Parametric CAD', 'Sheet-Metal Bend Analysis', 'Dataset Construction'],
    content: [
      {
        text: `Research at the Advanced Intelligent Manufacturing Laboratory, Northwestern University. Presented at MSEC 2026 / NAMRC54 (State College, PA, June 2026) and supported by the NSF ERC-HAMMER (Award EEC-2133630) — the Hybrid Autonomous Manufacturing: Moving from Evolution to Revolution Engineering Research Center, a multi-institution collaboration across Northwestern, Ohio State, Case Western Reserve, NC A&T, and UT Knoxville.

Smart Sheet Smith turns a 2D sheet-metal engineering drawing into a verified, physics-grounded bending process plan — no 3D CAD model and no labeled training data required. I worked on the Tracer Agent and built the data foundation underneath it: the CAD parts, the drawings, the ground-truth geometry, the hand-checked bend math, and a SolidWorks VBA pipeline that generated hundreds of valid parametric drawings automatically.`,
        images: [
          { url: sheetSmithPoster, caption: 'Zahra Sadeghi, the graduate student I worked with, presenting our Smart Sheet Smith poster at MSEC 2026 / NAMRC54.' }
        ]
      },
      {
        heading: 'The Problem',
        text: `Sheet-metal bending process planning is one of the last stubbornly manual steps in fabrication. Choosing the bend order, tooling, and flat-blank dimensions still depends on an experienced planner reading a 2D engineering drawing and applying years of shop-floor judgment.

Commercial CAM software can automate bend sequencing — but only after an engineer rebuilds the 2D drawing as a 3D CAD model, a slow, expensive prerequisite job shops working from customer prints often can't justify. Large language models can ingest drawings directly, but they hallucinate dimensions and produce plans with no built-in physics check. Neither path gets you from a print to a trustworthy plan.`
      },
      {
        heading: 'What We Built',
        text: `Smart Sheet Smith reads a multi-view 2D engineering drawing and produces a verified, physics-grounded bending process plan through a five-agent pipeline:

• Vision Agent — classifies the drawing layout and identifies the master profile and sheet thickness.
• Tracer Agent — extracts the full geometric topology into a structured JSON representation.
• Geometric-Judge — audits the traced geometry against the input drawing itself, in a reference-free loop.
• Engineering Agent — retrieves deterministic physics constants from a curated Knowledge Graph via RAG, then computes bend allowances, tonnage, and bend sequence.
• Performance-Judge — verifies the final plan before the system emits a physics-compensated flat-pattern blueprint ready for the shop floor.`
      },
      {
        heading: 'The Judge–Patcher Loop',
        text: `The core idea is a judge–patcher loop. Rather than scoring output against a labeled answer key, the judges re-derive expected values directly from the source drawing and compare. When a check fails, the patcher rewrites the failing agent's prompt with a targeted error description — for example, a segment extracted at 30.0 mm against a true value of 32.0 mm, or a virtual-sharp-dimension misinterpretation in the flat-pattern calculation — and the pipeline re-runs that stage.

Six metrics across the two judges define the PASS/FAIL verdicts that drive self-correction: segment sequence alignment, feature anchor accuracy, developed length deviation, physics math accuracy, operation sequence alignment, and feasibility validation. This removes the labeling bottleneck — the system improves itself using invariants it can check from first principles, not human annotation.`
      },
      {
        heading: 'Evaluation',
        text: `We evaluated on SIMBA (Sheet Metal Intelligent Bending Archive), a dataset of 50 real industrial V-bending drawings with four-view orthographic projections, spanning simple through complex geometries for robustness testing.

Cumulative correctness rose substantially across three patcher iterations in both the geometric and performance loops, with each iteration recovering additional failing parts. The closed loop delivered meaningful accuracy gains over the single-pass baseline — without a single labeled example.`
      },
      {
        heading: 'My Contribution',
        text: `I worked on the Tracer Agent and owned much of the data foundation it was developed and validated against.

I built the evaluation corpus from the ground up: modeling the parts in CAD, producing the multi-view orthographic drawings, and hand-deriving the ground-truth geometry each drawing should resolve to. I then authored and corrected the structured JSON representations that encoded that topology, iterating on the schema and training examples as failure modes surfaced.

Validating the agent meant doing the bend math by hand — bend allowances, developed lengths, segment sequences — and checking the agent's extraction against it case by case. Beyond numerical correctness, I applied a manufacturability check the math alone can't provide: reasoning through the actual forming process to judge whether a proposed plan was physically realizable on a press brake, or whether it produced a sequence that looked valid on paper but couldn't be made. That distinction drove several corrections to how the pipeline handles bend ordering and tool access.`
      },
      {
        heading: 'Automated Parametric Drawing Generation',
        text: `Manual drawing creation was the hard ceiling on dataset size, so I built a SolidWorks VBA macro pipeline to remove it. Given one base CAD model, the macro randomizes its dimensions within controlled ranges and exports each variation as a fully-dimensioned PDF — hundreds of valid drawings in minutes instead of days.

The design principle that made it work: the macro only changes the values of dimensions that already exist, never adding or removing them. Any variation from a valid base drawing is therefore structurally valid by construction. That reframed the hard problem from "produce a correct drawing" to "produce geometry that rebuilds cleanly and fits on the sheet."

Each iteration randomizes the parameters, force-rebuilds the part and drawing, auto-scales and centers the views, then runs a "safe box" check confirming all geometry and annotations fall inside a defined fraction of the page. Failures retry with new values rather than emitting a bad sample. The helpers are part-agnostic — adapting to a new part family means editing only the dimension names and ranges at the top of the file.`
      },
      {
        heading: 'Validation Across Part Families',
        text: `I validated across three part families and documented the failure modes:

• Simple tab bracket — 20 parts, 85% success. Primary failure: dimensions off page.
• L-bracket — 20 parts, 90% success. Primary failures: bad range → failed rebuild; dimensions off page.
• Bracket with holes and slots — 20 parts, 74% success. Primary failures: hole diameter exceeding parent face; broken flanges; detached radius.

The complex-part result was the useful one. Interdependent features — a hole that must stay inside its containing flange — fail under naive uniform sampling, and the fix isn't more retries. It's defining CAD features as relationships to parent geometry (hole diameter = 0.3 × flange width) rather than absolute values, so features scale proportionally and stay valid across the whole sampling range. Parts modeled that way were substantially more stable.`
      },
      {
        heading: 'What I Took Away',
        text: `• Constrain the generator, not the output. The strongest results in both halves of my work came from making invalid states unrepresentable rather than filtering for them after the fact — value-only randomization in the macro, ratio-defined CAD features instead of absolute ones, physics invariants instead of labeled answers.

• Domain judgment is the scarce input to an AI pipeline. The model could produce a bend sequence that satisfied every numerical check and still couldn't be made on a press brake. Catching that required thinking about tooling access and forming order — the part of the loop an ME contributes that isn't automatable yet.

• Failure modes are the deliverable. Cataloguing why generations failed — off-page annotations, rebuild breaks on interdependent dimensions, the mm-to-meters unit conversion in the SolidWorks API that caused the most early bugs — is what let the next person configure the tool for a new part in an afternoon.`
      },
      {
        heading: 'Where It Goes Next',
        text: `Directions I documented in the technical handoff, roughly in order of leverage:
• Auto-detect dimension names from the part file, so a new base model needs no hand-written configuration — the key step toward full automation across arbitrary geometries.
• Constraint-aware sampling that respects inter-dimension relationships instead of sampling each independently — the direct fix for the 74% complex-part rate.
• A VLM evaluator agent to flag failed or unreadable PDFs automatically, replacing manual QA and doubling as a manufacturability screen.
• A broader base-part library covering flanges, housings, and plates with hole patterns.`
      },
      {
        heading: 'Publication & Team',
        text: `Co-author on the MSEC 2026 / NAMRC54 publication as an undergraduate researcher (Tracer Agent, dataset construction and validation, automated parametric drawing generation).

Authors: Zahra Sadeghi, Ashton Dy, Asher Straus, Xiangyu Shi, Qi Zhu (Northwestern University); Jamie Coble (University of Tennessee, Knoxville); Ping Guo (Northwestern University).`
      }
    ]
  },
  {
    id: 17,
    title: 'Drivetrain Efficiency Test Rig',
    category: 'Drivetrain Testing · Instrumentation & DAQ · Baja SAE · Mechanical Design',
    image: drivetrainBajaCar,
    description: 'A bench-top drivetrain efficiency test rig for Baja SAE, designed to measure power losses across individual components — CVT and gearbox — under repeatable, controlled-load conditions using torque sensors and a Teensy 4.1 DAQ.',
    filterCategory: 'Personal Projects',
    date: '2025–2026',
    tools: ['Drivetrain Systems Architecture', 'Torque & RPM Measurement', 'Microcontroller DAQ (Teensy 4.1)', 'Sensor Selection & Evaluation', 'Bill of Materials Management', 'Sponsor Outreach', 'Mechanical Rig Design', 'Technical Documentation'],
    content: [
      {
        text: `My team designed and proposed a bench-top drivetrain efficiency test rig for our Baja SAE program. The rig is built to measure power losses and efficiency across individual drivetrain components — including the CVT and gearbox — under repeatable, controlled-load conditions. Without this kind of dedicated instrumentation, drivetrain tuning relies on on-vehicle feel and guesswork rather than quantitative efficiency data.

The fundamental measurement principle is η = Pout/Pin = (Tout · ωout) / (Tin · ωin). This requires an external controllable load so that torque actually exists on the drivetrain under test — a key insight that shaped the entire system architecture. We selected a magnetic powder brake as the load absorber because it provides smooth, stable, adjustable load with no fluids or plumbing, at a cost point appropriate for a student team.

We evaluated three measurement plans of increasing cost and precision: Plan 1 uses one inline torque sensor with baseline subtraction ($1,000–$5,500 depending on new vs. used hardware); Plan 2 adds a second torque sensor on the input shaft for direct DUT efficiency calculation, the "gold standard" configuration ($1,600–$8,000); Plan 3 uses reaction torque load cells instead of inline sensors for lower sensor cost but more fabrication effort ($700–$4,500). Our recommended implementation path starts with Plan 1 and upgrades to Plan 2 in a second phase.

Data acquisition uses a Teensy 4.1 microcontroller (already owned) to read torque and RPM signals, compute mechanical power, and log data locally via SD card or USB for post-processing into efficiency vs. RPM/load plots. RPM is measured via a Hall-effect sensor with a magnet mounted on the rotating shaft.

Team: Asher, Selin`
      },
      {
        heading: 'The Challenge',
        text: `Baja SAE drivetrain components are typically tuned with little to no quantitative data on where power losses actually occur. On-vehicle testing cannot isolate individual components, and commercial dynamometers designed for full powerplants are neither accessible nor appropriate for bench-top component-level testing on a student budget. Our team needed a way to measure efficiency losses across specific components — CVT, gearbox, driveshafts — in a controlled lab environment before those components ever go back on the car.

The system also had to be safely designed for rotating shafts under load, with provisions for fragments at high RPM, and had to accommodate a range of component geometries across different design iterations.

The solution had to:
• Measure drivetrain efficiency using η = (Tout · ωout) / (Tin · ωin) at multiple RPM and load operating points
• Apply a smooth, controllable, repeatable load to the device under test
• Measure torque and RPM at the output shaft (Phase 1) and both input and output shafts (Phase 2)
• Accommodate various component geometries via an adjustable, alignment-flexible mounting frame
• Log synchronized torque and RPM data for post-processing into efficiency vs. RPM/load plots
• Include a hardware emergency stop and a fragment-containment safety shield
• Stay within a budget of $700–$5,500 depending on sensor configuration
• Be expandable from single-sensor Phase 1 to dual-sensor Phase 2 without a full rebuild`
      },
      {
        heading: 'My Role',
        text: `• Authored the full drivetrain test rig proposal and system architecture, including evaluation of three measurement plans and absorber types
• Researched and compared absorber technologies (friction brake, hydraulic pump, eddy-current brake, magnetic powder brake) and selected the magnetic powder brake as best cost-function balance
• Selected the ATO 50 N·m digital rotary torque sensor based on signal compatibility (4–20 mA / 0–10 V / RS485) with Teensy 4.1 microcontroller DAQ, avoiding need for OEM software
• Researched strain gauge and Wheatstone bridge principles as background for torque sensor selection and potential DIY sensor fabrication
• Built and maintained the Powertrain Efficiency Test Rig Bill of Materials (BOM) in Google Sheets, tracking procurement status, cost, vendor links, and phase assignments across Phase 1 and Phase 2 items
• Compiled a sponsor outreach list of 10 torque sensor manufacturers with Baja SAE sponsorship history, including FUTEK, TECAT Performance Systems, Kistler, Binsfeld Engineering, Michigan Scientific, and PCB Piezotronics
• Defined a phased implementation path: Phase 1 (single sensor, owned DC motor, owned Teensy) → Phase 2 (second torque sensor or dual reaction torque, 10 hp AC motor with VFD)`
      },
      {
        heading: 'System Architecture',
        text: `1. Drive Input — Phase 1: owned ~1000 W (~1.34 hp) DC electric motor. Phase 2 upgrade: 10 hp AC electric motor ($450) with VFD for variable-speed control. The electric motor provides a repeatable, controllable input torque that replaces the actual engine for component-level testing.

2. Load Absorber — Magnetic powder brake (FZ-D 50 N·m, 24 VDC, $214). Driven by a lab DC power supply with current limit; no OEM controller required. Brake coil current sets load level; actual torque is measured independently by the sensor. Provides smooth, stable, adjustable load with no fluids or plumbing.

3. Torque Measurement — ATO Digital Rotary Torque Sensor, 50 N·m capacity ($939.15). Outputs 4–20 mA / 0–10 V / RS485 torque (and speed) signal read directly by Teensy 4.1 microcontroller DAQ. Phase 2 adds a second sensor at the input shaft for direct input-to-output efficiency calculation.

4. RPM Measurement — Hall-effect sensor with one or more magnets mounted on a rotating shaft or coupler. Pulse timing computes RPM. Selected for robustness and dirt tolerance. Optional upgrade to optical encoder for higher resolution in later phases.

5. Data Acquisition & Logging — Teensy 4.1 microcontroller (owned). Reads torque and RPM signals, synchronizes measurements (dual-sensor configuration), computes mechanical power, and logs data locally to SD card or USB for post-processing and efficiency mapping.

6. Frame & Rig — Bench-top adjustable frame designed with flexible alignment (T-slot rail concept) to accept various drivetrain component geometries. Must handle high forces and rotational speeds with adequate safety factor. Couplings and adapters required to interface different components.

7. Safety Systems — Hardware emergency stop. Physical safety shield to contain rotor fragments in the event of high-RPM failure. Both considered baseline requirements before any testing begins.`
      },
      {
        heading: 'Measurement Plans',
        text: `Three instrumentation configurations were evaluated, differing in cost, precision, and complexity:

Plan 1 (recommended for Phase 1): Single inline torque sensor at output. Baseline subtraction method: run rig with no DUT, then with DUT at identical RPM and load; subtract to estimate DUT efficiency. Cost: $1,000–$5,500 (used-to-new).

Plan 2 — "Gold Standard" (Phase 2 upgrade): Dual inline torque sensors at input and output shafts. Compute DUT efficiency directly at each operating point, independent of motor/controller efficiency. Cost: $1,600–$8,000.

Plan 3 — Reaction Torque (alternative): Load cells instead of inline sensors for lower sensor cost. Requires more custom fabrication. Cost: $700–$4,500.`
      },
      {
        heading: 'Deliverables',
        text: `• Quantified drivetrain losses by component
• Efficiency vs. RPM/load plots
• Data to guide drivetrain redesign and tuning decisions
• Reusable test infrastructure for future Baja SAE teams`
      }
    ]
  },
  {
    id: 14,
    title: 'Patchwork Plush',
    category: 'Accessible Design · Sensory Engineering · Textile Fabrication',
    image: patchworkMockup,
    description: 'Two complementary sensory devices — a tactile texture book and customizable textured pillow — designed for adults with developmental disabilities at Misericordia.',
    filterCategory: 'Design',
    date: '2024',
    tools: ['Human-Centered Design', 'Stakeholder Interviews', 'Behavioral Analysis', 'Material Selection', 'Textile Fabrication', 'Mockup Testing', 'Accessibility Engineering', 'Design for Durability'],
    content: [
      {
        text: `Residents at Misericordia experience sensory overstimulation and rely on expensive, fragile devices like bubble tubes and fiber optic lights to self-regulate.

Our challenge: Design an affordable, durable, safe sensory device that soothes without overstimulating — and can withstand daily use, throwing, and wheelchair impact.

We developed two complementary solutions:
• Texturescape — a tactile texture book
• Patchwork Plush — a customizable textured pillow

Both prioritize universal accessibility, durability, and affordability.`,
        images: [
            { url: patchworkMockup },
        ]
      },
      {
        heading: 'The Problem',
        text: `Current sensory devices cost hundreds to thousands of dollars, break easily, use bright flickering lights (overstimulating), can cause injury if thrown, and require staff assistance.

From our stakeholder interview, key constraints included:
• No flickering/strobe lights
• No loud or high-pitched sounds
• Non-toxic materials
• No choking hazards
• Must withstand being "rammed into by a wheelchair"
• Easily sanitized`,
        images: [
            { url: patchworkSensoryRoom }
        ]
      },
      {
        heading: 'User Research & Testing',
        text: `We conducted stakeholder interviews (Registered Behavior Technician), observation analysis (sensory processing case studies), on-site mockup testing with four residents, and behavioral feedback analysis (facial expression, engagement time, body language).`
      },
      {
        heading: 'My Contributions',
        text: `• Conducted stakeholder interview synthesis
• Led mockup testing & behavioral analysis
• Developed design implications from user behavior
• Designed page tab accessibility solution
• Contributed to material selection and durability decisions
• Co-authored final design report`
      },
      {
        heading: 'Final Design 1: Texturescape — A Durable, Staggered Texture Book',
        text: `Key Features:

1. Staggered Page Tabs — Semi-ellipse tabs offset at different heights, enabling easier page flipping for limited motor control. Derived from mockup testing after a resident accidentally skipped pages.

2. Multi-Texture Pages — Includes faux fur, mesh patterns, sandpaper, raised shapes, and soft fabric. One resident traced the mesh "maze" for an extended period — showing the importance of interactive tactile pathways.

3. Durable Materials — Illustration board core, grommets + metal rings (repairable), soft synthetic fur cover to reduce injury if thrown.

4. Color Differentiation — Each page is uniquely colored to help residents associate color with texture and support non-verbal accessibility.

No electronics → zero seizure risk. No sharp edges. Withstands dropping and throwing. Easily repairable. Costs approximately $25 to build.`,
        images: [
            { url: patchworkBookCover },
            { url: patchworkMaze },
        ]
      },
      {
        heading: 'Final Design 2: Patchwork Plush — Customizable, Multi-Texture Sensory Pillow',
        text: `Key Features:

1. Velcro Texture Patches (4″ × 6″) — Removable and swappable. Allows personalization. Removing/reapplying patches becomes a sensory activity itself.

2. Dual Fabric Base — Cotton top (structural support for Velcro), microfiber underside (preferred texture from user testing). Microfiber was selected due to stain resistance, ease of cleaning, and positive resident feedback.

3. Customizable Filling — 15″ heavy-duty zipper. Foam (quiet & soft) or paper (crinkly & auditory stimulation). Testing revealed mixed preferences → we incorporated choice.

4. Huggable Scale — Residents strongly preferred the larger 20″ × 30″ format. One resident hugged it for an extended time — validating size choice.

Fully soft construction → no injury risk if thrown. Machine-washable components. No electronics. Under $15 per unit. Scalable production.`,
        images: [
            { url: patchworkPillowDim },
            { url: patchworkCrossSection },
        ]
      },
      {
        heading: 'Design Constraints Met',
        text: `• Under $150 total → Final cost under budget
• Non-toxic → Fabric-based materials
• No flicker/light triggers → No lighting used
• Durable → Soft, reinforced stitching
• Universal access → No text, no buttons
• Portable → Lightweight, handheld`
      },
      {
        heading: 'Impact',
        text: `Both devices successfully deliver reduced reliance on expensive fragile sensory tech, increased personalization, support for autonomy, encouragement of tactile regulation, affordability for institutional scaling, and safety in high-mobility environments.

Both devices are calming without overstimulation — addressing sensory overload at its source.`
      },
      {
        heading: 'Future Iterations',
        text: `• Fully machine-washable modular components
• Acrylic or alternative page materials to prevent fraying
• Long-term durability study
• Expanded texture library based on broader resident testing
• Exploration of temperature-based sensory features`
      }
    ]
  },
  {
    id: 9,
    title: 'ExtendIt',
    category: 'Human-Centered Design · Product Development', 
    image: extendItHero,
    description: 'A permanently installed hinged desk extender that increases usable workspace by 81 sq. in. — preferred by 8/10 users over alternative concepts.',
    tools: ['Human-Centered Design', 'Mechanical Design', 'Structural Load Testing', 'User Research', 'Rapid Iteration', 'Cost Modeling', 'Product-Market Fit Evaluation'],
    date: '2024',
    filterCategory: 'Design',
    content: [
      {
        text: `Lecture hall desks are too small to accommodate modern student workflows (laptop + tablet + notebook). Through user research and prototyping, our team designed ExtendIt — a permanently installed hinged desk extender that increases usable workspace by 81 sq. in. without encroaching on adjacent seating.

ExtendIt folds flush beneath the existing desk when not in use and locks securely at 0° and 180° during deployment.`,
        images: [
            { url: extendItHero, caption: 'Final ExtendIt prototype deployed in lecture hall configuration.' }
        ]
      },
      {
        heading: 'Impact',
        text: `• +50% minimum increase in usable desk surface area
• 81 sq. in. added workspace (9″ × 9″ prototype)
• Designed to support >30 lbs with <0.5″ deflection
• Preferred by 8/10 users over alternative concepts`
      },
      {
        heading: 'Problem',
        text: `Students in lecture halls face insufficient desk space for modern devices, clutter from water bottles and backpacks, discomfort from inefficient workspace layout, and disruption when managing multiple materials during exams.

72% of students sit over 7 hours/day, and limited workspace directly impacts comfort and productivity.`
      },
      {
        heading: 'My Role',
        text: `• Conducted user interviews (22 total participants)
• Led opportunity evaluation and alternatives matrix analysis
• Contributed to mechanical design and hinge selection
• Performed structural and load testing
• Helped develop business model & cost structure analysis
• Participated in prototype fabrication and iteration`
      },
      {
        heading: 'User Research',
        text: `We conducted 22 exploratory interviews, ranked opportunity spaces via a weighted scoring matrix, and tested 7 physical mockups with 10 users each.

Students overwhelmingly preferred a permanent, stable solution over portable attachments.`,
        images: [
            { url: extendItUserTestNew, caption: 'Simulated real-world loading during user durability testing.' }
        ]
      },
      {
        heading: 'Design Requirements',
        text: `The final design needed to:
• Be intuitive and deploy in <2 seconds
• Withstand daily unsupervised use
• Support body-weight leaning forces
• Work across multiple lecture chair models
• Fold unobtrusively beneath existing desk`
      },
      {
        heading: 'Engineering & Mechanical Design',
        text: `Core components:
• 0.75″ melamine-covered particle board panel
• Galvanized locking hinge (modified to remove 90° detent)
• Black oxide #8 particle board screws
• Custom shim to ensure flush alignment

The hinge locks at 0° (stored) and 180° (deployed). We manually ground the 90° detent to ensure smooth motion.`,
        images: [
           { url: extendItHinge, caption: 'Modified locking hinge installed beneath existing desk.' },
           { url: extendItSketch, caption: 'Early sketch exploring hinge motion and desk integration.' },
        ]
      },
      {
        heading: 'Structural Testing',
        text: `We built a dedicated load-testing rig to preserve the final prototype.

Testing Results:
• 33.5 lb suspended load
• Varied moment arm distances
• ⅜″ deflection at 6″ from hinge
• Target: ≤0.5″ deflection at 30 lb
• Result: Exceeded strength requirements

Seating clearance when folded: 9.5″ (exceeds 9″ design spec).`,
        images: [
            { url: extendItLoadTestNew, caption: 'Load-bearing and deflection testing setup.' }
        ]
      },
      {
        heading: 'Alternative Concepts Explored',
        text: `Before finalizing the desk extension, we prototyped a backpack hook attachment, lumbar support device, tablet clamp system, armrest extension, and sliding storage drawer.

While each addressed partial pain points, expanding workspace delivered the highest perceived impact and adoption likelihood.`
      },
      {
        heading: 'Business & Market Strategy',
        text: `Primary Customer: Universities (B2B model)
Market: U.S. school furniture market >$2B

Unit Economics:
• Raw materials: $6.02
• Labor (5 min): $4.17
• Total cost: $10.19 per unit

Revenue opportunities include standard model sales, custom sizing, branded installations, licensing to furniture manufacturers, and consulting for classroom optimization.`
      },
      {
        heading: 'Ethics & Accessibility',
        text: `We incorporated accommodation for left-handed users, height-inclusive clearance standards, rounded edges for safety, and diverse user testing (age, major, campus location).`
      },
      {
        heading: 'Future Improvements',
        text: `• Integrated cup holder
• Custom-designed hinge (thinner, dual-lock only)
• Alternative materials for cost optimization
• Large-scale durability & FMEA testing`,
        images: [
            { url: extendItCupHolder, caption: 'Concept exploration for integrated hydration feature.' }
        ]
      }
    ]
  },
  {
    id: 13,
    title: 'StimSpin',
    category: 'Accessible Design · Sensory Engineering · Prototyping',
    image: stimSpinInUse,
    description: 'A fully interactive, customizable spinning wheel designed for adults with cerebral palsy at Misericordia — enabling autonomy through gross motor interaction.',
    filterCategory: 'Design',
    date: '2024',
    tools: ['Human-Centered Design', 'Accessibility Engineering', 'Prototyping', 'User Observation', 'Iterative Design', 'Fabrication', 'Stakeholder Interviews'],
    content: [
      {
        text: `StimSpin is a fully interactive, customizable spinning wheel designed for adults with cerebral palsy living at Misericordia. The goal was to create a device that enables autonomy through gross motor interaction, provides multi-sensory stimulation (visual, tactile, auditory), supports classroom engagement, and is safe, durable, and easily sanitized.

The final product balances accessibility, education, and durability within a $150 budget and 10-week timeline.`,
        images: [
            { url: stimSpinInUse },
            { url: stimSpinSketch }
        ]
      },
      {
        heading: 'The Problem',
        text: `Adults with cerebral palsy often have limited fine motor control. Many existing sensory devices require gripping or small hand movements, are overstimulating (flashing lights), are not portable, are difficult to sanitize, and do not support educational integration.

Teachers needed a device that was interactive, classroom-friendly, portable, and accessible to users across a wide mobility spectrum.`
      },
      {
        heading: 'Final Prototype',
        text: `StimSpin is a handheld 18-inch spinning wheel featuring:
• 14 customizable whiteboard sections
• Large extruding wooden knobs
• Swappable overlays
• Soft rubber clicker for auditory feedback
• Rear-mounted handle for portability

Weight: 10 lbs
Dimensions: 5 × 18 × 22 in`
      },
      {
        heading: 'Extruding Knobs — Enabling Gross Motor Control',
        text: `Many residents cannot grip small pegs.

Design solution:
• 0.75″ diameter wooden knobs
• 2.25″ length
• Evenly spaced (7 around perimeter)
• Sanded for safety

Users can rest their hand on a knob, hit or push it, and spin the wheel without fine motor control. This design directly increases accessibility and autonomy.`,
        images: [
            { url: stimSpinKnob }
        ]
      },
      {
        heading: 'Acrylic Whiteboard Base — Infinite Customization',
        text: `Clear acrylic layer writable with Expo markers, easily erased, protecting underlying color segments.

Teachers can write vocabulary, create games, assign categories, and adapt content daily. StimSpin becomes a dynamic classroom tool rather than a static toy.`,
        images: [
            { url: stimSpinWhiteboard }
        ]
      },
      {
        heading: 'Texture Overlay — Tactile Engagement',
        text: `Seven textures including foam, sequin fabric, crinkle material, silicone mold, and felt.

Residents can spin to land on a texture and freely explore tactile stimulation. Designed based on user testing showing preference for squishy and crinkly materials.`,
        images: [
            { url: stimSpinTexture }
        ]
      },
      {
        heading: 'Disney Overlay — Choice & Ownership',
        text: `Residents are strong Disney fans. This overlay allows users to spin and select the soundtrack, promotes autonomy, and turns music into an interactive activity.

Choice increases engagement and reduces frustration.`,
        images: [
            { url: stimSpinDisney }
        ]
      },
      {
        heading: 'Science Overlay — Educational Integration',
        text: `Enables residents to choose the day's science topic and participate in classroom direction. This bridges entertainment with structured learning.`,
        images: [
            { url: stimSpinScience }
        ]
      },
      {
        heading: 'Handle & Portability',
        text: `Many residents cannot move their own wheelchairs — the device must be brought to them.

Features:
• 5.75″ handle
• Balanced weight distribution
• One-handed carry

This allows teachers to safely position the device for each individual.`,
        images: [
            { url: stimSpinHandle }
        ]
      },
      {
        heading: 'Rubber Clicker — Soft Auditory Feedback',
        text: `The soft rubber clicker produces a gentle whirring sound, avoids harsh noise, adds auditory stimulation, and clearly indicates final selection.

Avoided flashing lights to reduce seizure risk.`,
        images: [
            { url: stimSpinClicker }
        ]
      },
      {
        heading: 'Research & Testing',
        text: `We conducted client interviews, user observation sessions, mockup testing (cardboard wheel + texture blanket), and iterative prototyping.

Testing revealed:
• Wheel format was most engaging
• Knobs needed to be larger
• Sound was important
• Squishy textures were preferred

We pivoted accordingly.`
      },
      {
        heading: 'Design Constraints',
        text: `• Under $150 total cost
• No flashing lights
• No choking hazards (>3 cm minimum)
• Must withstand throwing/mishandling
• Must be sanitized with Clorox/Lysol
• Size under 2 × 3 × 3 ft

Final build cost: ~$150
Total weight: 10 lbs`
      },
      {
        heading: 'My Contributions',
        text: `• User observation & stakeholder interviews
• Mockup prototyping & testing
• Knob design + mechanical assembly
• Overlay fabrication
• Accessibility refinement
• Final report development`
      },
      {
        heading: 'Impact',
        text: `StimSpin successfully delivers accessibility across mobility levels, multi-sensory engagement (visual, tactile, auditory), classroom adaptability, safe and durable construction, easy sanitization, and an affordable, scalable design.

The device enhances autonomy, reduces frustration, and transforms passive classroom experiences into interactive ones.`
      },
      {
        heading: 'Future Development',
        text: `• Embedded sound modules
• Long-term durability testing
• Expanded overlay library
• Replaceable texture panels
• Magnetic overlay attachment system`
      }
    ]
  },
  {
    id: 20,
    title: 'Dodecahedron Lamp',
    category: 'Digital Fabrication · Geometric Modeling',
    image: lampImg,
    description: 'A modular geometric lamp exploring 3D printing constraints and reflective material design.',
    filterCategory: 'Personal Projects',
    date: '2026',
    tools: ['Geometric Modeling', '3D Printing', 'Laser Cutting', 'Modular Assembly', 'Rapid Prototyping'],
    content: [
      {
        heading: 'Concept & Rapid Fabrication',
        text: `Designed and fabricated a modular mirrored dodecahedron lamp in one day.`,
        images: [
            { url: lampCADSketch }
        ]
      },
      {
        heading: 'Dihedral Geometry, Laser Cutting & 3D-Printed Joints',
        text: `• Laser-cut mirrored acrylic panels
• Calculated dihedral angles for precise edge geometry
• Split structure to fit printer bed constraints
• Heat-welded PLA joints
• Added hinged upper panel to enable future light replacement`,
        images: [
            { url: lampAcrylicSheet },
            { url: lampLaserCut },
            { url: lampPanelsTable },
            { url: lampSlicer },
            { url: lampPrintFail },
            { url: lampWelding }
        ]
      },
      {
        heading: 'Completed Lamp & Lessons Learned',
        text: `Created a structurally accurate modular lamp integrating geometry, fabrication constraints, and functional access.`,
        images: [
            { url: lampHinged },
            { url: lampLitGlow, caption: 'Lit from within, string lights diffused through the mirrored acrylic panels' },
            { url: lampHanging }
        ]
      }
    ]
  },
  {
    id: 21,
    title: 'Iron Sand Casting',
    category: 'Metal Casting · Furnace Fabrication · Foundry Practice',
    image: castFurnaceHero,
    description: "Built a coke-fired furnace to cast iron, and hand-embossed a nameplate in sand when a binder-jet mold order didn't arrive in time.",
    filterCategory: 'Personal Projects',
    date: '2026',
    tools: ['Furnace Fabrication', 'Iron Casting', 'Sand Mold Casting', 'Onshape', 'Forced-Air Combustion', 'Foundry Safety'],
    content: [
      {
        text: `Built a coke-fired furnace — forced air supplied by a leaf blower — to melt and pour iron. In parallel, I modeled a bacteriophage in Onshape to be cast from a binder-jet-printed sand mold I ordered out, aiming to pour it in late March.`,
        images: [
            { url: castFurnaceHero, caption: 'The coke-fired furnace, forced air supplied by a leaf blower' },
            { url: castFurnaceScaffold, caption: 'Tending the furnace from the scaffold' }
        ]
      },
      {
        heading: "When the Mold Didn't Arrive",
        text: `The binder-jet sand mold for the bacteriophage didn't ship in time for pour day. Rather than skip the pour, I fell back to a blank plaque mold and hammered a 3D-printed pattern of my name and major directly into the sand by hand to emboss the impression, then poured molten iron into it.`,
        images: [
            { url: castPourCloseup, caption: 'Pouring molten iron into a mold' },
            { url: castTeamMolds, caption: 'Molds glowing after the pour' }
        ]
      },
      {
        heading: 'The Result',
        text: `The pour produced a solid iron nameplate with my name and major embossed from the hand-pressed pattern — not the piece I originally set out to cast, but a complete one made entirely from furnace to finished plaque.`,
        images: [
            { url: castNameplateFinished, caption: 'The finished cast iron nameplate' },
            { url: castMoldsCooling, caption: 'Freshly poured molds cooling' }
        ]
      }
    ]
  },
  {
    id: 22,
    title: 'Snap-Fit Projector Mounts',
    category: 'Compliant Mechanisms · 3D Printing · Product Design',
    image: projBedClipFinished,
    description: 'Two PETG 3D-printed projector mounts — a cantilever snap-fit stand that clips onto a bed frame, and a clamp-on stand that slides onto a table edge for game nights.',
    filterCategory: 'Personal Projects',
    date: '2026',
    tools: ['Compliant Mechanism Design', '3D Printing (PETG)', 'Snap-Fit Design', 'Product Design', 'CAD Modeling'],
    content: [
      {
        text: `Designed and 3D-printed two PETG projector mounts for two different mounting problems. The bed-mount stand was my first true compliant mechanism — I had never designed a snap-fit before this.`,
        images: [
            { url: projPlacementIdea, caption: 'Holding the projector up to plan where it would mount' },
            { url: projConceptSketch, caption: 'Early concept sketch covering both the bed-clip and table-clamp designs' }
        ]
      },
      {
        heading: 'Bed-Mount Stand',
        text: `Clips onto the side of my bed frame near the top, by the nightstand, using cantilever snap arms that flex to clip on and hold the projector in place — letting me watch movies from bed. The arms are fixed (non-adjustable), and this was the first compliant mechanism I designed.`,
        images: [
            { url: projAngleSketch, caption: 'Snap-arm angle and dimension detail for the cantilever clip' },
            { url: projCadBedClip, caption: 'CAD model of the bed-mount bracket' },
            { url: projWoodMockup, caption: 'Wood mockup of the base, clamped to the bed frame to test fit' },
            { url: projMockupVsPrint, caption: 'Wood mockup next to the first 3D-printed bracket' },
            { url: projBedClipFinished, caption: 'The finished 3D-printed cantilever snap-fit bracket' }
        ]
      },
      {
        heading: 'Table-Slide Stand',
        text: `Slides onto a tabletop edge and clamps down to hold the projector steady — built so we could project maps and displays onto the table for Dungeons & Dragons game nights.`,
        images: [
            { url: projCadTableClamp, caption: 'CAD model of the table-clamp bracket' }
        ]
      }
    ]
  },
  {
    id: 23,
    title: 'Kerf-Bent Walnut Turntable Stand',
    category: 'Furniture Design · CNC Fabrication · Audio Equipment (Work in Progress)',
    image: turntableCadRender,
    description: 'A kerf-bent walnut veneer plywood turntable stand — an S-curved form with two bends and three platforms, accented with brass tubing and tuned for vibration isolation. Currently finalized in CAD and BOM, awaiting CNC router time.',
    filterCategory: 'Personal Projects',
    date: '2026',
    tools: ['CNC Routing', 'Kerf Bending', 'CAD Modeling', 'Bill of Materials', 'Vibration Isolation', 'Furniture Design'],
    content: [
      {
        text: `My first audio-focused project: a turntable stand made from a single piece of walnut veneer plywood, kerf-bent into a squished S-shape with two turns and three platforms. Still a work in progress — I have the full CAD model and BOM finalized, but I'm waiting on a shop trainer to be available for the CNC router (they're only there during hours I'm at work during the week).`,
        images: [
            { url: turntableCadRender, caption: 'CAD render of the kerf-bent S-curve stand, with the threaded-rod supports shown' }
        ]
      },
      {
        heading: 'Design',
        text: `The stand will be kerf-cut with a V-tapered bit to let a single sheet of walnut veneer plywood bend into the S-curve, forming three continuous platforms in one piece. Brass tubing runs through it as an accent — it isn't structural; a concealed threaded rod inside does the actual load-bearing.`,
        images: [
            { url: turntablePracticeKerfs, caption: 'Practice kerf cuts on scrap walnut plywood, testing the bend before committing to the real piece' }
        ]
      },
      {
        heading: 'Vibration Isolation',
        text: `Three strategies layered together: isolation feet, damping wool pads, and mass loading — placing the heaviest component, the record itself, on the lowest platform.`
      },
      {
        heading: 'Status',
        text: `Materials sourced, BOM finalized, CAD complete. Next step is kerfing the walnut plywood on the CNC router, plus cable management for a clean final build.`,
        images: [
            { url: turntableBom, caption: 'Bill of materials — $370.04 total across plywood, the V-groove bit, brass tubing, vibration isolation hardware, and finish' }
        ]
      }
    ]
  },
  {
    id: 24,
    title: 'Light Tracing Board',
    category: 'Product Design · Laser Cutting · 3D Printing',
    image: tracingBoardInUse,
    description: 'A laser-cut acrylic light board with 3D-printed corner stands, sized to fit the large-format paper used in my industrial sketching class.',
    filterCategory: 'Personal Projects',
    date: '2026',
    tools: ['Laser Cutting', 'Acrylic Fabrication', '3D Printing (PLA)', 'Product Design', 'CAD Modeling'],
    content: [
      {
        text: `Built alongside my industrial sketching class in Spring 2026 — a light table for tracing sketches, sized to exactly fit the large-format paper I was using in class. A light placed underneath shines up through the paper, making it easy to see and trace over an existing drawing.`,
        images: [
            { url: tracingBoardInUse, caption: 'Tracing a sketch on the light board' }
        ]
      },
      {
        heading: 'Build',
        text: `Laser-cut acrylic sheet, held up on four 3D-printed PLA corner stands secured with M3 bolts and nuts. The stands elevate the acrylic off the table so the light underneath has room to spread evenly across the sheet before it reaches the paper.`,
        images: [
            { url: tracingBoardLit, caption: 'The board elevated on its corner stands, lit from underneath' },
            { url: tracingBoardElevated, caption: 'Corner stand detail, showing the elevation off the table surface' }
        ]
      }
    ]
  }
];

// Helper: collect all unique images from a project (thumbnail + content images)
export function getAllProjectImages(project: Project): string[] {
  const images: string[] = project.image ? [project.image] : [];
  for (const section of project.content) {
    if (section.images) {
      for (const img of section.images) {
        if (!images.includes(img.url)) {
          images.push(img.url);
        }
      }
    }
  }
  return images;
}

const ProjectCard = forwardRef<HTMLDivElement, { project: Project; onSelect: (id: number) => void }>(
  function ProjectCard({ project, onSelect }, ref) {
  const [imgIndex, setImgIndex] = useState(0);
  const allImages = getAllProjectImages(project);
  const hasMultiple = allImages.length > 1;

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer bg-[#F7F3ED] shadow-sm hover:shadow-lg transition-all duration-300 rounded-sm overflow-hidden border border-[#1B2D5B]/10"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#E8E3DB]" onClick={() => onSelect(project.id)}>
        {allImages.length > 0 ? (
          <AnimatePresence mode="wait">
            <motion.img
              key={imgIndex}
              src={allImages[imgIndex]}
              alt={project.title}
              loading="lazy"
              decoding="async"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="w-full h-full object-cover absolute inset-0"
            />
          </AnimatePresence>
        ) : (
          <div className="absolute inset-0 bg-[#1B2D5B] flex flex-col items-center justify-center p-6 text-center">
            <p className="text-[#7B9ACC] text-xs font-bold tracking-widest uppercase mb-3">{project.category.split('·')[0].trim()}</p>
            <p className="text-white/90 text-lg font-bold leading-snug">{project.title}</p>
          </div>
        )}
        <div className="absolute inset-0 bg-[#1B2D5B]/0 group-hover:bg-[#1B2D5B]/10 transition-colors duration-300" />

        {/* Chevron arrows for cycling images */}
        {hasMultiple && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setImgIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white/80 hover:text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setImgIndex((prev) => (prev + 1) % allImages.length);
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white/80 hover:text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <ChevronRight size={18} />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {allImages.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setImgIndex(i);
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                    i === imgIndex ? 'bg-white w-3' : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-6" onClick={() => onSelect(project.id)}>
        <p className="text-xs font-bold text-[#3B5998] uppercase tracking-wider mb-2">{project.category.split('·')[0]}</p>
        <h3 className="text-xl font-bold text-[#1B2D5B] mb-3 group-hover:text-[#3B5998] transition-colors flex items-center gap-2">
          {project.title}
          <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </h3>
        <p className="text-[#1B2D5B]/50 text-sm leading-relaxed line-clamp-2">{project.description}</p>
      </div>
    </motion.div>
  );
});

export function Portfolio() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedProject = projects.find(p => p.id === selectedId);

  // Open a project modal when linked to via ?project=ID (e.g. from the Gallery)
  useEffect(() => {
    const pid = searchParams.get('project');
    if (!pid) return;
    const idNum = Number(pid);
    if (projects.some(p => p.id === idNum)) {
      setSelectedId(idNum);
      setTimeout(() => {
        document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [searchParams]);

  const closeModal = () => {
    setSelectedId(null);
    if (searchParams.get('project')) {
      searchParams.delete('project');
      setSearchParams(searchParams, { replace: true });
    }
  };

  useEffect(() => {
    if (selectedId || zoomedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedId, zoomedImage]);

  return (
    <section id="portfolio" className="py-24 bg-[#F0EBE3] relative overflow-hidden">
      {/* Subtle pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url(${portfolioBg})`,
          backgroundSize: '500px',
          backgroundRepeat: 'repeat',
        }}
      />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1B2D5B] mb-4 tracking-wide">PORTFOLIO</h2>
          <p className="text-[#1B2D5B]/50 font-light text-lg">Engineering, design, and art</p>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={setSelectedId}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- MODAL --- */}
        <AnimatePresence>
          {selectedId && selectedProject && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />
              
              <motion.div
                layoutId={`project-${selectedId}`}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                className="relative w-full max-w-5xl bg-[#F7F3ED] rounded-lg shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 p-2 bg-white/50 hover:bg-white rounded-full transition-colors shadow-md"
                >
                  <X size={24} className="text-gray-900" />
                </button>

                <div className="overflow-y-auto custom-scrollbar">
                  <div className="w-full h-64 md:h-80 relative bg-[#1B2D5B]">
                    {selectedProject.image ? (
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover md:object-contain bg-[#F0EBE3] cursor-pointer"
                        onClick={() => setZoomedImage(selectedProject.image)}
                      />
                    ) : null}
                    <div className={`absolute bottom-0 left-0 right-0 p-8 ${selectedProject.image ? 'bg-gradient-to-t from-[#1B2D5B]/90 to-transparent' : 'bg-transparent flex flex-col justify-end h-full'}`}>
                       <p className="text-[#7B9ACC] font-bold tracking-widest uppercase text-sm mb-2">{selectedProject.category}</p>
                       <h2 className="text-2xl md:text-4xl font-bold text-white">{selectedProject.title}</h2>
                    </div>
                  </div>

                  <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-12">
                      <div className="space-y-6">
                        <h4 className="text-xl font-bold text-[#1B2D5B] border-l-4 border-[#3B5998] pl-4">Project Overview</h4>
                        
                        {selectedProject.content && selectedProject.content.length > 0 ? (
                          <div className="space-y-10">
                            {selectedProject.content.map((section, idx) => (
                              <div key={idx} className="space-y-4">
                                {section.heading && (
                                  <h5 className="text-lg font-bold text-[#1B2D5B] uppercase tracking-wide border-b border-[#1B2D5B]/10 pb-2 inline-block">
                                    {section.heading}
                                  </h5>
                                )}
                                {section.text && (
                                  <p className="text-[#1B2D5B]/70 text-lg leading-relaxed whitespace-pre-line">
                                    {section.text}
                                  </p>
                                )}
                                {section.images && (
                                  <div className={`grid grid-cols-1 ${section.images.length > 1 ? 'sm:grid-cols-2' : ''} gap-6 pt-4`}>
                                    {section.images.map((img, imgIdx) => (
                                      <div key={imgIdx} className="space-y-3 group cursor-pointer" onClick={() => setZoomedImage(img.url)}>
                                        <div className="relative overflow-hidden rounded-lg bg-[#F0EBE3] border border-[#1B2D5B]/10 shadow-sm">
                                          <img
                                            src={img.url}
                                            {...dimsFor(img.url)}
                                            loading="lazy"
                                            decoding="async"
                                            alt={img.caption || "Project detail"}
                                            className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-300"
                                          />
                                          <div className="absolute top-2 right-2 bg-black/50 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                            <ZoomIn size={16} />
                                          </div>
                                        </div>
                                        {img.caption && (
                                          <p className="text-sm text-gray-500 italic text-center">{img.caption}</p>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
                            {selectedProject.description}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <h5 className="flex items-center gap-2 text-sm font-bold text-[#1B2D5B] uppercase tracking-wider mb-4 border-b border-[#1B2D5B]/10 pb-2">
                          <Wrench size={16} />
                          Tools & Skills
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tools.map(tool => (
                            <span key={tool} className="px-3 py-1 bg-[#1B2D5B]/10 text-[#1B2D5B]/80 text-xs font-medium rounded-full">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      {selectedProject.date && (
                        <div>
                          <h5 className="flex items-center gap-2 text-sm font-bold text-[#1B2D5B] uppercase tracking-wider mb-4 border-b border-[#1B2D5B]/10 pb-2">
                            <Calendar size={16} />
                            Date
                          </h5>
                          <p className="text-[#1B2D5B]/70 font-medium">{selectedProject.date}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* --- LIGHTBOX --- */}
        <AnimatePresence>
          {zoomedImage && (
            <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md" onClick={() => setZoomedImage(null)}>
              <button 
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                onClick={() => setZoomedImage(null)}
              >
                <X size={32} />
              </button>
              <motion.img
                layoutId={`zoom-${zoomedImage}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                src={zoomedImage}
                alt="Zoomed view"
                className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}