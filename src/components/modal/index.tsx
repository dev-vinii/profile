import { CardData, Suit } from "@/types/card";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  card: CardData | null;
  onClose: () => void;
};

export function Modal({ card, onClose }: Props) {
  return (
    <AnimatePresence>
      {card && <ModalContent card={card} onClose={onClose} />}
    </AnimatePresence>
  );
}

function ModalContent({
  card,
  onClose,
}: {
  card: CardData;
  onClose: () => void;
}) {
  const isRed = card.suit === Suit.Hearts || card.suit === Suit.Diamonds;

  return (
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
        <div className="px-5 pb-5">{card.content}</div>
        <div className="flex justify-end px-5 pb-3">
          <span
            className={`text-lg font-bold rotate-180 ${isRed ? "text-red-600" : "text-gray-900"}`}
          >
            {card.suit}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
