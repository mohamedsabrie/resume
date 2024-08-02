import { MailIcon } from "@heroicons/react/solid";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <div id="about" className="bg-$yellow  bg-center  relative ">
      <div
        className={`px-5 sm:px-10  mt-10   relative flex flex-col md:flex-row justify-center md:justify-between gap-5  items-center  min-h-screen`}
      >
        <div className=" order-2 md:order-1 ">
          <div className=" text-center md:text-left ">
            <p className="name mb-3 font-extrabold text-$black1 text-2xl lg:text-3xl">
              {" "}
              Hello,{" "}
            </p>

            <p className="name mb-3 font-extrabold text-$black1 text-2xl lg:text-3xl">
              {" "}
              I&#700;m Mohamed Sabry
            </p>

            <p className="job_title font-semibold text-$black2  lg:text-2xl">
              Frontend Developer | React JS | Next JS
            </p>
          </div>
          <div className="mt-10 text-center md:text-left">
            <button className="btn">
              {" "}
              <a href="/mohamed-sabry-cv.pdf" download>
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
            className="relative w-[200px] h-[300px] md:w-[300px] md:h-[500px] lg:w-[500px] lg:h-[500px]  transition duration-200 hover:rotate-2 "
          >
            <Image
              className="w-full h-full"
              src="/svgs/hero_img.svg"
              alt=""
              layout="fill"
            />
          </motion.div>

          <div className="flex space-x-5 md:flex-col md:space-y-5 md:space-x-0 justify-between items-center pb-5">
            {socials.map(({ href, name, id }) => (
              <div key={id} className=" ">
                <SocialIcon url={href} fgColor="#000" bgColor="#FFF" />
              </div>
            ))}

            <div className="bg-white p-2 rounded-full">
              <a href="mailto:abosaadmohamed@gmail.com">
                <MailIcon className="h-8 text-black " />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
