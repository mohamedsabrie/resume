import { useEffect, useRef, useState } from "react";
import { MenuIcon } from "@heroicons/react/outline";
import NavMenu from "./NavMenu";
import Link from "next/link";

function Header({ active }) {
  const headerRef = useRef(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [scrollDown, setScrollDown] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setScrollDown(true);
      } else {
        setScrollDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={headerRef}
      className={`header_container z-40 fixed w-screen   top-0 left-0  border-white/10  ${
        scrollDown ? "border-b bg-black/70" : ""
      }`}
    >
      <div className="px-5 sm:px-10 mx-auto">
        <header className="  flex  py-6 justify-between items-center text-white ">
          {menuIsOpen && (
            <NavMenu active={active} setMenuIsOpen={setMenuIsOpen} />
          )}
          {/* right side */}
          <div className="">
            <Link
              href="/"
              className="font-bold text-2xl cursor-pointer hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-600 transition-colors duration-300"
            >
              Mo.Sabry
            </Link>
          </div>

          {/* left side */}
          <div
            className="menu_icon sm:hidden"
            onClick={() => setMenuIsOpen(true)}
          >
            <MenuIcon className="h-8 text-white cursor-pointer" />
          </div>
          <nav className="hidden sm:inline-flex">
            <ul className="space-x-8 text-lg flex font-semibold items-center">
              <li
                className={`transition-all duration-300 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-600 ${
                  active == 1 ? "bg-white/10 px-4 py-2 rounded-full" : ""
                }`}
              >
                <Link href="/" className="cursor-pointer">
                  About
                </Link>
              </li>
              <li
                className={`transition-all duration-300 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-600 ${
                  active == 2 ? "bg-white/10 px-4 py-2 rounded-full" : ""
                }`}
              >
                <Link href="/projects" className="cursor-pointer">
                  Projects
                </Link>
              </li>
              <li
                className={`transition-all duration-300 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-600 ${
                  active == 3 ? "bg-white/10 px-4 py-2 rounded-full" : ""
                }`}
              >
                <Link href="/skills" className="cursor-pointer">
                  Skills
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Header;
