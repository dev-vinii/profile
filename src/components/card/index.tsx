import cardBack from "@/assets/card/red-card.svg";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  flipped?: boolean;
  suit?: "♥" | "♦" | "♠" | "♣";
}> &
  React.HTMLAttributes<HTMLDivElement>;

export function Card({
  flipped,
  suit = "♥",
  children,
  className,
  ...props
}: Props) {
  const isRed = suit === "♥" || suit === "♦";

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
        {/* Back */}
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

        {/* Front */}
        <div
          className="absolute w-full h-full rounded-lg border border-gray-300 bg-white text-gray-900 p-3 shadow-md"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <span
            className={`absolute top-1.5 left-2 text-xs sm:text-sm lg:text-base font-bold ${isRed ? "text-red-600" : "text-gray-900"}`}
          >
            {suit}
          </span>
          <div className="h-full flex items-center justify-center">
            {children}
          </div>
          <span
            className={`absolute bottom-1.5 right-2 text-xs sm:text-sm lg:text-base font-bold rotate-180 ${isRed ? "text-red-600" : "text-gray-900"}`}
          >
            {suit}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
