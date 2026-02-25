import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - no backend
    alert("Thank you for your message!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32">
      <div ref={ref} className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-body">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-16">
            Contact
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-body">
                Email
              </h3>
              <a
                href="mailto:himanshi@example.com"
                className="text-foreground font-body hover:text-accent transition-colors"
              >
                himanshi@example.com
              </a>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-body">
                Social
              </h3>
              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="text-foreground font-body hover:text-accent transition-colors"
                >
                  LinkedIn →
                </a>
                <a
                  href="#"
                  className="text-foreground font-body hover:text-accent transition-colors"
                >
                  Instagram →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 font-body">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 text-foreground font-body placeholder:text-muted-foreground/40 focus:border-accent focus:outline-none transition-colors"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 font-body">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 text-foreground font-body placeholder:text-muted-foreground/40 focus:border-accent focus:outline-none transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 font-body">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full bg-transparent border-b border-border py-3 text-foreground font-body placeholder:text-muted-foreground/40 focus:border-accent focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-primary-foreground text-sm font-body tracking-widest uppercase rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
