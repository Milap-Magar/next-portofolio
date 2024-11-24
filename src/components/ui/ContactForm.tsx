"use client";

import { useRef, useState } from "react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState<boolean>(false);

  const [form, setFrom] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = () => {};
  const handleSubmit = () => {};

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[250px] sm:w-[300px] md:w-[440px] h-[450px] sm:h-[400px] md:h-[355px] rounded-xl py-2 bg-white dark:bg-black flex flex-col items-center"
    >
      <div className="px-5 py-1 md:py-2">
        <h1 className="text-black dark:text-white font-semibold text-[20px] tracking-widest">
          Let's Talk.
        </h1>
        <p className=" text-[15px] md:text-[12px] font-light tracking-wider">
          Weather you're looking to build a new website, improve your exisiting
          website, or bring a unqiue project to life, I'm here to help!!
        </p>
      </div>
      <div className="p-0 md:p-2 w-[30vh] md:w-[30vw]">
        <label className="pb-2 flex flex-col">
          <span className="">Full Name</span>
          <input
            type="text"
            name="name"
            value={form.value}
            onChange={handleChange}
            placeholder="John Doe"
            className="border border-white rounded-md p-1 bg-transparent w-full"
          />
        </label>
        <label className="pb-2 flex flex-col">
          <span className="">Email</span>
          <input
            type="text"
            name="name"
            value={form.value}
            onChange={handleChange}
            placeholder="johndoe@info.com"
            className="border border-white rounded-md p-1 bg-transparent"
          />
        </label>
        <label className="pb-2 flex flex-col">
          <span className="">Full Name</span>
          <input
            type="text"
            name="name"
            value={form.value}
            onChange={handleChange}
            placeholder="johndoe@info.com"
            className="border border-white rounded-md p-1 bg-transparent"
          />
        </label>
        <button type="submit" className="px-2 py-1 bg-transparent rounded-md border dark:text-white">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
