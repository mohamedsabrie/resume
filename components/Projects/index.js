import Link from "next/link";
import Image from "next/image";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";

const projects = [
  {
    id: 908,
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
  {
    id: 9,
    name: "CRYPTERNS website",
    href: "https://www.crypterns.com",
    imageSrc: "/images/cryptern-logo.svg",
    imageAlt: "cryptern-logo",
  },
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
    href: "https://amazon-clone-chi-livid.vercel.app/",
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
