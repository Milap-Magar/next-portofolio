import React from "react";
import { socials } from "../../../constants";
import Image from "next/image";

const Soicals = () => {
  return (
    <ul className="w-[250px] md:flex gap-6 hidden">
      {socials.map((item) => (
        <li key={item.id} className="cursor-pointer">
          <Image
            src={item.icons}
            alt="icons"
            width={24}
            height={24}
            className="w-[35px] "
          />
        </li>
      ))}
    </ul>
  );
};

export default Soicals;
