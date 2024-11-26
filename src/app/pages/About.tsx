import { InfoCircleFilled, RightCircleOutlined } from "@ant-design/icons";
import Image from "next/image";

const About = () => {
  return (
    <div
      className="h-screen flex flex-col items-start justify-start pt-24 px-4 snap-start"
      id="about"
    >
      <span className="h1 dark:text-[#00FF00] text-green-700">
        <InfoCircleFilled className="dark:text-[#00FF00] text-green-300 pr-0 md:pr-8" />
        /About
      </span>
      <main className="py-6 max-w-full h-[20em] font-tomorrow font-normal flex justify-center items-center gap-16 overflow-x-hidden overflow-y-scroll mt-5 scrollbar-hidden relative">
        <div className="w-[600px] pt-64 md:pt-16">
          <span className="font-tomorrow font-semibold text-[#00FF00]">
            <RightCircleOutlined
              style={{ color: "#00FF00", paddingRight: 5 }}
            />
            Education & Big talks
          </span>
          <p>
            I am currently pursuing a Bachelor of Computer Applications (BCA)
            and have been working as a frontend developer for the past 1 year.
            During this time, I have gained hands-on experience in building
            dynamic web applications, focusing on creating responsive,
            user-friendly interfaces. My expertise includes working with HTML,
            CSS, JavaScript, and React, along with frameworks like Tailwind CSS
            and Material UI. I am passionate about expanding my skills and
            staying up-to-date with the latest trends in frontend development
            while continuing my academic journey.
          </p>
        </div>

        <div className="scrollbar-indicator absolute right-2 top-0 h-full bg-[#00FF00] w-1"></div>
      </main>

      {/* Tech's used */}
      <div className="flex justify-start px-4 py-8 items-end h-screen text-green-400 dark:text-white">
        <div className="space-y-4">
          <span className="h-full">
            Here are some technologies I have been working with:
          </span>
          <span className="flex gap-2 transform transition-all duration-300 ease-in-out hover:rotate-12">
            <RightCircleOutlined style={{ color: "#00FF00" }} />
            TypeScript
          </span>
          <span className="flex gap-2 transform transition-all duration-300 ease-in-out hover:rotate-12">
            <RightCircleOutlined style={{ color: "#00FF00" }} />
            JavaScript
          </span>
          <span className="flex gap-2 transform transition-all duration-300 ease-in-out hover:rotate-12">
            <RightCircleOutlined style={{ color: "#00FF00" }} />
            ReactJs
          </span>
        </div>
        <div className="space-y-4">
          <span className="flex gap-2 transform transition-all duration-300 ease-in-out hover:rotate-12">
            <RightCircleOutlined style={{ color: "#00FF00" }} />
            NodeJs
          </span>
          <span className="flex gap-2 transform transition-all duration-300 ease-in-out hover:rotate-12">
            <RightCircleOutlined style={{ color: "#00FF00" }} />
            MySql
          </span>
          <span className="flex gap-2 transform transition-all duration-300 ease-in-out hover:rotate-12">
            <RightCircleOutlined style={{ color: "#00FF00" }} />
            NodeJs
          </span>
        </div>
      </div>
      <div>
        <p>
          Outside of work, I &lt;3 playing football & I also play a lot of video
          games. (Ex: Valorant)
        </p>
      </div>
    </div>
  );
};

export default About;
