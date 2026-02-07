import cardBack from "@/assets/card/red-card.svg";
import { Suit } from "@/types/card";
import { motion } from "framer-motion";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  flipped?: boolean;
  suit?: Suit;
}> &
  React.HTMLAttributes<HTMLDivElement>;

export function Card({
  flipped,
  suit = Suit.Hearts,
  children,
  className,
  ...props
}: Props) {
  const isRed = React.useCallback(() => {
    return suit === Suit.Hearts || suit === Suit.Diamonds;
  }, [suit]);

  if (!flipped) {
    return (
      <img
        src={cardBack}
        alt="Card back"
        className={`w-full h-full rounded-lg ${className ?? ""}`}
        {...(props as React.HTMLAttributes<HTMLImageElement>)}
      />
    );
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
        <div
          className="absolute w-full h-full"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={cardBack}
            alt="Card back"
            className="w-full h-full rounded-lg"
          />
        </div>

        <div
          className="absolute w-full h-full rounded-lg border border-gray-300 bg-white text-gray-900 p-3 shadow-md"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <span
            className={`absolute top-1.5 left-2 text-xs sm:text-sm lg:text-base font-bold ${isRed() ? "text-red-600" : "text-gray-900"}`}
          >
            {suit}
          </span>
          <div className="h-full flex items-center justify-center">
            {children}
          </div>
          <span
            className={`absolute bottom-1.5 right-2 text-xs sm:text-sm lg:text-base font-bold rotate-180 ${isRed() ? "text-red-600" : "text-gray-900"}`}
          >
            {suit}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
