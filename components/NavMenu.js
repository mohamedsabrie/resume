import { XIcon } from "@heroicons/react/outline";
import gsap from "gsap";
import { useEffect } from "react";
import { Link } from "react-scroll";

function NavMenu({ setMenuIsOpen }) {
  const handleCloseMenu = () => {
    setMenuIsOpen(false);
    console.log("close menu");
  };
  useEffect(() => {
    const headerLinks = document.querySelectorAll("ul li");
    headerLinks.forEach((link) => {
      link.addEventListener("mouseleave", () => {
        link.classList.add("animate_out");
        setTimeout(() => {
          link.classList.remove("animate_out");
        }, 300);
      });
    });

    gsap.from(".nav_menu", {
      duration: 0.5,
      x: "100%",
      opacity: 0,
    })
    
  }, []);
  return (
    <div className=" nav_menu fixed top-0 left-0 z-50 bg-primary h-screen w-screen">
      <XIcon
        className="h-8 text-white absolute  top-10 right-10 cursor-pointer transition hover:scale-125"
        onClick={handleCloseMenu}
      />
      <ul className="  flex flex-col h-screen items-center justify-center space-y-10 text-3xl ">
        <li>
          <Link
            onClick={handleCloseMenu}
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
        <li>
          <Link
            onClick={handleCloseMenu}
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
        <li>
          <Link
            onClick={handleCloseMenu}
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
        <li>
          <Link
            onClick={handleCloseMenu}
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
    </div>
  );
}

export default NavMenu;
