import { CardData } from "@/types/card";
import { AnimatePresence, motion } from "framer-motion";
import { Card } from "../card";

type Props = {
  cards: CardData[];
  onCardClick: (card: CardData) => void;
};

export function Hand({ cards, onCardClick }: Props) {
  return (
    <div className="flex justify-center items-center gap-2 sm:gap-3 lg:gap-4 h-full px-2 flex-nowrap overflow-hidden">
      <AnimatePresence>
        {cards.map((card) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 120, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.1,
            }}
            className="w-28 h-40 sm:w-36 sm:h-52 lg:w-56 lg:h-[314px] max-h-full shrink-0 cursor-pointer"
            onClick={() => onCardClick(card)}
          >
            <Card
              flipped
              rarity={card.rarity}
              position={card.position}
              rating={card.rating}
              stats={card.stats}
              className="w-full h-full"
            >
              {card.cardContent}
            </Card>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
