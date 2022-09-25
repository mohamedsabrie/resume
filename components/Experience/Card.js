import React from "react";

function Card({name, type, duration, description}) {
  return (
    <div className=" px-5 py-3 rounded-lg   bg-white w-[300px] h-[400px] flex flex-col space-y-3">
      <h2>
        <strong>Company/Project: </strong> {name}
      </h2>
      <h3>
        <strong>Type: </strong> {type}
      </h3>
      <p>
        <strong>Duration:</strong> {duration}
      </p>
      <p>
        <strong>Description:</strong> {description}
      </p>
    </div>
  );
}

export default Card;
