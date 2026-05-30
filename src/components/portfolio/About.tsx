import { motion } from "framer-motion";
import { Section } from "./Section";

const stats = [
  { value: "87%", label: "Semester score" },
  { value: "98.4%", label: "Angular cert" },
  { value: "10+", label: "Shipped projects" },
  { value: "3 yr", label: "Diploma in progress" },
];

export function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="A developer who cares about the craft.">
      <div className="grid md:grid-cols-5 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3 space-y-5 text-lg text-muted-foreground leading-relaxed"
        >
          <p>
            I'm a motivated, detail-oriented developer based in Karachi with a strong frontend foundation and a
            growing full-stack toolkit. My focus is building <span className="text-foreground">responsive, user-friendly,
            high-impact web applications</span> that feel as good as they look.
          </p>
          <p>
            I recently completed a Frontend Internship at <span className="text-foreground">AYKAYS Digital Agency</span>,
            translating Figma into pixel-perfect, production-grade interfaces. Today I'm deepening my expertise in
            Angular, ASP.NET, and Flutter through Aptech's ACCP PRIME 2.0 diploma program.
          </p>
          <p>
            I love clean code, thoughtful interactions, and building things that solve real problems — and I'm eager
            to bring that energy to a growth-oriented engineering team.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="md:col-span-2 grid grid-cols-2 gap-3"
        >
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-5">
              <div className="text-3xl font-bold text-gradient font-[Space_Grotesk]">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}