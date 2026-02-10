import { CardData, CardRarity } from "@/types/card";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  card: CardData | null;
  onClose: () => void;
};

const rarityColors: Record<CardRarity, { bg: string; accent: string }> = {
  [CardRarity.Icon]: {
    bg: "from-yellow-500/20 to-yellow-700/10",
    accent: "text-yellow-500",
  },
  [CardRarity.Gold]: {
    bg: "from-yellow-400/20 to-yellow-600/10",
    accent: "text-yellow-400",
  },
  [CardRarity.Silver]: {
    bg: "from-gray-300/20 to-gray-500/10",
    accent: "text-gray-300",
  },
  [CardRarity.Bronze]: {
    bg: "from-orange-400/20 to-orange-600/10",
    accent: "text-orange-400",
  },
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
  const colors = rarityColors[card.rarity];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <motion.div
        className="relative bg-[#1a1a2e] rounded-xl mx-4 max-w-md w-full shadow-2xl border border-white/10 overflow-hidden"
        initial={{ scale: 0.8, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 40 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Header with gradient accent */}
        <div
          className={`bg-gradient-to-r ${colors.bg} px-5 pt-4 pb-3 border-b border-white/10`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-center">
                <span className={`text-2xl font-black ${colors.accent}`}>
                  {card.rating}
                </span>
                <span
                  className={`text-[10px] font-bold ${colors.accent} opacity-80`}
                >
                  {card.position}
                </span>
              </div>
              <span className="text-xl font-bold text-white">{card.title}</span>
            </div>
            <button
              onClick={onClose}
              className="text-white/40 hover:text-white text-lg transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-5 pb-5 pt-4 text-white [&_h2]:text-white [&_h3]:text-white/90 [&_p]:text-white/70">
          {card.content}
        </div>
      </motion.div>
    </motion.div>
  );
}
