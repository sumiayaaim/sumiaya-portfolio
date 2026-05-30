import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all ${scrolled ? "glass-strong shadow-elegant" : ""}`}>
          <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
            {/* <span className="h-7 w-7 rounded-lg bg-gradient-primary shadow-glow" /> */}
            <span className="font-[Space_Grotesk]">Sumiaya<span className="text-muted-foreground"></span></span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
            ))}
          </nav>
          <a
            href="mailto:sumiayaaiman@gmail.com"
            className="hidden md:inline-flex items-center rounded-full bg-foreground text-background px-4 py-1.5 text-sm font-medium hover:opacity-90 transition"
          >
            Hire me
          </a>
        </div>
      </div>
    </motion.header>
  );
}