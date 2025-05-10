import { DotsHorizontalIcon, HeartIcon } from "@heroicons/react/solid";

function Footer() {
  return (
    <div className=" w-screen h-20 flex items-center justify-center gap-x-2  text-white text-xs sm:text-sm md:text-lg lg:text-xl border-t border-white/10 backdrop-blur-sm">
      <DotsHorizontalIcon className="h-6  text-blue-400" />
      <span className="text-gray-300">Created with</span>{" "}
      <HeartIcon className="h-8  text-purple-500 animate-pulse" />
      <span className="text-gray-300">By </span>{" "}
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 font-semibold"> Mohamed Sabry</span>{" "}
      <DotsHorizontalIcon className="h-6  text-blue-400" />
    </div>
  );
}

export default Footer;
