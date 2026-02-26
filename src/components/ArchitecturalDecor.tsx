import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Variant = "blueprint" | "crane" | "compass" | "scaffold";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { delay: i * 0.2, duration: 1.5, ease: "easeInOut" }, opacity: { delay: i * 0.2, duration: 0.3 } },
  }),
};

const BlueprintDecor = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
    {/* Blueprint frame */}
    <motion.rect x="10" y="10" width="180" height="180" rx="2" stroke="hsl(210 40% 60% / 0.3)" strokeWidth="1" variants={draw} custom={0} />
    <motion.rect x="20" y="20" width="160" height="160" rx="1" stroke="hsl(210 40% 60% / 0.2)" strokeWidth="0.5" variants={draw} custom={0.5} />
    {/* Grid */}
    {[40, 70, 100, 130, 160].map((v, i) => (
      <motion.line key={`bg${i}`} x1="20" y1={v} x2="180" y2={v} stroke="hsl(210 40% 60% / 0.12)" strokeWidth="0.5" variants={draw} custom={1 + i * 0.1} />
    ))}
    {[40, 70, 100, 130, 160].map((v, i) => (
      <motion.line key={`bv${i}`} x1={v} y1="20" x2={v} y2="180" stroke="hsl(210 40% 60% / 0.12)" strokeWidth="0.5" variants={draw} custom={1 + i * 0.1} />
    ))}
    {/* Floor plan shape */}
    <motion.rect x="40" y="50" width="80" height="60" stroke="hsl(220 15% 35% / 0.4)" strokeWidth="1" variants={draw} custom={2} />
    <motion.line x1="40" y1="80" x2="90" y2="80" stroke="hsl(220 15% 35% / 0.3)" strokeWidth="0.8" variants={draw} custom={2.5} />
    <motion.line x1="80" y1="50" x2="80" y2="80" stroke="hsl(220 15% 35% / 0.3)" strokeWidth="0.8" variants={draw} custom={2.5} />
    {/* Dimension */}
    <motion.line x1="40" y1="120" x2="120" y2="120" stroke="hsl(80 25% 35% / 0.4)" strokeWidth="0.6" variants={draw} custom={3} />
    <motion.text x="65" y="132" fontSize="6" fill="hsl(80 25% 35% / 0.5)" fontFamily="DM Sans" variants={draw} custom={3}>8.2m</motion.text>
    {/* Compass */}
    <motion.circle cx="155" cy="155" r="16" stroke="hsl(220 15% 40% / 0.3)" strokeWidth="0.8" variants={draw} custom={3.5} />
    <motion.line x1="155" y1="140" x2="155" y2="170" stroke="hsl(220 15% 40% / 0.3)" strokeWidth="0.8" variants={draw} custom={4} />
    <motion.text x="152" y="147" fontSize="5" fill="hsl(220 15% 30% / 0.4)" fontFamily="DM Sans" variants={draw} custom={4}>N</motion.text>
  </svg>
);

const CraneDecor = () => (
  <svg viewBox="0 0 200 240" className="w-full h-full" fill="none">
    {/* Tower */}
    <motion.rect x="90" y="60" width="8" height="170" fill="hsl(40 20% 65% / 0.3)" variants={draw} custom={0} />
    {/* Cross bracing */}
    {[80, 120, 160, 200].map((y, i) => (
      <motion.g key={`cb${i}`} variants={draw} custom={0.5 + i * 0.3}>
        <line x1="90" y1={y} x2="98" y2={y + 30} stroke="hsl(40 20% 55% / 0.25)" strokeWidth="0.8" />
        <line x1="98" y1={y} x2="90" y2={y + 30} stroke="hsl(40 20% 55% / 0.25)" strokeWidth="0.8" />
      </motion.g>
    ))}
    {/* Boom */}
    <motion.line x1="30" y1="62" x2="170" y2="62" stroke="hsl(40 20% 55% / 0.35)" strokeWidth="3" variants={draw} custom={2} />
    {/* Counter jib */}
    <motion.line x1="90" y1="62" x2="30" y2="62" stroke="hsl(40 20% 55% / 0.25)" strokeWidth="2" variants={draw} custom={2.2} />
    {/* Cables */}
    <motion.line x1="94" y1="40" x2="170" y2="62" stroke="hsl(220 15% 40% / 0.2)" strokeWidth="0.6" variants={draw} custom={2.5} />
    <motion.line x1="94" y1="40" x2="30" y2="62" stroke="hsl(220 15% 40% / 0.2)" strokeWidth="0.6" variants={draw} custom={2.5} />
    {/* Cab */}
    <motion.rect x="88" y="55" width="12" height="8" fill="hsl(80 25% 35% / 0.3)" variants={draw} custom={1.5} />
    {/* Hook and cable */}
    <motion.line x1="150" y1="62" x2="150" y2="110" stroke="hsl(220 15% 40% / 0.2)" strokeWidth="0.5" variants={draw} custom={3} />
    <motion.path d="M 146 110 Q 150 118 154 110" stroke="hsl(220 15% 40% / 0.3)" strokeWidth="1" variants={draw} custom={3.5} />
    {/* Counterweight */}
    <motion.rect x="32" y="56" width="14" height="8" fill="hsl(220 15% 30% / 0.2)" variants={draw} custom={2.8} />
    {/* Base */}
    <motion.rect x="78" y="228" width="32" height="6" fill="hsl(220 15% 25% / 0.2)" variants={draw} custom={0} />
  </svg>
);

