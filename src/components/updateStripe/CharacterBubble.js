import React from 'react';
import SelectOption from '../ui/SelectOption';
import Radio from './Radio';

const CharacterBubble = ({
  title,
  characterBubble,
  handleChange,
  toggleField,
  values,
  bubbleValue
}) => {
  const { speak, thought, top, bottom } = toggleField;

 console.log(bubbleValue)

  return (
    <>
      <div className='grid grid-cols-2 gap-6 my-3'>
        <div>
          <h4>{title}</h4>
          <SelectOption
            handleChange={handleChange}
            options={[
              { label: 'option 1', value: 'option 1' },
              { label: 'option 2', value: 'option 2' },
              { label: 'option 3', value: 'option 3' },
            ]}
            value={values[characterBubble]}
            placeholder={'Select bubble'}
            // error={formik.errors.blockType}
            name={characterBubble}
          />
        </div>
        <div className='grid grid-cols-2 gap-x-8 gap-y-3 pt-3 max-w-[250px]'>
          <div className='flex items-center justify-between'>
            <h4>Speak</h4>
            <Radio
              defaultValue='speak'
              checked={bubbleValue.type === 'speak' ? true : false}
              handleChange={handleChange}
              name={speak}
            />
          </div>
          <div className='flex items-center justify-between'>
            <h4>Thought</h4>
            <Radio
              defaultValue='thought'
              checked={bubbleValue.type === 'thought' ? true : false}
              handleChange={handleChange}
              name={thought}
            />
          </div>
          <div className='flex items-center justify-between'>
            <h4>Top</h4>
            <Radio
              defaultValue='top'
              checked={bubbleValue.position === 'top' ? true : false}
              handleChange={handleChange}
              name={top}
            />
          </div>
          <div className='flex items-center justify-between'>
            <h4>Bottom</h4>
            <Radio
              defaultValue='bottom'
              checked={bubbleValue.position === 'bottom' ? true : false}
              handleChange={handleChange}
              name={bottom}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterBubble;
