import React, {forwardRef, useId} from 'react'


function TextArea({label, cols="20", rows="4", className="", textareaClasses="", ...props}, ref) {

    const id = useId();
    
  return (
    <div className={`w-full ${className}`}>
        {label && (
            <label htmlFor={id}>
                {label}
            </label>
        )}
        <textarea 
            className={`${textareaClasses}`}
            ref={ref}
            name={label} 
            id={id} 
            cols={cols} 
            rows={rows}
            {...props}
        />
    </div>
  )
}

export default forwardRef(TextArea)
