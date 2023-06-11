import React from 'react';
import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';



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
  position,
  ...attributes
}) => {
  const [selected, setSelected] = useState(options[0]);
  const onChange = (e) => {
    const find = options.find((cha) => cha._id === e.target.value);
    handleChange(name, find, true);
  };

  const isDisable = (_id) => {
    switch (position) {
      case 1:
        if (name === 'block1Character1') {
          return values.block1Character2?._id === _id;
        }
        if (name === 'block1Character2') {
          return values.block1Character1?._id === _id;
        }
      case 2:
        if (name === 'block2Character1') {
          return values.block2Character2?._id === _id;
        }
        if (name === 'block2Character2') {
          return values.block2Character1?._id === _id;
        }
      case 3:
        if (name === 'block3Character1') {
          return values.block3Character2?._id === _id;
        }
        if (name === 'block3Character2') {
          return values.block3Character1?._id === _id;
        }
    }
  };

  return (
    <div className='w-full flex-1'>
      {/* <label class='block'>
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
              disabled={isDisable(option?._id)}
              key={i++}
              value={option?._id}
              selected={value?._id === option?._id}
            >
              {option.title}
            </option>
          ))}
        </select>
      </label> */}

      <Listbox  value={selected} onChange={setSelected}>
        <div className='relative mt-1'>
          <Listbox.Button 
         
          className='relative w-full cursor-default rounded-lg bg-white 
          py-2 pl-3 pr-10 text-left focus:outline-none border border-gray-300
           focus-visible:border-indigo-500 focus-visible:ring-2
            focus-visible:ring-white focus-visible:ring-opacity-75
             focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300
              sm:text-sm'>
            <span className='block truncate'>{selected.title}</span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <ChevronDownIcon
                className='h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='z-10 absolute mt-1 max-h-60 w-full
             overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1
              ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {options.map((option, i) => (
                <Listbox.Option
                  key={i}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                  'text-gray-900'
                    }`
                  }
                  value={option}
                >
                  {/* {({ selected }) => ( */}
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {option.title}
                      </span>
                      {/* {selected ? (
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                          <CheckIcon className='h-5 w-5' aria-hidden='true' />
                        </span>
                      ) : null} */}
                    </>
                  {/* )} */}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>

      {error && <span className='text-tiny+ text-error'>{error}</span>}
    </div>
  );
};

export default CharacterOptions;
