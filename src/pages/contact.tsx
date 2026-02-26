import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const links = [
  {
    label: "Email",
    value: "viniciusluna@yahoo.com",
    href: "mailto:viniciusluna@yahoo.com",
  },
  {
    label: "LinkedIn",
    value: "viniciusluna17",
    href: "https://www.linkedin.com/in/viniciusluna17/",
  },
  {
    label: "GitHub",
    value: "viniciusluna",
    href: "https://github.com/viniciusluna",
  },
];

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

export function Contact() {
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
          04 — Contact
        </motion.p>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          className="font-black uppercase leading-none tracking-tight mb-14"
          style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}
        >
          {t("contact.title")}
        </motion.h1>

        {/* Contact links */}
        <motion.div variants={fadeUp} className="flex flex-col">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-5 transition-colors"
              style={{ borderTop: "1px solid rgba(237,232,219,0.1)" }}
            >
              <div className="flex items-baseline gap-5 md:gap-8">
                <span
                  className="font-mono text-[9px] tracking-[0.25em] uppercase w-16 shrink-0"
                  style={{ opacity: 0.35 }}
                >
                  {link.label}
                </span>
                <span
                  className="font-semibold text-sm md:text-base transition-opacity"
                  style={{ opacity: 0.75 }}
                >
                  {link.value}
                </span>
              </div>

              <span
                className="text-lg opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-2 group-hover:translate-x-0"
                style={{ color: "var(--rust)" }}
              >
                →
              </span>
            </a>
          ))}
          {/* Bottom border */}
          <div style={{ borderTop: "1px solid rgba(237,232,219,0.1)" }} />
        </motion.div>

        {/* Location */}
        <motion.p
          variants={fadeUp}
          className="mt-10 font-mono text-[10px] tracking-[0.35em] uppercase"
          style={{ opacity: 0.25 }}
        >
          {t("contact.location")}
        </motion.p>
      </div>
    </motion.div>
  );
}