const CompassDecor = () => (
  <svg viewBox="0 0 180 180" className="w-full h-full" fill="none">
    <motion.circle cx="90" cy="90" r="70" stroke="hsl(220 15% 40% / 0.15)" strokeWidth="1" variants={draw} custom={0} />
    <motion.circle cx="90" cy="90" r="55" stroke="hsl(220 15% 40% / 0.1)" strokeWidth="0.5" variants={draw} custom={0.5} />
    {/* Cardinal lines */}
    {[0, 90, 180, 270].map((angle, i) => {
      const rad = (angle * Math.PI) / 180;
      return (
        <motion.line key={`c${i}`} x1={90 + Math.cos(rad) * 40} y1={90 + Math.sin(rad) * 40} x2={90 + Math.cos(rad) * 70} y2={90 + Math.sin(rad) * 70}
          stroke="hsl(220 15% 40% / 0.2)" strokeWidth="0.8" variants={draw} custom={1 + i * 0.2} />
      );
    })}
    {/* Protractor markings */}
    {Array.from({ length: 36 }).map((_, i) => {
      const angle = (i * 10 * Math.PI) / 180;
      return (
        <motion.line key={`t${i}`} x1={90 + Math.cos(angle) * 62} y1={90 + Math.sin(angle) * 62} x2={90 + Math.cos(angle) * 68} y2={90 + Math.sin(angle) * 68}
          stroke="hsl(220 15% 40% / 0.12)" strokeWidth="0.4" variants={draw} custom={1.5} />
      );
    })}
    {/* Drawing compass legs */}
    <motion.line x1="90" y1="90" x2="55" y2="145" stroke="hsl(220 15% 30% / 0.3)" strokeWidth="1.5" variants={draw} custom={2} />
    <motion.line x1="90" y1="90" x2="125" y2="145" stroke="hsl(220 15% 30% / 0.3)" strokeWidth="1.5" variants={draw} custom={2.2} />
    <motion.circle cx="90" cy="90" r="3" fill="hsl(220 15% 30% / 0.3)" variants={draw} custom={2.5} />
    {/* Angle labels */}
    <motion.text x="85" y="28" fontSize="6" fill="hsl(80 25% 35% / 0.4)" fontFamily="DM Sans" variants={draw} custom={3}>0°</motion.text>
    <motion.text x="152" y="93" fontSize="6" fill="hsl(80 25% 35% / 0.4)" fontFamily="DM Sans" variants={draw} custom={3}>90°</motion.text>
  </svg>
);

const ScaffoldDecor = () => (
  <svg viewBox="0 0 160 220" className="w-full h-full" fill="none">
    {/* Vertical poles */}
    {[30, 70, 110].map((x, i) => (
      <motion.line key={`sp${i}`} x1={x} y1="20" x2={x} y2="210" stroke="hsl(220 15% 40% / 0.2)" strokeWidth="2" variants={draw} custom={i * 0.3} />
    ))}
    {/* Horizontal planks */}
    {[50, 90, 130, 170].map((y, i) => (
      <motion.g key={`sh${i}`} variants={draw} custom={1 + i * 0.3}>
        <rect x="28" y={y} width="84" height="3" fill="hsl(35 30% 55% / 0.2)" />
        {/* Cross braces */}
        <line x1="30" y1={y} x2="70" y2={y + 38} stroke="hsl(220 15% 40% / 0.12)" strokeWidth="0.8" />
        <line x1="70" y1={y} x2="110" y2={y + 38} stroke="hsl(220 15% 40% / 0.12)" strokeWidth="0.8" />
      </motion.g>
    ))}
    {/* Safety net texture */}
    <motion.rect x="30" y="50" width="80" height="35" fill="hsl(80 25% 50% / 0.06)" stroke="hsl(80 25% 40% / 0.1)" strokeWidth="0.5" variants={draw} custom={3} />
    {/* Bucket */}
    <motion.path d="M 120 160 L 125 180 L 145 180 L 150 160 Z" fill="hsl(40 30% 60% / 0.15)" stroke="hsl(40 30% 50% / 0.2)" strokeWidth="0.8" variants={draw} custom={3.5} />
  </svg>
);

const variants: Record<Variant, React.FC> = {
  blueprint: BlueprintDecor,
  crane: CraneDecor,
  compass: CompassDecor,
  scaffold: ScaffoldDecor,
};

interface Props {
  variant: Variant;
  className?: string;
  position?: "left" | "right";
}

const ArchitecturalDecor = ({ variant, className = "", position = "right" }: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const Component = variants[variant];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`absolute pointer-events-none hidden lg:block ${position === "right" ? "right-4 xl:right-12" : "left-4 xl:left-12"} ${className}`}
    >
      <Component />
    </motion.div>
  );
};

export default ArchitecturalDecor;
