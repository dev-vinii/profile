import { useTranslation } from "react-i18next";

interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export function Projects() {
  const { t } = useTranslation();
  const experiences = t("projects.experiences", {
    returnObjects: true,
  }) as Experience[];

  return (
    <div className="flex flex-col items-center justify-center h-full gap-8 px-10 py-16 max-w-2xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold">{t("projects.title")}</h1>

      <div className="flex flex-col gap-8 w-full">
        {experiences.map((exp) => (
          <div key={exp.company} className="flex flex-col gap-2">
            <div>
              <h2 className="text-xl font-semibold">{exp.role}</h2>
              <p className="text-sm opacity-60">
                {exp.company} — {exp.period}
              </p>
            </div>
            <ul className="list-disc list-inside opacity-80 text-sm flex flex-col gap-1">
              {exp.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
