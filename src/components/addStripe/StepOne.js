import React from 'react';
import SelectOption from '../ui/SelectOption';
import CharacterOptions from './CharacterOptions';
import CharacterBubble from './CharacterBubble';
import TextArea from '../inputs/TextArea';
import InputText from '../inputs/InputText';
import ToggleSwitch from '../ui/ToggleSwitch';

const StepOne = ({
  values,
  setFieldValue,
  handleChange,
  errors,
  characters,
  position,
}) => {

  const handleFlip = (e, name) => {
    setFieldValue(name, e.target.checked, true);
  };

  return (
    <>
      <div
        disabled
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
            value={values.block1Style}
            placeholder={'Select style'}
            // error={formik.errors.blockType}
            name={'block1Style'}
            label={true}
          />
        </div>

        <div className='grid grid-cols-2 gap-6'>
          {/* character 1 */}
          <div>
            <h4>Character 1</h4>
            <div className='flex justify-between items-center space-x-7'>
              <CharacterOptions
                values={values}
                handleChange={setFieldValue}
                options={characters}
                value={values.block1Character1}
                placeholder={'Select Character'}
                // error={formik.errors.block1Character1}
                position={position}
                name={'block1Character1'}
              />
              <div className='flex items-center space-x-2'>
                <span>Flip</span>

                <ToggleSwitch
                  checked={values.block1Character1Flip}
                  handleChange={handleFlip}
                  name={'block1Character1Flip'}
                  disabled={values.block1Character1 ? false : true}
                />
              </div>
            </div>
            <SelectOption
              className='mt-4'
              handleChange={setFieldValue}
              options={[
                { label: 'Emotion 1', value: 'Emotion 1' },
                { label: 'Emotion 2', value: 'Emotion 2' },
                { label: 'Emotion 3', value: 'Emotion 3' },
              ]}
              value={values.block1Emotion1}
              placeholder={'Select Emotion'}
              // error={formik.errors.block1Emotion1}

              name={'block1Emotion1'}
            />
          </div>
          {/* character 2 */}
          <div>
            <h4>Character 2</h4>
            <div className='flex justify-between items-center space-x-7'>
              <CharacterOptions
                values={values}
                handleChange={setFieldValue}
                options={characters}
                value={values.block1Character2}
                placeholder={'Select Character'}
                // error={formik.errors.blockType}
                name={'block1Character2'}
                position={position}
              />
              <div className='flex items-center space-x-2'>
                <span>Flip</span>

                <ToggleSwitch
                  checked={values.block1Character2Flip}
                  handleChange={handleFlip}
                  name={'block1Character2Flip'}
                  disabled={values.block1Character2 ? false : true}
                />
              </div>
            </div>

            <SelectOption
              className='mt-4'
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
              name={'block1Emotion2'}
            />
          </div>
        </div>

        <div>
          <CharacterBubble
            toggleField={{
              speak: 'block1BubbleType1',
              thought: 'block1BubbleType1',
              top: 'block1BubblePosition1',
              bottom: 'block1BubblePosition1',
            }}
            bubbleValue={{
              type: values.block1BubbleType1,
              position: values.block1BubblePosition1,
            }}
            handleChange={setFieldValue}
            characterBubble={'block1Bubble1'}
            title={'Character 1 Bubble'}
            values={values}
          />

          <CharacterBubble
            toggleField={{
              speak: 'block1BubbleType2',
              thought: 'block1BubbleType2',
              top: 'block1BubblePosition2',
              bottom: 'block1BubblePosition2',
            }}
            bubbleValue={{
              type: values.block1BubbleType2,
              position: values.block1BubblePosition2,
            }}
            handleChange={setFieldValue}
            characterBubble={'block1Bubble2'}
            title={'Character 2 Bubble'}
            values={values}
          />
        </div>

        <TextArea
          onChange={handleChange}
          label='Character 1 dialogue'
          name='block1Text1'
          error=''
          rows={3}
          className='resize-none'
          value={values.block1Text1}
        />

        {values.block1Character2 && (
          <TextArea
            onChange={handleChange}
            label='Character 2 dialogue'
            name='block1Text2'
            value={values.block1Text2}
            error=''
            rows={3}
            className='resize-none'
          />
        )}
      </div>
    </>
  );
};

export default StepOne;
