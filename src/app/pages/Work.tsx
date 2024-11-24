import { ProjectFilled } from "@ant-design/icons";

const Work = () => {
  return (
    <section
      className="h-screen flex flex-col items-start justify-start pt-36 px-4 snap-start"
      id="project"
    >
      <div className="space-x-2">
        <span className="h1 dark:text-[#00FF00] text-green-700">
          <ProjectFilled className="dark:text-[#00FF00] text-green-300 pr-8" />
          /Projects
        </span>
      </div>
      <div className="space-x-2"></div>
    </section>
  );
};

export default Work;
