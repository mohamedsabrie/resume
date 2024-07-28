import { EyeIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Project({ imageSrc, name, id, href, imageAlt }) {
  return (
    <div className="">
      <div className="   rounded-lg overflow-hidden ">
        <a
          href={href}
          target="_blank"
          className="relative overflow-hidden group rounded-lg   flex flex-col items-center justify-center    hover:scale-105  transition transform duration-500 ease-out  cursor-pointer "
        >
          <div className="hidden group-hover:block transition transform duration-500 ease-out absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 p-3 bg-gray-700 rounded-lg">
            <EyeIcon className="h-7 text-white" />
          </div>
          <Image
            className="rounded-lg   "
            src={imageSrc}
            height={200}
            width={500}
            objectFit="contain"
            alt={imageAlt}
          />
          <div className="absolute group-hover:bg-black/40 top-0 left-0 h-full w-full    transition transform duration-500 ease-out " />
        </a>
      </div>

      <h3 className="text-center mt-2 text-lg sm:text-2xl text-white font-semibold">
        {name}
      </h3>
    </div>
  );
}

export default Project;
