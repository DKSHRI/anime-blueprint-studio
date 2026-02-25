import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-32 bg-secondary/30">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-body">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-16">
            Projects
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group relative aspect-[4/3] bg-muted rounded-sm overflow-hidden border border-border hover:border-accent/40 transition-all duration-300 hover:shadow-lg"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-10 h-10 border border-border rounded-sm flex items-center justify-center mx-auto mb-3 group-hover:border-accent/50 transition-colors">
                    <span className="text-muted-foreground text-lg">+</span>
                  </div>
                  <p className="text-xs text-muted-foreground tracking-widest uppercase font-body">
                    Coming Soon
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
