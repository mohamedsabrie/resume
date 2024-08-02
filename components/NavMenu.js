import { XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

function NavMenu({ setMenuIsOpen, active }) {
  const router = useRouter();
  const handleCloseMenu = () => {
    setMenuIsOpen(false);
    console.log("close menu");
  };

  return (
    <div className=" nav_menu fixed top-0 left-0 z-50 bg-black h-screen w-screen animate-fade">
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
            onClick={() => router.push("/skills")}
          >
            Skills
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavMenu;
