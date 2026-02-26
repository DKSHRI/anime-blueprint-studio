import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import ScrollTypingText from "./ScrollTypingText";

const SkillBar = ({ skill, index, scrollYProgress }: { skill: { name: string; level: number }; index: number; scrollYProgress: MotionValue<number> }) => {
  const width = useTransform(scrollYProgress, [0.3 + index * 0.05, 0.5 + index * 0.05], [0, skill.level]);
  const pct = useTransform(width, (v) => `${v}%`);
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-body text-foreground tracking-wide">{skill.name}</span>
        <span className="text-xs font-body text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
        <motion.div className="h-full bg-accent rounded-full" style={{ width: pct }} />
      </div>
    </div>
  );
};

const skills = [
  { name: "Architectural Design", level: 90 },
  { name: "3D Modeling", level: 85 },
  { name: "Concept Development", level: 88 },
  { name: "Sustainable Planning", level: 80 },
  { name: "Rendering & Visualization", level: 82 },
];

const CityScrollAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Buildings rise up sequentially
  const b1 = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);
  const b2 = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
  const b3 = useTransform(scrollYProgress, [0.08, 0.28], [0, 1]);
  const b4 = useTransform(scrollYProgress, [0.12, 0.3], [0, 1]);
  const b5 = useTransform(scrollYProgress, [0.15, 0.32], [0, 1]);
  const b6 = useTransform(scrollYProgress, [0.18, 0.35], [0, 1]);
  const b7 = useTransform(scrollYProgress, [0.07, 0.22], [0, 1]);
  const windowsOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const treesOpacity = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);
  const roadOpacity = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);
  const skyDetailsOpacity = useTransform(scrollYProgress, [0.55, 0.7], [0, 1]);
  const carsOpacity = useTransform(scrollYProgress, [0.6, 0.75], [0, 1]);

  const buildings = [
    { x: 20, w: 50, h: 120, scale: b1, color: "hsl(220 15% 30%)" },
    { x: 80, w: 40, h: 160, scale: b3, color: "hsl(220 15% 25%)" },
    { x: 130, w: 55, h: 200, scale: b2, color: "hsl(220 15% 22%)" },
    { x: 195, w: 35, h: 140, scale: b7, color: "hsl(220 15% 28%)" },
    { x: 240, w: 60, h: 230, scale: b4, color: "hsl(220 15% 20%)" },
    { x: 310, w: 45, h: 170, scale: b5, color: "hsl(220 15% 26%)" },
    { x: 365, w: 55, h: 190, scale: b6, color: "hsl(220 15% 24%)" },
    { x: 430, w: 40, h: 130, scale: b1, color: "hsl(220 15% 29%)" },
    { x: 480, w: 50, h: 150, scale: b3, color: "hsl(220 15% 27%)" },
    { x: 540, w: 35, h: 110, scale: b5, color: "hsl(220 15% 31%)" },
  ];

  return (
    <div ref={containerRef} className="relative py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-8">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-body">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-4">
            Core <span className="italic font-normal text-accent">Skills</span>
          </h2>
        </div>

        {/* City SVG */}
        <div className="flex justify-center mb-12">
          <svg viewBox="0 0 600 300" className="w-full max-w-2xl h-auto" fill="none">
            {/* Sky gradient */}
            <defs>
              <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(210 30% 90%)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(40 20% 95%)" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="600" height="260" fill="url(#skyGrad)" />

            {/* Road */}
            <motion.g style={{ opacity: roadOpacity }}>
              <rect x="0" y="260" width="600" height="40" fill="hsl(220 10% 40%)" />
              <line x1="0" y1="280" x2="600" y2="280" stroke="hsl(45 80% 70%)" strokeWidth="1.5" strokeDasharray="20 15" />
              {/* Sidewalk */}
              <rect x="0" y="255" width="600" height="6" fill="hsl(35 15% 75%)" />
            </motion.g>

            {/* Buildings */}
            {buildings.map((b, i) => (
              <motion.g key={`bldg${i}`} style={{ scaleY: b.scale, transformOrigin: "bottom" }}>
                <rect x={b.x} y={260 - b.h} width={b.w} height={b.h} fill={b.color} />
                {/* Roof details */}
                <rect x={b.x + 2} y={260 - b.h - 3} width={b.w - 4} height={3} fill="hsl(220 15% 35%)" />
              </motion.g>
            ))}

            {/* Windows on buildings */}
            <motion.g style={{ opacity: windowsOpacity }}>
              {buildings.map((b, bi) => {
                const rows = Math.floor(b.h / 25);
                const cols = Math.floor(b.w / 15);
                return Array.from({ length: rows }).map((_, ri) =>
                  Array.from({ length: cols }).map((_, ci) => (
                    <rect key={`w${bi}${ri}${ci}`}
                      x={b.x + 5 + ci * 14} y={265 - b.h + 10 + ri * 24}
                      width={8} height={12} rx={0.5}
                      fill={Math.random() > 0.4 ? "hsl(45 60% 75% / 0.6)" : "hsl(210 30% 75% / 0.3)"}
                    />
                  ))
                );
              })}
            </motion.g>

            {/* Trees along sidewalk */}
            <motion.g style={{ opacity: treesOpacity }}>
              {[50, 160, 280, 400, 520].map((x, i) => (
                <g key={`tree${i}`}>
                  <rect x={x + 3} y="240" width="4" height="16" fill="hsl(30 30% 40%)" />
                  <ellipse cx={x + 5} cy="236" rx="10" ry="12" fill="hsl(100 30% 38%)" />
                </g>
              ))}
            </motion.g>

            {/* Sky details - clouds, birds */}
            <motion.g style={{ opacity: skyDetailsOpacity }}>
              <ellipse cx="100" cy="40" rx="35" ry="12" fill="hsl(0 0% 100% / 0.5)" />
              <ellipse cx="120" cy="35" rx="25" ry="10" fill="hsl(0 0% 100% / 0.4)" />
              <ellipse cx="450" cy="60" rx="30" ry="10" fill="hsl(0 0% 100% / 0.4)" />
              {/* Birds */}
              <path d="M 350 30 Q 355 25 360 30" stroke="hsl(220 15% 30% / 0.3)" strokeWidth="1" fill="none" />
              <path d="M 365 35 Q 370 30 375 35" stroke="hsl(220 15% 30% / 0.3)" strokeWidth="1" fill="none" />
              <path d="M 340 40 Q 345 35 350 40" stroke="hsl(220 15% 30% / 0.3)" strokeWidth="1" fill="none" />
            </motion.g>

            {/* Cars */}
            <motion.g style={{ opacity: carsOpacity }}>
              <motion.g animate={{ x: [0, 600] }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }}>
                <rect x="-30" y="272" width="28" height="10" rx="3" fill="hsl(0 60% 50% / 0.6)" />
                <rect x="-26" y="268" width="14" height="6" rx="2" fill="hsl(0 60% 50% / 0.5)" />
              </motion.g>
              <motion.g animate={{ x: [600, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 3 }}>
                <rect x="0" y="284" width="25" height="9" rx="3" fill="hsl(210 50% 45% / 0.5)" />
                <rect x="4" y="280" width="12" height="5" rx="2" fill="hsl(210 50% 45% / 0.4)" />
              </motion.g>
            </motion.g>
          </svg>
        </div>

        {/* Typing skill descriptions */}
        <div className="mb-8">
          <ScrollTypingText
            text="A growing mastery of architectural tools and creative disciplines, honed through academic projects and hands-on exploration."
            className="text-muted-foreground leading-relaxed font-body text-sm md:text-base max-w-2xl"
          />
        </div>

        <div className="space-y-8">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} index={i} scrollYProgress={scrollYProgress} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CityScrollAnimation;
