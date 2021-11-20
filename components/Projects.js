import Link from "next/link";
import Image from "next/image";
const projects = [
  {
    id: 1,
    name: "Hulu Clone",
    href: "https://hulu-clone-omega-six.vercel.app/",
    imageSrc: "/images/hulu-clone.png",
    imageAlt: "hulu image",
  },
  {
    id: 2,
    name: "Airbnb Clone",
    href: "https://airbnb-clone-silk.vercel.app/",
    imageSrc: "/images/airbnb-clone.png",
    imageAlt: "airbnb image",
  },
  {
    id: 3,
    name: "Amazon Clone",
    href: "https://vercel.com/mohamedsabrie/amazon-clone",
    imageSrc: "/images/amazon-clone.jpg",
    imageAlt: "Anmazon image",
  },
  {
    id: 4,
    name: "Google Docs Clone",
    href: "https://google-docs-clone-g4kictox6-mohamedsabrie.vercel.app/",
    imageSrc: "/images/google-docs-clone.png",
    imageAlt: "google-docs image",
  },
  {
    id: 5,
    name: "Google Clone",
    href: "https://google-clone-kappa-gilt.vercel.app/",
    imageSrc: "/images/google-clone.png",
    imageAlt: "google image",
  },
  {
    id: 6,
    name: "Facebook Clone",
    href: "https://facebook-clone-iota.vercel.app/",
    imageSrc: "/images/facebook-clone.png",
    imageAlt: "facebook image",
  },
  {
    id: 7,
    name: "Whatsapp Clone",
    href: "https://whatsapp-2-mohamedsabrie.vercel.app/",
    imageSrc: "/images/whatsapp-clone.png",
    imageAlt: "Whatsapp image",
  },
  {
    id: 8,
    name: "Slack Clone",
    href: "https://slack-clone-46dc4.web.app/",
    imageSrc: "/images/slack-clone.png",
    imageAlt: "Slack image",
  },
  // More products...
];

export default function Projects() {
  return (
    <div id="projects" className="py-20 bg-white">
      <div className="text-4xl text-center mb-5 ">
        <span className="pb-3 border-b-2 border-gray-400">Projects</span>
      </div>
      <div className="flex items-center justify-around  max-w-6xl mx-auto flex-wrap">
        {projects.map(({ imageSrc, name, id, href }) => (
          <Link href={href} key={id}>
            <a
              target="_blank"
              className="flex flex-col items-center justify-center border border-gray-300 my-5 p-5 shadow- transition duration-500 ease-out hover:shadow-2xl cursor-pointer rounded-lg "
            >
              <Image
                className="h-20 w-20 p-2 border border-gray-300 "
                src={imageSrc}
                height={200}
                width={200}
              />
              <p className="mt-3 text-xl">{name}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
