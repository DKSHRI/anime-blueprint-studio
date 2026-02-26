import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollTypingText from "./ScrollTypingText";

const MosqueScrollAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message!");
    setFormData({ name: "", email: "", message: "" });
  };

  const baseOpacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);
  const wallsOpacity = useTransform(scrollYProgress, [0.12, 0.3], [0, 1]);
  const wallsScale = useTransform(scrollYProgress, [0.12, 0.3], [0, 1]);
  const archesOpacity = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);
  const domeOpacity = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);
  const domeY = useTransform(scrollYProgress, [0.35, 0.5], [-15, 0]);
  const minaretsOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const minaretsScale = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const windowsOpacity = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);
  const detailsOpacity = useTransform(scrollYProgress, [0.55, 0.7], [0, 1]);
  const gardenOpacity = useTransform(scrollYProgress, [0.65, 0.8], [0, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0.75, 0.9], [0, 0.5]);

  return (
    <div ref={containerRef} className="relative py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-8">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-body">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-4">
            Contact
          </h2>
        </div>

        {/* Mosque / Dome architecture SVG */}
        <div className="flex justify-center mb-12">
          <svg viewBox="0 0 600 300" className="w-full max-w-2xl h-auto" fill="none">
            {/* Glow */}
            <motion.ellipse cx="300" cy="270" rx="200" ry="25" style={{ opacity: glowOpacity }} fill="hsl(45 60% 70% / 0.1)" />

            {/* Base platform */}
            <motion.g style={{ opacity: baseOpacity }}>
              <rect x="100" y="260" width="400" height="12" rx="2" fill="hsl(35 20% 75%)" />
              <rect x="80" y="270" width="440" height="8" rx="1" fill="hsl(35 15% 68%)" />
              {/* Steps */}
              <rect x="250" y="272" width="100" height="5" fill="hsl(35 18% 72%)" />
              <rect x="260" y="277" width="80" height="4" fill="hsl(35 18% 70%)" />
            </motion.g>

            {/* Main walls */}
            <motion.g style={{ opacity: wallsOpacity, scaleY: wallsScale, transformOrigin: "bottom" }}>
              <rect x="150" y="150" width="300" height="112" fill="hsl(40 20% 88%)" />
              <rect x="145" y="148" width="310" height="4" fill="hsl(35 20% 80%)" />
              {/* Wall texture lines */}
              {[170, 190, 210, 230, 250].map((y, i) => (
                <line key={`wl${i}`} x1="155" y1={y} x2="445" y2={y} stroke="hsl(35 15% 82%)" strokeWidth="0.5" />
              ))}
            </motion.g>

            {/* Arches */}
            <motion.g style={{ opacity: archesOpacity }}>
              {[200, 280, 360].map((x, i) => (
                <g key={`arch${i}`}>
                  <path d={`M ${x - 25} 260 L ${x - 25} 200 Q ${x} 170 ${x + 25} 200 L ${x + 25} 260`}
                    stroke="hsl(220 15% 30%)" strokeWidth="1.5" fill="hsl(40 20% 92% / 0.5)" />
                  {/* Inner arch */}
                  <path d={`M ${x - 18} 260 L ${x - 18} 210 Q ${x} 185 ${x + 18} 210 L ${x + 18} 260`}
                    stroke="hsl(220 15% 35% / 0.5)" strokeWidth="0.8" fill="none" />
                </g>
              ))}
            </motion.g>

            {/* Main dome */}
            <motion.g style={{ opacity: domeOpacity, y: domeY }}>
              <ellipse cx="300" cy="148" rx="80" ry="55" fill="hsl(220 15% 26%)" />
              <ellipse cx="300" cy="148" rx="74" ry="50" fill="hsl(220 15% 30%)" />
              {/* Dome ridges */}
              {[-40, -20, 0, 20, 40].map((dx, i) => (
                <path key={`dr${i}`} d={`M ${300 + dx} 148 Q ${300 + dx} ${100 + Math.abs(dx) * 0.3} ${300 + dx * 0.3} 95`}
                  stroke="hsl(220 15% 35% / 0.3)" strokeWidth="0.5" fill="none" />
              ))}
              {/* Finial */}
              <circle cx="300" cy="92" r="4" fill="hsl(45 60% 60%)" />
              <rect x="299" y="85" width="2" height="8" fill="hsl(45 60% 60%)" />
              <motion.circle cx="300" cy="85" r="2" fill="hsl(45 70% 70%)"
                animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }} />
            </motion.g>

            {/* Minarets */}
            <motion.g style={{ opacity: minaretsOpacity }}>
              {[120, 480].map((x, i) => (
                <g key={`min${i}`}>
                  <motion.rect x={x - 8} y="100" width={16} height={160} fill="hsl(40 18% 85%)"
                    style={{ scaleY: minaretsScale, transformOrigin: "bottom" }} />
                  <rect x={x - 12} y="96" width={24} height={6} rx="1" fill="hsl(35 20% 78%)" />
                  {/* Minaret balcony */}
                  <rect x={x - 14} y="140" width={28} height={4} rx="1" fill="hsl(35 18% 75%)" />
                  {Array.from({ length: 5 }).map((_, j) => (
                    <line key={`mb${i}${j}`} x1={x - 12 + j * 6} y1="140" x2={x - 12 + j * 6} y2="144" stroke="hsl(220 15% 50% / 0.4)" strokeWidth="0.5" />
                  ))}
                  {/* Minaret cap */}
                  <path d={`M ${x - 6} 100 Q ${x} 80 ${x + 6} 100`} fill="hsl(220 15% 28%)" />
                  <circle cx={x} cy="80" r="2" fill="hsl(45 60% 60%)" />
                </g>
              ))}
            </motion.g>

            {/* Windows & details */}
            <motion.g style={{ opacity: windowsOpacity }}>
              {[180, 220, 340, 380].map((x, i) => (
                <g key={`win${i}`}>
                  <path d={`M ${x} 240 L ${x} 215 Q ${x + 10} 205 ${x + 20} 215 L ${x + 20} 240`}
                    fill="hsl(210 30% 80% / 0.6)" stroke="hsl(220 15% 40%)" strokeWidth="0.8" />
                </g>
              ))}
            </motion.g>

            {/* Geometric pattern details */}
            <motion.g style={{ opacity: detailsOpacity }}>
              {/* Star patterns on wall */}
              {[200, 300, 400].map((x, i) => (
                <g key={`star${i}`}>
                  <polygon points={`${x},162 ${x + 4},168 ${x + 10},168 ${x + 5},173 ${x + 7},180 ${x},176 ${x - 7},180 ${x - 5},173 ${x - 10},168 ${x - 4},168`}
                    fill="none" stroke="hsl(45 40% 55% / 0.4)" strokeWidth="0.6" />
                </g>
              ))}
              {/* Calligraphy-style decorative band */}
              <rect x="155" y="150" width="290" height="6" fill="hsl(80 25% 35% / 0.15)" />
            </motion.g>

            {/* Garden / landscaping */}
            <motion.g style={{ opacity: gardenOpacity }}>
              {/* Reflecting pool */}
              <rect x="230" y="282" width="140" height="10" rx="2" fill="hsl(210 40% 85% / 0.4)" />
              {/* Cypress trees */}
              {[100, 160, 440, 500].map((x, i) => (
                <g key={`cy${i}`}>
                  <rect x={x - 1} y="250" width={3} height={20} fill="hsl(30 25% 45%)" />
                  <ellipse cx={x} cy="240" rx={5} ry={18} fill="hsl(140 30% 30%)" />
                </g>
              ))}
              {/* Flower beds */}
              <ellipse cx="195" cy="275" rx="15" ry="4" fill="hsl(100 25% 42% / 0.5)" />
              <ellipse cx="405" cy="275" rx="15" ry="4" fill="hsl(100 25% 42% / 0.5)" />
            </motion.g>
          </svg>
        </div>

        {/* Typing text + form */}
        <div className="mb-8">
          <ScrollTypingText
            text="Let's connect and create something extraordinary together. Whether it's a design collaboration or a conversation about architecture, I'd love to hear from you."
            className="text-muted-foreground leading-relaxed font-body text-sm md:text-base max-w-2xl"
            progress={scrollYProgress}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-body">Email</h3>
              <a href="mailto:vatsahimanshi7@gmail.com" className="text-foreground font-body hover:text-accent transition-colors">
                vatsahimanshi7@gmail.com
              </a>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-body">Social</h3>
              <div className="flex flex-col gap-2">
                <a href="https://www.linkedin.com/in/himanshi-vats" target="_blank" rel="noopener noreferrer" className="text-foreground font-body hover:text-accent transition-colors">LinkedIn →</a>
                <a href="https://www.instagram.com/vats_himanshi_" target="_blank" rel="noopener noreferrer" className="text-foreground font-body hover:text-accent transition-colors">@vats_himanshi_ →</a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 font-body">Name</label>
              <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 text-foreground font-body placeholder:text-muted-foreground/40 focus:border-accent focus:outline-none transition-colors" placeholder="Your name" required />
            </div>
            <div>
              <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 font-body">Email</label>
              <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 text-foreground font-body placeholder:text-muted-foreground/40 focus:border-accent focus:outline-none transition-colors" placeholder="your@email.com" required />
            </div>
            <div>
              <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 font-body">Message</label>
              <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4}
                className="w-full bg-transparent border-b border-border py-3 text-foreground font-body placeholder:text-muted-foreground/40 focus:border-accent focus:outline-none transition-colors resize-none" placeholder="Tell me about your project..." required />
            </div>
            <button type="submit" className="px-8 py-3 bg-primary text-primary-foreground text-sm font-body tracking-widest uppercase rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MosqueScrollAnimation;
