import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";
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
  const isDark = page.bg.includes("200");

  const navigate = useCallback((dir: Direction, target: string) => {
    setDirection(dir);
    setPageId(target);
  }, []);

  return (
    <main className="w-screen h-screen overflow-auto relative bg-gray-950">
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
          onClick={() => navigate("up", neighbors.up!)}
        />
      )}
      {neighbors.down && (
        <ArrowButton
          direction="down"
          dark={isDark}
          onClick={() => navigate("down", neighbors.down!)}
        />
      )}
      {neighbors.left && (
        <ArrowButton
          direction="left"
          dark={isDark}
          onClick={() => navigate("left", neighbors.left!)}
        />
      )}
      {neighbors.right && (
        <ArrowButton
          direction="right"
          dark={isDark}
          onClick={() => navigate("right", neighbors.right!)}
        />
      )}
    </main>
  );
}
