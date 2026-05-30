import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    role: "Frontend Development Intern",
    org: "AYKAYS Digital Agency",
    date: "Sep 2025 — Nov 2025",
    points: [
      "Converted Figma designs into clean, responsive HTML, CSS, and JavaScript layouts.",
      "Used Flexbox and CSS Grid for pixel-perfect, cross-device alignment.",
      "Ensured UI consistency and brand accuracy in collaboration with designers.",
      "Improved performance through code optimization and responsive media queries.",
      "Gained hands-on experience with Git, real-world workflows, and production standards.",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "Figma", "Git"],
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="02 — Experience" title="Where I've worked.">
      <div className="relative">
        <div aria-hidden className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
        {items.map((it, i) => (
          <motion.div
            key={it.role}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 mb-8"
          >
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-primary shadow-glow">
              <Briefcase className="h-4 w-4 text-primary-foreground" />
            </div>
            <div className="md:text-right md:pr-10">
              <div className="text-sm text-muted-foreground">{it.date}</div>
              <div className="text-xl font-semibold mt-1">{it.role}</div>
              <div className="text-primary">{it.org}</div>
            </div>
            <div className="md:pl-10 mt-4 md:mt-0">
              <div className="glass rounded-2xl p-6">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {it.points.map((p) => (
                    <li key={p} className="flex gap-2"><span className="text-primary mt-0.5">▸</span><span>{p}</span></li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {it.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}