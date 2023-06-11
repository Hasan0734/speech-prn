import React from 'react';

const ToggleSwitch = ({
  checked,
  name,
  handleChange,
  ...attributes
}) => {


  return (
    <label className='flex items-center'>
      <input
        name={name}
        type='checkbox'
        defaultChecked={checked}
        onChange={(e) => handleChange(e, name)}
        {...attributes}
        class='form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-slate-100 before:rounded-full before:bg-slate-300 checked:!border-success checked:before:!bg-success dark:border-navy-500 dark:bg-navy-900 dark:before:bg-navy-400'
      />
    </label>
  );
};

export default ToggleSwitch;
