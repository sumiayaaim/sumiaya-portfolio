import internshipCert from "@/assets/certificates/aykays-internship.jpeg";
import angularCert from "@/assets/certificates/angular-certificate.png";
import wordpressCert from "@/assets/certificates/wordpress-certificate.png";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Section } from "./Section";

const certs = [
  {
    name: "Frontend Development Internship",
    issuer: "AYKAYS Digital Agency",
    year: "2025",
    
    credential: "IBT2025-47ACAEA1",
    image: internshipCert,
  },
  {
    name: "Getting Started with Angular",
    issuer: "Edureka",
    year: "2025",
    score: "98.4%",
    image: angularCert,
  },
  {
    name: "Build a Free Website with WordPress",
    issuer: "Coursera Project Network",
    year: "2025",
    score: "100%",
    image: wordpressCert,
  },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="05 — Certifications"
      title="Continuous Learning & Professional Development"
    >
      <div className="grid md:grid-cols-3 gap-5">
        {certs.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-2xl p-6 hover:bg-white/[0.07] transition"
          >
            <div className="flex items-start justify-between">
              <Award className="h-6 w-6 text-primary" />
              <span className="text-xs text-muted-foreground">
                {c.year}
              </span>
            </div>

            <h3 className="mt-4 font-semibold leading-snug">
              {c.name}
            </h3>

            <p className="text-sm text-muted-foreground mt-1">
              {c.issuer}
            </p>
{"description" in c && (
  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
    {String(c.description)}
  </p>
)}

         {"credential" in c && (
  <>
    <div className="mt-3 text-xs text-primary font-medium">
      Certificate ID: {c.credential}
    </div>

   
  </>
)}

         {"score" in c && (
  <div className="mt-4 inline-flex items-center gap-2 text-sm">
    <span className="text-gradient font-semibold font-[Space_Grotesk]">
      Score: {c.score}
    </span>
  </div>
)}
{c.image && (
  <a
    href={c.image}
    target="_blank"
    rel="noreferrer"
    className="block mt-4"
  >
    <img
      src={c.image}
      alt={c.name}
      className="rounded-xl border border-white/10 h-32 w-full object-cover hover:scale-[1.02] transition"
    />
  </a>
)}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}