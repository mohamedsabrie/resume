import Link from "next/link";
import Image from "next/image";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";

const projects = [
  {
    id: 907,
    name: "Entaleq",
    href: "https://platform.entaleqapp.com/",
    imageSrc: "/svgs/entaleq-logo.svg",
    imageAlt: "entaleq-logo",
  },
  {
    id: 908,
    name: "Lath",
    href: "https://lath.me/",
    imageSrc: "/svgs/lath-logo.svg",
    imageAlt: "lath-logo",
  },
  {
    id: 589,
    name: "Khatwa",
    href: "https://platform.khatwacareers.com/",
    imageSrc: "/images/khatwa-logo.png",
    imageAlt: "khatwa-logo",
  },
  {
    id: 123,
    name: "MAD DAWGS ",
    href: "https://maddawgs-nft.vercel.app/",
    imageSrc: "/images/mad-dawgs-logo.png",
    imageAlt: "mad_dawgs-logo",
  },
  {
    id: 0,
    name: "AKOIN website",
    href: "https://www.akoin.io/",
    imageSrc: "/images/akoin.jpg",
    imageAlt: "akoin-logo",
  },

  // More products...
];

export default function Projects() {
  return (
    <div id="projects" className="py-20 mt-10 bg-$green">
      <Slide bottom>
      <div className="text-3xl font-bold md:text-5xl text-center mb-5 ">
        <span className=" border-b-2 border-$black2">Projects</span>
      </div>
      </Slide>
      <Zoom left cascade>
        <div className="flex items-center justify-around  max-w-6xl mx-auto flex-wrap">
          {projects.map(({ imageSrc, name, id, href, imageAlt }) => (
            <div key={id}>
              <Link href={href}>
                <a
                  target="_blank"
                  className="skewElem shadow-2xl flex flex-col items-center justify-center border-2 bg-white border-$black2 my-5 p-5  transition transform duration-500 ease-out  cursor-pointer rounded-lg "
                >
                  <Image
                    className="h-20 w-20 p-2 border border-gray-300 rounded-lg object-contain  "
                    src={imageSrc}
                    height={200}
                    width={200}
                    alt={imageAlt}
                  />
                  <p className="mt-3 text-xl">{name}</p>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </Zoom>
    </div>
  );
}
