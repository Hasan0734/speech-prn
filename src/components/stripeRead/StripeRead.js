import React, { useCallback, useRef } from 'react';
import moment from 'moment/moment';

import Loader from '../ui/Loader';
import Error from '../ui/Error';

import KissMeLogo from '../../assets/images/logos/logo.png';
import ftmoah from '../../assets/images/logos/ftmoah.webp';
import { useGetStripeQuery } from '../../features/stripes/stripesApi';
import StripeBlock from './StripeBlock';

const StripeRead = ({ id, modalHandler }) => {
  const { data: stripe, isLoading, isError } = useGetStripeQuery(id);
  console.log(isLoading)
  React.useEffect(() => {
    if (!id) modalHandler();
  }, [id]);

  console.log({stripe})
  return (
    <main class='w-full'>
      {isLoading ? (
        <Loader />
      ) : isError || !stripe._id ? (
        <Error message='NO Stripes Found!' />
      ) : (
        <div class='card py-4'>
          <div className='relative p-5'>
            <StripeBlock
              stripe={stripe}
            />

            {/* logos */}
            <div className='absolute right-6 top-0'>
              <img className='max-w-[120px]' src={KissMeLogo} alt='' />
            </div>
            <div className='absolute right-6 bottom-0'>
              <img className='max-w-[120px]' src={ftmoah} alt='' />
            </div>
          </div>
        
          {/* content */}
          <div class='flex grow flex-col px-4 pb-5 pt-1 text-center sm:px-5 lg:mx-auto'>
            <div>
              <span class='text-xs+ text-info'>{stripe?.category}</span>
            </div>
            <div class='mt-1'>
              <span class='text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light'>
                {stripe?.title}
              </span>
            </div>
            <div class='my-2 flex items-center space-x-3 text-xs'>
              <div class='h-px flex-1 bg-slate-200 dark:bg-navy-500'></div>
              <p>{moment(stripe?.createdAt).fromNow()}</p>
              <div class='h-px flex-1 bg-slate-200 dark:bg-navy-500'></div>
            </div>
            <p class='my-2 grow text-left line-clamp-3'>
              {stripe?.description}
            </p>
            <div>
              <div
                onClick={modalHandler}
                class='btn mt-4 rounded-full bg-primary font-medium text-white hover:bg-primary-focus hover:shadow-lg hover:shadow-primary/50 focus:bg-primary-focus focus:shadow-lg focus:shadow-primary/50 active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:hover:shadow-accent/50 dark:focus:bg-accent-focus dark:focus:shadow-accent/50 dark:active:bg-accent/90'
              >
                Close
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default StripeRead;
