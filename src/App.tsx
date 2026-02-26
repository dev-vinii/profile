import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { ArrowButton } from "./components/arrow-button";
import { LanguageSwitcher } from "./components/language-switcher";
import { Direction, pages } from "./pages";

const slideVariants = {
  enter: (dir: Direction) => ({
    x: dir === "right" ? "100%" : dir === "left" ? "-100%" : 0,
    y: dir === "down" ? "100%" : dir === "up" ? "-100%" : 0,
  }),
  center: { x: 0, y: 0 },
  exit: (dir: Direction) => ({
    x: dir === "right" ? "-100%" : dir === "left" ? "100%" : 0,
    y: dir === "down" ? "-100%" : dir === "up" ? "100%" : 0,
  }),
};

export function App() {
  const [pageId, setPageId] = useState("home");
  const [direction, setDirection] = useState<Direction>("right");

  const page = pages[pageId];
  const PageComponent = page.component;
  const { neighbors } = page;
  const isDark = page.isDark;

  const navigate = useCallback((dir: Direction, target: string) => {
    setDirection(dir);
    setPageId(target);
  }, []);

  useEffect(() => {
    const keyToDirection: Record<string, Direction> = {
      ArrowUp: "up",
      ArrowDown: "down",
      ArrowLeft: "left",
      ArrowRight: "right",
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const dir = keyToDirection[e.key];
      if (!dir) return;
      const target = pages[pageId].neighbors[dir];
      if (target) {
        e.preventDefault();
        navigate(dir, target);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [pageId, navigate]);

  return (
    <main className="w-screen h-[100dvh] overflow-auto relative bg-gray-950">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={pageId}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className={`absolute inset-0 flex items-center justify-center ${page.bg} ${page.textColor}`}
        >
          <PageComponent />
        </motion.div>
      </AnimatePresence>

      <LanguageSwitcher dark={isDark} />

      {neighbors.up && (
        <ArrowButton
          direction="up"
          dark={isDark}
          label={neighbors.up}
          onClick={() => navigate("up", neighbors.up!)}
        />
      )}
      {neighbors.down && (
        <ArrowButton
          direction="down"
          dark={isDark}
          label={neighbors.down}
          onClick={() => navigate("down", neighbors.down!)}
        />
      )}
      {neighbors.left && (
        <ArrowButton
          direction="left"
          dark={isDark}
          label={neighbors.left}
          onClick={() => navigate("left", neighbors.left!)}
        />
      )}
      {neighbors.right && (
        <ArrowButton
          direction="right"
          dark={isDark}
          label={neighbors.right}
          onClick={() => navigate("right", neighbors.right!)}
        />
      )}
    </main>
  );
}
