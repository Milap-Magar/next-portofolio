interface InputProps {
  type: "text" | "email" | "textarea"; // The allowed types for the input
  name: string; // The name attribute for the input
  id: string; // The id attribute for the input
  value: string; // The value attribute for controlled input
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void; // The function to handle change in the input
}

const Input = ({ name, id, type, value, onChange }: InputProps) => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        {type === "textarea" ? (
          <textarea
            id={id}
            name={name}
            className="w-[12em] sm:w-[15em] md:w-[20em] border-b border-green-300 py-1 focus:border-b-2 focus:border-green-700 transition-colors focus:outline-none peer bg-inherit placeholder-transparent resize-none"
            placeholder={`Enter your ${name.toLowerCase()}`}
            rows={1}
            onChange={onChange}
            value={value}
          />
        ) : (
          <input
            id={id}
            name={name}
            onChange={onChange}
            value={value}
            type={type}
            className="w-[12em] sm:w-[15em] md:w-[20em] border-b border-green-300 py-1 focus:border-b-2 focus:border-green-700 transition-colors focus:outline-none peer bg-inherit placeholder-transparent"
            placeholder={`Enter your ${name.toLowerCase()}`}
          />
        )}
        <label
          htmlFor={id}
          className="absolute left-0 top-[-1em] text-green-300 dark:text-white text-xs transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-green-300 peer-focus:top-[-1em] peer-focus:text-xs peer-focus:text-green-700"
        >
          {name}
        </label>
      </div>
    </div>
  );
};

export default Input;
