import { MailIcon } from "@heroicons/react/solid";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";
import HeroImage from "/public/images/hero.jpg";

function HeroSection() {
  const socials = [
    {
      id: 1,
      name: "Linkedin",
      href: "https://www.linkedin.com/in/mohamedsabry3/",
    },
    {
      id: 2,
      name: "Github",
      href: "https://github.com/mohamedsabrie",
      icon: "/images/airbnb-clone.png",
    },

    // More products...
  ];
  return (
    <div id="about" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-gray-900/70" />
      <div className="px-5 sm:px-10 pt-24 pb-10 relative flex flex-col md:flex-row justify-center md:justify-between gap-16 items-center min-h-screen max-w-6xl mx-auto">
        <div className=" order-2 md:order-1 ">
          <div className=" text-center md:text-left ">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="name mb-3 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 text-3xl lg:text-5xl"
            >
              Hello,
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="name mb-6 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 text-3xl lg:text-5xl"
            >
              I&#700;m Mohamed Sabry
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="job_title font-semibold text-gray-300 text-xl lg:text-3xl"
            >
              Frontend Developer | React JS | Next JS
            </motion.p>
          </div>
          <div className="mt-10 text-center md:text-left">
            <button>
              <a
                href="/mohamed-sabry-cv.pdf"
                download
                className="inline-block w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold p-4 min-w-[160px] min-h-[48px] hover:scale-105 hover:opacity-90 transition-all duration-300 shadow-lg backdrop-blur-sm"
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
        <div className="order-1 md:order-2 flex flex-col  md:flex-row items-center gap-5 sm:gap-10 md:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px] transition duration-300 hover:rotate-2 group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-colors duration-300" />
            <Image
              className="w-full h-full rounded-full ring-4 ring-white/10 group-hover:ring-white/20 transition-all duration-300"
              src={HeroImage}
              alt="Developer illustration"
              priority={true}
              objectFit="cover"
            />
          </motion.div>

          <div className="flex space-x-5  md:flex-col md:space-y-5 md:space-x-0 justify-between items-center pb-5">
            {socials.map(({ href, id }) => (
              <div
                key={id}
                className="hover:scale-105 transition-transform rounded-full overflow-hidden"
              >
                <SocialIcon
                  url={href}
                  fgColor="#fff"
                  bgColor="rgba(255,255,255,0.1)"
                  className="!bg-white/10 hover:!bg-white/20 transition-colors"
                />
              </div>
            ))}

            <div className="bg-white/10 backdrop-blur-sm rounded-full hover:scale-105 hover:bg-white/20 transition-all">
              <a
                href="mailto:abosaadmohamed@gmail.com"
                aria-label="Send me an email"
                className="flex items-center justify-center min-w-[48px] min-h-[48px]"
              >
                <MailIcon className="h-8 text-white" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
