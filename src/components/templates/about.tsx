import profileImage from "@/assets/vinicius.png";
import { motion } from "framer-motion";

export function About() {
  return (
    <section className="h-full w-full flex items-center justify-center text-white overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full py-8">
          <div className="flex flex-col justify-center space-y-6 lg:space-y-8 text-center lg:text-left">
            <motion.h1
              className="font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Software Developer 🚀
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg lg:text-xl leading-relaxed opacity-90 max-w-2xl mx-auto lg:mx-0"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              Olá! Sou Vinicius, desenvolvedor Full Stack brasileiro de 21 anos
              🇧🇷, apaixonado por esportes 🏈 ⚽️ 🏎️ 🏀 e tecnologia. Atualmente
              trabalho com frontend usando React e Vue, back-end com Node.js e
              tenho experiência com AWS. 
              <br /><br />
              Especializado em desenvolvimento de aplicações modernas e escaláveis,
              com foco em performance e experiência do usuário. Sempre em busca de
              novos desafios e oportunidades para contribuir em projetos inovadores
              que façam a diferença. Acredito que a tecnologia pode transformar vidas
              e estou aqui para fazer parte dessa mudança.
            </motion.p>
          </div>
          <div className="flex justify-center lg:justify-end items-center">
            <motion.div
              className="relative"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl scale-110 animate-pulse"></div>
              
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl hover:bg-white/15 hover:border-white/30 transition-all duration-500 group">
                <div className="absolute top-4 left-4 w-2 h-2 bg-white/40 rounded-full animate-ping"></div>
                <div className="absolute top-6 right-6 w-1 h-1 bg-blue-300/60 rounded-full animate-pulse delay-300"></div>
                <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-purple-300/50 rounded-full animate-pulse delay-700"></div>
                
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={profileImage}
                    alt="Vinicius Luna"
                    className="w-auto h-auto max-w-full max-h-[280px] sm:max-h-[350px] lg:max-h-[420px] object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  Full Stack Dev
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
