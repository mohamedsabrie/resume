import { StarIcon } from "@heroicons/react/solid";
import React from "react";

function Card({ name, type, duration, description }) {
  return (
    <div className=" px-5 py-3 rounded-lg text-sm   bg-white w-[300px]  flex flex-col space-y-3">
      <h2 className="flex items-center space-x-2">
        <StarIcon className="h-6 text-$yellow" />
        <span>
          {" "}
          <strong>Company: </strong> {name}
        </span>
      </h2>
      <h3 className="flex items-center space-x-2">
        <StarIcon className="h-6 text-$yellow" />
        <span>
          {" "}
          <strong>Type: </strong> {type}
        </span>
      </h3>
      <p className="flex items-center space-x-2">
        <StarIcon className="h-6 text-$yellow" />
        <span>
          <strong>Duration:</strong> {duration}
        </span>
      </p>
      <p className="flex items-center space-x-2">
        <StarIcon className="h-6 text-$yellow" />
        <span className="leading-7">
          {" "}
          <strong>Description:</strong> {description}
        </span>
      </p>
    </div>
  );
}

export default Card;
