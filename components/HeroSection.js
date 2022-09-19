import { MailIcon } from "@heroicons/react/solid";
import { Link } from "react-scroll";
import { SocialIcon } from "react-social-icons";

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
        className={`px-5 md:px-10 xl:px-20  relative flex flex-col md:flex-row justify-center md:justify-between gap-5  items-center betwee h-screen`}
      >
        <div className="md:mt-20 order-2 md:order-1 ">
          <h3 className=" text-center md:text-left ">
            <span className="name inline-block mb-3 font-extrabold text-$black1 text-2xl lg:text-3xl">
              {" "}
              Hello,{" "}
            </span>
            <br />
            <span className="name inline-block mb-3 font-extrabold text-$black1 text-2xl lg:text-3xl">
              {" "}
              I&#700;m Mohamed{" "}
            </span>
            <br />
            <span className="job_title inline-block font-semibold text-$black2  lg:text-2xl">
              Front End Developer | React.js
            </span>
          </h3>
        </div>
        <div className="mt-20 order-1 md:order-2 flex flex-col  md:flex-row items-center gap-10 md:gap-20">
          <img
            className="h-[275px] md:h-[300px] xl:h-[500px] transition duration-200 hover:rotate-2 "
            src="/svgs/hero_img.svg"
            alt=""
          />
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
