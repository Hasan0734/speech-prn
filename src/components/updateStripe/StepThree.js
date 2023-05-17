import React from 'react';
import SelectOption from '../ui/SelectOption';
import BlockInfo from './BlockInfo';

const StepThree = ({ values, setFieldValue, handleChange, errors,characters }) => {
  return (
    <>
      <div
        className='space-y-4 max-h-[350px] 2xl:max-h-full overflow-y-scroll
           2xl:overflow-auto sm:px-5 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300'
      >
        <div className='flex items-start gap-x-4'>
          <SelectOption
            handleChange={setFieldValue}
            options={[
              { label: 'Long Block', value: 'long' },
              { label: 'Short Block', value: 'short' },
              { label: 'NO Block', value: 'noblock' },
            ]}
            title='Block Style'
            value={values.blockStyle}
            placeholder={'Select style'}
            // error={formik.errors.blockType}
            name={'blockStyle'}
            label={true}
          />
        </div>

        <BlockInfo
          values={values}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
          errors={errors}
          characters={characters}
        />
      </div>
    </>
  );
};

export default StepThree;
