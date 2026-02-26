import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollTypingText from "./ScrollTypingText";

const TowerScrollAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const baseOpacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);
  const baseY = useTransform(scrollYProgress, [0.05, 0.15], [30, 0]);
  const towerBody = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);
  const lattice = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);
  const midSection = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const upperBody = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const topSection = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const antennaOpacity = useTransform(scrollYProgress, [0.6, 0.75], [0, 1]);
  const groundOpacity = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);
  const lightsOpacity = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);

  return (
    <div ref={containerRef} className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-body">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-4">
            Projects
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Tower SVG */}
          <div className="flex justify-center">
            <svg viewBox="0 0 300 450" className="w-full max-w-xs h-auto" fill="none">
              {/* Ground */}
              <motion.g style={{ opacity: groundOpacity }}>
                <ellipse cx="150" cy="420" rx="130" ry="20" fill="hsl(100 20% 40% / 0.15)" />
                <rect x="20" y="415" width="260" height="5" rx="2" fill="hsl(35 20% 70% / 0.4)" />
              </motion.g>

              {/* Base / foundation */}
              <motion.g style={{ opacity: baseOpacity, y: baseY }}>
                <path d="M 90 415 L 70 380 L 230 380 L 210 415 Z" fill="hsl(220 15% 28%)" />
                <rect x="75" y="374" width="150" height="8" rx="1" fill="hsl(220 15% 32%)" />
                {/* Arched entrance */}
                <path d="M 120 415 Q 150 390 180 415" stroke="hsl(220 15% 35%)" strokeWidth="2" fill="none" />
              </motion.g>

              {/* Lower tower body with lattice */}
              <motion.g style={{ scaleY: towerBody, transformOrigin: "bottom" }}>
                <path d="M 95 380 L 105 220 L 195 220 L 205 380 Z" fill="hsl(220 15% 25%)" />
              </motion.g>

              {/* Lattice / cross bracing */}
              <motion.g style={{ opacity: lattice }}>
                {[250, 280, 310, 340, 370].map((y, i) => (
                  <g key={`lat${i}`}>
                    <line x1={100 + (380 - y) * 0.03} y1={y} x2={200 - (380 - y) * 0.03} y2={y + 28} stroke="hsl(220 15% 38% / 0.5)" strokeWidth="0.8" />
                    <line x1={200 - (380 - y) * 0.03} y1={y} x2={100 + (380 - y) * 0.03} y2={y + 28} stroke="hsl(220 15% 38% / 0.5)" strokeWidth="0.8" />
                  </g>
                ))}
              </motion.g>

              {/* Mid observation deck */}
              <motion.g style={{ opacity: midSection }}>
                <rect x="85" y="215" width="130" height="10" rx="2" fill="hsl(220 15% 30%)" />
                <rect x="90" y="210" width="120" height="6" rx="1" fill="hsl(220 15% 35%)" />
                {/* Railing */}
                {Array.from({ length: 10 }).map((_, i) => (
                  <line key={`mr${i}`} x1={95 + i * 12} y1="205" x2={95 + i * 12} y2="210" stroke="hsl(220 15% 40%)" strokeWidth="0.6" />
                ))}
                <line x1="90" y1="205" x2="210" y2="205" stroke="hsl(220 15% 40%)" strokeWidth="0.8" />
              </motion.g>

              {/* Upper body - narrower */}
              <motion.g style={{ scaleY: upperBody, transformOrigin: "bottom" }}>
                <path d="M 110 215 L 120 120 L 180 120 L 190 215 Z" fill="hsl(220 15% 23%)" />
                {/* Upper lattice */}
                {[140, 165, 190].map((y, i) => (
                  <g key={`ul${i}`}>
                    <line x1={115 + (215 - y) * 0.04} y1={y} x2={185 - (215 - y) * 0.04} y2={y + 22} stroke="hsl(220 15% 38% / 0.4)" strokeWidth="0.6" />
                    <line x1={185 - (215 - y) * 0.04} y1={y} x2={115 + (215 - y) * 0.04} y2={y + 22} stroke="hsl(220 15% 38% / 0.4)" strokeWidth="0.6" />
                  </g>
                ))}
              </motion.g>

              {/* Top observation deck */}
              <motion.g style={{ opacity: topSection }}>
                <rect x="105" y="115" width="90" height="8" rx="2" fill="hsl(220 15% 28%)" />
                <rect x="110" y="110" width="80" height="6" rx="1" fill="hsl(220 15% 33%)" />
                {/* Top structure */}
                <path d="M 125 110 L 135 70 L 165 70 L 175 110 Z" fill="hsl(220 15% 20%)" />
              </motion.g>

              {/* Antenna */}
              <motion.g style={{ opacity: antennaOpacity }}>
                <rect x="148" y="20" width="4" height="50" fill="hsl(220 15% 30%)" />
                <line x1="140" y1="40" x2="160" y2="40" stroke="hsl(220 15% 35%)" strokeWidth="1" />
                <line x1="143" y1="50" x2="157" y2="50" stroke="hsl(220 15% 35%)" strokeWidth="1" />
              </motion.g>

              {/* Lights */}
              <motion.g style={{ opacity: lightsOpacity }}>
                <motion.circle cx="150" cy="20" r="3" fill="hsl(0 70% 55%)"
                  animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
                <motion.circle cx="150" cy="70" r="2" fill="hsl(45 80% 65%)"
                  animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
                {/* Window lights in observation deck */}
                {[115, 130, 145, 160, 175].map((x, i) => (
                  <motion.rect key={`ol${i}`} x={x} y="112" width="5" height="4" rx="0.5" fill="hsl(45 70% 70% / 0.6)"
                    animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }} />
                ))}
              </motion.g>
            </svg>
          </div>

          {/* Project cards with typing text */}
          <div>
            <div className="mb-8">
              <ScrollTypingText
                text="Each project tells a story of space, form, and function — bringing architectural visions to life through research, design, and meticulous execution."
                className="text-muted-foreground leading-relaxed font-body text-sm md:text-base"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="group relative aspect-[4/3] bg-muted rounded-sm overflow-hidden border border-border hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-10 h-10 border border-border rounded-sm flex items-center justify-center mx-auto mb-3 group-hover:border-accent/50 transition-colors">
                        <span className="text-muted-foreground text-lg">+</span>
                      </div>
                      <p className="text-xs text-muted-foreground tracking-widest uppercase font-body">Coming Soon</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TowerScrollAnimation;
