import profilePic from "@/assets/vinicius.png";
import { CardData, Suit } from "@/types/card";

export const cards: CardData[] = [
  {
    id: 1,
    suit: Suit.Spades,
    title: "About",
    content: (
      <div className="space-y-3">
        <h2 className="text-xl font-bold">Sobre mim</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          Desenvolvedor Full Stack com experiência na construção de aplicações
          escaláveis e orientadas a resultado de negócio. Atuo de ponta a ponta
          no desenvolvimento de software, criando soluções que geram ganho
          financeiro, aumento de eficiência e otimização de tempo para clientes
          e equipes.
        </p>
      </div>
    ),
    cardContent: (
      <div className="flex flex-col items-center justify-center h-full gap-1 lg:gap-2 text-center">
        <img
          src={profilePic}
          alt="Vinicius Luna"
          className="w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20 rounded-full"
        />
        <h2 className="text-xs sm:text-sm lg:text-lg font-bold">
          Vinicius Luna
        </h2>
        <p className="text-[10px] sm:text-xs lg:text-sm text-gray-500">
          Full Stack Developer
        </p>
        <div className="flex gap-2 mt-1">
          <a
            href="https://github.com/dev-vinii"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 underline text-xs lg:text-sm"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/viniciusluna17/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 underline text-xs lg:text-sm"
          >
            LinkedIn
          </a>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    suit: Suit.Diamonds,
    title: "Skills",
    content: (
      <div className="space-y-3">
        <h2 className="text-xl font-bold">Skills</h2>
        <div className="space-y-2">
          <div>
            <h3 className="text-sm font-semibold text-gray-800">Front-end</h3>
            <p className="text-sm text-gray-600">
              React, Vue, Next.js, Nuxt, TypeScript, JavaScript
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800">Back-end</h3>
            <p className="text-sm text-gray-600">Node.js, NestJS</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800">Messaging</h3>
            <p className="text-sm text-gray-600">Kafka, RabbitMQ</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              Cloud & DevOps
            </h3>
            <p className="text-sm text-gray-600">AWS (EC2, S3, SES), CI/CD</p>
          </div>
        </div>
      </div>
    ),
    cardContent: (
      <div className="flex flex-col items-center justify-center h-full gap-1 lg:gap-2 text-center">
        <h2 className="text-xs sm:text-sm lg:text-lg font-bold">Skills</h2>
        <div className="flex flex-wrap justify-center gap-1">
          {[
            "React",
            "Vue",
            "Next.js",
            "TypeScript",
            "Node.js",
            "NestJS",
            "Kafka",
            "AWS",
          ].map((skill) => (
            <span
              key={skill}
              className="text-[8px] sm:text-[10px] lg:text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 3,
    suit: Suit.Clubs,
    title: "Experience",
    content: (
      <div className="space-y-3">
        <h2 className="text-xl font-bold">Experiência</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          Aplicações escaláveis, APIs performáticas, microserviços e soluções
          orientadas a resultado de negócio. Experiência com otimização de
          aplicações front-end, comunicação assíncrona e event-driven utilizando
          Kafka e RabbitMQ, e arquiteturas baseadas em microserviços.
        </p>
      </div>
    ),
    cardContent: (
      <div className="flex flex-col items-center justify-center h-full gap-1 lg:gap-2 text-center">
        <h2 className="text-xs sm:text-sm lg:text-lg font-bold">Experience</h2>
        <p className="text-[8px] sm:text-[10px] lg:text-xs text-gray-600">
          Aplicações escaláveis, APIs performáticas, microserviços e soluções
          orientadas a resultado de negócio.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    suit: Suit.Spades,
    title: "Education",
    content: (
      <div className="space-y-3">
        <h2 className="text-xl font-bold">Formação</h2>
        <div className="space-y-2">
          <div>
            <h3 className="text-sm font-semibold text-gray-800">Graduação</h3>
            <p className="text-sm text-gray-600">
              Análise e Desenvolvimento de Sistemas
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              Pós-graduação
            </h3>
            <p className="text-sm text-gray-600">MBA Engenharia de Software</p>
          </div>
        </div>
      </div>
    ),
    cardContent: (
      <div className="flex flex-col items-center justify-center h-full gap-1 lg:gap-2 text-center">
        <h2 className="text-xs sm:text-sm lg:text-lg font-bold">Education</h2>
        <p className="text-[8px] sm:text-[10px] lg:text-xs text-gray-600">
          Análise e Desenvolvimento de Sistemas
        </p>
        <p className="text-[8px] sm:text-[10px] lg:text-xs text-gray-600">
          MBA Engenharia de Software
        </p>
      </div>
    ),
  },
];
