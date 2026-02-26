import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollTypingText from "./ScrollTypingText";

const BridgeScrollAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Bridge construction phases
  const pillar1 = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);
  const pillar2 = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
  const pillar3 = useTransform(scrollYProgress, [0.08, 0.22], [0, 1]);
  const deckOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const deckWidth = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);
  const cable1 = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);
  const cable2 = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const railingOpacity = useTransform(scrollYProgress, [0.5, 0.65], [0, 1]);
  const waterOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 0.6]);
  const archOpacity = useTransform(scrollYProgress, [0.55, 0.7], [0, 1]);
  const lightsOpacity = useTransform(scrollYProgress, [0.65, 0.8], [0, 1]);
  const reflectionOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 0.3]);

  return (
    <div ref={containerRef} className="relative py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-8">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-body">About</p>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-4">
            The <span className="italic font-normal text-accent">Designer</span>
          </h2>
        </div>

        {/* Bridge SVG */}
        <div className="flex justify-center mb-12">
          <svg viewBox="0 0 600 250" className="w-full max-w-2xl h-auto" fill="none">
            {/* Water */}
            <motion.g style={{ opacity: waterOpacity }}>
              <rect x="0" y="190" width="600" height="60" fill="hsl(210 40% 85% / 0.3)" />
              <motion.path d="M 0 195 Q 50 185 100 195 Q 150 205 200 195 Q 250 185 300 195 Q 350 205 400 195 Q 450 185 500 195 Q 550 205 600 195"
                stroke="hsl(210 40% 70% / 0.3)" strokeWidth="1" fill="none"
                animate={{ d: ["M 0 195 Q 50 185 100 195 Q 150 205 200 195 Q 250 185 300 195 Q 350 205 400 195 Q 450 185 500 195 Q 550 205 600 195", "M 0 197 Q 50 207 100 197 Q 150 187 200 197 Q 250 207 300 197 Q 350 187 400 197 Q 450 207 500 197 Q 550 187 600 197", "M 0 195 Q 50 185 100 195 Q 150 205 200 195 Q 250 185 300 195 Q 350 205 400 195 Q 450 185 500 195 Q 550 205 600 195"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.g>

            {/* Pillars */}
            <motion.rect x="120" y="80" width="16" height="110" rx="2" fill="hsl(220 15% 28%)" style={{ scaleY: pillar1, transformOrigin: "bottom" }} />
            <motion.rect x="290" y="60" width="20" height="130" rx="2" fill="hsl(220 15% 25%)" style={{ scaleY: pillar2, transformOrigin: "bottom" }} />
            <motion.rect x="460" y="80" width="16" height="110" rx="2" fill="hsl(220 15% 28%)" style={{ scaleY: pillar3, transformOrigin: "bottom" }} />

            {/* Pillar caps */}
            <motion.rect x="115" y="76" width="26" height="6" rx="1" fill="hsl(220 15% 32%)" style={{ opacity: pillar1 }} />
            <motion.rect x="284" y="55" width="32" height="7" rx="1" fill="hsl(220 15% 30%)" style={{ opacity: pillar2 }} />
            <motion.rect x="455" y="76" width="26" height="6" rx="1" fill="hsl(220 15% 32%)" style={{ opacity: pillar3 }} />

            {/* Bridge deck */}
            <motion.g style={{ opacity: deckOpacity }}>
              <motion.rect x="60" y="170" width="480" height="8" rx="1" fill="hsl(35 25% 70%)" style={{ scaleX: deckWidth, transformOrigin: "left" }} />
              <motion.rect x="60" y="178" width="480" height="12" rx="1" fill="hsl(220 15% 22%)" style={{ scaleX: deckWidth, transformOrigin: "left" }} />
            </motion.g>

            {/* Arch under deck */}
            <motion.g style={{ opacity: archOpacity }}>
              <path d="M 130 190 Q 210 230 290 190" stroke="hsl(220 15% 35%)" strokeWidth="2" fill="none" />
              <path d="M 310 190 Q 390 230 470 190" stroke="hsl(220 15% 35%)" strokeWidth="2" fill="none" />
            </motion.g>

            {/* Cables from towers */}
            <motion.g style={{ opacity: cable1 }}>
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <motion.line key={`cl${i}`} x1="128" y1="80" x2={80 + i * 30} y2="170" stroke="hsl(220 15% 45% / 0.5)" strokeWidth="0.8"
                  style={{ pathLength: cable1 }} />
              ))}
            </motion.g>
            <motion.g style={{ opacity: cable2 }}>
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <motion.line key={`cr${i}`} x1="468" y1="80" x2={540 - i * 30} y2="170" stroke="hsl(220 15% 45% / 0.5)" strokeWidth="0.8"
                  style={{ pathLength: cable2 }} />
              ))}
            </motion.g>
            {/* Center tower cables */}
            <motion.g style={{ opacity: cable1 }}>
              {[-3, -2, -1, 0, 1, 2, 3].map((i) => (
                <motion.line key={`cc${i}`} x1="300" y1="60" x2={300 + i * 30} y2="170" stroke="hsl(220 15% 45% / 0.4)" strokeWidth="0.6" />
              ))}
            </motion.g>

            {/* Railing */}
            <motion.g style={{ opacity: railingOpacity }}>
              <line x1="60" y1="165" x2="540" y2="165" stroke="hsl(220 15% 40%)" strokeWidth="0.8" />
              {Array.from({ length: 24 }).map((_, i) => (
                <line key={`rp${i}`} x1={80 + i * 20} y1="165" x2={80 + i * 20} y2="170" stroke="hsl(220 15% 40%)" strokeWidth="0.5" />
              ))}
            </motion.g>

            {/* Lights on towers */}
            <motion.g style={{ opacity: lightsOpacity }}>
              <motion.circle cx="128" cy="76" r="3" fill="hsl(45 80% 65%)"
                animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }} />
              <motion.circle cx="300" cy="55" r="3.5" fill="hsl(45 80% 65%)"
                animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} />
              <motion.circle cx="468" cy="76" r="3" fill="hsl(45 80% 65%)"
                animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
            </motion.g>

            {/* Water reflections */}
            <motion.g style={{ opacity: reflectionOpacity }}>
              <rect x="118" y="200" width="20" height="30" fill="hsl(220 15% 40% / 0.1)" />
              <rect x="288" y="198" width="24" height="35" fill="hsl(220 15% 40% / 0.1)" />
              <rect x="458" y="200" width="20" height="30" fill="hsl(220 15% 40% / 0.1)" />
            </motion.g>
          </svg>
        </div>

        {/* Typing text content */}
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <ScrollTypingText
              text="Himanshi Vats is a passionate architecture student at Apeejay School of Architecture, Greater Noida, driven by a deep commitment to sustainable design and spatial storytelling."
              className="text-muted-foreground leading-relaxed font-body"
            />
            <ScrollTypingText
              text="Her work explores the intersection of urban design, human experience, and environmental responsibility."
              className="text-muted-foreground leading-relaxed font-body"
            />
          </div>
          <div>
            <h3 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-6 font-body">
              Tools & Software
            </h3>
            <div className="flex flex-wrap gap-3">
              {["AutoCAD", "SketchUp", "Revit", "Lumion", "Adobe Photoshop"].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-background border border-border text-sm text-foreground font-body rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors duration-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BridgeScrollAnimation;
