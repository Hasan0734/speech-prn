import React from 'react';
import SelectOption from '../ui/SelectOption';
import ToggleSwitch from '../inputs/ToggleSwitch';

const CharacterBubble = ({
  title,
  characterBubble,
  handleChange,
  toggleField,
  values,
}) => {
  const { speck, thought, top, bottom } = toggleField;
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
        <div className='grid grid-cols-2 gap-3 pt-3'>
          <div className='flex items-center justify-between'>
            <h4>Speck</h4>
            <ToggleSwitch 
            checked={values[speck]}
            handleChange={handleChange}
             name={speck} />
          </div>
          <div className='flex items-center justify-between'>
            <h4>Thought</h4>
            <ToggleSwitch 
            checked={values[thought]}
            handleChange={handleChange} 
            name={thought} />
          </div>
          <div className='flex items-center justify-between'>
            <h4>Top</h4>
            <ToggleSwitch 
            checked={values[top]}
            handleChange={handleChange} 
            name={top} />
          </div>
          <div className='flex items-center justify-between'>
            <h4>Bottom</h4>
            <ToggleSwitch 
            checked={values[bottom]}
            handleChange={handleChange} 
            name={bottom} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterBubble;
