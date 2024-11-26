import React, { useState } from "react";
import { GithubOutlined, LinkOutlined } from "@ant-design/icons"; // Ant Design Icons
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
      <nav className="flex space-x-10 mb-4 justify-center">
        {link && (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-green-500 p-2 rounded-full hover:bg-green-600 transition-all flex items-center justify-center"
            aria-label="View Project"
          >
            <LinkOutlined className="text-white text-lg" />
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
            <GithubOutlined className="text-white text-lg" />
          </Link>
        )}
      </nav>

      <h2 className="text-center text-2xl lg:text-2xl font-bold text-[#00FF00] mb-2">
        {titleName}
      </h2>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded ? "max-h-screen" : "max-h-screen"
        }`}
      >
        <p className="font-medium text-base lg:text-lg text-white dark:text-gray-300 mb-4">
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
        <p className="text-sm lg:text-3xl text-gray-600 dark:text-gray-400 italic mt-4">
          {sub_description}
        </p>
      )}
    </section>
  );
};

export default TitleUI;
