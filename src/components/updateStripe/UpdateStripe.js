import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-hot-toast';
import { useGetCharactersQuery } from '../../features/characters/characterApi';
import { useUpdateStripeMutation } from '../../features/stripes/stripesApi';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StripePreview from './StripePreview';

const UpdateStripe = ({ id, modalHandler, data }) => {
  const [updateStripe, { isSuccess, isError, error }] =
    useUpdateStripeMutation();
  const { data: characters, isLoading } = useGetCharactersQuery();
  const [stepPosition, setStepPosition] = useState(1);
  const { title, blockCount, blocks } = data;

  const formik = useFormik({
    initialValues: {
      title: title,
      blockType: data.blockCount,
      block1Style: blocks[0]?.blockStyle ? blocks[0]?.blockStyle : 'long',
      block2Style: blocks[1]?.blockStyle ? blocks[1]?.blockStyle : 'long',
      block3Style: blocks[2]?.blockStyle ? blocks[2]?.blockStyle : 'long',
      block1Character1: '',
      block1Character2: '',
      block2Character1: '',
      block2Character2: '',
      block3Character1: '',
      block3Character2: '',
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
      block1Text1: blocks[0]?.characters[0]?.dialogue
        ? blocks[0]?.characters[0]?.dialogue
        : '',
      block1Text2: blocks[0]?.characters[1]?.dialogue
        ? blocks[0]?.characters[1]?.dialogue
        : '',
      block2Text1: blocks[1]?.characters[0]?.dialogue
        ? blocks[1]?.characters[0]?.dialogue
        : '',
      block2Text2: blocks[1]?.characters[1]?.dialogue
        ? blocks[1]?.characters[1]?.dialogue
        : '',
      block3Text1: blocks[2]?.characters[0]?.dialogue
        ? blocks[2]?.characters[0]?.dialogue
        : '',
      block3Text2: blocks[2]?.characters[1]?.dialogue
        ? blocks[2]?.characters[1]?.dialogue
        : '',
      block1Speck1: '',
      block1Speck2: '',
      block2Speck1: '',
      block2Speck2: '',
      block3Speck1: '',
      block3Speck2: '',
      block1Thought1: '',
      block1Thought2: '',
      block2Thought1: '',
      block2Thought2: '',
      block3Thought1: '',
      block3Thought2: '',
      block1Top1: '',
      block1Top2: '',
      block2Top1: '',
      block2Top2: '',
      block3Top1: '',
      block3Top2: '',
      block1Bottom1: '',
      block1Bottom2: '',
      block2Bottom1: '',
      block2Bottom2: '',
      block3Bottom1: '',
      block3Bottom2: '',
    },
    // validationSchema: createBlogSchema,
    onSubmit: async (values, { resetForm }) => {
      const createCharacter = (
        character1ID,
        dialogue1,
        dialogue2,
        character2ID
      ) => {
        const totalCharacter = [];
        if (character1ID) {
          totalCharacter.push({
            character: character1ID,
            bubbleType: 'speak',
            bubblePosition: 'top',
            dialogue: dialogue1,
          });
        }

        if (character2ID) {
          totalCharacter.push({
            character: character2ID,
            bubbleType: 'speak',
            bubblePosition: 'top',
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
            values.block1Text2,
            values.block1Character2?._id
          )?.length,
          characters: createCharacter(
            values.block1Character1?._id,
            values.block1Text1,
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
            values.block2Text2,
            values.block2Character2?._id
          )?.length,
          characters: createCharacter(
            values.block2Character1?._id,
            values.block2Text1,
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
            values.block3Text2,
            values.block3Character2?._id
          )?.length,
          characters: createCharacter(
            values.block3Character1?._id,
            values.block3Text1,
            values.block3Text2,
            values.block3Character2?._id
          ),
        };
        newBlocks.push(blc);
      }


      updateStripe({id, data:{
        title: values.title,
        blockCount: values.blockType,
        blocks: newBlocks,
      }});
    },
  });

  const { handleChange, handleSubmit, errors, values, setFieldValue } = formik;

  const setDefaultValue = (name, value) => {
    setFieldValue(name, value, true);
  };

  React.useEffect(() => {
    if (characters) {
      if (!values.block1Character1) {
        setDefaultValue(
          'block1Character1',
          blocks[0]?.characters[0]?.character?._id
            ? characters?.find(
                (ch) => ch._id === blocks[0]?.characters[0]?.character?._id
              )
            : ''
        );
      }
      if (!values.block1Character2) {
        setDefaultValue(
          'block1Character2',
          blocks[0]?.characters[1]?.character?._id
            ? characters?.find(
                (ch) => ch._id === blocks[0]?.characters[1]?.character?._id
              )
            : ''
        );
      }
      if (!values.block2Character1) {
        setDefaultValue(
          'block2Character1',
          blocks[1]?.characters[0]?.character?._id
            ? characters?.find(
                (ch) => ch._id === blocks[1]?.characters[0]?.character?._id
              )
            : ''
        );
      }
      if (!values.block2Character2) {
        setDefaultValue(
          'block2Character2',
          blocks[1]?.characters[1]?.character?._id
            ? characters?.find(
                (ch) => ch._id === blocks[1]?.characters[1]?.character?._id
              )
            : ''
        );
      }

    if(!values.block3Character1){
      setDefaultValue(
        'block3Character1',
        blocks[1]?.characters[0]?.character?._id
          ? characters?.find(
              (ch) => ch._id === blocks[1]?.characters[0]?.character?._id
            )
          : ''
      );
    }
     if(!values.block3Character2){
      setDefaultValue(
        'block3Character2',
        blocks[2]?.characters[1]?.character?._id
          ? characters?.find(
              (ch) => ch._id === blocks[2]?.characters[1]?.character?._id
            )
          : ''
      );
     }
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
  }, [isSuccess, isError, stepPosition, characters]);


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
          {1 <= values.blockType && (
            <StripePreview
              values={{
                character1: values.block1Character1,
                character2: values.block1Character2,
                character1Text: values.block1Text1,
                character2Text: values.block1Text2,
                blockStyle: values.block1Style,
              }}
            />
          )}
          {2 <= values.blockType && (
            <StripePreview
              values={{
                character1: values.block2Character1,
                character2: values.block2Character2,
                character1Text: values.block2Text1,
                character2Text: values.block2Text2,
                blockStyle: values.block2Style,
              }}
            />
          )}
          {3 <= values.blockType && (
            <StripePreview
              values={{
                character1: values.block3Character1,
                character2: values.block3Character2,
                character1Text: values.block3Text1,
                character2Text: values.block3Text2,
                blockStyle: values.block3Style,
              }}
            />
          )}
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
                    <span>Update</span>
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
