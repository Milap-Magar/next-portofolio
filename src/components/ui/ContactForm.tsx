"use client";

import { useRef, useState } from "react";
import Input from "./Input";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot validation
    const honeypot =
      formRef.current?.querySelector<HTMLInputElement>("#honeypot");
    if (honeypot && honeypot.value) {
      console.log("Bot detected! Submission ignored.");
      return;
    }

    // Simple validation
    if (!form.name || !form.email || !form.message) {
      console.log("Please fill out all fields.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      console.log("Form submitted:", form);
      alert("Thank you for your message! We'll get back to you soon.");
    }, 2000);
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="w-[250px] sm:w-[300px] md:w-[400px] h-[450px] sm:h-[400px] md:h-[375px] rounded-xl dark:bg-black/30 
             flex flex-col items-center backdrop-blur-md border border-white/50 shadow-lg shadow-[#00FF00] dark:shadow-white/50"
    >
      <div className="px-5 py-1 md:py-2">
        <h1 className="text-black dark:text-[#00FF00] font-semibold text-[20px] tracking-widest">
          Let's Talk.
        </h1>
        <p className="text-[15px] md:text-[12px] font-light tracking-wider text-black dark:text-white">
          Whether you're looking to build a new website, improve your existing
          website, or bring a unique project to life, I'm here to help!!
        </p>
      </div>
      <div className="p-0 md:p-4 w-[14em] md:w-[25em] space-y-6">
        <label className="pb-2 flex flex-col w-[12em] sm:w-[15em] md:w-[21em]">
          <Input
            type={"text"}
            name={"name"}
            id={"name"}
            value={form.name}
            onChange={handleChange}
          />
        </label>
        <label className="pb-2 flex flex-col w-[12em] sm:w-[15em] md:w-[21em]">
          <Input
            type={"email"}
            name={"email"}
            id={"email"}
            value={form.email}
            onChange={handleChange}
          />
        </label>
        <label className="pb-2 flex flex-col w-[12em] sm:w-[15em] md:w-[21em]">
          <Input
            type={"textarea"}
            name={"message"}
            id={"message"}
            value={form.message}
            onChange={handleChange}
          />
        </label>

        {/* Honeypot Field */}
        <div className="hidden">
          <label htmlFor="honeypot">
            Do not fill this field:
            <input type="text" id="honeypot" name="honeypot" />
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`px-2 py-1 bg-transparent rounded-md border dark:border-white border-green-400 text-black dark:text-white hover:bg-white/20 transition-all ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
