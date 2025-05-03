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
    <main className="bg-[#00244D] overflow-y-hidden overflow-x-hidden">
      <Header />
      <div>
        {(hash === "#about" || hash === "") && <About />}
        {hash === "#skills" && <Skills />}
      </div>
    </main>
  );
}

export { App };
