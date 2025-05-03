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
    [
      {
        name: "React",
        icon: <ReactIcon />,
      },
      {
        name: "Vue",
        icon: <VueIcon />,
      },
      {
        name: "Next",
        icon: <NextIcon />,
      },
      {
        name: "Nuxt",
        icon: <NuxtIcon />,
      },
    ],
    [
      {
        name: "TypeScript",
        icon: <TypescriptIcon />,
      },
      {
        name: "JavaScript",
        icon: <JavascriptIcon />,
      },
      {
        name: "Node",
        icon: <NodeIcon />,
      },
      {
        name: "Nest",
        icon: <NestIcon />,
      },
    ],
    [
      {
        name: "PostgreSQL",
        icon: <PostgresIcon />,
      },
      {
        name: "MySQL",
        icon: <MysqlIcon />,
      },
      {
        name: "MongoDB",
        icon: <MongoDBIcon />,
      },
      {
        name: "Fastify",
        icon: <FastifyIcon />,
      },
    ],
    [
      {
        name: "Docker",
        icon: <DockerIcon />,
      },
      {
        name: "AWS",
        icon: <AwsIcon />,
      },
      {
        name: "Vitest",
        icon: <VitestIcon />,
      },
      {
        name: "Cypress",
        icon: <CypressIcon />,
      },
    ],
  ];

  return (
    <section className="flex flex-col gap-5 w-screen h-[calc(100vh-4rem)] max-md:h-[calc(100vh-3.75rem)] text-white px-10 pb-5 ">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Habilidades</h2>
      </div>
      {skills.map((skill, index) => (
        <div
          key={index}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 h-full"
        >
          {skill.map((skill) => (
            <Card
              key={skill.name}
              className="border border-white border-solid flex justify-center flex-col items-center h-full"
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold ">
                  {skill.name}
                </CardTitle>
              </CardHeader>
              <CardContent>{skill.icon}</CardContent>
            </Card>
          ))}
        </div>
      ))}
    </section>
  );
}
