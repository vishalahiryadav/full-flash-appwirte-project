import React, { useId } from "react";

export const Input = React.forwardRef(function Input(
  {
    label,
    type = "text",
    className = '',
    ...props
  },
  ref
) {
  const id = useId(); // Generate a unique ID for the input

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={id} 
        className="inline-block mb-1 pl-1">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black
            outline-none focu:bg-gray-50 
            duration-200 border border-gray-200 w-full
            
            ${className}`}
        {...props}
      />
    </div>
  );
});
