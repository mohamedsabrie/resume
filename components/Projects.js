import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


const projects = [
  {
    id: 908,
    name: "MAD DAWGS Web App",
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

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
    clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees. 

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -300);
    // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
    }
  }
});

// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set(".skewElem", {transformOrigin: "right center", force3D: true});
    
  }, [])
  return (
    <div id="projects" className="py-20 bg-white">
      <div className="text-4xl text-center mb-5 ">
        <span className="pb-3 border-b-2 border-gray-400">Projects</span>
      </div>
      <div className="flex items-center justify-around  max-w-6xl mx-auto flex-wrap">
        {projects.map(({ imageSrc, name, id, href, imageAlt }) => (
          <Link href={href} key={id}>
            <a
              target="_blank"
              className="skewElem flex flex-col items-center justify-center border border-gray-300 my-5 p-5 shadow- transition duration-500 ease-out hover:shadow-2xl cursor-pointer rounded-lg "
            >
              <Image
                className="h-20 w-20 p-2 border border-gray-300 rounded-lg object-contain  "
                src={imageSrc}
                height={200}
                width={200}
                alt = {imageAlt}
                

              />
              <p className="mt-3 text-xl">{name}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
