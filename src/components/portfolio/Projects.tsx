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
    blurb: "Complete salon management system with appointment booking, admin dashboard, client records, and reporting.",
    stack: ["PHP", "Laravel", "MySQL", "MVC", "Auth"],
    accent: "from-rose-400/30 to-fuchsia-500/30",
    image: salon,
    featured: true,
  },
  {
 
  name: "Aptitude Test Management System",
  tag: "ASP.NET Application",
  blurb: "A comprehensive online aptitude testing platform developed in ASP.NET, featuring candidate registration, timed assessments, automated scoring, result generation, and administrative management for efficient evaluation processes.",
  stack: ["ASP.NET", "C#", "SQL Server", "Bootstrap"],
  accent: "from-blue-400/30 to-indigo-500/30",
  image: aptitude,
},
  {
    name: "Dynamic Movie Search",
    tag: "API Integration",
    blurb: "Real-time movie search engine with detailed results, posters, and metadata powered by a public API.",
    stack: ["JavaScript", "REST API", "Async/Await"],
    accent: "from-amber-400/30 to-orange-500/30",
    image: movies,
  },
  {
    name: "Music Album Website",
    tag: "Animation",
    blurb: "Interactive gallery with motion-driven transitions and a fully responsive layout.",
    stack: ["HTML5", "CSS3", "JS", "GSAP"],
    accent: "from-sky-400/30 to-indigo-500/30",
  },
  {
    name: "AskMe Mobile Website",
    tag: "Mobile-First",
    blurb: "Mobile-optimized Q&A and smartphone comparison platform with crisp, finger-friendly UI.",
    stack: ["Responsive", "Bootstrap", "jQuery"],
    accent: "from-violet-400/30 to-purple-500/30",
  },
  // {
  //   name: "Animated UI Experiments",
  //   tag: "Playground",
  //   blurb: "A growing collection of GSAP + Bootstrap interaction experiments and micro-animation studies.",
  //   stack: ["GSAP", "Bootstrap", "CSS"],
  //   accent: "from-cyan-400/30 to-blue-500/30",
  // },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="03 — Selected work" title="Things I've built recently.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className={`group relative glass rounded-2xl overflow-hidden hover:bg-white/[0.07] transition-all hover:-translate-y-1 hover:shadow-elegant ${p.featured ? "sm:col-span-2 lg:col-span-2" : ""}`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            {p.image && (
              <div className="relative overflow-hidden border-b border-white/5">
                <img src={p.image} alt={p.name} loading="lazy" width={1024} height={640} className={`w-full ${p.featured ? "h-64" : "h-40"} object-cover group-hover:scale-[1.03] transition-transform duration-700`} />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            )}
            <div className="relative p-6">
              <div className="flex items-start justify-between">
                <span className="text-xs text-primary uppercase tracking-wider">{p.tag}</span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:rotate-0 -rotate-45 transition-all" />
              </div>
              <h3 className="mt-4 text-xl font-semibold font-[Space_Grotesk]">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.blurb}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-muted-foreground">{s}</span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}