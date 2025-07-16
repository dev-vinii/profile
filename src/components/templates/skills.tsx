import {
  AwsIcon,
  CypressIcon,
  DockerIcon,
  FastifyIcon,
  JavascriptIcon,
  MongoDBIcon,
  MysqlIcon,
  NestIcon,
  NextIcon,
  NodeIcon,
  NuxtIcon,
  PostgresIcon,
  ReactIcon,
  TypescriptIcon,
  VitestIcon,
  VueIcon,
} from "@/components/templates/atoms/icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Skills() {
  const skills = [
    {
      name: "React",
      icon: <ReactIcon />,
      category: "Frontend"
    },
    {
      name: "Vue",
      icon: <VueIcon />,
      category: "Frontend"
    },
    {
      name: "Next",
      icon: <NextIcon />,
      category: "Frontend"
    },
    {
      name: "Nuxt",
      icon: <NuxtIcon />,
      category: "Frontend"
    },
    {
      name: "TypeScript",
      icon: <TypescriptIcon />,
      category: "Language"
    },
    {
      name: "JavaScript",
      icon: <JavascriptIcon />,
      category: "Language"
    },
    {
      name: "Node",
      icon: <NodeIcon />,
      category: "Backend"
    },
    {
      name: "Nest",
      icon: <NestIcon />,
      category: "Backend"
    },
    {
      name: "PostgreSQL",
      icon: <PostgresIcon />,
      category: "Database"
    },
    {
      name: "MySQL",
      icon: <MysqlIcon />,
      category: "Database"
    },
    {
      name: "MongoDB",
      icon: <MongoDBIcon />,
      category: "Database"
    },
    {
      name: "Fastify",
      icon: <FastifyIcon />,
      category: "Backend"
    },
    {
      name: "Docker",
      icon: <DockerIcon />,
      category: "DevOps"
    },
    {
      name: "AWS",
      icon: <AwsIcon />,
      category: "Cloud"
    },
    {
      name: "Vitest",
      icon: <VitestIcon />,
      category: "Testing"
    },
    {
      name: "Cypress",
      icon: <CypressIcon />,
      category: "Testing"
    },
  ];

  return (
    <section className="h-full w-full flex flex-col text-white overflow-hidden">
      <div className="flex-shrink-0 text-center py-6 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Habilidades</h2>
        <p className="text-sm sm:text-base opacity-80 max-w-2xl mx-auto">
          Tecnologias e ferramentas que utilizo no desenvolvimento
        </p>
      </div>
      
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 max-w-7xl mx-auto">
          {skills.map((skill) => (
            <Card
              key={skill.name}
              className="border border-white/20 bg-white/5 backdrop-blur-sm hover:border-white/40 hover:bg-white/10 transition-all duration-300 flex justify-center flex-col items-center p-3 sm:p-4 group"
            >
              <CardHeader className="p-0 mb-2">
                <div className="text-2xl sm:text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
              </CardHeader>
              <CardContent className="p-0 text-center">
                <CardTitle className="text-xs sm:text-sm font-semibold text-white mb-1 leading-tight">
                  {skill.name}
                </CardTitle>
                <p className="text-xs opacity-60">{skill.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
