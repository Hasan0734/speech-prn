import React from 'react';
import DrugAndDropFileUpload from '../ui/DrugAndDropFileUpload';
import InputText from '../inputs/InputText';
import { useFormik } from 'formik';

const CharacterForm = ({ modalHandler, submitCharacter }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      image: [],
    },
    onSubmit: async (values, { resetForm }) => {
      submitCharacter(values);
    },
  });

  const { handleChange, handleSubmit, errors, values, setFieldValue } = formik;

  return (
    <>
      <form onSubmit={handleSubmit} className='mx-auto w-full text-left mt-3'>
        <InputText
          value={values.name}
          error={errors.name}
          label='Name of Character'
          name='name'
          onChange={handleChange}
        />
        <div className='mt-5'>
          <label className='py-2 block' htmlFor=''>
            Character Image
          </label>
          <DrugAndDropFileUpload
            maxFiles={1}
            files={values.image}
            fileName={'image'}
            setFiles={setFieldValue}
           
          />
        </div>

        <div className='pt-5 flex justify-center gap-4'>
          <button
            type='button'
            onClick={modalHandler}
            class='btn space-x-2 bg-info font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90'
          >
            <span>Cencel</span>
          </button>
          <button
            type='submit'
            class='btn space-x-2 bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90'
          >
            <span>Submit</span>
          </button>
        </div>
      </form>
    </>
  );
};

export default CharacterForm;
