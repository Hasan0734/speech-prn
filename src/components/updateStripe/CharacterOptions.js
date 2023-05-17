import React from 'react';

const CharacterOptions = ({
  values,
  options = [],
  title,
  value,
  error,
  className = '',
  label,
  name,
  handleChange,
  placeholder,
  formValue = null,
  ...attributes
}) => {
  const onChange = (e) => {
    const find = options.find((cha) => cha._id === e.target.value);
    handleChange(name, find, true);
  };

  const isDisable = (_id) => {
    if (name === 'character1character') {
      return values.character2character?._id === _id;
    }
    if (name === 'character2character') {
      return values.character1character?._id === _id;
    }
  };

  return (
    <div>
      <label class='block'>
        {label && <span>{title}</span>}
        <select
          onChange={onChange}
          class={`form-select mt-1.5 w-full rounded-lg border border-slate-300
          bg-white px-3 py-2 hover:border-slate-400 focus:border-primary 
          ${className}`}
          {...attributes}
        >
          <option className='' value={''}>
            {placeholder}
          </option>
          {options?.map((option, i) => (
            <option
              disabled={isDisable(option._id)}
              key={i++}
              value={option._id}
              selected={value._id === option._id}
            >
              {option.title}
            </option>
          ))}
        </select>
      </label>
      {error && <span className='text-tiny+ text-error'>{error}</span>}
    </div>
  );
};

export default CharacterOptions;
