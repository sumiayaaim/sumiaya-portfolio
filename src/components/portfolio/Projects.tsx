import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";

import salon from "@/assets/proj-salon.png";
import aptitude from "@/assets/proj-aptitude.png";
import movies from "@/assets/proj-movies.png";

const projects = [
  {
    name: "Elegance Salon",
    tag: "Featured · Full-Stack",
    blurb:
      "Complete salon management system with appointment booking, admin dashboard, client records, billing, inventory management, and reporting.",
    stack: ["PHP", "Laravel", "MySQL", "MVC", "Authentication"],
    accent: "from-rose-400/30 to-fuchsia-500/30",
    image: salon,
    featured: true,
    repo: "https://github.com/sumiayaaim/Salon-elegance-main",
  },
  {
    name: "Webster Aptitude Test Management System",
    tag: "ASP.NET Application",
    blurb:
      "Comprehensive online aptitude testing platform featuring candidate registration, timed assessments, automated scoring, result generation, and administrative management.",
    stack: ["ASP.NET", "C#", "SQL Server", "Bootstrap"],
    accent: "from-blue-400/30 to-indigo-500/30",
    image: aptitude,
    repo: "https://github.com/sumiayaaim/WebsterAptitude",
  },
  {
    name: "Budget Planner",
    tag: "Finance Management",
    blurb:
      "Expense tracking and budget management web application that helps users monitor spending habits and organize personal finances effectively.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    accent: "from-emerald-400/30 to-green-500/30",
    repo: "https://github.com/sumiayaaim/Budget-Planner",
  },
  {
    name: "Dynamic Movie Search Engine",
    tag: "API Integration",
    blurb:
      "Real-time movie search application with detailed movie information, posters, ratings, and metadata powered through external APIs.",
    stack: ["HTML5", "CSS3", "JavaScript", "REST API"],
    accent: "from-amber-400/30 to-orange-500/30",
    image: movies,
    repo: "https://github.com/sumiayaaim/Movie-Search-Engine",
  },
  {
    name: "Music Album Website",
    tag: "Frontend Development",
    blurb:
      "Responsive music gallery website featuring modern layouts, interactive sections, and optimized user experience across all devices.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    accent: "from-sky-400/30 to-indigo-500/30",
    repo: "https://github.com/sumiayaaim",
  },
  {
    name: "AskMe Mobile Website",
    tag: "Mobile-First Design",
    blurb:
      "Mobile-friendly Q&A and smartphone comparison platform built with responsive design principles for seamless browsing on all screen sizes.",
    stack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    accent: "from-violet-400/30 to-purple-500/30",
    repo: "https://github.com/sumiayaaim",
  },
  {
    name: "Animated Websites & UI Experiments",
    tag: "UI/UX Animation",
    blurb:
      "Collection of interactive UI components, GSAP-powered animations, micro-interactions, and creative frontend experiments.",
    stack: ["GSAP", "Bootstrap", "JavaScript", "CSS3"],
    accent: "from-cyan-400/30 to-blue-500/30",
    repo: "https://github.com/sumiayaaim",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="03 — Selected Work"
      title="Things I've Built Recently."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className={`group relative glass rounded-2xl overflow-hidden hover:bg-white/[0.07] transition-all hover:-translate-y-1 hover:shadow-elegant ${
              p.featured ? "sm:col-span-2 lg:col-span-2" : ""
            }`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />

            {p.image && (
              <div className="relative overflow-hidden border-b border-white/5">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className={`w-full ${
                    p.featured ? "h-64" : "h-40"
                  } object-cover group-hover:scale-[1.03] transition-transform duration-700`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            )}

            <div className="relative p-6">
              <div className="flex items-start justify-between">
                <span className="text-xs text-primary uppercase tracking-wider">
                  {p.tag}
                </span>

                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:rotate-0 -rotate-45 transition-all" />
              </div>

              <h3 className="mt-4 text-xl font-semibold font-[Space_Grotesk]">
                {p.name}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {p.blurb}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-2 text-primary font-medium text-sm">
                <span>View GitHub Repository</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}