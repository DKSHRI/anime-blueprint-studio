import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "AutoCAD",
  "SketchUp",
  "Revit",
  "Lumion",
  "Adobe Photoshop",
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 bg-secondary/30">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-body">
            About
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-12">
            The <span className="italic font-normal">Designer</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed font-body">
              Himanshi Vats is a passionate architecture student at Apeejay School of Architecture, 
              Greater Noida, driven by a deep commitment to sustainable design and spatial storytelling. 
              Her work explores the intersection of urban design, human experience, and environmental responsibility.
            </p>
            <p className="text-muted-foreground leading-relaxed font-body">
              With a keen eye for detail and a love for thoughtful spaces, she believes architecture 
              should not only shelter but inspire — creating environments that tell stories and foster 
              connection with the natural world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-6 font-body">
              Tools & Software
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-background border border-border text-sm text-foreground font-body rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
