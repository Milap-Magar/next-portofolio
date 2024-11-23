"use client";

import { MainHeading, navItems } from "../../../constants";
import { useState } from "react";

interface HeadingMap {
  id: number;
  title: string;
}

interface NavProps {
  id: string;
  title: string;
  key: number;
}

export default function Title() {
  const [selectedId, setSelectedId] = useState<number>(1);

  const handleSelect = (id: number) => {
    setSelectedId(id);
  };

  return (
    <div>
      <ul className="center">
        {MainHeading.filter(
          (heading: HeadingMap) => heading.id === selectedId
        ).map((heading: HeadingMap) => (
          <li key={heading.id}>
            <h1 className="h2">{heading.title}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}
