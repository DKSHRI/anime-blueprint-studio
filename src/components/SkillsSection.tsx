import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ArchitecturalDecor from "./ArchitecturalDecor";

const skills = [
  { name: "Architectural Design", level: 90 },
  { name: "3D Modeling", level: 85 },
  { name: "Concept Development", level: 88 },
  { name: "Sustainable Planning", level: 80 },
  { name: "Rendering & Visualization", level: 82 },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <ArchitecturalDecor variant="crane" position="left" className="top-12 w-36 opacity-50" />

      <div ref={ref} className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-body">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-16">
            Core <span className="italic font-normal">Skills</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-body text-foreground tracking-wide">
                  {skill.name}
                </span>
                <span className="text-xs font-body text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
              <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-accent rounded-full"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1.2, delay: 0.2 * i, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
