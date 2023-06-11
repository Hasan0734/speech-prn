import React, { useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-hot-toast';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import { useGetCharactersQuery } from '../../features/characters/characterApi';
import { useAddStripeMutation } from '../../features/stripes/stripesApi';
import StripePreview from './StripePreview';

const AddStripe = ({ modalHandler }) => {
  const [addStripe, { isSuccess, isError, error }] = useAddStripeMutation();
  const { data: characters, isLoading } = useGetCharactersQuery();
  const [stepPosition, setStepPosition] = useState(1);

  const formik = useFormik({
    initialValues: {
      title: '',
      blockType: 1,
      block1Style: 'long',
      block2Style: 'long',
      block3Style: 'long',
      block1Character1: '',
      block1Character1Flip: false,
      block1Character2: '',
      block1Character2Flip: false,
      block2Character1: '',
      block2Character1Flip: false,
      block2Character2: '',
      block2Character2Flip: false,
      block3Character1: '',
      block3Character1Flip: false,
      block3Character2: '',
      block3Character2Flip: false,
      block1Emotion1: '',
      block1Emotion2: '',
      block2Emotion1: '',
      block2Emotion2: '',
      block3Emotion1: '',
      block3Emotion2: '',
      block1Bubble1: '',
      block1Bubble2: '',
      block2Bubble1: '',
      block2Bubble2: '',
      block3Bubble1: '',
      block3Bubble2: '',
      block1Text1: '',
      block1Text2: '',
      block2Text1: '',
      block2Text2: '',
      block3Text1: '',
      block3Text2: '',
      block1BubbleType1: 'speak',
      block1BubbleType2: 'speak',
      block2BubbleType1: 'speak',
      block2BubbleType2: 'speak',
      block3BubbleType1: 'speak',
      block3BubbleType2: 'speak',
      block1BubblePosition1: 'top',
      block1BubblePosition2: 'top',
      block2BubblePosition1: 'top',
      block2BubblePosition2: 'top',
      block3BubblePosition1: 'top',
      block3BubblePosition2: 'top',
    },
    // validationSchema: createBlogSchema,

    onSubmit: async (values, { resetForm }) => {
      const createCharacter = (
        character1ID,
        dialogue1,
        bubbleType1,
        bubbleType2,
        bubblePosition1,
        bubblePosition2,
        dialogue2,
        character2ID
      ) => {
        const totalCharacter = [];
        if (character1ID) {
          totalCharacter.push({
            character: character1ID,
            bubbleType: bubbleType1,
            bubblePosition: bubblePosition1,
            dialogue: dialogue1,
          });
        }

        if (character2ID) {
          totalCharacter.push({
            character: character2ID,
            bubbleType: bubbleType2,
            bubblePosition: bubblePosition2,
            dialogue: dialogue2,
          });
        }
        return totalCharacter;
      };

      const newBlocks = [];

      if (1 <= values.blockType) {
        const blc = {
          blockStyle: values.block1Style,
          characterCount: createCharacter(
            values.block1Character1?._id,
            values.block1Text1,
            values.block1BubbleType1,
            values.block1BubbleType2,
            values.block1BubblePosition1,
            values.block1BubblePosition2,
            values.block1Text2,
            values.block1Character2?._id
          )?.length,
          characters: createCharacter(
            values.block1Character1?._id,
            values.block1Text1,
            values.block1BubbleType1,
            values.block1BubbleType2,
            values.block1BubblePosition1,
            values.block1BubblePosition2,
            values.block1Text2,
            values.block1Character2?._id
          ),
        };

        newBlocks.push(blc);
      }
      if (2 <= values.blockType) {
        const blc = {
          blockStyle: values.block2Style,
          characterCount: createCharacter(
            values.block2Character1?._id,
            values.block2Text1,
            values.block2BubbleType1,
            values.block2BubbleType2,
            values.block2BubblePosition1,
            values.block2BubblePosition2,
            values.block2Text2,
            values.block2Character2?._id
          )?.length,
          characters: createCharacter(
            values.block2Character1?._id,
            values.block2Text1,
            values.block2BubbleType1,
            values.block2BubbleType2,
            values.block2BubblePosition1,
            values.block2BubblePosition2,
            values.block2Text2,
            values.block2Character2?._id
          ),
        };
        newBlocks.push(blc);
      }
      if (3 <= values.blockType) {
        const blc = {
          blockStyle: values.block3Style,
          characterCount: createCharacter(
            values.block3Character1?._id,
            values.block3Text1,
            values.block3BubbleType1,
            values.block3BubbleType2,
            values.block3BubblePosition1,
            values.block3BubblePosition2,
            values.block3Text2,
            values.block3Character2?._id
          )?.length,
          characters: createCharacter(
            values.block3Character1?._id,
            values.block3Text1,
            values.block3BubbleType1,
            values.block3BubbleType2,
            values.block3BubblePosition1,
            values.block3BubblePosition2,
            values.block3Text2,
            values.block3Character2?._id
          ),
        };
        newBlocks.push(blc);
      }
      addStripe({
        title: values.title,
        blockCount: values.blockType,
        blocks: newBlocks,
      });
    },
  });

  const { handleChange, handleSubmit, errors, values, setFieldValue } = formik;

  React.useEffect(() => {
    if (characters?.length > 0) {
      setFieldValue('block1Character1', characters[0], true);
      setFieldValue('block2Character1', characters[0], true);
      setFieldValue('block3Character1', characters[0], true);
    }

    if (isSuccess) {
      toast.success('Stripe Added');
      modalHandler();
    }
    if (isError) {
      console.log({ error });
      toast.error('Failed to Add Stripe!');
    }

    if (values.blockType) {
      setStepPosition(Number(values.blockType));
    }
  }, [isSuccess, isError]);

  const getStep = () => {
    switch (stepPosition) {
      case 1:
        return (
          <StepOne
            position={stepPosition}
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
            position={stepPosition}
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
            position={stepPosition}
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
        <div className='px-12 pt-20 pb-6 grid grid-cols-3 gap-10'>
          {1 <= values.blockType && (
            <StripePreview
              activePosition={stepPosition}
              position={1}
              setStepPosition={setStepPosition}
              values={{
                character1: values.block1Character1,
                character2: values.block1Character2,
                character1Text: values.block1Text1,
                character2Text: values.block1Text2,
                blockStyle: values.block1Style,
                character1Flip: values.block1Character1Flip,
                character2Flip: values.block1Character2Flip,
              }}
            />
          )}
          {2 <= values.blockType && (
            <StripePreview
              activePosition={stepPosition}
              position={2}
              setStepPosition={setStepPosition}
              values={{
                character1: values.block2Character1,
                character2: values.block2Character2,
                character1Text: values.block2Text1,
                character2Text: values.block2Text2,
                blockStyle: values.block2Style,
                character1Flip: values.block2Character1Flip,
                character2Flip: values.block2Character2Flip,
              }}
            />
          )}

          {3 <= values.blockType && (
            <StripePreview
              activePosition={stepPosition}
              position={3}
              setStepPosition={setStepPosition}
              values={{
                character1: values.block3Character1,
                character2: values.block3Character2,
                character1Text: values.block3Text1,
                character2Text: values.block3Text2,
                blockStyle: values.block3Style,
                character1Flip: values.block3Character1Flip,
                character2Flip: values.block3Character2Flip,
              }}
            />
          )}
        </div>

        <div className='mt-6'>
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
              {/* {Number(values.blockType) > 1 &&
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
               
                </>
              )} */}
              {stepPosition === Number(values.blockType) && <button
                type='submit'
                class='btn space-x-2 bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90'
              >
                <span>Submit</span>
              </button>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStripe;
