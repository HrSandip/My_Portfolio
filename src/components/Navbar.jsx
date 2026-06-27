function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-3xl font-bold text-purple-500">
          SD
        </h1>

        <ul className="flex gap-8 text-gray-300">
          <li>
            <a href="#home" className="hover:text-purple-400">
                Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-purple-400">
                About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-purple-400">
                Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-purple-400">
                Projects
            </a>
           </li>

          <li>
            <a href="#contact" className="hover:text-purple-400">
                Contact
            </a>
          </li>
        </ul>

        <button className="bg-purple-600 px-5 py-2 rounded-xl hover:bg-purple-700">
          Download CV
        </button>

      </div>
    </nav>
  );
}

export default Navbar;