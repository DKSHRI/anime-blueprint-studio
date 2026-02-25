import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { delay: i * 0.15, duration: 1.2, ease: "easeInOut" }, opacity: { delay: i * 0.15, duration: 0.3 } },
  }),
};

const fadeIn = (delay: number) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay, duration: 0.6 } },
});

const ArchitectGirlSVG = () => {
  return (
    <motion.svg
      viewBox="0 0 500 500"
      className="w-full h-auto relative"
      initial="hidden"
      animate="visible"
      fill="none"
    >
      {/* Wall / Drafting board background */}
      <motion.rect x="120" y="40" width="340" height="380" rx="4" fill="hsl(40 20% 95%)" stroke="hsl(40 12% 85%)" strokeWidth="2" variants={fadeIn(0)} />
      
      {/* Blueprint grid on wall */}
      <motion.g variants={fadeIn(0.3)} style={{ opacity: 0.15 }}>
        {Array.from({ length: 15 }).map((_, i) => (
          <line key={`h${i}`} x1="130" y1={60 + i * 24} x2="450" y2={60 + i * 24} stroke="hsl(210 40% 60%)" strokeWidth="0.5" />
        ))}
        {Array.from({ length: 13 }).map((_, i) => (
          <line key={`v${i}`} x1={140 + i * 24} y1="50" x2={140 + i * 24} y2="410" stroke="hsl(210 40% 60%)" strokeWidth="0.5" />
        ))}
      </motion.g>

      {/* Floor plan drawings on the wall */}
      {/* Room 1 */}
      <motion.rect x="160" y="80" width="120" height="90" rx="1" stroke="hsl(220 15% 35%)" strokeWidth="1.5" variants={draw} custom={1} />
      <motion.line x1="160" y1="130" x2="230" y2="130" stroke="hsl(220 15% 35%)" strokeWidth="1" variants={draw} custom={1.5} />
      <motion.line x1="230" y1="80" x2="230" y2="130" stroke="hsl(220 15% 35%)" strokeWidth="1" variants={draw} custom={1.5} />
      
      {/* Door arc */}
      <motion.path d="M 230 170 A 20 20 0 0 1 250 150" stroke="hsl(220 15% 40%)" strokeWidth="1" strokeDasharray="3 2" variants={draw} custom={2} />
      
      {/* Room 2 */}
      <motion.rect x="300" y="80" width="100" height="70" rx="1" stroke="hsl(220 15% 35%)" strokeWidth="1.5" variants={draw} custom={2} />
      <motion.line x1="340" y1="80" x2="340" y2="150" stroke="hsl(220 15% 35%)" strokeWidth="1" variants={draw} custom={2.3} />
      
      {/* Staircase symbol */}
      <motion.g variants={draw} custom={2.5}>
        {[0,1,2,3,4].map(i => (
          <line key={`stair${i}`} x1={310 + i*8} y1="160" x2={310 + i*8} y2="180" stroke="hsl(220 15% 40%)" strokeWidth="1" />
        ))}
        <rect x="308" y="158" width="42" height="24" stroke="hsl(220 15% 40%)" strokeWidth="1" fill="none" />
      </motion.g>

      {/* Dimension lines */}
      <motion.g variants={draw} custom={3}>
        <line x1="160" y1="185" x2="280" y2="185" stroke="hsl(80 25% 35%)" strokeWidth="0.8" />
        <line x1="160" y1="182" x2="160" y2="188" stroke="hsl(80 25% 35%)" strokeWidth="0.8" />
        <line x1="280" y1="182" x2="280" y2="188" stroke="hsl(80 25% 35%)" strokeWidth="0.8" />
      </motion.g>
      <motion.text x="210" y="198" fontSize="8" fill="hsl(80 25% 35%)" fontFamily="DM Sans" variants={fadeIn(2.5)}>12.5m</motion.text>

      {/* Elevation sketch */}
      <motion.g variants={draw} custom={3.5}>
        <rect x="160" y="220" width="140" height="100" stroke="hsl(220 15% 30%)" strokeWidth="1.5" fill="none" />
        {/* Roof triangle */}
        <path d="M 155 220 L 230 180 L 305 220" stroke="hsl(220 15% 30%)" strokeWidth="1.5" fill="none" />
        {/* Windows */}
        <rect x="175" y="245" width="25" height="30" stroke="hsl(220 15% 40%)" strokeWidth="1" fill="none" />
        <rect x="220" y="245" width="25" height="30" stroke="hsl(220 15% 40%)" strokeWidth="1" fill="none" />
        <rect x="265" y="245" width="25" height="30" stroke="hsl(220 15% 40%)" strokeWidth="1" fill="none" />
        {/* Door */}
        <rect x="215" y="285" width="30" height="35" rx="2" stroke="hsl(220 15% 35%)" strokeWidth="1.2" fill="none" />
      </motion.g>

      {/* Cross-section lines */}
      <motion.g variants={draw} custom={4}>
        <line x1="330" y1="200" x2="330" y2="350" stroke="hsl(80 25% 35%)" strokeWidth="1" strokeDasharray="6 3" />
        <text x="335" y="210" fontSize="7" fill="hsl(80 25% 35%)" fontFamily="DM Sans">A</text>
        <text x="335" y="345" fontSize="7" fill="hsl(80 25% 35%)" fontFamily="DM Sans">A'</text>
      </motion.g>

      {/* Small notes / annotations */}
      <motion.g variants={fadeIn(3)}>
        <rect x="350" y="230" width="80" height="60" rx="2" fill="hsl(45 80% 92%)" stroke="hsl(40 20% 80%)" strokeWidth="0.8" />
        <line x1="358" y1="245" x2="420" y2="245" stroke="hsl(220 15% 60%)" strokeWidth="0.5" />
        <line x1="358" y1="255" x2="415" y2="255" stroke="hsl(220 15% 60%)" strokeWidth="0.5" />
        <line x1="358" y1="265" x2="400" y2="265" stroke="hsl(220 15% 60%)" strokeWidth="0.5" />
        <line x1="358" y1="275" x2="410" y2="275" stroke="hsl(220 15% 60%)" strokeWidth="0.5" />
      </motion.g>

      {/* Compass rose */}
      <motion.g variants={draw} custom={4.5}>
        <circle cx="400" cy="380" r="18" stroke="hsl(220 15% 40%)" strokeWidth="1" fill="none" />
        <line x1="400" y1="362" x2="400" y2="398" stroke="hsl(220 15% 40%)" strokeWidth="1" />
        <line x1="382" y1="380" x2="418" y2="380" stroke="hsl(220 15% 40%)" strokeWidth="1" />
        <text x="397" y="371" fontSize="7" fill="hsl(220 15% 30%)" fontWeight="600" fontFamily="DM Sans">N</text>
      </motion.g>

      {/* THE GIRL - Architecture student sketching */}
      {/* Hair */}
      <motion.g variants={fadeIn(0.5)}>
        {/* Long hair flowing down */}
        <ellipse cx="72" cy="160" rx="30" ry="35" fill="hsl(20 30% 18%)" />
        <path d="M 42 170 Q 38 250 50 310" stroke="hsl(20 30% 15%)" strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d="M 102 170 Q 106 240 95 290" stroke="hsl(20 30% 15%)" strokeWidth="6" fill="none" strokeLinecap="round" />
        {/* Ponytail */}
        <path d="M 52 185 Q 30 220 35 270" stroke="hsl(20 30% 18%)" strokeWidth="12" fill="none" strokeLinecap="round" />
      </motion.g>
      
      {/* Head */}
      <motion.ellipse cx="72" cy="155" rx="24" ry="28" fill="hsl(30 40% 80%)" variants={fadeIn(0.4)} />
      
      {/* Face details - side profile looking at wall */}
      <motion.g variants={fadeIn(0.8)}>
        <ellipse cx="88" cy="150" rx="3" ry="2" fill="hsl(20 30% 25%)" /> {/* Eye */}
        <path d="M 92 158 Q 95 160 92 162" stroke="hsl(20 30% 40%)" strokeWidth="1" fill="none" /> {/* Nose */}
        <path d="M 85 168 Q 89 170 93 168" stroke="hsl(0 30% 60%)" strokeWidth="1.2" fill="none" /> {/* Smile */}
      </motion.g>

      {/* Body - olive green oversized shirt */}
      <motion.g variants={fadeIn(0.6)}>
        {/* Torso */}
        <path d="M 50 185 Q 45 220 48 300 L 95 300 Q 98 220 95 185 Z" fill="hsl(80 25% 35%)" />
        {/* Shirt collar */}
        <path d="M 60 185 Q 72 195 85 185" stroke="hsl(80 25% 30%)" strokeWidth="1.5" fill="none" />
        {/* Shirt fold lines */}
        <line x1="65" y1="220" x2="60" y2="260" stroke="hsl(80 20% 30%)" strokeWidth="0.8" opacity="0.4" />
        <line x1="80" y1="215" x2="85" y2="255" stroke="hsl(80 20% 30%)" strokeWidth="0.8" opacity="0.4" />
      </motion.g>

      {/* Right arm - reaching towards wall to sketch */}
      <motion.g variants={fadeIn(0.7)}>
        <path d="M 95 195 Q 110 200 125 210 Q 135 215 145 220" stroke="hsl(30 40% 78%)" strokeWidth="10" fill="none" strokeLinecap="round" />
        {/* Sleeve */}
        <path d="M 95 190 Q 108 192 115 200" stroke="hsl(80 25% 33%)" strokeWidth="12" fill="none" strokeLinecap="round" />
      </motion.g>
      
      {/* Hand holding pen/pencil */}
      <motion.g variants={fadeIn(1)}>
        <ellipse cx="148" cy="222" rx="6" ry="5" fill="hsl(30 40% 78%)" />
        {/* Pencil */}
        <motion.line 
          x1="142" y1="216" x2="165" y2="238" 
          stroke="hsl(40 60% 50%)" strokeWidth="2.5" strokeLinecap="round"
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "148px 222px" }}
        />
        <circle cx="165" cy="238" r="1.5" fill="hsl(220 15% 25%)" /> {/* Pencil tip */}
      </motion.g>

      {/* Left arm hanging / holding roll */}
      <motion.g variants={fadeIn(0.7)}>
        <path d="M 50 195 Q 35 230 30 270" stroke="hsl(30 40% 78%)" strokeWidth="9" fill="none" strokeLinecap="round" />
        <path d="M 50 190 Q 40 215 38 235" stroke="hsl(80 25% 33%)" strokeWidth="12" fill="none" strokeLinecap="round" />
        {/* Blueprint roll in left hand */}
        <rect x="22" y="265" width="20" height="45" rx="4" fill="hsl(210 30% 85%)" stroke="hsl(210 20% 70%)" strokeWidth="1" />
        <line x1="27" y1="270" x2="27" y2="305" stroke="hsl(210 20% 75%)" strokeWidth="0.5" />
      </motion.g>

      {/* Legs */}
      <motion.g variants={fadeIn(0.6)}>
        <rect x="52" y="300" width="16" height="80" rx="3" fill="hsl(220 15% 25%)" /> {/* Left leg - dark pants */}
        <rect x="75" y="300" width="16" height="80" rx="3" fill="hsl(220 15% 25%)" /> {/* Right leg */}
        {/* Shoes */}
        <ellipse cx="60" cy="385" rx="12" ry="5" fill="hsl(220 15% 20%)" />
        <ellipse cx="83" cy="385" rx="12" ry="5" fill="hsl(220 15% 20%)" />
      </motion.g>

      {/* Ground shadow */}
      <motion.ellipse cx="72" cy="390" rx="50" ry="6" fill="hsl(220 15% 20% / 0.08)" variants={fadeIn(1)} />

      {/* Animated drawing line from pencil */}
      <motion.path
        d="M 165 240 Q 180 250 200 260 Q 230 275 260 280"
        stroke="hsl(220 15% 40%)"
        strokeWidth="1"
        fill="none"
        variants={draw}
        custom={5}
        strokeLinecap="round"
      />
    </motion.svg>
  );
};

export default ArchitectGirlSVG;
