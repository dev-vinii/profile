export function Header() {
  const hash = window.location.hash;

  return (
    <header className="flex-shrink-0 flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 bg-[#00244D]/95 backdrop-blur-sm text-white border-b border-white/10">
      <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">
        Vinicius Luna
      </h1>
      <nav>
        <ul className="flex space-x-4 sm:space-x-6">
          <li>
            <a
              href="#about"
              className={`cursor-pointer pb-1 border-b-2 border-solid transition-all duration-300 hover:border-white hover:opacity-100 text-sm sm:text-base font-medium ${
                hash === "#about" || hash === ""
                  ? "border-white opacity-100"
                  : "border-transparent opacity-70"
              }`}
            >
              Sobre mim
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`cursor-pointer pb-1 border-b-2 border-solid transition-all duration-300 hover:border-white hover:opacity-100 text-sm sm:text-base font-medium ${
                hash === "#skills"
                  ? "border-white opacity-100"
                  : "border-transparent opacity-70"
              }`}
            >
              Habilidades
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
