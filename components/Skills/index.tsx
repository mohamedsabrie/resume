import React from "react";
import { Icon } from "@iconify-icon/react";

const skills = [
  "html",
  "css",
  "javascript",
  "typescript",
  "react-dark",
  "nextjs-dark",
  "remix-dark",
  "jquery",
  "postman",
  "redux",
  "styledcomponents",
  "git",
  "github-dark",
  "bitbucket-dark",
  "materialui-dark",
  "tailwindcss-dark",
  "sass",
  "less-dark",
  "jest"
];
function Skills() {
  return (
    <div
      id="skills"
      className="py-20 mt-10 bg-$green min-h-screen px-5 sm:px-10  "
    >
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center  gap-5 sm:gap-10">
        {skills.map((skill) => (
          <div key={skill} className="flex flex-col items-center text-white font-semibold gap-y-1">
            <Icon  height={50}  icon={`skill-icons:${skill}`} />
            <h3>{skill.replace("-dark", "")}</h3>
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default Skills;
