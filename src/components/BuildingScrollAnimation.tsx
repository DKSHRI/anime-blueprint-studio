import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const BuildingScrollAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Staggered transforms for each building part
  const foundationOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const foundationY = useTransform(scrollYProgress, [0, 0.1], [40, 0]);

  const col1Height = useTransform(scrollYProgress, [0.08, 0.25], [0, 100]);
  const col2Height = useTransform(scrollYProgress, [0.12, 0.3], [0, 100]);
  const col3Height = useTransform(scrollYProgress, [0.10, 0.28], [0, 100]);
  const col4Height = useTransform(scrollYProgress, [0.14, 0.32], [0, 100]);

  const floor1Opacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);
  const floor1Y = useTransform(scrollYProgress, [0.25, 0.35], [20, 0]);

  const floor2Opacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);
  const floor2Y = useTransform(scrollYProgress, [0.35, 0.45], [20, 0]);

  const floor3Opacity = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]);
  const floor3Y = useTransform(scrollYProgress, [0.45, 0.55], [20, 0]);

  const wallsOpacity = useTransform(scrollYProgress, [0.5, 0.65], [0, 1]);

  const windowsOpacity = useTransform(scrollYProgress, [0.6, 0.75], [0, 1]);

  const roofOpacity = useTransform(scrollYProgress, [0.7, 0.82], [0, 1]);
  const roofY = useTransform(scrollYProgress, [0.7, 0.82], [-20, 0]);

  const detailsOpacity = useTransform(scrollYProgress, [0.8, 0.92], [0, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0.88, 1], [0, 0.6]);

  // Progress label
  const labelOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  // Text transitions
  const text1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const text2 = useTransform(scrollYProgress, [0.2, 0.3, 0.5], [0, 1, 0]);
  const text3 = useTransform(scrollYProgress, [0.45, 0.55, 0.7], [0, 1, 0]);
  const text4 = useTransform(scrollYProgress, [0.75, 0.85, 1], [0, 1, 1]);

  return (
    <section id="building" ref={containerRef} className="relative h-[500vh]">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-building-gradient">
        {/* Subtle grid */}
        <div className="absolute inset-0 blueprint-grid opacity-20" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-6xl mx-auto px-6">
          {/* Text side */}
          <div className="flex-1 text-center lg:text-left relative min-h-[120px]">
            <motion.div style={{ opacity: text1 }} className="absolute inset-0 flex flex-col justify-center">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-body">From Vision</p>
              <h2 className="text-3xl md:text-5xl font-heading font-semibold text-foreground">
                Laying the <span className="italic font-normal text-accent">Foundation</span>
              </h2>
            </motion.div>

            <motion.div style={{ opacity: text2 }} className="absolute inset-0 flex flex-col justify-center">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-body">Structure</p>
              <h2 className="text-3xl md:text-5xl font-heading font-semibold text-foreground">
                Raising <span className="italic font-normal text-accent">Floors</span>
              </h2>
            </motion.div>

            <motion.div style={{ opacity: text3 }} className="absolute inset-0 flex flex-col justify-center">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-body">Enclosure</p>
              <h2 className="text-3xl md:text-5xl font-heading font-semibold text-foreground">
                Walls & <span className="italic font-normal text-accent">Windows</span>
              </h2>
            </motion.div>

            <motion.div style={{ opacity: text4 }} className="absolute inset-0 flex flex-col justify-center">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-body">To Reality</p>
              <h2 className="text-3xl md:text-5xl font-heading font-semibold text-foreground">
                The <span className="italic font-normal text-accent">Complete</span> Vision
              </h2>
            </motion.div>
          </div>

          {/* Building SVG */}
          <div className="flex-1 flex items-center justify-center">
            <svg viewBox="0 0 320 420" className="w-full max-w-[320px] h-auto" fill="none">
              {/* Glow behind building */}
              <motion.ellipse
                cx="160" cy="400" rx="140" ry="20"
                style={{ opacity: glowOpacity }}
                fill="hsl(80 25% 35% / 0.15)"
              />

              {/* Foundation */}
              <motion.g style={{ opacity: foundationOpacity, y: foundationY }}>
                <rect x="40" y="370" width="240" height="16" rx="2" fill="hsl(220 15% 25%)" />
                <rect x="50" y="365" width="220" height="8" rx="1" fill="hsl(220 15% 30%)" />
                {/* Ground line */}
                <line x1="20" y1="386" x2="300" y2="386" stroke="hsl(220 15% 25% / 0.3)" strokeWidth="1" />
              </motion.g>

              {/* Columns */}
              <motion.rect x="60" y="265" width="10" height="100" rx="1" fill="hsl(220 15% 35%)"
                style={{ scaleY: useTransform(col1Height, [0, 100], [0, 1]), transformOrigin: "bottom" }} />
              <motion.rect x="120" y="265" width="10" height="100" rx="1" fill="hsl(220 15% 35%)"
                style={{ scaleY: useTransform(col2Height, [0, 100], [0, 1]), transformOrigin: "bottom" }} />
              <motion.rect x="190" y="265" width="10" height="100" rx="1" fill="hsl(220 15% 35%)"
                style={{ scaleY: useTransform(col3Height, [0, 100], [0, 1]), transformOrigin: "bottom" }} />
              <motion.rect x="250" y="265" width="10" height="100" rx="1" fill="hsl(220 15% 35%)"
                style={{ scaleY: useTransform(col4Height, [0, 100], [0, 1]), transformOrigin: "bottom" }} />

              {/* Floor 1 */}
              <motion.g style={{ opacity: floor1Opacity, y: floor1Y }}>
                <rect x="50" y="260" width="220" height="8" rx="1" fill="hsl(220 15% 28%)" />
              </motion.g>

              {/* Floor 2 columns */}
              <motion.g style={{ opacity: floor2Opacity, y: floor2Y }}>
                <rect x="60" y="185" width="8" height="75" fill="hsl(220 15% 35%)" />
                <rect x="122" y="185" width="8" height="75" fill="hsl(220 15% 35%)" />
                <rect x="192" y="185" width="8" height="75" fill="hsl(220 15% 35%)" />
                <rect x="252" y="185" width="8" height="75" fill="hsl(220 15% 35%)" />
                <rect x="50" y="180" width="220" height="8" rx="1" fill="hsl(220 15% 28%)" />
              </motion.g>

              {/* Floor 3 */}
              <motion.g style={{ opacity: floor3Opacity, y: floor3Y }}>
                <rect x="60" y="110" width="8" height="70" fill="hsl(220 15% 35%)" />
                <rect x="122" y="110" width="8" height="70" fill="hsl(220 15% 35%)" />
                <rect x="192" y="110" width="8" height="70" fill="hsl(220 15% 35%)" />
                <rect x="252" y="110" width="8" height="70" fill="hsl(220 15% 35%)" />
                <rect x="50" y="105" width="220" height="8" rx="1" fill="hsl(220 15% 28%)" />
              </motion.g>

              {/* Walls / Facade */}
              <motion.g style={{ opacity: wallsOpacity }}>
                {/* Left wall */}
                <rect x="50" y="110" width="4" height="256" fill="hsl(40 20% 85%)" />
                {/* Right wall */}
                <rect x="266" y="110" width="4" height="256" fill="hsl(40 20% 85%)" />
                {/* Wall fills */}
                <rect x="54" y="268" width="66" height="96" fill="hsl(40 20% 90% / 0.6)" />
                <rect x="132" y="268" width="56" height="96" fill="hsl(40 20% 90% / 0.6)" />
                <rect x="200" y="268" width="66" height="96" fill="hsl(40 20% 90% / 0.6)" />
                <rect x="54" y="188" width="66" height="70" fill="hsl(40 20% 90% / 0.6)" />
                <rect x="132" y="188" width="56" height="70" fill="hsl(40 20% 90% / 0.6)" />
                <rect x="200" y="188" width="66" height="70" fill="hsl(40 20% 90% / 0.6)" />
                <rect x="54" y="113" width="66" height="65" fill="hsl(40 20% 90% / 0.6)" />
                <rect x="132" y="113" width="56" height="65" fill="hsl(40 20% 90% / 0.6)" />
                <rect x="200" y="113" width="66" height="65" fill="hsl(40 20% 90% / 0.6)" />
              </motion.g>

              {/* Windows */}
              <motion.g style={{ opacity: windowsOpacity }}>
                {/* Floor 1 windows */}
                {[70, 90, 110, 145, 165, 215, 235].map((x, i) => (
                  <rect key={`w1-${i}`} x={x} y="290" width="12" height="20" rx="1" fill="hsl(210 40% 82% / 0.8)" stroke="hsl(220 15% 40%)" strokeWidth="0.5" />
                ))}
                {/* Floor 2 windows */}
                {[70, 90, 110, 145, 165, 215, 235].map((x, i) => (
                  <rect key={`w2-${i}`} x={x} y="210" width="12" height="20" rx="1" fill="hsl(210 40% 82% / 0.8)" stroke="hsl(220 15% 40%)" strokeWidth="0.5" />
                ))}
                {/* Floor 3 windows */}
                {[70, 90, 110, 145, 165, 215, 235].map((x, i) => (
                  <rect key={`w3-${i}`} x={x} y="130" width="12" height="20" rx="1" fill="hsl(210 40% 82% / 0.8)" stroke="hsl(220 15% 40%)" strokeWidth="0.5" />
                ))}
                {/* Door */}
                <rect x="148" y="330" width="24" height="35" rx="2" fill="hsl(220 15% 25%)" />
                <circle cx="168" cy="350" r="1.5" fill="hsl(40 25% 70%)" />
              </motion.g>

              {/* Roof */}
              <motion.g style={{ opacity: roofOpacity, y: roofY }}>
                <rect x="45" y="96" width="230" height="12" rx="2" fill="hsl(220 15% 22%)" />
                {/* Parapet detail */}
                <rect x="55" y="88" width="210" height="10" rx="1" fill="hsl(220 15% 28%)" />
                {/* Roof accent line */}
                <rect x="55" y="86" width="210" height="2" fill="hsl(80 25% 35%)" />
              </motion.g>

              {/* Final details: antenna, flag */}
              <motion.g style={{ opacity: detailsOpacity }}>
                <rect x="155" y="50" width="3" height="38" fill="hsl(220 15% 30%)" />
                {/* Flag */}
                <motion.path
                  d="M158 50 L180 58 L158 66 Z"
                  fill="hsl(80 25% 35%)"
                  animate={{ d: ["M158 50 L180 58 L158 66 Z", "M158 51 L178 59 L158 67 Z", "M158 50 L180 58 L158 66 Z"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Small window lights */}
                <motion.rect x="72" y="292" width="8" height="16" fill="hsl(45 80% 70% / 0.5)"
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.rect x="217" y="212" width="8" height="16" fill="hsl(45 80% 70% / 0.4)"
                  animate={{ opacity: [0.5, 0.2, 0.5] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
              </motion.g>
            </svg>
          </div>
        </div>

        {/* Scroll progress indicator */}
        <motion.div
          style={{ opacity: labelOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            className="w-px h-8 bg-accent/40"
            style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
          />
          <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-body">
            Keep scrolling
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BuildingScrollAnimation;
