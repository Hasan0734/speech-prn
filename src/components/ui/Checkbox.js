import React from 'react';

const Checkbox = ({ label, name, title, handleChange }) => {
  return (
    <>
      <label class='inline-flex items-center space-x-2'>
        <input
          onChange={handleChange}
          name={name}
          class='form-checkbox is-basic h-5 w-5 
          rounded border-slate-400/70 checked:bg-primary
           checked:border-primary hover:border-primary focus:border-primary
            dark:border-navy-400 dark:checked:bg-accent dark:checked:border-accent
             dark:hover:border-accent dark:focus:border-accent'
          type='checkbox'
        />
        {label && <p>{title}</p>}
      </label>
    </>
  );
};

export default Checkbox;
