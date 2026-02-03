import React from "react";
import { Deck } from "./components/deck";
import { Hand } from "./components/hand";
import { Modal } from "./components/modal";
import { cards } from "./data/cards";
import { CardData } from "./types/card";

export function App() {
  const [revealedCards, setRevealedCards] = React.useState<CardData[]>([]);
  const [selectedCard, setSelectedCard] = React.useState<CardData | null>(null);

  const deckCards = cards.filter(
    (c) => !revealedCards.some((r) => r.id === c.id),
  );

  function handleDeckClick() {
    if (deckCards.length === 0) return;
    const nextCard = deckCards[0];
    setRevealedCards((prev) => [...prev, nextCard]);
  }

  return (
    <main className="bg-felt-table h-screen flex flex-col overflow-hidden shadow-table-edge">
      <section className="flex-1">
        <Hand cards={revealedCards} onCardClick={setSelectedCard} />
      </section>
      <section className="h-3/6">
        <div className="flex w-full justify-center h-full">
          {deckCards.length > 0 && (
            <Deck cards={deckCards} onDraw={handleDeckClick} />
          )}
        </div>
      </section>
      <Modal card={selectedCard} onClose={() => setSelectedCard(null)} />
    </main>
  );
}
