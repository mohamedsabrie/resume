import React from "react";
import { Icon } from "@iconify-icon/react";
import Image from "next/image";

const skills = [
  { name: "HTML", key: "html" },
  { name: "CSS", key: "css" },
  { name: "JavaScript", key: "javascript" },
  { name: "TypeScript", key: "typescript" },
  { name: "React JS", key: "react-dark" },
  { name: "Next JS", key: "nextjs-dark" },
  { name: "Remix", key: "remix-dark" },
  { name: "jQuery", key: "jquery" },
  { name: "Postman", key: "postman" },
  { name: "Redux", key: "redux" },
  { name: "Styled Components", key: "styledcomponents" },
  { name: "Git", key: "git" },
  { name: "GitHub", key: "github-dark" },
  { name: "Bitbucket", key: "bitbucket-dark" },
  { name: "Material UI", key: "materialui-dark" },
  { name: "Tailwind CSS", key: "tailwindcss-dark" },
  { name: "Sass", key: "sass" },
  { name: "Less", key: "less-dark" },
  { name: "Jest", key: "jest" },
];

const otherSkills = [
  {
    name: "React Query",
    path: "/skills/react-query.svg",
  },
  {
    name: "Ant Design",
    path: "/skills/ant-design.svg",
  },
  {
    name: "Recoil",
    path: "/skills/recoil-js.svg",
  },
  {
    name: "Firebase",
    path: "/skills/firebase.svg",
  },
  {
    name: "GraphQL",
    path: "/skills/graphql.svg",
  },
  {
    name: "Google Maps",
    path: "/skills/google-maps.svg",
  },
];
function Skills() {
  return (
    <div
      id="skills"
      className="py-20 mt-10 bg-$green min-h-screen px-5 sm:px-10  "
    >
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center  gap-5 sm:gap-10">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center text-white font-semibold gap-y-1"
          >
            <Icon height={50} icon={`skill-icons:${skill.key}`} />
            <h3>{skill.name}</h3>
          </div>
        ))}
        {otherSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center text-white font-semibold gap-y-1"
          >
            <Image height={50} width={50} src={skill.path} alt={skill.name} />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
