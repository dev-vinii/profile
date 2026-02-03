import profilePic from "@/assets/vinicius.png";
import { CardData } from "@/types/card";
import { AnimatePresence, motion } from "framer-motion";
import { Card } from "../card";

type Props = {
  cards: CardData[];
  onCardClick: (card: CardData) => void;
};

const cardContent: Record<string, React.ReactNode> = {
  About: (
    <div className="flex flex-col items-center justify-center h-full gap-1 lg:gap-2 text-center">
      <img
        src={profilePic}
        alt="Vinicius Luna"
        className="w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20 rounded-full"
      />
      <h2 className="text-xs sm:text-sm lg:text-lg font-bold">Vinicius Luna</h2>
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
  Skills: (
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
  Experience: (
    <div className="flex flex-col items-center justify-center h-full gap-1 lg:gap-2 text-center">
      <h2 className="text-xs sm:text-sm lg:text-lg font-bold">Experience</h2>
      <p className="text-[8px] sm:text-[10px] lg:text-xs text-gray-600">
        Aplicações escaláveis, APIs performáticas, microserviços e soluções
        orientadas a resultado de negócio.
      </p>
    </div>
  ),
  Education: (
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
};

export function Hand({ cards, onCardClick }: Props) {
  return (
    <div className="flex justify-center items-center gap-2 sm:gap-3 lg:gap-4 h-full px-2">
      <AnimatePresence>
        {cards.map((card) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 120, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.1,
            }}
            className="w-28 h-40 sm:w-36 sm:h-52 lg:w-56 lg:h-[314px]"
          >
            <Card
              flipped
              suit={card.suit}
              className="w-full h-full cursor-pointer"
              onClick={() => onCardClick(card)}
            >
              {cardContent[card.title]}
            </Card>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
