import React, { useState } from "react";
import {
  DownOutlined,
  RightCircleOutlined,
  UpOutlined,
} from "@ant-design/icons";

interface AccordianProps {
  title: string;
  description: string;
  isCheck: string;
}

const Accordian: React.FC<AccordianProps> = ({
  title,
  description,
  isCheck,
}) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string | null) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="w-full">
      <div
        className="flex justify-between items-center cursor-pointer font-tomorrow font-semibold text-[#00FF00] w-[250px] sm:w-[400xp] md:[490px] lg:w-[500px]"
        onClick={() => toggleSection(isCheck)}
      >
        <span>
          <RightCircleOutlined style={{ color: "#00FF00", paddingRight: 5 }} />
          {title}
        </span>
        {expandedSection === isCheck ? (
          <UpOutlined className="text-[#00FF00]" />
        ) : (
          <DownOutlined className="text-[#00FF00]" />
        )}
      </div>
      {expandedSection === isCheck && (
        <p className="mt-4 text-white w-[500px]">{description}</p>
      )}
    </div>
  );
};

export default Accordian;
