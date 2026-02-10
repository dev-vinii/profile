import bronzeCard from "@/assets/fut/bronze-card.svg";
import goldCard from "@/assets/fut/gold-card.svg";
import iconCard from "@/assets/fut/icon-card.svg";
import silverCard from "@/assets/fut/silver-card.svg";
import { CardRarity, CardStat } from "@/types/card";
import { motion } from "framer-motion";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  flipped?: boolean;
  rarity?: CardRarity;
  position?: string;
  rating?: number;
  stats?: [CardStat, CardStat, CardStat, CardStat, CardStat, CardStat];
}> &
  React.HTMLAttributes<HTMLDivElement>;

const rarityAssets: Record<CardRarity, string> = {
  [CardRarity.Icon]: iconCard,
  [CardRarity.Gold]: goldCard,
  [CardRarity.Silver]: silverCard,
  [CardRarity.Bronze]: bronzeCard,
};

const rarityTextColor: Record<CardRarity, string> = {
  [CardRarity.Icon]: "text-yellow-900",
  [CardRarity.Gold]: "text-yellow-900",
  [CardRarity.Silver]: "text-gray-800",
  [CardRarity.Bronze]: "text-orange-950",
};

function PackBack({ className }: { className?: string }) {
  return (
    <div
      className={`w-full h-full rounded-xl bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f3460] border-2 border-[#e94560]/30 flex items-center justify-center ${className ?? ""}`}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="text-2xl sm:text-3xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#e94560] to-[#e94560]/50">
          FUT
        </div>
        <div className="w-8 sm:w-10 lg:w-16 h-0.5 bg-gradient-to-r from-transparent via-[#e94560]/50 to-transparent" />
        <div className="text-[8px] sm:text-[10px] lg:text-xs text-[#e94560]/40 tracking-[0.3em] uppercase">
          Pack
        </div>
      </div>
    </div>
  );
}

function StatsGrid({ stats }: { stats: Props["stats"] }) {
  if (!stats) return null;

  const left = stats.slice(0, 3);
  const right = stats.slice(3, 6);

  return (
    <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[75%] z-10">
      <div className="flex justify-between gap-1">
        {/* Left column */}
        <div className="flex flex-col gap-[2px]">
          {left.map((stat) => (
            <div key={stat.label} className="flex items-center gap-1">
              <span className="text-[7px] sm:text-[8px] lg:text-[10px] font-black w-4 sm:w-5 lg:w-6">
                {stat.value}
              </span>
              <span className="text-[6px] sm:text-[7px] lg:text-[9px] font-bold opacity-70">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-[1px] bg-current opacity-20" />

        {/* Right column */}
        <div className="flex flex-col gap-[2px]">
          {right.map((stat) => (
            <div key={stat.label} className="flex items-center gap-1">
              <span className="text-[7px] sm:text-[8px] lg:text-[10px] font-black w-4 sm:w-5 lg:w-6">
                {stat.value}
              </span>
              <span className="text-[6px] sm:text-[7px] lg:text-[9px] font-bold opacity-70">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Card({
  flipped,
  rarity = CardRarity.Gold,
  position,
  rating,
  stats,
  children,
  className,
  ...props
}: Props) {
  const cardBg = rarityAssets[rarity];
  const textColor = rarityTextColor[rarity];

  if (!flipped) {
    return <PackBack className={className} {...props} />;
  }

  return (
    <div
      className={`${className ?? ""}`}
      style={{ perspective: 1000 }}
      {...props}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 180 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
      >
        {/* Back face (pack) */}
        <div
          className="absolute w-full h-full"
          style={{ backfaceVisibility: "hidden" }}
        >
          <PackBack />
        </div>

        {/* Front face (FUT card with SVG template background) */}
        <div
          className={`absolute w-full h-full rounded-xl overflow-hidden ${textColor}`}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* SVG template background */}
          <img
            src={cardBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* Rating & Position overlay */}
          <div className="absolute top-[6%] left-[9%] flex flex-col items-center z-10">
            <span className="text-sm sm:text-base lg:text-2xl font-black leading-none drop-shadow-sm">
              {rating}
            </span>
            <span className="text-[8px] sm:text-[10px] lg:text-xs font-bold leading-none drop-shadow-sm">
              {position}
            </span>
          </div>

          {/* Card content overlay */}
          <div className="relative h-full flex items-center justify-center px-2 pb-[30%] pt-[15%] z-10">
            {children}
          </div>

          {/* Stats at the bottom */}
          <StatsGrid stats={stats} />
        </div>
      </motion.div>
    </div>
  );
}
