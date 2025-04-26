import { About } from "@/components/templates/about";
import { Header } from "./components/ui/organisms/header";
function App() {
  return (
    <main className="bg-[#00244D] overflow-y-auto overflow-x-hidden">
      <Header />
      <div>
        <About />
      </div>
    </main>
  );
}

export { App };
