"use client";
import { About, Contact, Main, Work } from "../pages";

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

  return (
    <div>
      <ul className="center w-full h-full">
        <Main />
        <Work />
        <About />
        <Contact />
      </ul>
    </div>
  );
}
