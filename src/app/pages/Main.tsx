import { HomeFilled } from "@ant-design/icons";

const Main = () => {
  return (
    <div className="h-screen pt-24 px-4 snap-start" id="main">
      <div className="flex justify-start items-start">
        <span className="h1 dark:text-[#00FF00] text-green-700">
          <HomeFilled className="dark:text-[#00FF00] text-green-300 pr-8" />
          /Intro
        </span>
      </div>
      <div className="space-y-4 animate-slideUp flex flex-col items-center text-center justify-center h-full">
        <span className="font-extrabold text-green-400 dark:text-green-200 text-xl sm:text-lg">
          Hiee, This is{" "}
        </span>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-green-400 dark:text-green-200">
          Milap Magar
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-green-400">
          Frontend Developer
        </h2>
      </div>
    </div>
  );
};

export default Main;
