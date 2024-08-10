import { useId } from 'react';

function Select({
  options,         // Array of options to display in the dropdown
  label,           // Optional label for the select field
  className = '',  // Additional custom CSS classes
  ...props         // Other props passed down to the select element
}, ref) {

  const id = useId(); // Generate a unique ID for the select element

  return (
    <div className='w-full'>
      {label && (
         <label htmlFor={id} className='block text-sm font-medium text-gray-700'>
          {label}
        </label>
      )}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
