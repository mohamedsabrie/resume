import { Link } from "react-scroll";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MenuIcon } from "@heroicons/react/outline";
import NavMenu from "./NavMenu";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/dist/client/router";

function Header({active}) {
  const headerRef = useRef(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const router=  useRouter();
  gsap.registerPlugin(ScrollTrigger);

  

  return (
    <div
      ref={headerRef}
      className="header_container z-40 fixed w-screen bg-$black top-0 left-0  "
    >
      <div className="container mx-auto">
        <header className="  flex p-6 justify-between items-center text-white ">
          {menuIsOpen && <NavMenu active={active} setMenuIsOpen={setMenuIsOpen} />}
          {/* right side */}
          <div className="">
            <h2 className="font-bold text-2xl cursor-pointer" onClick={() => router.push("/")}>Mo.Sabry</h2>
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
                <a className="cursor-pointer " onClick={() => router.push("/") }>About</a>
              </li>
              <li className={` ${active == 2  && "border px-2"} `}>
                <a className="cursor-pointer" onClick={() => router.push("/projects") }>Projects</a>
              </li>
           
              
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Header;
