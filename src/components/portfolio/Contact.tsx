import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="08 — Contact"
      title="Let's build something great."
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative glass-strong rounded-3xl p-10 md:p-16 overflow-hidden"
      >
        <div
          aria-hidden
          className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary/30 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-accent/25 blur-3xl"
        />

        <div className="relative max-w-3xl">
          <h3 className="font-[Space_Grotesk] text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            Open to{" "}
            <span className="text-gradient">
              software engineering opportunities
            </span>
            , frontend development roles, internships, freelance work, and
            meaningful collaborations.
          </h3>

          <p className="mt-5 text-lg text-muted-foreground">
            The fastest way to reach me is email — I usually respond within a
            day.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="mailto:sumiayaaiman@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.02] transition"
            >
              sumiayaaiman@gmail.com
              <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition" />
            </a>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-4 max-w-xl">
            <a
              href="https://github.com/sumiayaaim"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition group"
            >
              <div className="flex items-center gap-3">
                <GithubIcon className="h-5 w-5" />
                <div>
                  <div className="text-sm font-medium">GitHub</div>
                  <div className="text-xs text-muted-foreground">
                    @sumiayaaim
                  </div>
                </div>
              </div>

              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition" />
            </a>

            <a
              href="https://www.linkedin.com/in/sumiaya-aiman-9b1a20349"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition group"
            >
              <div className="flex items-center gap-3">
                <LinkedinIcon className="h-5 w-5" />
                <div>
                  <div className="text-sm font-medium">LinkedIn</div>
                  <div className="text-xs text-muted-foreground">
                    sumiayaaiman
                  </div>
                </div>
              </div>

              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Karachi, Pakistan
            </span>

            <span className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4" />
              sumiayaaiman@gmail.com
            </span>
          </div>
        </div>
      </motion.div>

      <footer className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div>
          © {new Date().getFullYear()} Sumiaya Aiman. All Rights Reserved.
        </div>

        <div>
          Built with React, TypeScript & Tailwind CSS
        </div>
      </footer>
    </Section>
  );
}