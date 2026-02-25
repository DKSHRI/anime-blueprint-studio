const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground font-body tracking-widest">
          © 2026 Himanshi Vats
        </p>
        <p className="text-xs text-muted-foreground/50 font-body tracking-wider">
          Architecture &middot; Design &middot; Vision
        </p>
      </div>
    </footer>
  );
};

export default Footer;
