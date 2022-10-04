import { MailIcon } from "@heroicons/react/solid";
import { Link } from "react-scroll";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import { Flip } from "react-reveal";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

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
        className={`px-5 md:px-10 mt-10 xl:px-20  relative flex flex-col md:flex-row justify-center md:justify-between gap-5  items-center betwee h-screen`}
      >
        <div className=" order-2 md:order-1 ">
          <Slide left cascade>
            <div className=" text-center md:text-left ">
              <p className="name mb-3 font-extrabold text-$black1 text-2xl lg:text-3xl">
                {" "}
                Hello,{" "}
              </p>

              <p className="name mb-3 font-extrabold text-$black1 text-2xl lg:text-3xl">
                {" "}
                I&#700;m Mohamed{" "}
              </p>

              <p className="job_title font-semibold text-$black2  lg:text-2xl">
                Front End Developer | React.js
              </p>
            </div>
          </Slide>
          <div className="mt-10 text-center md:text-left">
            <Fade bottom>
              <button className="btn">
                {" "}
                <a href="/mohamed-sabry-frontend-cv.pdf" download>
                  Download CV
                </a>
              </button>
            </Fade>
          </div>
        </div>
        <div className="order-1 md:order-2 flex flex-col  md:flex-row items-center gap-10 md:gap-20">
          <Zoom left>
            <div className="relative w-[200px] h-[300px] md:w-[300px] md:h-[500px] lg:w-[500px] lg:h-[500px]  transition duration-200 hover:rotate-2 ">
              <Image
                className="w-full h-full"
                src="/svgs/hero_img.svg"
                alt=""
                layout="fill"
              />
            </div>
          </Zoom>

          <Bounce right cascade>
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
          </Bounce>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
