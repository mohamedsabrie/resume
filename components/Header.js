import { useRef, useState } from "react";
import { MenuIcon } from "@heroicons/react/outline";
import NavMenu from "./NavMenu";
import Link from "next/link";

function Header({active}) {
  const headerRef = useRef(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  

  return (
    <div
      ref={headerRef}
      className="header_container z-40 fixed w-screen bg-$black top-0 left-0  "
    >
      <div className="px-5 sm:px-10 mx-auto">
        <header className="  flex  py-6 justify-between items-center text-white ">
          {menuIsOpen && <NavMenu active={active} setMenuIsOpen={setMenuIsOpen} />}
          {/* right side */}
          <div className="">
            <Link href="/" className="font-bold text-2xl cursor-pointer">
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
            <ul className="space-x-8 text-lg flex font-semibold">
              <li className={` ${active == 1  && "border px-2"} `}>
                <Link href="/" className="cursor-pointer">
                  About
                </Link>
              </li>
              <li className={` ${active == 2  && "border px-2"} `}>
                <Link href="/projects" className="cursor-pointer">
                  Projects
                </Link>
              </li>
              <li className={` ${active == 3  && "border px-2"} `}>
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
