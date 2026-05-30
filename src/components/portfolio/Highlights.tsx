import { motion } from "framer-motion";
import { Zap, Target, Users, TrendingUp } from "lucide-react";

const pillars = [
  { icon: Zap, title: "Ships fast, ships clean", body: "Pixel-perfect Figma-to-code with semantic HTML, accessible components, and zero technical debt." },
  { icon: Target, title: "Recruiter-ready toolkit", body: "Frontend depth (HTML/CSS/JS/Angular) plus full-stack reach (Laravel, ASP.NET, Flutter, SQL)." },
  { icon: Users, title: "Team-fit collaborator", body: "Comfortable with Git workflows, design handoffs, code reviews, and production standards." },
  { icon: TrendingUp, title: "Always leveling up", body: "Currently in Aptech's 3-year ACCP PRIME 2.0 diploma — 87% in last semester, 98.4% Angular cert." },
];

export function Highlights() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group glass rounded-2xl p-6 hover:bg-white/[0.07] transition relative overflow-hidden"
            >
              <div aria-hidden className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
              <div className="relative">
                <div className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow mb-4">
                  <p.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}