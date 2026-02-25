import { motion } from "framer-motion";
import heroIllustration from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid opacity-40" />

      {/* Warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 text-center lg:text-left"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body">
            Architecture Portfolio
          </p>
          <h1 className="text-5xl md:text-7xl font-heading font-semibold text-foreground leading-tight mb-6">
            Himanshi
            <br />
            <span className="italic font-normal">Vats</span>
          </h1>
          <div className="w-16 h-px bg-accent mb-6 mx-auto lg:mx-0" />
          <p className="text-lg text-muted-foreground font-body max-w-md mx-auto lg:mx-0 leading-relaxed">
            B.Arch Student &middot; Architectural Designer
          </p>
          <p className="text-sm text-muted-foreground/70 font-body mt-2">
            Apeejay School of Architecture, Greater Noida
          </p>

          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="inline-block mt-10 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            Scroll to explore ↓
          </motion.a>
        </motion.div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex-1 max-w-xl"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-warm to-secondary/50 rounded-sm blur-2xl opacity-60" />
            <img
              src={heroIllustration}
              alt="Himanshi Vats - Architecture student and future architect illustration"
              className="relative w-full rounded-sm shadow-2xl"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
