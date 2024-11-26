import React, { useState } from "react";
import { GithubOutlined, LinkOutlined } from "@ant-design/icons";
import Link from "next/link";

interface TitleProps {
  titleName: string;
  id: number;
  description: string;
  sub_description?: string;
  link?: string;
  githubLink?: string;
}

const TitleUI: React.FC<TitleProps> = ({
  titleName,
  description,
  sub_description,
  link,
  githubLink,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const displayedDescription = isExpanded
    ? description
    : description.slice(0, 100);

  return (
    <section className={isExpanded ? `pt-2` : `pt-4`}>
      {/* Navigation to project | Github */}
      <nav className="flex space-x-6 mb-4 justify-center">
        {link && (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-green-500 p-2 rounded-full hover:bg-green-600 transition-all flex items-center justify-center"
            aria-label="View Project"
          >
            <LinkOutlined className="text-white text-2xl" />
          </Link>
        )}
        {githubLink && (
          <Link
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-900 transition-all flex items-center justify-center"
            aria-label="GitHub"
          >
            <GithubOutlined className="text-white text-2xl" />
          </Link>
        )}
      </nav>
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#00FF00] mb-2">
        {titleName}
      </h2>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded ? "max-h-[80vh]" : "max-h-[150px] sm:max-h-[200px]"
        }`}
      >
        <p className="font-medium text-base sm:text-lg md:text-xl text-white dark:text-gray-300 mb-4">
          {displayedDescription}
          {description.length > 100 && !isExpanded && "..."}
        </p>
      </div>

      {description.length > 100 && (
        <button
          onClick={toggleExpand}
          className="font-serif text-red-500 dark:text-red-400 font-semibold hover:underline"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}

      {sub_description && (
        <p className="text-sm lg:text-xl text-gray-600 dark:text-gray-400 italic mt-4">
          {sub_description}
        </p>
      )}
    </section>
  );
};

export default TitleUI;
