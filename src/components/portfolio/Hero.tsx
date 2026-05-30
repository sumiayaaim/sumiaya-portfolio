import { motion } from "framer-motion";
import { ArrowDownRight, Mail, MapPin, Download, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import avatar from "@/assets/avatar.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div aria-hidden className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div aria-hidden className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/30 blur-3xl" style={{ animation: "aurora 14s ease-in-out infinite" }} />
      <div aria-hidden className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent/25 blur-3xl" style={{ animation: "aurora 18s ease-in-out infinite reverse" }} />

      <div className="relative mx-auto max-w-6xl px-6 w-full grid lg:grid-cols-[1.4fr_1fr] gap-14 items-center">
        <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs text-muted-foreground mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-[Space_Grotesk] text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]"
        >
          Building <span className="text-gradient">delightful</span> web experiences, one commit at a time.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-7 max-w-xl text-lg text-muted-foreground leading-relaxed"
        >
      I'm <span className="text-foreground font-medium">Sumiaya Aiman</span> — a software developer focused on creating high-performance web and mobile applications.

My expertise spans frontend engineering, backend development, database design, and modern application architecture using Angular, Laravel, ASP.NET, Flutter, and SQL technologies.

I am also actively learning the MERN Stack (MongoDB, Express.js, React.js, and Node.js) and have a strong interest in modern JavaScript ecosystems, scalable web applications, and full-stack development.

I enjoy transforming business requirements into scalable digital products that deliver measurable value while continuously exploring new technologies and industry best practices.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.02] active:scale-[0.99] transition">
            View my work
            <ArrowDownRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition" />
          </a>
        <a
  href="/Sumiaya_Aiman_CV.pdf"
  download="Sumiaya_Aiman_CV.pdf"
  className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/10 transition"
>
  <Download className="h-4 w-4" />
  Download CV
</a>
          <div className="flex items-center gap-1 ml-2">
            <a aria-label="GitHub" href="https://github.com/sumiayaaim" target="_blank" rel="noreferrer" className="p-2.5 rounded-full hover:bg-white/5 text-muted-foreground hover:text-foreground transition">
              <GithubIcon className="h-5 w-5" />
            </a>
            <a aria-label="LinkedIn" href="https://linkedin.com/in/sumiayaaiman-9b1a20349" target="_blank" rel="noreferrer" className="p-2.5 rounded-full hover:bg-white/5 text-muted-foreground hover:text-foreground transition">
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a aria-label="Email" href="mailto:sumiayaaiman@gmail.com" className="p-2.5 rounded-full hover:bg-white/5 text-muted-foreground hover:text-foreground transition">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 flex flex-wrap gap-6 text-sm text-muted-foreground"
        >
          <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Karachi, Pakistan</span>
          <span>•</span>
       <span>Frontend • Full-Stack • MERN Learner</span>
         
        </motion.div>
        </div>

        {/* Showcase card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="relative glass-strong rounded-3xl p-3 shadow-elegant" style={{ animation: "float 8s ease-in-out infinite" }}>
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={avatar}
                alt="Sumiaya Aiman portrait"
                width={768}
                height={896}
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-[10px] uppercase tracking-[0.2em] text-primary">Now building</div>
              <div className="text-sm font-medium mt-1">
Building Full-Stack Apps with MERN & Flutter
</div>
              </div>
            </div>
            <div className="absolute -top-3 -right-3 glass-strong rounded-xl px-3 py-2 text-xs font-medium shadow-glow flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> 98.4% Angular
            </div>
            <div className="absolute -bottom-4 -left-4 glass-strong rounded-xl px-3 py-2 text-xs font-medium shadow-elegant">
              <span className="text-emerald-400">●</span> Open to work
            </div>
          </div>
          {/* Floating tech chips */}
          <div className="absolute -left-10 top-10 glass rounded-xl px-3 py-2 text-xs hidden xl:block" style={{ animation: "float 6s ease-in-out infinite" }}>
            ⚡ Laravel
          </div>
          <div className="absolute -right-6 top-1/3 glass rounded-xl px-3 py-2 text-xs hidden xl:block" style={{ animation: "float 7s ease-in-out infinite 1s" }}>
            🅰️ Angular
          </div>
          <div className="absolute -left-6 bottom-20 glass rounded-xl px-3 py-2 text-xs hidden xl:block" style={{ animation: "float 9s ease-in-out infinite 0.5s" }}>
            💙 Flutter
          </div>
        </motion.div>
      </div>
    </section>
  );
}