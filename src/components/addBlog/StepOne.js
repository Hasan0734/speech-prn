import React from 'react';
import SelectOption from '../ui/SelectOption';
import InputText from './../inputs/InputText';
import BlockInfo from './BlockInfo';

const StepOne = ({
  values,
  setFieldValue,
  handleChange,
  errors,
  characters,
}) => {
  return (
    <>
      <div
        className='space-y-4 max-h-[350px] 2xl:max-h-full overflow-y-scroll
           2xl:overflow-auto sm:px-5 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300'
      >
        <InputText
          value={values.title}
          error={errors.title}
          label='Title'
          name='title'
          placeholder='Enter Title'
          onChange={handleChange}
        />

        <div className='flex items-start gap-x-4'>
          <SelectOption
            handleChange={setFieldValue}
            options={[
              { label: '1 Block', value: 1 },
              { label: '2 Block', value: 2 },
              { label: '3 Block', value: 3 },
            ]}
            title='Block Type'
            value={values.blockType}
            placeholder={'Select Type'}
            // error={formik.errors.blockType}
            name={'blockType'}
            label={true}
          />
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

export default StepOne;
