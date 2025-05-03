export function Header() {
  const hash = window.location.hash;

  return (
    <header className="flex justify-between items-center p-4 bg-[#00244D] text-white sticky top-0 z-50">
      <h1 className="text-2xl font-bold max-md:text-xl">Vinicius Luna</h1>
      <nav>
        <ul className="flex space-x-4 max-md:text-xs">
          <li>
            <a
              href="#about"
              className={`cursor-pointer pb-1 border-b-2 border-solid transition-all duration-300 hover:border-white ${
                hash === "#about" || hash === ""
                  ? "border-white opacity-100"
                  : "border-transparent opacity-50"
              }`}
            >
              Sobre mim
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`cursor-pointer pb-1 border-b-2 border-solid transition-all duration-300 hover:border-white ${
                hash === "#skills"
                  ? "border-white opacity-100"
                  : "border-transparent opacity-50"
              }`}
            >
              Habilidades
            </a>
          </li>
          {/* <li>
            <a
              href="#experience"
              className={`cursor-pointer pb-1 border-b-2 border-solid transition-all duration-300 hover:border-white ${
                hash === "#experience"
                  ? "border-white opacity-100"
                  : "border-transparent opacity-50"
              }`}
            >
              Experiência
            </a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
