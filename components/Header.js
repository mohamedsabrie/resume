import { Link } from "react-scroll";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MenuIcon } from "@heroicons/react/outline";
import NavMenu from "./NavMenu";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Header() {
  const headerRef = useRef(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (this.scrollY > 100) {
        headerRef?.current?.classList.add("bg-primary");
      } else {
        headerRef?.current?.classList.remove("bg-primary");
      }
    });
    const showAnim = gsap
      .from(".header_container", {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });

    const headerLinks = document.querySelectorAll("ul li");
    headerLinks.forEach((link) => {
      link.addEventListener("mouseleave", () => {
        link.classList.add("animate_out");
        setTimeout(() => {
          link.classList.remove("animate_out");
        }, 300);
      });
    });
  }, []);

  return (
    <div
      ref={headerRef}
      className="header_container z-40 fixed w-screen  top-0 left-0  transition-all "
    >
      <div className="container mx-auto">
        <header className="  flex p-6 justify-between items-center text-white ">
          {menuIsOpen && <NavMenu setMenuIsOpen={setMenuIsOpen} />}
          {/* right side */}
          <div className="header_logo flex items-center space-x-5">
            <Image
              className="rounded-full"
              src="/profile-pic.webp"
              alt=""
              width={32}
              height={32}
            />
            <h2 className="font-bold text-2xl">Mo.Sabry</h2>
          </div>

          {/* left side */}
          <div
            className="menu_icon sm:hidden"
            onClick={() => setMenuIsOpen(true)}
          >
            <MenuIcon className="h-8 text-white cursor-pointer" />
          </div>
          <nav className="hidden sm:inline-flex">
            <ul className="space-x-8 text-lg flex ">
              <li>
                <Link
                  to="home"
                  className="headerLink"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  className="headerLink"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  className="headerLink"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  className="headerLink"
                  spy={true}
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
