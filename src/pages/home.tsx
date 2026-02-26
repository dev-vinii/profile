import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const expandX = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Home() {
  const { t } = useTranslation();

  return (
    <motion.div
      className="w-full h-full flex flex-col justify-center px-8 md:px-14 lg:px-20 overflow-hidden"
      variants={stagger}
      initial="hidden"
      animate="show"
    >
      {/* Section marker */}
      <motion.p
        variants={fadeUp}
        className="font-mono text-[10px] tracking-[0.35em] uppercase mb-6"
        style={{ color: "var(--rust)", opacity: 0.8 }}
      >
        Portfolio — 2025
      </motion.p>

      {/* Name — massive architectural display */}
      <motion.h1
        variants={fadeUp}
        className="font-black uppercase leading-[0.86] tracking-[-0.025em] select-none"
        style={{
          fontSize: "clamp(3.2rem, 14vw, 11rem)",
          color: "var(--ink)",
        }}
      >
        Vinicius
      </motion.h1>

      <motion.h1
        variants={fadeUp}
        className="font-black uppercase leading-[0.86] tracking-[-0.025em] select-none"
        style={{
          fontSize: "clamp(3.2rem, 14vw, 11rem)",
          color: "var(--ink)",
        }}
      >
        Luna
      </motion.h1>

      {/* Separator */}
      <motion.div
        variants={expandX}
        className="h-px w-full my-7 origin-left"
        style={{ background: "var(--ink)", opacity: 0.18 }}
      />

      {/* Role + location row */}
      <motion.div
        variants={fadeUp}
        className="flex flex-wrap items-center gap-4 md:gap-8"
      >
        <span
          className="font-semibold uppercase text-sm md:text-base tracking-[0.18em]"
          style={{ color: "var(--ink)" }}
        >
          {t("home.role")}
        </span>

        <span style={{ color: "var(--rust)", opacity: 0.6 }}>·</span>

        <span
          className="font-mono text-xs tracking-wider"
          style={{ color: "var(--fog)" }}
        >
          {t("home.location")}
        </span>
      </motion.div>
    </motion.div>
  );
}
