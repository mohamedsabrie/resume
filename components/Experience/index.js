import React from "react";
import Card from "./Card";

function Experience() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-$green  to-$yellow flex items-center justify-center">
      <div className=" min-h-full flex flex-col mt-40 md:mt-20  items-center justify-center md:flex-row space-y-10 md:space-y-0 md:space-x-10 md:relative ">
        <Card
          name="AKOIN"
          type=" Full Time Remote"
          duration="June 2021 To July 2022"
          description="At Akoin, I worked as a Front End
            Developer to develop the front end side of Crypto web apps. At
            Akoin, I worked as a Front End Developer to develop the front end
            side of Crypto web apps Skills: JavaScript · Next.js · Tailwind CSS"
        />
        <Card
          name="Real Estate"
          type="  Part Time Freelance"
          duration=" Nov 2021 Till Now"
          description=" I work on a long term real estate
          project in Saudi Arabia . I use Next.js, Tailwind.css and Recoil.js
          to handle the front end side of the web app"
        />
      </div>
    </div>
  );
}

export default Experience;
