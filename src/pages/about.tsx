import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export function About() {
  const { t } = useTranslation();

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
          01 — About
        </motion.p>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          className="font-black uppercase leading-none tracking-tight mb-10"
          style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}
        >
          {t("about.title")}
        </motion.h1>

        {/* Summary */}
        <motion.p
          variants={fadeUp}
          className="text-base md:text-lg leading-relaxed mb-12"
          style={{ opacity: 0.65, maxWidth: "52ch" }}
        >
          {t("about.summary")}
        </motion.p>

        {/* Separator */}
        <motion.div
          variants={fadeUp}
          className="h-px w-full mb-10"
          style={{ background: "currentColor", opacity: 0.12 }}
        />

        {/* Education header */}
        <motion.p
          variants={fadeUp}
          className="font-mono text-[10px] tracking-[0.35em] uppercase mb-7"
          style={{ opacity: 0.4 }}
        >
          {t("about.educationTitle")}
        </motion.p>

        {/* Education entries */}
        <motion.div variants={fadeUp} className="flex flex-col gap-7">
          <div className="flex flex-col gap-1.5">
            <p className="font-semibold text-sm md:text-base leading-snug">
              {t("about.mba")}
            </p>
            <p
              className="font-mono text-xs tracking-wider"
              style={{ opacity: 0.35 }}
            >
              {t("about.mbaSchool")}
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            <p className="font-semibold text-sm md:text-base leading-snug">
              {t("about.degree")}
            </p>
            <p
              className="font-mono text-xs tracking-wider"
              style={{ opacity: 0.35 }}
            >
              {t("about.degreeSchool")}
            </p>
          </div>
        </motion.div>

        {/* English note */}
        <motion.p
          variants={fadeUp}
          className="mt-12 font-mono text-[10px] tracking-[0.3em] uppercase"
          style={{ color: "var(--rust)", opacity: 0.5 }}
        >
          {t("about.english")}
        </motion.p>
      </div>
    </motion.div>
  );
}
