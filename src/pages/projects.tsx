import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Projects() {
  const { t } = useTranslation();
  const experiences = t("projects.experiences", {
    returnObjects: true,
  }) as Experience[];

  return (
    <motion.div
      className="w-full h-full flex flex-col justify-center px-8 md:px-14 lg:px-20 py-16 overflow-y-auto"
      variants={stagger}
      initial="hidden"
      animate="show"
    >
      <div className="max-w-2xl mx-auto w-full">
        {/* Section number */}
        <motion.p
          variants={fadeUp}
          className="font-mono text-[10px] tracking-[0.35em] uppercase mb-8"
          style={{ color: "var(--rust)", opacity: 0.7 }}
        >
          03 — Experience
        </motion.p>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          className="font-black uppercase leading-none tracking-tight mb-12"
          style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}
        >
          {t("projects.title")}
        </motion.h1>

        {/* Experience entries */}
        <div className="flex flex-col gap-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              variants={fadeUp}
              className="flex flex-col gap-4 pl-5"
              style={{
                borderLeft: `2px solid ${i === 0 ? "var(--rust)" : "rgba(237,232,219,0.12)"}`,
              }}
            >
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h2 className="font-bold text-base md:text-lg leading-tight">
                    {exp.role}
                  </h2>
                  <span
                    className="font-mono text-xs tracking-wider"
                    style={{ color: "var(--rust)", opacity: 0.8 }}
                  >
                    {exp.company}
                  </span>
                </div>
                <p
                  className="font-mono text-[10px] tracking-wider mt-1.5"
                  style={{ opacity: 0.3 }}
                >
                  {exp.period}
                </p>
              </div>

              <ul className="flex flex-col gap-2.5">
                {exp.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-3 text-sm leading-relaxed"
                    style={{ opacity: 0.6 }}
                  >
                    <span
                      className="shrink-0 mt-0.5 font-mono text-xs"
                      style={{ color: "var(--rust)", opacity: 0.7 }}
                    >
                      →
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
