import { EyeIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function Project({ imageSrc, name, id, href, imageAlt }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 shadow-md hover:shadow-lg">
        <a
          rel="noreferrer"
          href={href}
          target="_blank"
          className="relative overflow-hidden group rounded-xl flex flex-col items-center justify-center hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
        >
          <div className="hidden group-hover:flex transition-all duration-300 absolute inset-0 bg-black/30 items-center justify-center z-10">
            <EyeIcon className="h-8 text-white" />
          </div>
          <Image
            className="rounded-xl object-cover w-full h-full"
            src={imageSrc}
            height={200}
            width={500}
            alt={imageAlt}
          />
        </a>
      </div>

      <h3 className="text-center mt-4 text-xl sm:text-2xl font-medium text-gray-200">
        {name}
      </h3>
    </motion.div>
  );
}

export default Project;
