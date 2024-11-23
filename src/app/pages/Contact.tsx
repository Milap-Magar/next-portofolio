import { ContactsFilled } from "@ant-design/icons";

const Contact = () => {
  return (
    <div
      className="h-screen flex items-start justify-start pt-36 px-4 snap-start"
      id="contact"
    >
      <span className="h1 dark:text-[#00FF00] text-green-700">
        <ContactsFilled className="dark:text-[#00FF00] text-green-300 pr-8" />
        /Contact Me
      </span>
    </div>
  );
};

export default Contact;
