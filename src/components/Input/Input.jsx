import React, { forwardRef, useId } from "react";

function Input({ label, type = "text", className="", inputClasses="", ...props }, ref) {
  const id = useId();

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label htmlFor={id}>
            {label}
        </label>
      )}
      <input 
      className={`${inputClasses}`}
      type={type} 
      ref={ref} 
      {...props} 
      id={id} 
      />
    </div>
  );
}

export default forwardRef(Input);
