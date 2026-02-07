import { ReactNode } from "react";

export enum Suit {
  Hearts = "♥",
  Diamonds = "♦",
  Spades = "♠",
  Clubs = "♣",
}

export type CardData = {
  id: number;
  suit: Suit;
  title: string;
  content: ReactNode;
  cardContent: ReactNode;
};
