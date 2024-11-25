interface InputProps {
  id: string;
  name: string;
  type: string;
}

const Input = ({ name, id, type }: InputProps) => {
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
          />
        ) : (
          <input
            id={id}
            name={name}
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
