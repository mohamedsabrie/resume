import Link from "next/link";
import Image from "next/image";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";

const projects = [
  {
    id: 1,
    name: "GDD Gaza",
    href: "https://gdd.org/gaza",
    imageSrc: "/images/gdd.svg",
    imageAlt: "gdd-logo",
  },
  {
    id: 2,
    name: "Sahm",
    href: "https://sahmsolution.com/",
    imageSrc: "/images/sahm-logo.svg",
    imageAlt: "entaleq-logo",
  },
  // {
  //   id: 3,
  //   name: "Lath",
  //   href: "https://lath.com.sa/",
  //   imageSrc: "/svgs/lath-logo.svg",
  //   imageAlt: "lath-logo",
  // },
  {
    id: 4,
    name: "Helm Recruitment",
    href: "https://recruitment.helmegypt.org/",
    imageSrc: "/images/helm.png",
    imageAlt: "khatwa-logo",
  },
  {
    id: 5,
    name: "Entaleq",
    href: "https://platform.entaleqapp.com/",
    imageSrc: "/svgs/entaleq-logo.svg",
    imageAlt: "entaleq-logo",
  },
  {
    id: 6,
    name: "AKOIN",
    href: "https://www.akoin.io/",
    imageSrc: "/images/akoin.jpg",
    imageAlt: "akoin-logo",
  },

  // More products...
];

export default function Projects() {
  return (
    <div id="projects" className="py-20 mt-10 bg-$green min-h-screen">
      <Slide bottom>
        <div className="text-3xl font-bold md:text-5xl text-center mb-5 ">
          <span className=" border-b-2 border-$black2">Projects</span>
        </div>
      </Slide>
      <Zoom left cascade>
        <div className="flex items-center justify-around  max-w-6xl mx-auto flex-wrap">
          {projects.map(({ imageSrc, name, id, href, imageAlt }) => (
            <div key={id}>
              <Link legacyBehavior href={href}>
                <a
                  target="_blank"
                  className="skewElem shadow-2xl flex flex-col items-center justify-center border-2 bg-white border-$black2 my-5 p-5  transition transform duration-500 ease-out  cursor-pointer rounded-lg "
                >
                  <Image
                    className="h-[200px] p-2 border border-gray-300 rounded-lg object-contain  "
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
