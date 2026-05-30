import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench, Sparkles } from "lucide-react";
import { Section } from "./Section";

const groups = [
  { icon: Code2, title: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Angular", "Flutter"] },
  { icon: Server, title: "Backend", items: ["PHP", "Laravel", "ASP.NET", "C#"] },
  { icon: Database, title: "Databases", items: ["MySQL", "SQL Server"] },
  { icon: Wrench, title: "Tools", items: ["VS Code", "Visual Studio", "GitHub", "WordPress", "Figma"] },
  { icon: Sparkles, title: "Core Concepts", items: ["MVC", "CRUD", "API Integration", "UI/UX", "SEO Basics", "Responsive Design"] },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="04 — Skills" title="My technical toolkit.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <g.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg">{g.title}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span key={it} className="text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition">{it}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}