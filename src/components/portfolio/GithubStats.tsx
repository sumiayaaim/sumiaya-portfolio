import { motion } from "framer-motion";
import { GitBranch, Star, Code2, Activity } from "lucide-react";
import { Section } from "./Section";
import { GithubIcon } from "./icons";

const stats = [
  { icon: Code2, label: "Languages", value: "8+", sub: "HTML, CSS, JS, PHP, C#, Dart, SQL, TS" },
  { icon: GitBranch, label: "Repositories", value: "Growing", sub: "Active learner & builder" },
  { icon: Star, label: "Focus", value: "Quality", sub: "Clean, maintainable code" },
  { icon: Activity, label: "Status", value: "Shipping", sub: "Building weekly" },
];

export function GithubStats() {
  return (
    <Section id="github" eyebrow="07 — GitHub" title="Open source & in public.">
      <div className="glass-strong rounded-3xl p-8 md:p-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <GithubIcon className="h-7 w-7" />
            </div>
            <div>
              <div className="text-xl font-semibold">@sumiayaaim</div>
              <a href="https://github.com/sumiayaaim" target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline">
                github.com/sumiayaaim →
              </a>
            </div>
          </div>
          <a href="https://github.com/sumiayaaim" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition">
            Follow on GitHub
          </a>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl p-5 bg-white/[0.03] border border-white/5"
            >
              <s.icon className="h-5 w-5 text-primary mb-3" />
              <div className="text-2xl font-bold font-[Space_Grotesk]">{s.value}</div>
              <div className="text-sm text-foreground mt-1">{s.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.sub}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </Section>
  );
}