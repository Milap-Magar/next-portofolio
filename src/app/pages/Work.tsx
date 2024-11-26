import { ProjectFilled } from "@ant-design/icons";
import TitleUI from "@/components/ui/TitleUI";
import { projects } from "../../../constants";
import { useState } from "react";

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section
      className="h-screen flex flex-col items-start justify-start pt-32 px-4 snap-start"
      id="projects"
    >
      <div className="space-x-2">
        <span className="h1 dark:text-[#00FF00] text-green-700">
          <ProjectFilled className="dark:text-[#00FF00] text-green-300 pr-8" />
          /Projects
        </span>
      </div>
      {/* Main section */}
      <main
        className="relative w-full mt-3
                  flex flex-col items-center justify-center p-2 sm:p-4 lg:p-6 
                  bg-green-200 shadow-green-500 dark:bg-green-950 rounded-3xl shadow-xl overflow-hidden"
      >
        <div
          key={projects[currentIndex].id}
          className={`relative flex-1 ${projects[currentIndex]} h-screen w-[80vw] pt-28 rounded-lg 
                      transition-all duration-1000 ease-in-out bg-transparent`}
          style={{
            backgroundImage: `url(${projects[currentIndex].img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Text Content */}
          <div className="relative z-10 text-white py-2 px-4 bg-green-300 bg-opacity-70 rounded-md">
            <TitleUI
              titleName={projects[currentIndex].titleName}
              id={projects[currentIndex].id}
              description={projects[currentIndex].description}
              link={projects[currentIndex].link}
              githubLink={projects[currentIndex].githubLink}
            />
          </div>
        </div>
        {/* Navigation Arrows */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white">
          <button
            onClick={handlePrev}
            className="text-xl p-2 rounded-full bg-black bg-opacity-80 hover:bg-opacity-75 transition-all"
          >
            &lt;
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white">
          <button
            onClick={handleNext}
            className="text-xl p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition-all"
          >
            &gt;
          </button>
        </div>
      </main>
    </section>
  );
};

export default Work;
