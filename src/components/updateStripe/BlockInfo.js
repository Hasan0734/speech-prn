import React from 'react';
import CharacterOptions from './CharacterOptions';
import SelectOption from '../ui/SelectOption';
import TextArea from '../inputs/TextArea';
import CharacterBubble from './CharacterBubble';

const BlockInfo = ({
  values,
  setFieldValue,
  handleChange,
  errors,
  characters,
}) => {

  return (
    <>
      <div className='grid grid-cols-2 gap-6'>
        {/* character 1 */}
        <div>
          <h4>Character 1</h4>
          <CharacterOptions
            values={values}
            handleChange={setFieldValue}
            options={characters}
            formValue={values}
            value={values.character1character}
            placeholder={'Select Character'}
            // error={formik.errors.character1character}
            name={'character1character'}
          />
          <SelectOption
            handleChange={setFieldValue}
            options={[
              { label: 'Emotion 1', value: 'Emotion 1' },
              { label: 'Emotion 2', value: 'Emotion 2' },
              { label: 'Emotion 3', value: 'Emotion 3' },
            ]}
            value={values.character1emotion}
            placeholder={'Select Emotion'}
            // error={formik.errors.character1emotion}
            name={'character1emotion'}
          />
        </div>
        {/* character 2 */}
        <div>
          <h4>Character 2</h4>

          <CharacterOptions
            values={values}
            handleChange={setFieldValue}
            options={characters}
            formValue={values}
            value={values.character2character}
            placeholder={'Select Character'}
            // error={formik.errors.blockType}
            name={'character2character'}
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
            name={'character2emotion'}
          />
        </div>
      </div>

      <div>
        <CharacterBubble
          toggleField={{
            speck: 'character1Speck',
            thought: 'character1Thought',
            top: 'character1Top',
            bottom: 'character1Bottom',
          }}
          handleChange={setFieldValue}
          characterBubble={'character1Bubble'}
          title={'Character 1 Bubble'}
          values={values}
        />
        <CharacterBubble
          toggleField={{
            speck: 'character2Speck',
            thought: 'character2Thought',
            top: 'character2Top',
            bottom: 'character2Bottom',
          }}
          handleChange={setFieldValue}
          characterBubble={'character2Bubble'}
          title={'Character 2 Bubble'}
          values={values}
        />
      </div>

      <TextArea
        onChange={handleChange}
        label='Character 1'
        name='character1Text'
        error=''
        rows={3}
        className='resize-none'
        value={values.character1Text}
      />

      {values.character2character && (
        <TextArea
          onChange={handleChange}
          label='Character 2'
          name='character2Text'
          value={values.character2Text}
          error=''
          rows={3}
          className='resize-none'
        />
      )}
    </>
  );
};

export default BlockInfo;
