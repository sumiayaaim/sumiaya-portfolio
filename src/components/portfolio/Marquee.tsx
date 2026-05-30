const techs = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "Angular", "Flutter", "Dart",
  "PHP", "Laravel", "ASP.NET", "C#", "MySQL", "SQL Server", "Bootstrap",
  "jQuery", "GSAP", "Figma", "Git", "WordPress", "REST APIs",
];

export function Marquee() {
  const loop = [...techs, ...techs];
  return (
    <section aria-label="Technologies" className="relative py-10 border-y border-white/5 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex gap-8 whitespace-nowrap animate-[marquee_40s_linear_infinite]">
        {loop.map((t, i) => (
          <div key={`${t}-${i}`} className="flex items-center gap-3 text-muted-foreground">
            <span className="text-sm font-medium tracking-wide">{t}</span>
            <span className="text-primary/60">✦</span>
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-50%);} }`}</style>
    </section>
  );
}