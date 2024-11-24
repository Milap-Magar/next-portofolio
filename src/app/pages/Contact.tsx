import ContactForm from "@/components/ui/ContactForm";
import { ContactsFilled } from "@ant-design/icons";

const Contact = () => {
  return (
    <section
      className="space-y-3 md:space-y-8 w-full h-screen md:flex-row flex-col flex items-start justify-start pt-36 px-4 snap-start"
      id="contact"
    >
      <div className="md:w-[60vw] w-full">
        <span className="h1 dark:text-[#00FF00] text-green-700">
          <ContactsFilled className="dark:text-[#00FF00] text-green-300 pr-8" />
          /Contact Me
        </span>
      </div>
      <div className="md:w-[40vw] w-full">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
