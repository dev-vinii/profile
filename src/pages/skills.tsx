import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const skillGroups = [
  { key: "languages", items: ["JavaScript", "TypeScript", "SQL"] },
  { key: "backend", items: ["Node.js", "NestJS"] },
  { key: "frontend", items: ["React", "Next.js", "Vue"] },
  { key: "databases", items: ["PostgreSQL", "MongoDB"] },
  {
    key: "architecture",
    itemKeys: ["microservices", "eventDriven"],
    items: ["Kafka", "RabbitMQ"],
  },
  {
    key: "cloud",
    items: ["AWS (EC2, S3, SES, IoT Core)", "GitHub Actions", "Docker"],
  },
  { key: "quality", itemKeys: ["automatedTests"], items: ["Cypress", "REST"] },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Skills() {
  const { t } = useTranslation();

  return (
    <motion.div
      className="w-full h-full flex flex-col justify-center px-8 md:px-14 lg:px-20 py-16 overflow-y-auto"
      variants={stagger}
      initial="hidden"
      animate="show"
    >
      <div className="max-w-3xl mx-auto w-full">
        {/* Section number */}
        <motion.p
          variants={fadeUp}
          className="font-mono text-[10px] tracking-[0.35em] uppercase mb-8"
          style={{ color: "var(--rust)", opacity: 0.7 }}
        >
          02 — Skills
        </motion.p>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          className="font-black uppercase leading-none tracking-tight mb-12"
          style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}
        >
          {t("skills.title")}
        </motion.h1>

        {/* Skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {skillGroups.map((group) => {
            const allItems = [
              ...(group.itemKeys?.map((k) => t(`skills.items.${k}`)) ?? []),
              ...group.items,
            ];

            return (
              <motion.div
                key={group.key}
                variants={fadeUp}
                className="flex flex-col gap-3"
              >
                {/* Category label with accent dot */}
                <div className="flex items-center gap-2">
                  <span
                    className="block w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: "var(--rust)" }}
                  />
                  <h2
                    className="font-mono text-[9px] uppercase tracking-[0.28em]"
                    style={{ opacity: 0.45 }}
                  >
                    {t(`skills.groups.${group.key}`)}
                  </h2>
                </div>

                {/* Skill items */}
                <div className="flex flex-col gap-1.5 pl-3.5">
                  {allItems.map((item) => (
                    <span
                      key={item}
                      className="text-sm leading-snug"
                      style={{ opacity: 0.72 }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
