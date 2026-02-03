import { CardData } from "@/types/card";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  card: CardData | null;
  onClose: () => void;
};

const modalContent: Record<string, React.ReactNode> = {
  About: (
    <div className="space-y-3">
      <h2 className="text-xl font-bold">Sobre mim</h2>
      <p className="text-sm text-gray-700 leading-relaxed">
        Desenvolvedor Full Stack com experiência na construção de aplicações
        escaláveis e orientadas a resultado de negócio. Atuo de ponta a ponta no
        desenvolvimento de software, criando soluções que geram ganho
        financeiro, aumento de eficiência e otimização de tempo para clientes e
        equipes.
      </p>
    </div>
  ),
  Skills: (
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
  Experience: (
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
  Education: (
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
          <h3 className="text-sm font-semibold text-gray-800">Pós-graduação</h3>
          <p className="text-sm text-gray-600">MBA Engenharia de Software</p>
        </div>
      </div>
    </div>
  ),
};

export function Modal({ card, onClose }: Props) {
  const isRed = card?.suit === "♥" || card?.suit === "♦";

  return (
    <AnimatePresence>
      {card && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-black/60" onClick={onClose} />
          <motion.div
            className="relative bg-white rounded-xl mx-4 max-w-md w-full shadow-2xl border border-gray-300 overflow-hidden"
            initial={{ scale: 0.8, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 40 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Card suit header */}
            <div className="flex items-center justify-between px-5 pt-4 pb-2">
              <span
                className={`text-2xl font-bold ${isRed ? "text-red-600" : "text-gray-900"}`}
              >
                {card.suit} {card.title}
              </span>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-700 text-lg"
              >
                ✕
              </button>
            </div>
            <div className="px-5 pb-5">{modalContent[card.title]}</div>
            {/* Bottom suit */}
            <div className="flex justify-end px-5 pb-3">
              <span
                className={`text-lg font-bold rotate-180 ${isRed ? "text-red-600" : "text-gray-900"}`}
              >
                {card.suit}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
