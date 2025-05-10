import Project from "./Project";

const projects = [
  {
    id: 8,
    name: "iKnowly",
    href: "https://www.iknowly.com/",
    imageSrc: "/images/iknowly.webp",
    imageAlt: "iKnowly",
  },
  {
    id: 9,
    name: "BETA PROPERTY ",
    href: "https://beta-property.vercel.app/",
    imageSrc: "/images/beta-property.webp",
    imageAlt: "iKnowly",
  },
  {
    id: 7,
    name: "Yam",
    href: "https://yamcyber.sa/",
    imageSrc: "/images/yam.jpg",
    imageAlt: "yam",
  },
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
    href: "https://dashboard.gdd.org/ar",
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
    id: 6,
    name: "Trailerflix",

    href: "https://trailerflix-app.vercel.app/",
    imageSrc: "/images/Trailerflix.jpg",
    imageAlt: "trailerflix-app",
  },

  // More products...
];

export default function Projects() {
  return (
    <div
      id="projects"
      className="bg-[url('/public/images/new-background.jpg')] bg-cover bg-center relative overflow-hidden py-20 mt-10  min-h-screen"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 px-5 sm:px-10 max-w-7xl mx-auto">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
