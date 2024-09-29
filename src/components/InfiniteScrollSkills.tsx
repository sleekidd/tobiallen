import React from "react";
// import test from "../assets/css-icon.svg";

const skills = [
  { name: "UX Design", icon: "ux-icon.svg" },
  { name: "Figma", icon: "figma-icon.svg" },
  { name: "HTML", icon: "html-icon.svg" },
  { name: "CSS", icon: "css-icon.svg" },
  { name: "JavaScript", icon: "js-icon.svg" },
  { name: "TypeScript", icon: "ts-icon.svg" },
  { name: "React", icon: "react-icon.svg" },
  { name: "Python", icon: "python-icon.svg" },
  { name: "Django", icon: "django-icon.svg" },
  { name: "Django Rest Framework", icon: "drf-icon.svg" },
  { name: "Webflow", icon: "webflow-icon.svg" },
  { name: "Wordpress", icon: "wordpress-icon.svg" },
];

const InfiniteScrollSkills: React.FC = () => {
  return (
    <section className="py-8 overflow-hidden mb-[56px]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">My Skills</h2>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </p>
      </div>

      {/* Horizontal Scrolling Section */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scrollMobile lg:animate-scroll gap-4">
          {skills.concat(skills).map((skill, index) => (
            <div
              key={index}
              className="bg-white flex flex-row items-center justify-center gap-2 px-[16px] py-[16px] rounded-[8px] border-[1px] border-[#EEEEEE] min-w-fit whitespace-nowrap"
            >
              <img src={`/icons/${skill.icon}`} alt={skill.name} />
              <p className="text-[16px]">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfiniteScrollSkills;
