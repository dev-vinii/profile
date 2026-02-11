import { motion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

const positionClasses: Record<Direction, string> = {
  up: "top-4 inset-x-0 mx-auto w-fit",
  down: "bottom-4 inset-x-0 mx-auto w-fit",
  left: "left-4 top-[50dvh] -translate-y-1/2",
  right: "right-4 top-[50dvh] -translate-y-1/2",
};

const chevronPaths: Record<Direction, string> = {
  up: "M6 15L12 9L18 15",
  down: "M6 9L12 15L18 9",
  left: "M15 6L9 12L15 18",
  right: "M9 6L15 12L9 18",
};

const pulseAxis: Record<Direction, { x?: number[]; y?: number[] }> = {
  up: { y: [0, -4, 0] },
  down: { y: [0, 4, 0] },
  left: { x: [0, -4, 0] },
  right: { x: [0, 4, 0] },
};

interface ArrowButtonProps {
  direction: Direction;
  onClick: () => void;
  dark?: boolean;
}

export function ArrowButton({ direction, onClick, dark }: ArrowButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      animate={pulseAxis[direction]}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className={`fixed ${positionClasses[direction]} p-4 hover:scale-125 active:scale-125 transition-transform cursor-pointer z-10 ${dark ? "text-gray-900" : "text-white"}`}
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-80"
      >
        <path d={chevronPaths[direction]} />
      </svg>
    </motion.button>
  );
}
