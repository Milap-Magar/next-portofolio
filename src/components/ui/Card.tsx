import { GithubOutlined, LinkOutlined } from "@ant-design/icons";

interface CardProps {
  titleName: string;
  link: string;
  githubLink: string;
  img: string;
}

const Card = ({ titleName, link, githubLink, img }: CardProps) => {
  return (
    <div className="relative flex flex-col bg-transparent rounded-lg overflow-hidden shadow-xl transition-all duration-300 hover:scale-105 border-2 border-green-500 w-[250px] h-[200px]">
      <div className="absolute inset-0 bg-black bg-opacity-15 dark:bg-opacity-50 flex flex-col justify-center items-center p-4">
        <h2 className="text-green-300 dark:text-white text-lg font-bold mb-2 text-center">
          {titleName}
        </h2>
        <div className="flex space-x-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 text-red-500 "
          >
            <LinkOutlined />
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-white text-green-500 hover:text-green-500"
          >
            <GithubOutlined />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
