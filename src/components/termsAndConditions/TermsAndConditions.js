import React from 'react';
import { conditions } from '../../utils/data';
import {XMarkIcon} from '@heroicons/react/24/solid';
const TermsAndConditions = ({ modalCloser }) => {
  return (
    <>
      <div class='card relative'>
        <button 
        onClick={modalCloser}
        className='absolute right-4 top-4'>
        <XMarkIcon className='w-8 h-8'/>
        </button>
        <div className='p-10 mx-8'>
          <div className='text-left'>
            <h1 className='text-2xl font-semibold text-center text-gray-900 mb-4 underline underline-offset-4'>
              Terms and Conditions
            </h1>
            <br />
            <ol className='list-decimal text-gray-600'>
              {conditions.map((con) => (
               <>
                <li 
                key={con?.id} 
                className='font-medium'>
                  {con?.title}
                  <ol 
                  className='font-normal mt-2'
                  >
                    {con?.child?.map((chi) => (
                      <li 
                      className='text-justify my-1.5'
                       key={chi.id}>
                        {chi.text}
                       {chi?.childofchild && <ol className='ml-28'>
                        {chi.childofchild.map(chiofchi => (
                            <li className='my-1.5 text-sm'>{chiofchi.text}</li>
                        ))}
                      
                        </ol>}
                        </li>
                      
                    ))}
                  </ol>
                </li>
                <br />
               </>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
