import { HomeFilled } from "@ant-design/icons";
const Main = () => {
  return (
    <div
      className="h-screen flex items-start justify-start pt-36 px-4 snap-start"
      id="main"
    >
      <span className="h1 dark:text-[#00FF00] text-green-700">
        <HomeFilled className="dark:text-[#00FF00] text-green-300 pr-8" />
        /Intro
      </span>
    </div>
  );
};

export default Main;
