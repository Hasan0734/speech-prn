import React from 'react';

const SelectOption = ({
  options = [],
  title,
  value,
  error,
  className = 'mt-1.5',
  label,
  name,
  handleChange,
  placeholder,
  formValue = null,
  ...attributes
}) => {
  const onChange = (e) => {
    handleChange(name, e.target.value, true);
  };

  return (
    <div>
      <label class='block'>
        {label && <span>{title}</span>}
        <select
          onChange={onChange}
          class={`${className} form-select  w-full rounded-lg border border-slate-300
          bg-white px-3 py-2 hover:border-slate-400 focus:border-primary 
          `}
          defaultValue={value}
          {...attributes}
        >
          <option className='' value=''>
            {placeholder}
          </option>
          {options?.map((option, i) => (
            <option key={i++} value={option.value} >
              {option.label}
            </option>
          ))}
        </select>
      </label>
      {error && <span className='text-tiny+ text-error'>{error}</span>}
    </div>
  );
};

export default SelectOption;
