import React from "react";
import { Icon } from "@iconify-icon/react";
import Image from "next/image";
import { motion } from "framer-motion";

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
  { name: "Git", key: "git" },
  { name: "GitHub", key: "github-dark" },
  { name: "Bitbucket", key: "bitbucket-dark" },
  { name: "Material UI", key: "materialui-dark" },
  { name: "Tailwind CSS", key: "tailwindcss-dark" },
  { name: "Sass", key: "sass" },
  { name: "Less", key: "less-dark" },
  { name: "Jest", key: "jest" },
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
  { name: "Styled Components", key: "styledcomponents" },
];

function Skills() {
  return (
    <div
      id="skills"
      className="py-20 mt-10 px-5 sm:px-10 relative z-10"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
        {skills.map(({ name, path, key }, index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center text-white font-semibold gap-y-2 min-h-[90px]"
          >
            <div className="h-[50px] flex items-center justify-center">
              {path && <Image height={50} width={50} src={path} alt={name} />}
              {key && <Icon height={50} icon={`skill-icons:${key}`} />}
            </div>
            <h3 className="text-center text-sm">{name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
