import Link from "next/link";
import Image from "next/image";
import Project from "./Project";

const projects = [
  {
    id: 3,
    name: "ShaperAid",
    href: "https://shaperaid.vercel.app/",
    imageSrc: "/images/shaperaid.jpg",
    imageAlt: "shaperaid",
  },
  {
    id: 1,
    name: "GDD Gaza",
    href: "https://gdd.org/gaza",
    imageSrc: "/images/gdd.jpg",
    imageAlt: "gdd-logo",
  },
  {
    id: 2,
    name: "Sahm",
    href: "https://sahmsolution.com/",
    imageSrc: "/images/sahm.jpg",
    imageAlt: "sahm-logo",
  },

  {
    id: 4,
    name: "Helm Recruitment",
    href: "https://recruitment.helmegypt.org/",
    imageSrc: "/images/helm.jpg",
    imageAlt: "Helm-Recruitment-logo",
  },
  {
    id: 5,
    name: "Entaleq",
    href: "https://platform.entaleqapp.com/",
    imageSrc: "/images/entaleq.jpg",
    imageAlt: "entaleq",
  },
  {
    id: 5,
    name: "HuluX",
    href: "https://hulu-clone-omega-six.vercel.app/",
    imageSrc: "/images/hulu.jpg",
    imageAlt: "hulu",
  },

  // More products...
];

export default function Projects() {
  return (
    <div id="projects" className="py-20 mt-10 bg-$green min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 px-5 sm:px-10">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
