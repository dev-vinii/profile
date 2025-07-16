import { About } from "@/components/templates/about";
import { useEffect, useState } from "react";
import { Header } from "./components/templates/organisms/header";
import { Skills } from "./components/templates/skills";

function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <main className="bg-[#00244D] h-screen flex flex-col overflow-hidden">
      <Header />
      <div className="flex-1 transition-all duration-500 ease-in-out overflow-hidden">
        {(hash === "#about" || hash === "") && <About />}
        {hash === "#skills" && <Skills />}
      </div>
    </main>
  );
}

export { App };
