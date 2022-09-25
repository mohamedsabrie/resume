import { XIcon } from "@heroicons/react/outline";
import gsap from "gsap";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Link } from "react-scroll";

function NavMenu({ setMenuIsOpen, active }) {
  const router = useRouter();
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
    });
  }, []);
  return (
    <div className=" nav_menu fixed top-0 left-0 z-50 bg-primary h-screen w-screen">
      <XIcon
        className="h-8 text-white absolute  top-10 right-10 cursor-pointer transition hover:scale-125"
        onClick={handleCloseMenu}
      />
      <ul className="  flex flex-col h-screen items-center justify-center space-y-10 text-3xl ">
        <li className={` ${active == 1 && "border px-2"} `}>
          <a className="cursor-pointer " onClick={() => router.push("/")}>
            About
          </a>
        </li>
        <li className={` ${active == 2 && "border px-2"} `}>
          <a
            className="cursor-pointer"
            onClick={() => router.push("/projects")}
          >
            Projects
          </a>
        </li>
        <li className={` ${active == 3 && "border px-2"} `}>
          <a
            className="cursor-pointer"
            onClick={() => router.push("/experience")}
          >
            Experience
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavMenu;
