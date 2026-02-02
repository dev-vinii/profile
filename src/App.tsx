import { Deck } from "./components/ui/deck";

export function App() {
  return (
    <main className="bg-felt h-screen flex flex-col overflow-hidden">
      <section className="h-full"></section>
      <section className="h-3/6">
        <div className="flex w-full justify-center gap-9 h-full">
          <Deck />
          <Deck />
          <Deck />
        </div>
      </section>
    </main>
  );
}
