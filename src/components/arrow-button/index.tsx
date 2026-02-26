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

// Layout: which flex direction and whether label renders before or after icon
const layout: Record<Direction, { flex: string; labelFirst: boolean }> = {
  up: { flex: "flex-col items-center gap-1", labelFirst: false },
  down: { flex: "flex-col items-center gap-1", labelFirst: true },
  left: { flex: "flex-row items-center gap-2", labelFirst: false },
  right: { flex: "flex-row items-center gap-2", labelFirst: true },
};

interface ArrowButtonProps {
  direction: Direction;
  onClick: () => void;
  dark?: boolean;
  label?: string;
}

export function ArrowButton({ direction, onClick, dark, label }: ArrowButtonProps) {
  const color = dark ? "#EDE8DB" : "#1B1916";
  const { flex, labelFirst } = layout[direction];

  const Icon = (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={chevronPaths[direction]} />
    </svg>
  );

  const Label = label ? (
    <span
      style={{
        fontFamily: "'Syne Mono', monospace",
        fontSize: "9px",
        letterSpacing: "0.25em",
        textTransform: "uppercase",
        color,
      }}
    >
      {label}
    </span>
  ) : null;

  return (
    <motion.button
      onClick={onClick}
      animate={pulseAxis[direction]}
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ opacity: 0.9, scale: 1.08 }}
      whileTap={{ scale: 0.9 }}
      className={`fixed ${positionClasses[direction]} p-3 cursor-pointer z-10`}
      style={{ opacity: 0.55 }}
    >
      <div className={`flex ${flex}`}>
        {labelFirst ? (
          <>
            {Label}
            {Icon}
          </>
        ) : (
          <>
            {Icon}
            {Label}
          </>
        )}
      </div>
    </motion.button>
  );
}
