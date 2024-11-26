import { InfoCircleFilled } from "@ant-design/icons";

const About = () => {
  return (
    <div
      className="h-screen flex items-start justify-start pt-24 px-4 snap-start"
      id="about"
    >
      <span className="h1 dark:text-[#00FF00] text-green-700">
        <InfoCircleFilled className="dark:text-[#00FF00] text-green-300 pr-8" />
        /About
      </span>
    </div>
  );
};

export default About;
