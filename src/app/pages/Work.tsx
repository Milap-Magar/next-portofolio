import { ProjectFilled } from "@ant-design/icons";
import TitleUI from "@/components/ui/TitleUI";
import { projects } from "../../../constants";
import { useState } from "react";
import Card from "@/components/ui/Card";

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
      className="h-full flex flex-col items-start justify-start pt-20 md:pt-24 px-4 snap-start"
      id="projects"
    >
      <div className="space-x-2">
        <span className="h1 dark:text-[#00FF00] text-green-700">
          <ProjectFilled className="dark:text-[#00FF00] text-green-300 pr-8" />
          /Projects
        </span>
      </div>

      {/* Project Carousel Section */}
      <main
        className="relative h-full md:h-screen w-full mt-3 flex flex-col items-center justify-center p-2 sm:p-4 lg:p-6 
                  bg-green-100 shadow-green-600 dark:bg-green-950 rounded-3xl shadow-lg overflow-hidden"
      >
        <div
          key={projects[currentIndex].id}
          className="relative flex-1 w-[80vw] rounded-lg 
                  transition-all duration-1000 ease-in-out bg-transparent"
          style={{
            backgroundImage: `url(${projects[currentIndex].img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute bottom-0 z-10 text-white py-4 px-16 bg-green-300 bg-opacity-70 rounded-md">
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
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white z-10">
          <button
            onClick={handlePrev}
            className="text-xl p-2 rounded-full bg-black bg-opacity-80 hover:bg-opacity-75 transition-all"
          >
            &lt;
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white z-10">
          <button
            onClick={handleNext}
            className="text-xl p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition-all"
          >
            &gt;
          </button>
        </div>
      </main>

      {/* Project Cards Section (Visible on larger screens) */}
      <div className="w-full min-h-screen flex justify-center items-center mt-8 md:mt-0 cursor-pointer">
        <div className="w-full max-w-screen-xl px-4">
          <div className="w-full text-green-300 dark:text-[#00FF00] tracking-widest font-tomorrow font-semibold text-[2em] text-center mb-8">
            <span>List of Works:</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
            {projects.map(({ id, titleName, link, githubLink, img }) => (
              <Card
                key={id}
                titleName={titleName}
                link={link}
                githubLink={githubLink}
                img={img}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
