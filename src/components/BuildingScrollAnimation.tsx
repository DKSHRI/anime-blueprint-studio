import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const BuildingScrollAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Foundation
  const foundationOpacity = useTransform(scrollYProgress, [0, 0.08], [0, 1]);
  const foundationY = useTransform(scrollYProgress, [0, 0.08], [40, 0]);

  // Columns phase
  const col1Height = useTransform(scrollYProgress, [0.06, 0.18], [0, 1]);
  const col2Height = useTransform(scrollYProgress, [0.08, 0.20], [0, 1]);
  const col3Height = useTransform(scrollYProgress, [0.10, 0.22], [0, 1]);
  const col4Height = useTransform(scrollYProgress, [0.12, 0.24], [0, 1]);
  const col5Height = useTransform(scrollYProgress, [0.09, 0.21], [0, 1]);
  const col6Height = useTransform(scrollYProgress, [0.11, 0.23], [0, 1]);

  // Floors
  const floor1Opacity = useTransform(scrollYProgress, [0.20, 0.28], [0, 1]);
  const floor1Y = useTransform(scrollYProgress, [0.20, 0.28], [15, 0]);
  const floor2Opacity = useTransform(scrollYProgress, [0.28, 0.36], [0, 1]);
  const floor2Y = useTransform(scrollYProgress, [0.28, 0.36], [15, 0]);
  const floor3Opacity = useTransform(scrollYProgress, [0.36, 0.44], [0, 1]);
  const floor3Y = useTransform(scrollYProgress, [0.36, 0.44], [15, 0]);

  // Walls
  const wallsOpacity = useTransform(scrollYProgress, [0.42, 0.55], [0, 1]);

  // Windows
  const windowsOpacity = useTransform(scrollYProgress, [0.52, 0.65], [0, 1]);

  // Balconies
  const balconiesOpacity = useTransform(scrollYProgress, [0.60, 0.70], [0, 1]);

  // Roof
  const roofOpacity = useTransform(scrollYProgress, [0.68, 0.78], [0, 1]);
  const roofY = useTransform(scrollYProgress, [0.68, 0.78], [-15, 0]);

  // Details & landscaping
  const detailsOpacity = useTransform(scrollYProgress, [0.76, 0.86], [0, 1]);
  const landscapeOpacity = useTransform(scrollYProgress, [0.84, 0.94], [0, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0.90, 1], [0, 0.7]);

  // Label
  const labelOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  // Text transitions
  const text1 = useTransform(scrollYProgress, [0, 0.12, 0.22], [1, 1, 0]);
  const text2 = useTransform(scrollYProgress, [0.18, 0.26, 0.42], [0, 1, 0]);
  const text3 = useTransform(scrollYProgress, [0.38, 0.48, 0.65], [0, 1, 0]);
  const text4 = useTransform(scrollYProgress, [0.62, 0.72, 0.85], [0, 1, 0]);
  const text5 = useTransform(scrollYProgress, [0.82, 0.90, 1], [0, 1, 1]);

  return (
    <section id="building" ref={containerRef} className="relative h-[600vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-building-gradient">
        <div className="absolute inset-0 blueprint-grid opacity-20" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-6xl mx-auto px-6">
          {/* Text side */}
          <div className="flex-1 text-center lg:text-left relative min-h-[140px]">
            {[
              { style: text1, label: "From Vision", title: "Laying the", accent: "Foundation" },
              { style: text2, label: "Structure", title: "Raising", accent: "Floors & Columns" },
              { style: text3, label: "Enclosure", title: "Walls &", accent: "Windows" },
              { style: text4, label: "Character", title: "Balconies &", accent: "Details" },
              { style: text5, label: "To Reality", title: "The Complete", accent: "Vision" },
            ].map((t, i) => (
              <motion.div key={i} style={{ opacity: t.style }} className="absolute inset-0 flex flex-col justify-center">
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-body">{t.label}</p>
                <h2 className="text-3xl md:text-5xl font-heading font-semibold text-foreground">
                  {t.title} <span className="italic font-normal text-accent">{t.accent}</span>
                </h2>
              </motion.div>
            ))}
          </div>

          {/* Building SVG */}
          <div className="flex-1 flex items-center justify-center">
            <svg viewBox="0 0 400 500" className="w-full max-w-[380px] h-auto" fill="none">
              {/* Ground glow */}
              <motion.ellipse cx="200" cy="470" rx="170" ry="25" style={{ opacity: glowOpacity }} fill="hsl(80 25% 35% / 0.12)" />

              {/* Foundation */}
              <motion.g style={{ opacity: foundationOpacity, y: foundationY }}>
                <rect x="40" y="440" width="320" height="18" rx="2" fill="hsl(220 15% 22%)" />
                <rect x="50" y="434" width="300" height="8" rx="1" fill="hsl(220 15% 28%)" />
                <rect x="30" y="456" width="340" height="4" rx="1" fill="hsl(220 15% 18%)" />
                <line x1="20" y1="460" x2="380" y2="460" stroke="hsl(220 15% 25% / 0.3)" strokeWidth="1" />
              </motion.g>

              {/* Ground floor columns (6 columns) */}
              {[
                { x: 65, h: col1Height }, { x: 120, h: col2Height }, { x: 175, h: col3Height },
                { x: 230, h: col5Height }, { x: 285, h: col6Height }, { x: 320, h: col4Height },
              ].map((c, i) => (
                <motion.rect key={`gc${i}`} x={c.x} y={340} width={10} height={94} rx={1} fill="hsl(220 15% 33%)"
                  style={{ scaleY: c.h, transformOrigin: "bottom" }} />
              ))}

              {/* Floor 1 slab */}
              <motion.g style={{ opacity: floor1Opacity, y: floor1Y }}>
                <rect x="45" y="332" width="310" height="10" rx="1" fill="hsl(220 15% 26%)" />
                <rect x="50" y="330" width="300" height="3" fill="hsl(220 15% 32%)" />
              </motion.g>

              {/* Floor 2 structure */}
              <motion.g style={{ opacity: floor2Opacity, y: floor2Y }}>
                {[70, 130, 180, 235, 290, 325].map((x, i) => (
                  <rect key={`f2c${i}`} x={x} y="250" width={8} height={82} fill="hsl(220 15% 33%)" />
                ))}
                <rect x="45" y="242" width="310" height="10" rx="1" fill="hsl(220 15% 26%)" />
                <rect x="50" y="240" width="300" height="3" fill="hsl(220 15% 32%)" />
              </motion.g>

              {/* Floor 3 structure */}
              <motion.g style={{ opacity: floor3Opacity, y: floor3Y }}>
                {[70, 130, 180, 235, 290, 325].map((x, i) => (
                  <rect key={`f3c${i}`} x={x} y="165" width={8} height={75} fill="hsl(220 15% 33%)" />
                ))}
                <rect x="45" y="157" width="310" height="10" rx="1" fill="hsl(220 15% 26%)" />
                <rect x="50" y="155" width="300" height="3" fill="hsl(220 15% 32%)" />
              </motion.g>

              {/* Walls / Facade */}
              <motion.g style={{ opacity: wallsOpacity }}>
                <rect x="48" y="160" width="5" height="274" fill="hsl(40 20% 85%)" />
                <rect x="347" y="160" width="5" height="274" fill="hsl(40 20% 85%)" />
                {/* Wall panels for each floor */}
                {[{ y: 340, h: 92 }, { y: 252, h: 80 }, { y: 167, h: 73 }].map((f, fi) => (
                  [53, 140, 190, 245, 300].map((x, xi) => (
                    <rect key={`wall${fi}${xi}`} x={x} y={f.y} width={xi < 4 ? 80 : 47} height={f.h} fill="hsl(40 20% 90% / 0.5)" />
                  ))
                ))}
              </motion.g>

              {/* Windows - 3 floors */}
              <motion.g style={{ opacity: windowsOpacity }}>
                {[{ y: 358, h: 24 }, { y: 268, h: 22 }, { y: 182, h: 20 }].map((floor, fi) => (
                  [72, 100, 128, 158, 198, 228, 260, 310].map((x, wi) => (
                    <rect key={`win${fi}${wi}`} x={x} y={floor.y} width={14} height={floor.h} rx={1}
                      fill="hsl(210 40% 82% / 0.8)" stroke="hsl(220 15% 40%)" strokeWidth="0.5" />
                  ))
                ))}
                {/* Main entrance door */}
                <rect x="182" y="400" width="36" height="34" rx="3" fill="hsl(220 15% 22%)" />
                <rect x="186" y="402" width="12" height="30" rx="1" fill="hsl(220 15% 28%)" />
                <rect x="202" y="402" width="12" height="30" rx="1" fill="hsl(220 15% 28%)" />
                <circle cx="198" cy="420" r="2" fill="hsl(40 25% 65%)" />
                {/* Entry steps */}
                <rect x="170" y="434" width="60" height="4" rx="1" fill="hsl(220 15% 28%)" />
                <rect x="175" y="430" width="50" height="4" rx="1" fill="hsl(220 15% 30%)" />
              </motion.g>

              {/* Balconies */}
              <motion.g style={{ opacity: balconiesOpacity }}>
                {[270, 185].map((y, fi) => (
                  [68, 152, 252].map((x, bi) => (
                    <g key={`bal${fi}${bi}`}>
                      <rect x={x} y={y} width={50} height={3} fill="hsl(220 15% 30%)" />
                      <rect x={x + 2} y={y + 3} width={46} height={10} fill="none" stroke="hsl(220 15% 35%)" strokeWidth="1" />
                      {/* Railing verticals */}
                      {[0, 10, 20, 30, 40].map(r => (
                        <line key={`r${fi}${bi}${r}`} x1={x + 3 + r} y1={y + 3} x2={x + 3 + r} y2={y + 13} stroke="hsl(220 15% 38%)" strokeWidth="0.5" />
                      ))}
                    </g>
                  ))
                ))}
              </motion.g>

              {/* Roof */}
              <motion.g style={{ opacity: roofOpacity, y: roofY }}>
                <rect x="40" y="148" width="320" height="12" rx="2" fill="hsl(220 15% 20%)" />
                <rect x="50" y="140" width="300" height="10" rx="1" fill="hsl(220 15% 26%)" />
                <rect x="50" y="138" width="300" height="3" fill="hsl(80 25% 35%)" />
                {/* Parapet with periodic posts */}
                {[60, 110, 160, 210, 260, 310, 345].map((x, i) => (
                  <rect key={`pp${i}`} x={x} y="130" width={4} height={10} fill="hsl(220 15% 28%)" />
                ))}
                <rect x="55" y="130" width="290" height="2" fill="hsl(220 15% 30%)" />
              </motion.g>

              {/* Details: antenna, water tank, flag, AC units */}
              <motion.g style={{ opacity: detailsOpacity }}>
                {/* Water tank */}
                <rect x="100" y="108" width="30" height="22" rx="2" fill="hsl(210 20% 80%)" stroke="hsl(220 15% 50%)" strokeWidth="0.8" />
                <rect x="100" y="106" width="30" height="3" rx="1" fill="hsl(220 15% 35%)" />
                {/* Tank legs */}
                <rect x="106" y="126" width="3" height="6" fill="hsl(220 15% 40%)" />
                <rect x="121" y="126" width="3" height="6" fill="hsl(220 15% 40%)" />

                {/* Antenna */}
                <rect x="198" y="80" width="3" height="58" fill="hsl(220 15% 30%)" />
                <line x1="190" y1="100" x2="210" y2="100" stroke="hsl(220 15% 35%)" strokeWidth="1" />
                <line x1="192" y1="110" x2="208" y2="110" stroke="hsl(220 15% 35%)" strokeWidth="1" />
                {/* Blinking light */}
                <motion.circle cx="199.5" cy="80" r="2.5" fill="hsl(0 70% 55%)"
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />

                {/* Flag */}
                <rect x="280" y="100" width="2" height="32" fill="hsl(220 15% 30%)" />
                <motion.path d="M282 100 L308 108 L282 116 Z" fill="hsl(80 25% 35%)"
                  animate={{ d: ["M282 100 L308 108 L282 116 Z", "M282 101 L305 109 L282 117 Z", "M282 100 L308 108 L282 116 Z"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* AC units on side */}
                {[340, 260].map((y, i) => (
                  <g key={`ac${i}`}>
                    <rect x="352" y={y} width="16" height="12" rx="1" fill="hsl(220 10% 75%)" stroke="hsl(220 10% 60%)" strokeWidth="0.5" />
                    <line x1="356" y1={y + 4} x2="364" y2={y + 4} stroke="hsl(220 10% 60%)" strokeWidth="0.5" />
                    <line x1="356" y1={y + 7} x2="364" y2={y + 7} stroke="hsl(220 10% 60%)" strokeWidth="0.5" />
                  </g>
                ))}
              </motion.g>

              {/* Landscaping & final touches */}
              <motion.g style={{ opacity: landscapeOpacity }}>
                {/* Trees */}
                {[25, 370].map((x, i) => (
                  <g key={`tree${i}`}>
                    <rect x={x + 8} y="430" width="4" height="28" fill="hsl(30 30% 40%)" />
                    <ellipse cx={x + 10} cy="425" rx="14" ry="18" fill="hsl(100 30% 35%)" />
                    <ellipse cx={x + 6} cy="420" rx="10" ry="13" fill="hsl(100 35% 40%)" />
                  </g>
                ))}
                {/* Bushes */}
                <ellipse cx="150" cy="456" rx="20" ry="7" fill="hsl(100 25% 38%)" />
                <ellipse cx="260" cy="456" rx="15" ry="6" fill="hsl(100 25% 38%)" />
                {/* Path */}
                <rect x="188" y="438" width="24" height="22" fill="hsl(35 20% 75%)" />

                {/* Window lights animation */}
                <motion.rect x="100" y="360" width="10" height="18" fill="hsl(45 80% 70% / 0.5)"
                  animate={{ opacity: [0.2, 0.7, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.rect x="260" y="270" width="10" height="18" fill="hsl(45 80% 70% / 0.4)"
                  animate={{ opacity: [0.5, 0.15, 0.5] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                />
                <motion.rect x="158" y="185" width="10" height="16" fill="hsl(45 80% 70% / 0.35)"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                />
              </motion.g>
            </svg>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div style={{ opacity: labelOpacity }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <motion.div className="w-px h-8 bg-accent/40" style={{ scaleY: scrollYProgress, transformOrigin: "top" }} />
          <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-body">Keep scrolling</p>
        </motion.div>
      </div>
    </section>
  );
};

export default BuildingScrollAnimation;
