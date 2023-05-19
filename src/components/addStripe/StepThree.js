import React from 'react';
import SelectOption from '../ui/SelectOption';
import CharacterOptions from './CharacterOptions';
import CharacterBubble from './CharacterBubble';
import TextArea from '../inputs/TextArea';

const StepThree = ({
  values,
  setFieldValue,
  handleChange,
  errors,
  characters,
  position
}) => {
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
            value={values.block3Style}
            placeholder={'Select style'}
            // error={formik.errors.blockType}
            name={'block3Style'}
            label={true}
          />
        </div>

       

        <div className='grid grid-cols-2 gap-6'>
          {/* character 1 */}
          <div>
            <h4>Character 1</h4>
            <CharacterOptions
              values={values}
              handleChange={setFieldValue}
              options={characters}
              value={values.block3Character1}
              placeholder={'Select Character'}
              // error={formik.errors.block3Character1}
              name={'block3Character1'}
              position={position}
            />
            <SelectOption
              handleChange={setFieldValue}
              options={[
                { label: 'Emotion 1', value: 'Emotion 1' },
                { label: 'Emotion 2', value: 'Emotion 2' },
                { label: 'Emotion 3', value: 'Emotion 3' },
              ]}
              value={values.block3Emotion1}
              placeholder={'Select Emotion'}
              // error={formik.errors.block3Emotion1}
              name={'block3Emotion1'}
            />
          </div>
          {/* character 2 */}
          <div>
            <h4>Character 2</h4>

            <CharacterOptions
              values={values}
              handleChange={setFieldValue}
              options={characters}
              value={values.block3Character2}
              placeholder={'Select Character'}
              // error={formik.errors.blockType}
              name={'block3Character2'}
              position={position}
            />
            <SelectOption
              handleChange={setFieldValue}
              options={[
                { label: 'Emotion 1', value: 'Emotion 1' },
                { label: 'Emotion 2', value: 'Emotion 2' },
                { label: 'Emotion 3', value: 'Emotion 3' },
              ]}
              value={values.blockType}
              placeholder={'Select Emotion'}
              // error={formik.errors.blockType}
              disable={values.character2character ? false : true}
              name={'block3Emotion2'}
            />
          </div>
        </div>

        <div>
          <CharacterBubble
            toggleField={{
              speak: 'block3BubbleType1',
              thought: 'block3BubbleType1',
              top: 'block3BubblePosition1',
              bottom: 'block3BubblePosition1',
            }}
            bubbleValue={{
              type: values.block3BubbleType2,
              position: values.block3BubblePosition2,
            }}
            handleChange={setFieldValue}
            characterBubble={'block3Bubble1'}
            title={'Character 1 Bubble'}
            values={values}
          />
          <CharacterBubble
            toggleField={{
              speak: 'block3BubbleType2',
              thought: 'block3BubbleType2',
              top: 'block3BubblePosition2',
              bottom: 'block3BubblePosition2',
            }}
            bubbleValue={{
              type: values.block3BubbleType2,
              position: values.block3BubblePosition2,
            }}
            handleChange={setFieldValue}
            characterBubble={'block3Bubble2'}
            title={'Character 2 Bubble'}
            values={values}
          />
        </div>

        <TextArea
          onChange={handleChange}
          label='Character 1'
          name='block3Text1'
          error=''
          rows={3}
          className='resize-none'
          value={values.block3Text1}
        />

        {values.block3Character2 && (
          <TextArea
            onChange={handleChange}
            label='Character 2'
            name='block3Text2'
            value={values.block3Text2}
            error=''
            rows={3}
            className='resize-none'
          />
        )}
      </div>
    </>
  );
};

export default StepThree;
