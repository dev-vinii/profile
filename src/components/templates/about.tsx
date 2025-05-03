import profileImage from "@/assets/vinicius.png";
import { motion } from "framer-motion";

export function About() {
  return (
    <section className="flex flex-col w-screen h-[calc(100vh-4rem)] max-md:h-[calc(100vh-3.75rem)] text-white">
      <div className="h-full">
        <div className="flex items-center h-full justify-center gap-4 max-md:flex-col">
          <div className="flex flex-1 flex-col items-center gap-5 max-md:justify-center px-1">
            <motion.h1
              className="font-bold max-md:text-base whitespace-nowrap text-center text-2xl"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Software Developer 🚀
            </motion.h1>
            <motion.p
              className="text-xl leading-relaxed max-md:text-sm max-md:text-center max-w-2xl"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              Olá! Sou Vinicius, desenvolvedor brasileiro de 21 anos 🇧🇷,
              apaixonado por esportes 🏈 ⚽️ 🏎️ 🏀 e tecnologia. Atualmente
              trabalho com frontend usando React e Vue. Fiz também alguns
              projetos de back-end com Node.js, buscando entender o
              desenvolvimento completo de software. Gosto de criar soluções
              escaláveis, evoluindo sempre com práticas de clean code e boas
              arquiteturas.
            </motion.p>
          </div>
          <div className="flex-1 flex justify-center w-full self-end">
            <img
              src={profileImage}
              alt="Vinicius Luna"
              className="self-end h-[553px] max-md:h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
