import { Link } from "react-scroll";
import { useEffect, useRef } from "react";
import Image from 'next/image'
import {MenuIcon} from '@heroicons/react/outline'
import gsap from 'gsap'
import styled from "styled-components";

function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (this.scrollY > 100) {
        headerRef.current.classList.add("bg-primary");
      } else {
        headerRef.current.classList.remove("bg-primary");
      
      }
    });
  
  }, []);

  return (
    <div ref={headerRef} className=" z-50 fixed w-screen  top-0 left-0  transition-all p-6  ">
      <div className="container mx-auto">
        <header className="  flex justify-between items-center text-white ">
          {/* right side */}
          <div className="header_logo flex items-center space-x-5">
            <Image className="rounded-full"  src="/profile-pic.webp" alt=""  width={32} height={32}/>
            <h2 className="font-bold text-2xl">Mo.Sabry</h2>
          </div>
          

          {/* left side */}
          <div className="sm:hidden">
            <MenuIcon  className="h-8 text-white " /> 
          </div>
          <nav className="hidden sm:inline-flex">
            <ul className="space-x-8 text-lg flex ">
              <li>
                <Link
                  to="home"
                  className="headerLink"
                  spy={true}
                  offset={-63}
                  smooth={true}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li >
                <Link
                  to="about"
                  className="headerLink"
                  spy={true}
                  offset={-63}
                  smooth={true}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li >
                <Link
                  to="projects"
                  className="headerLink"
                  spy={true}
                  offset={-63}
                  smooth={true}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
              <li >
                <Link
                  to="contact"
                  className="headerLink"
                  spy={true}
                  offset={-63}
                  smooth={true}
                  duration={500}
                >
                  Contact
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

