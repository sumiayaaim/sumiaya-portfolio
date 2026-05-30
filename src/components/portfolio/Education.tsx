import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Section } from "./Section";

const terms = [
  { t: "Term 1", status: "Completed", items: "HTML5, CSS3, Bootstrap, jQuery, UI/UX, SEO, Git & GitHub" },
  { t: "Term 2", status: "87%", items: "PHP, MySQL, Laravel, MVC, CRUD, Authentication, API Integration" },
  { t: "Term 3", status: "Completed", items: "Angular, ASP.NET, SQL Server, C#" },
  { t: "Term 4", status: "Completed", items: "Dart, Flutter — Mobile Application Development" },
];

const education = [
  { school: "Aptech North Nazimabad", degree: "ACCP PRIME 2.0 — 3 Year Diploma in Full-Stack Development", date: "2024 — Present" },
  { school: "Ziauddin University Examination Board", degree: "Intermediate in Commerce — Grade A", date: "2024" },
  { school: "BSEK Karachi", degree: "Matriculation in Science — Grade A", date: "2014" },
];

export function Education() {
  return (
    <Section id="education" eyebrow="06 — Education" title="Built on a strong foundation.">
      <div className="grid lg:grid-cols-5 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 glass rounded-2xl p-7"
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
              <GraduationCap className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <div className="font-semibold">ACCP PRIME 2.0 — Aptech</div>
              <div className="text-sm text-muted-foreground">3-Year Full-Stack Diploma · 2024 — Present</div>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            {terms.map((term) => (
              <div key={term.t} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-xs font-semibold text-primary w-14 shrink-0 pt-0.5">{term.t}</div>
                <div className="flex-1 text-sm text-muted-foreground">{term.items}</div>
                <div className="text-xs px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">{term.status}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="lg:col-span-2 space-y-4">
          {education.map((e, i) => (
            <motion.div
              key={e.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-5"
            >
              <div className="text-xs text-muted-foreground">{e.date}</div>
              <div className="font-semibold mt-1">{e.school}</div>
              <div className="text-sm text-muted-foreground mt-1">{e.degree}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}