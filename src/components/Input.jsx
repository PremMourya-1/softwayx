import { forwardRef, useId } from "react";

const Input = forwardRef(({ label, type = "text", error, ...props }, ref) => {
  const id = useId();

  return (
    <div className="relative">
      <input
        id={id}
        ref={ref}
        type={type}
        placeholder={label}
        className={`input-field peer ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" : ""}`}
        {...props}
      />
      <label
        htmlFor={id}
        className={`input-label top-3
          peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500
          peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-brand-blue peer-focus:bg-brand-dark peer-focus:px-1
          peer-[&:not(:placeholder-shown)]:-top-2.5 peer-[&:not(:placeholder-shown)]:text-xs
          peer-[&:not(:placeholder-shown)]:text-gray-400 peer-[&:not(:placeholder-shown)]:bg-brand-dark
          peer-[&:not(:placeholder-shown)]:px-1`}
      >
        {label}
      </label>
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
});

Input.displayName = "Input";
export default Input;
