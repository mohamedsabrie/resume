import Link from "next/link";
import Image from "next/image";

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
  {
    id: 3,
    name: "ShaperAid",
    href: "https://shaperaid.vercel.app/",
  },
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
      <div className="text-3xl font-bold md:text-5xl text-center mb-5 ">
        <span className=" border-b-2 border-$black2">Projects</span>
      </div>
      <div className="flex items-center gap-x-2 justify-around  max-w-6xl mx-auto flex-wrap">
        {projects.map(({ imageSrc, name, id, href, imageAlt }) => (
          <div key={id}>
            <Link legacyBehavior href={href}>
              <a
                target="_blank"
                className="skewElem shadow-2xl flex flex-col items-center justify-center border-2 p-5 bg-white border-$black2 my-5   transition transform duration-500 ease-out  cursor-pointer rounded-lg "
              >
                {imageSrc ? (
                  <Image
                    className="h-[200px]  rounded-lg object-contain  "
                    src={imageSrc}
                    height={200}
                    width={200}
                    alt={imageAlt}
                  />
                ) : <p className="h-[200px] w-[200px] flex items-center justify-center text-3xl font-semibold">{name}</p>}

              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
