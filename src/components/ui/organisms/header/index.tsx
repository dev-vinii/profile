export function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-[#00244D] text-white">
      <h1 className="text-2xl font-bold max-md:text-xl">Vinicius Luna</h1>
      <nav>
        <ul className="flex space-x-4 max-md:text-xs">
          <li>
            <a
              href="#about"
              className="cursor-pointer pb-1 border-b-2 border-solid border-transparent transition-all duration-300 hover:border-white"
            >
              Sobre mim
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="opacity-50 cursor-pointer pb-1 border-b-2 border-solid border-transparent transition-all duration-300 hover:border-white"
            >
              Habilidades
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="opacity-50 cursor-pointer pb-1 border-b-2 border-solid border-transparent transition-all duration-300 hover:border-white"
            >
              Experiência
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
