import { DotsHorizontalIcon, HeartIcon } from "@heroicons/react/solid";

function Footer() {
  return (
    <div className="bg-gray-900 w-screen h-20 flex items-center justify-center text-white text-xs sm:text-sm md:text-lg lg:text-xl">
      <DotsHorizontalIcon className="h-6 mr-3" /> Created with{" "}
      <HeartIcon className="h-8 mx-2" /> By Mohamed Sabry{" "}
      <DotsHorizontalIcon className="h-6 ml-3" />
    </div>
  );
}

export default Footer;
