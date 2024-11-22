import React from "react";
import { socials } from "../../../constants";
import Image from "next/image";
import Link from "next/link";

const Soicals = () => {
  return (
    <ul className="w-[250px] md:flex gap-6 hidden">
      {socials.map((social) => (
        <li key={social.id} className="cursor-pointer">
          <Link href={social.link} target="_blank">
            <Image
              src={social.icons}
              alt="icons"
              width={24}
              height={24}
              className="w-[35px] "
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Soicals;
