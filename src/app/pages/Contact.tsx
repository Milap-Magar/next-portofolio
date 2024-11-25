import React from "react";
import Marquee from "@/components/ui/Marquee";
import { ContactsFilled } from "@ant-design/icons";
import ContactForm from "@/components/ui/ContactForm";
import { marquee1, marquee2 } from "../../../constants";
import ContactFiller from "@/components/ui/ContactFiller";

const Contact = () => {
  return (
    <section
      className="space-y-3 md:space-y-8 w-full h-screen md:flex-row flex-col flex items-start justify-start pt-36 px-4 snap-start"
      id="contact"
    >
      <div className="md:w-[60vw] w-full flex flex-col gap-5">
        <span className="h1 dark:text-[#00FF00] text-green-700">
          <ContactsFilled className="dark:text-[#00FF00] text-green-300 pr-8" />
          /Contact Me
        </span>
        <div className="hidden w-[23em] h-[15rem] dark:bg-black rounded-xl sm:flex md:flex justify-center items-center gap-5">
          <div className="bg-[#00FF00] w-[5px] h-[160px]"></div>
          <div className="flex flex-col gap-5">
            <ContactFiller
              heading={"Email:"}
              subheading={"milapmagar12@gmail.com"}
            />
            <ContactFiller
              heading={"Contact: "}
              subheading={"+977-9840028518"}
            />
            <ContactFiller heading={`Discord : `} subheading={"@milapppeyyy"} />
          </div>
        </div>
        <div className="">
          <Marquee
            items={marquee1}
            className="flex items-center animate-marquee gap-10"
          />
          <Marquee
            items={marquee2}
            className="flex items-center animate-marquee2 gap-10"
          />
        </div>
      </div>
      <div className="md:w-[40vw] w-full">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
