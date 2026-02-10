import { CardData } from "@/types/card";
import { Card } from "../card";

type Props = {
  cards: CardData[];
  onDraw: () => void;
};

export function Deck({ cards, onDraw }: Props) {
  if (cards.length === 0) return null;

  return (
    <div
      className="w-28 h-40 sm:w-36 sm:h-52 lg:w-56 lg:h-[314px] cursor-pointer relative"
      onClick={onDraw}
    >
      {cards.map((_, i) => (
        <div
          key={i}
          className="absolute w-full h-full"
          style={{ top: `${i * 4}px`, left: 0 }}
        >
          <Card />
        </div>
      ))}
    </div>
  );
}
