import { motion } from "framer-motion";
import ArchitectGirlSVG from "./ArchitectGirlSVG";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Floating architectural shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] w-32 h-32 border border-accent/20 rotate-45"
        />
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 right-[15%] w-20 h-20 border border-accent/15 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-32 left-[20%] w-16 h-40 border border-accent/10"
        />
        <motion.div
          animate={{ y: [0, 12, 0], x: [0, -5, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-1/3 right-[8%] w-24 h-1 bg-accent/15"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-20 right-[25%] w-12 h-12 border border-accent/20 rotate-12"
        />
      </div>

      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10 lg:py-20 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 h-full">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="text-6xl md:text-8xl font-heading font-semibold text-foreground leading-[0.95] mb-6">
            Himanshi
            <br />
            <span className="italic font-normal text-accent">Vats</span>
          </h1>
          <div className="w-20 h-[2px] bg-gradient-to-r from-accent to-transparent mb-6 mx-auto lg:mx-0" />
          <p className="text-lg text-muted-foreground font-body max-w-md mx-auto lg:mx-0 leading-relaxed">
            B.Arch Student &middot; Architectural Designer
          </p>
          <p className="text-sm text-muted-foreground/60 font-body mt-2">
            Apeejay School of Architecture, Greater Noida
          </p>

          <motion.a
            href="#building"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="inline-flex items-center gap-2 mt-12 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span>Scroll to explore</span>
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-accent"
            >
              ↓
            </motion.span>
          </motion.a>
        </motion.div>

        {/* SVG Illustration - Architecture girl designing on wall */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex-1 max-w-xs lg:max-w-xl"
        >
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-accent/10 via-warm to-secondary/40 rounded-lg blur-3xl opacity-70" />
            <ArchitectGirlSVG />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
