import Accordian from "@/components/ui/Accordian";
import {
  InfoCircleFilled,
  RightCircleOutlined,
  DownOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const About = () => {
  const technologies: string[] = [
    "TypeScript",
    "JavaScript",
    "ReactJs",
    "NodeJs",
    "MySql",
    "Redux",
  ];

  return (
    <div
      className="h-screen flex flex-col items-start justify-start pt-24 px-4 snap-start relative"
      id="about"
    >
      <span className="h1 dark:text-[#00FF00] text-green-700">
        <InfoCircleFilled className="dark:text-[#00FF00] text-green-300 pr-0 md:pr-8" />
        /About
      </span>

      {/* Main Content */}
      <main className="py-6 max-w-full h-[20em] md:h-[60em] font-tomorrow font-normal flex flex-col gap-8 md:gap-6 lg:gap-10 overflow-y-scroll mt-5 scrollbar-hidden relative">
        <Accordian
          title="Education"
          description="I am currently pursuing a Bachelor of Computer Applications (BCA) and
          have been working as a frontend developer for the past 1 year. During
          this time, I have gained hands-on experience in building dynamic web
          applications, focusing on creating responsive, user-friendly
          interfaces. My expertise includes working with HTML, CSS, JavaScript,
          and React, along with frameworks like Tailwind CSS and Material UI"
          isCheck="education"
        />
        <Accordian
          title="Experience"
          description="Frontend Intern: At DoerSoft Techonologies. Worked for 6 months in frontned technologies"
          isCheck="experience"
        />
        <Accordian
          title="Outside of work"
          description="Outside of work, I &lt;3 playing football & I also play a lot of video
          games. (Ex: Valorant)"
          isCheck="work"
        />
      </main>

      {/* Tech Section */}
      <div className="flex justify-start px-4 py-8 items-end h-screen text-green-400 dark:text-white w-full">
        <div className="space-y-4">
          <span className="h-full w-full">
            Here are some technologies I have been working with:
          </span>
          {technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="flex gap-2 transform transition-all duration-300 ease-in-out hover:rotate-12"
            >
              <RightCircleOutlined style={{ color: "#00FF00" }} />
              {tech}
            </span>
          ))}
        </div>
        <div className="space-y-4">
          {technologies.slice(3).map((tech, index) => (
            <span
              key={index}
              className="flex gap-2 transform transition-all duration-300 ease-in-out hover:rotate-12"
            >
              <RightCircleOutlined style={{ color: "#00FF00" }} />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
