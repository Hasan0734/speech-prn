import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-hot-toast';
import StripPreview from './StripPreview';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import { useGetCharactersQuery } from '../../features/characters/characterApi';
import { useAddStripeMutation } from '../../features/stripes/stripesApi';
import LastPreview from './LastPreview';

const UpdateStripe = ({ modalHandler, data }) => {
  const [addStripe, { isSuccess, isError, error }] = useAddStripeMutation();
  const { data: characters, isLoading } = useGetCharactersQuery();
  const [blocks, setBlocks] = useState([]);
  const [stepPosition, setStepPosition] = useState(1);
  const { title, blockCount, blocks: preBlock } = data;

  const formik = useFormik({
    initialValues: {
      title: title,
      blockType: blockCount,
      blockStyle: preBlock?.length > 0 ? preBlock[0]?.blockStyle : 'long',
      character1character:
        preBlock?.length > 0
          ? preBlock[0]?.characters[0]?.character
            ? preBlock[0]?.characters[0]?.character
            : ''
          : '',
      character1emotion: '',
      character2character:
        preBlock?.length > 0
          ? preBlock[0].characters?.length === 2
            ? preBlock[0]?.characters[1].character
            : ''
          : '',
      character2emotion: '',
      character1Bubble: '',
      character2Bubble: '',
      character1Text:
        preBlock?.length > 0
          ? preBlock[0]?.characters[0]?.dialogue
            ? preBlock[0]?.characters[0]?.dialogue
            : ''
          : '',
      character2Text:
        preBlock?.length > 0
          ? preBlock[0]?.characters?.length === 2
            ? preBlock[0]?.characters[1]?.dialogue
              ? preBlock[0]?.characters[1]?.dialogue
              : ''
            : ''
          : '',
      character1Speck: false,
      character1Thought: false,
      character1Top: false,
      character1Bottom: false,
      character2Speck: false,
      character2Thought: false,
      character2Top: false,
      character2Bottom: false,
    },
    // validationSchema: createBlogSchema,
    onSubmit: async (values, { resetForm }) => {
      const totalCharacter = [
        {
          character: values.character1character._id,
          bubbleType: 'speak',
          bubblePosition: 'top',
          dialogue: values.character1Text,
        },
      ];

      if (values.character2character) {
        totalCharacter.push({
          character: values.character2character._id,
          bubbleType: 'speak',
          bubblePosition: 'top',
          dialogue: values.character2Text,
        });
      }

      const blc = {
        blockStyle: values.blockStyle,
        characterCount: values.character2character ? 2 : 1,
        characters: totalCharacter,
      };

      addStripe({
        title: values.title,
        blockCount: values.blockType,
        blocks: values.blockType === 1 ? [blc] : [...blocks, blc],
      });
    },
  });

  const { handleChange, handleSubmit, errors, values, setFieldValue } = formik;

  const handleSetBlock = () => {
    const totalCharacter = [
      {
        character: values.character1character._id,
        bubbleType: 'speak',
        bubblePosition: 'top',
        dialogue: values.character1Text,
      },
    ];

    if (values.character2character) {
      totalCharacter.push({
        character: values.character2character._id,
        bubbleType: 'speak',
        bubblePosition: 'top',
        dialogue: values.character2Text,
      });
    }

    const blc = {
      blockStyle: values.blockStyle,
      characterCount: values.character2character ? 2 : 1,
      characters: totalCharacter,
    };
    setBlocks([...blocks, blc]);
  };

  const setDefaultValue = (name, value) => {
    setFieldValue(name, value, true);
  };
  const customResetForm = (name, value) => {
    setFieldValue(name, value, true);
  };

  React.useEffect(() => {
    if (characters) {
      setFieldValue('character1character', characters[0], true);
    }

    if (isSuccess) {
      toast.success('Stripe Updated');
      modalHandler();
    }
    if (isError) {
      console.log({ error });
      toast.error('Failed to Update Stripe!');
    }

    if (blockCount > 3) {
      setStepPosition(Number(values.blockType));
    }
    if (stepPosition === 2) {
      console.log('hello')
      setDefaultValue('blockStyle', preBlock[1].blockStyle);
      setDefaultValue(
        'character1character',
        preBlock[1]?.characters[0]?.character
          ? preBlock[1]?.characters[0]?.character
          : ''
      );
      setDefaultValue(
        'character1Text',
        preBlock[1]?.characters[0]?.dialogue
          ? preBlock[1]?.characters[0]?.dialogue
          : ''
      );

      if(preBlock[1]?.characters.length  === 2){
        console.log(preBlock[1]?.characters[1]?.character)
        setDefaultValue(
          'character2character',
          preBlock[1]?.characters[1]?.character
            ? preBlock[1]?.characters[1]?.character
            : ''
        );
        setDefaultValue(
          'character2Text',
          preBlock[1]?.characters[1]?.dialogue
            ? preBlock[1]?.characters[1]?.dialogue
            : ''
        );
      }
    } else if (stepPosition === 3) {
      setDefaultValue('blockStyle', preBlock[2].blockStyle);
      setDefaultValue(
        'character1character',
        preBlock[2]?.characters[0]?.character
          ? preBlock[2]?.characters[0]?.character
          : ''
      );
      setDefaultValue(
        'character1Text',
        preBlock[2]?.characters[0]?.dialogue
          ? preBlock[2]?.characters[0]?.dialogue
          : ''
      );

      if(preBlock[2]?.characters.length  === 2){
        setDefaultValue(
          'character2character',
          preBlock[2]?.characters[1]?.character
            ? preBlock[2]?.characters[1]?.character
            : ''
        );
        setDefaultValue(
          'character2Text',
          preBlock[2]?.characters[1]?.dialogue
            ? preBlock[2]?.characters[1]?.dialogue
            : ''
        );
      }
    }
    if(preBlock?.length > 0){
      setBlocks(preBlock)
    }
  }, [isSuccess, isError, stepPosition]);

  console.log({blocks})

  const getStep = () => {
    switch (stepPosition) {
      case 1:
        return (
          <StepOne
            values={values}
            handleChange={handleChange}
            setFieldValue={setFieldValue}
            errors={errors}
            characters={characters}
          />
        );
      case 2:
        return (
          <StepTwo
            values={values}
            handleChange={handleChange}
            setFieldValue={setFieldValue}
            errors={errors}
            characters={characters}
          />
        );
      case 3:
        return (
          <StepThree
            values={values}
            handleChange={handleChange}
            setFieldValue={setFieldValue}
            errors={errors}
            characters={characters}
          />
        );
    }
  };

  const handleNext = () => {
    if (stepPosition !== 3) {
      setStepPosition(stepPosition + 1);

      handleSetBlock();
      // reset value

      customResetForm('character1character', '');
      customResetForm('character2character', '');
      customResetForm('blockStyle', 'long');
      customResetForm('character1Text', '');
      customResetForm('character2Text', '');
    }
  };

  const handlePrev = () => {
    if (stepPosition !== 1) {
      setStepPosition(stepPosition - 1);
    }
  };

  return (
    <div class='card'>
      <div className='p-5'>
        {/* generate strip preview */}
        <h2 className='text-left text-xl text-black'>Preview Stripe</h2>
        <div className='px-8 py-6 grid grid-cols-3 gap-10'>
          {blocks.length > 0 &&
            blocks.map((blc, i) => (
              <StripPreview key={++i} characters={characters} block={blc} />
            ))}
          {/* {stepPosition === Number(values.blockType) && (
            <LastPreview values={values} />
          )} */}
        </div>
        <div className='mt-10'>
          <div class='border-b border-slate-200 p-4 dark:border-navy-500 sm:px-5'>
            <div class='flex items-center space-x-2'>
              <div class='flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 p-1 text-primary dark:bg-accent-light/10 dark:text-accent-light'>
                <i class='fa-solid fa-layer-group'></i>
              </div>
              <h4 class='text-lg font-medium text-slate-700 dark:text-navy-100'>
                Create a Strip {stepPosition === 2 ? 'Block 2' : ''}
                {stepPosition === 3 ? 'Block 3' : ''}
              </h4>
            </div>
          </div>
          <form onSubmit={handleSubmit} class='mx-auto w-full text-left'>
            {getStep()}

            {/* submit */}
            <div class='flex justify-center space-x-6 p-4 border-t border-slate-200'>
              {Number(values.blockType) > 1 &&
                stepPosition < Number(values.blockType) && (
                  <>
                    {Number(values.blockType) === 1 ? (
                      <button
                        type='button'
                        onClick={modalHandler}
                        class='btn space-x-2 bg-info font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90'
                      >
                        <span>Cencel</span>
                      </button>
                    ) : (
                      <button
                        type='button'
                        onClick={handlePrev}
                        class='btn space-x-2 bg-info font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90'
                      >
                        <span>Prev</span>
                      </button>
                    )}

                    <button
                      onClick={handleNext}
                      type='button'
                      class='btn space-x-2 bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90'
                    >
                      <span>Next</span>
                    </button>
                  </>
                )}
              {(Number(values.blockType) === 1 ||
                stepPosition === Number(values.blockType)) && (
                <>
                  {Number(values.blockType) === 1 ? (
                    <button
                      type='button'
                      onClick={modalHandler}
                      class='btn space-x-2 bg-info font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90'
                    >
                      <span>Cencel</span>
                    </button>
                  ) : (
                    <button
                      type='button'
                      onClick={handlePrev}
                      class='btn space-x-2 bg-info font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90'
                    >
                      <span>Prev</span>
                    </button>
                  )}
                  <button
                    type='submit'
                    class='btn space-x-2 bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90'
                  >
                    <span>Submit</span>
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateStripe;
