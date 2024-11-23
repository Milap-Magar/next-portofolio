import { ProjectFilled } from "@ant-design/icons";

const Work = () => {
  return (
    <div
      className="h-screen flex items-start justify-start pt-36 px-4 snap-start"
      id="project"
    >
      <span className="h1 dark:text-[#00FF00] text-green-700">
        <ProjectFilled className="dark:text-[#00FF00] text-green-300 pr-8" />
        /Projects
      </span>
    </div>
  );
};

export default Work;
