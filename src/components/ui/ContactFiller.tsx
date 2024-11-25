import React from "react";

interface Props {
  heading: string;
  subheading: string;
}
const ContactFiller = ({ heading, subheading }: Props) => {
  return (
    <article className="w-auto pt-2 flex gap-4">
      <h1 className="font-semibold text-lg text-[#00FF00] font-mono">
        {heading}{" "}
      </h1>
      <p className="font-light text-base text-green-300  dark:text-green-100">
        {subheading}
      </p>
    </article>
  );
};

export default ContactFiller;
