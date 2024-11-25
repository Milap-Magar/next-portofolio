import React from "react";

interface MarqueeProps {
  items: MarqueeItem[];
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ items, className }) => {
  return (
    <div className="relative overflow-hidden w-full h-10 gap-5 dark:bg-gray-900">
      <div className={className}>
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 text-center px-4"
          >
            <img
              src={item.logo}
              alt={item.name}
              className="w-8 h-10 object-contain"
            />
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
