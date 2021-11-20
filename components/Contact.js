import { MailIcon } from "@heroicons/react/solid";
import { SocialIcon } from "react-social-icons";

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

function Contact() {
  return (
    <div
      id="contact"
      className=" pt-20 bg-contact-bg bg-cover bg-center h-screen relative"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70" />

      <div className="text-4xl text-center mb-5 z-10 relative ">
        <span className="pb-3 border-b-2 border-gray-400 text-white ">
          Contact Me
        </span>
        <div className="w-[300px]  bg-transparent border rounded-xl mx-auto mt-20 p-10">
          {socials.map(({ href, name, id }) => (
            <div key={id} className="flex justify-between items-center pb-5 ">
              <p className="text-lg text-white">{name}</p>
              <SocialIcon url={href} fgColor="#FFF" />
            </div>
          ))}

          <div className="flex justify-between items-center  ">
            <p className="text-lg text-white">Gmail</p>
            <a href="mailto:abosaadmohamed@gmail.com">
              <MailIcon className="h-12 text-white " />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
