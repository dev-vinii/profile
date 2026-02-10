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
    <main className="bg-fut-field h-screen flex flex-col overflow-hidden shadow-fut-edge">
      <p className="text-white/70 text-xs sm:text-sm text-center pt-4 tracking-wide">
        Meu portfólio no estilo Ultimate Team — abra o pack e descubra minhas
        cartas
      </p>

      <section className="flex-1 min-h-0 overflow-hidden">
        <Hand cards={revealedCards} onCardClick={setSelectedCard} />
      </section>

      <section className="h-3/6">
        <div className="flex flex-col w-full items-center justify-center h-full gap-3 flex-wrap">
          {deckCards.length > 0 ? (
            <>
              <Deck cards={deckCards} onDraw={handleDeckClick} />
              <p className="text-white/60 text-sm mt-2 animate-pulse">
                Clique no pack para revelar
              </p>
            </>
          ) : (
            <button
              onClick={() => setRevealedCards([])}
              className="text-white/70 hover:text-white border border-white/30 hover:border-white/60 px-4 py-2 rounded-lg text-sm transition-colors"
            >
              Abrir novo pack
            </button>
          )}
        </div>
      </section>

      <Modal card={selectedCard} onClose={() => setSelectedCard(null)} />
    </main>
  );
}
