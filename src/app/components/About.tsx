import { motion } from 'motion/react';
import profileImg from 'figma:asset/0da3efe4925c16eb36e4ebf526f92081949c8190.webp';
import patternBg from 'figma:asset/ff659488ddca67ce2d2ea51b9e8965e2d85d8a1e.webp';
import { dimsFor } from './imageDimensions';

export function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Pattern Background */}
      <div className="absolute inset-0 z-0">
        <img src={patternBg} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover opacity-[0.10]" />
        <div className="absolute inset-0 bg-[#F7F3ED]/75" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-[#1B2D5B]/40 uppercase mb-2">About Me</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-[#1B2D5B] mb-6 tracking-wide uppercase">
                Hi, I'm Asher!
              </h3>
              <div className="space-y-6 text-[#1B2D5B]/70 leading-relaxed text-lg">
                <p>
                  I am a <span className="font-bold text-[#1B2D5B]">Manufacturing and Design Engineering</span> student pursuing a minor in <span className="font-bold text-[#1B2D5B]">Art</span>, along with <span className="font-bold text-[#1B2D5B]">certificates in Segal Design and Robotics</span>—my work sits at the intersection of technical rigor and creative expression.
                </p>
                <p>
                  I practically grew up on a racetrack. Being surrounded by engines, chassis setups, and the constant pursuit of mechanical perfection sparked a fascination with understanding how everything works. At 13, I started working at a karting track—wrenching on engines, troubleshooting mechanical issues, and getting my first real taste of hands-on problem solving.
                </p>
                <p>
                  That experience shaped how I approach engineering today. I believe every problem is an invitation to create a solution that hasn't been invented yet, and every new manufacturing process I learn unlocks a wider range of possibilities for creation.
                </p>
                <p>
                  When I'm not building things, I'm usually either at the track, DJ-ing, or listening to science podcasts (my favorite is StarTalk) and making my own theories about the physics behind everyday events before diving into the science. My dream job is getting paid to tinker and explore, and my ultimate goal is to establish my own workshop—a space dedicated to craftsmanship, experimentation, and the joy of making things real.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative max-w-sm md:max-w-md"
            >
              <img
                src={profileImg}
                {...dimsFor(profileImg)}
                loading="lazy"
                decoding="async"
                alt="Asher Straus"
                className="w-full h-auto object-cover shadow-xl"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}