import { ReactNode } from "react";

export enum CardRarity {
  Gold = "gold",
  Silver = "silver",
  Bronze = "bronze",
  Icon = "icon",
}

export type CardStat = {
  label: string;
  value: number;
};

export type CardData = {
  id: number;
  rarity: CardRarity;
  position: string;
  rating: number;
  title: string;
  stats: [CardStat, CardStat, CardStat, CardStat, CardStat, CardStat];
  content: ReactNode;
  cardContent: ReactNode;
};
