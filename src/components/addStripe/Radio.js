import React from 'react';

const Radio = ({
  checked,
  name,
  handleChange,
  defaultValue,
  ...attributes
}) => {
  const onChange = (e) => {
    handleChange(name, e.target.value, true);
  };

  return (
    <label className='flex items-center'>
      <input
        name={name}
        type='radio'
        defaultValue={defaultValue}
        checked={checked}
        onChange={onChange}
        {...attributes}
        class='form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-slate-100 before:rounded-full before:bg-slate-300 checked:!border-success checked:before:!bg-success dark:border-navy-500 dark:bg-navy-900 dark:before:bg-navy-400'
      />
    </label>
  );
};

export default Radio;
