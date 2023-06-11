import React from 'react';
import CharacterForm from '../CharacterForm/CharacterForm';

const AddCharacter = ({ modalHandler }) => {
  const submitCharacter = (values) => {
    console.log(values);
  };

  return (
    <div class='card'>
      <div className='p-10'>
        <div class='border-b border-slate-200 p-4 dark:border-navy-500 sm:px-5'>
          <div class='flex items-center space-x-2'>
            <div class='flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 p-1 text-primary dark:bg-accent-light/10 dark:text-accent-light'>
              <i class='fa-solid fa-layer-group'></i>
            </div>
            <h4 class='text-lg font-medium text-slate-700 dark:text-navy-100'>
              Upload Character
            </h4>
          </div>
        </div>
        <CharacterForm
          height={150}
          submitCharacter={submitCharacter}
          modalHandler={modalHandler}
        />
      </div>
    </div>
  );
};

export default AddCharacter;
