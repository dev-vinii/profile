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

export function Skills() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-full gap-4 md:gap-8 px-6 md:px-10 py-14 md:py-16 max-w-2xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold">{t("skills.title")}</h1>

      <div className="grid grid-cols-2 gap-4 md:gap-6 w-full">
        {skillGroups.map((group) => {
          const allItems = [
            ...(group.itemKeys?.map((k) => t(`skills.items.${k}`)) ?? []),
            ...group.items,
          ];

          return (
            <div key={group.key} className="flex flex-col gap-3">
              <h2 className="text-xs font-semibold uppercase tracking-widest opacity-50">
                {t(`skills.groups.${group.key}`)}
              </h2>
              <div className="flex flex-wrap gap-2">
                {allItems.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full text-sm border border-current opacity-70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
