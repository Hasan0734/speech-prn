import React, { useEffect, useRef, useState } from 'react';
import moment from 'moment/moment';
import Modal from '../ui/Modal';

import {
  TrashIcon,
  PencilSquareIcon,
  EyeIcon,
} from '@heroicons/react/24/solid';
import DeleteStripe from '../deleteStripe/DeleteStripe';
import StripeRead from '../stripeRead/StripeRead';
import UpdateStripe from '../updateStripe/UpdateStripe';

const StripeListItem = ({ stripe }) => {
  const {
    _id,
    title,
    description,
    blocks,
    category,
    createdAt,
    user: { name, avatar },
  } = stripe;

  // Modal Functionalities
  const [viewModal, setViewModal] = React.useState(false);
  const [editModal, setEditModal] = React.useState(false);
  const [deleteModal, setDeleteModal] = React.useState(false);
  const [id, setid] = React.useState(null);

  const character2ref = useRef();
  const [scrollHeight, setScrollHeight] = useState('-34px');

  useEffect(() => {
    if (character2ref.current) {
      setScrollHeight(character2ref.current.scrollHeight - 34 + 'px');
    }
  }, []);

  const modalCloser = () => {
    setViewModal(false);
    setEditModal(false);
    setDeleteModal(false);
  };
  const setModal = (type) => {
    switch (type) {
      case 'view':
        modalCloser();
        setViewModal(true);
        break;
      case 'edit':
        modalCloser();
        setEditModal(true);
        break;
      case 'delete':
        modalCloser();
        setDeleteModal(true);
        break;
      default:
        return false;
    }
  };

  return (
    <>
      {viewModal && (
        <Modal
          open={viewModal}
          modalHandler={modalCloser}
          maxWidth='max-w-7xl 2xl:max-w-[72%]'
        >
          <StripeRead id={id} modalHandler={modalCloser} data={stripe} />
        </Modal>
      )}
      {editModal && (
        <Modal
          open={editModal}
          modalHandler={modalCloser}
          maxWidth='max-w-7xl 2xl:max-w-[72%]'
        >
          <UpdateStripe id={id} modalHandler={modalCloser} data={stripe} />
        </Modal>
      )}
      {deleteModal && (
        <Modal open={deleteModal} modalHandler={modalCloser}>
          <DeleteStripe id={id} modalHandler={modalCloser} />
        </Modal>
      )}

      <div class='card relative bg-slate-100 overflow-hidden'>
        <div className='grid grid-cols-3 pt-4'>
          {blocks?.map((block) => (
            <>
              {blocks.length === 1 ? (
                <>
                  <div
                    className={`order-2 relative border-4 border-black h-[150px] w-full p-3 scale-90`}
                  >
                    <div className='relative'>
                      <div
                        className={`absolute -left-5 skew-x-[8deg] skew-y-[361deg]`}
                        style={{ bottom: scrollHeight }}
                      >
                        {block.characters[0]?.dialogue && (
                          <div
                            className='text-left m-bubble5 p-1 w-[80px]
                     border-2 border-black rounded-md bg-white '
                          >
                            <span className='text-sm text-black'>
                              {block.characters[0]?.dialogue}
                            </span>
                          </div>
                        )}
                      </div>
                      <div
                        ref={character2ref}
                        className='absolute -right-4 skew-x-[8deg] skew-y-[361deg]'
                        style={{ bottom: '-27px' }}
                      >
                        {block.characters[1]?.dialogue && (
                          <div className='text-left m-bubble6 p-1 w-[80px] border-2 border-black rounded-md bg-white'>
                            <span className='text-sm text-black'>
                              {block.characters[1]?.dialogue}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className='absolute bottom-6 flex items-end justify-between w-[88%] left-1'>
                      <div className='relative'>
                        <img
                          className='max-w-[50px]'
                          src={`http://127.0.0.1:5000/uploads/emojis/${block.characters[0]?.character.avatar}`}
                          alt=''
                        />
                      </div>

                      <div className='relative'>
                        {block.characters?.length === 2 && (
                          <img
                            className='max-w-[50px]'
                            src={`http://127.0.0.1:5000/uploads/emojis/${block.characters[1]?.character.avatar}`}
                            alt=''
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className='order-1'></div>
                  <div className='order-3'></div>
                </>
              ) : (
                <div
                  className={` relative border-4 border-black h-[150px] w-full p-3 scale-90`}
                >
                  <div className='relative'>
                    <div
                      className={`absolute -left-5 skew-x-[8deg] skew-y-[361deg]`}
                      style={{ bottom: scrollHeight }}
                    >
                      {block.characters[0]?.dialogue && (
                        <div
                          className='text-left m-bubble5 p-1 w-[80px]
                     border-2 border-black rounded-md bg-white '
                        >
                          <span className='text-sm text-black'>
                            {block.characters[0]?.dialogue}
                          </span>
                        </div>
                      )}
                    </div>
                    <div
                      ref={character2ref}
                      className='absolute -right-4 skew-x-[8deg] skew-y-[361deg]'
                      style={{ bottom: '-27px' }}
                    >
                      {block.characters[1]?.dialogue && (
                        <div className='text-left m-bubble6 p-1 w-[80px] border-2 border-black rounded-md bg-white'>
                          <span className='text-sm text-black'>
                            {block.characters[1]?.dialogue}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className='absolute bottom-6 flex items-end justify-between w-[88%] left-1'>
                    <div className='relative'>
                      <img
                        className='max-w-[50px]'
                        src={`http://127.0.0.1:5000/uploads/emojis/${block.characters[0]?.character.avatar}`}
                        alt=''
                      />
                    </div>

                    <div className='relative'>
                      {block.characters?.length === 2 && (
                        <img
                          className='max-w-[50px]'
                          src={`http://127.0.0.1:5000/uploads/emojis/${block.characters[1]?.character.avatar}`}
                          alt=''
                        />
                      )}
                    </div>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>

        <div class='flex w-full grow flex-col px-4 py-3 sm:px-5'>
          <div class='flex items-center justify-between'>
            <div class='badge space-x-2.5 rounded-full bg-info/10 text-info dark:bg-info/15'>
              <div class='h-2 w-2 rounded-full bg-current'></div>
              <span>{category}</span>
            </div>
            <div className='absolute z-10 flex space-x-1 right-2 top-2'>
              <div
                onClick={() => {
                  setModal('view');
                  setid(stripe._id);
                }}
              >
                <EyeIcon className='h-7 w-7 px-1.5 py-1 rounded text-gray-100 hover:text-white bg-blue-500 hover:bg-blue-700 cursor-pointer' />
              </div>
              <div
                onClick={() => {
                  setModal('edit');
                  setid(stripe._id);
                }}
              >
                <PencilSquareIcon className='h-7 w-7 px-1.5 py-1 rounded text-gray-100 hover:text-white bg-green-500 hover:bg-green-700 cursor-pointer' />
              </div>
              <div
                onClick={() => {
                  setModal('delete');
                  setid(stripe._id);
                }}
              >
                <TrashIcon className='h-7 w-7 px-1.5 py-1 rounded text-gray-100 hover:text-white bg-red-500 hover:bg-red-700 cursor-pointer' />
              </div>
            </div>
          </div>
          <div>
            <div
              onClick={() => {
                setModal('view');
                setid(stripe._id);
              }}
              class='text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light line-clamp-2 cursor-pointer'
            >
              {title}
            </div>
          </div>
          <p class='mt-1 line-clamp-2'>{description}</p>
          <div class='grow'>
            <div class='mt-2 flex items-center text-xs'>
              <div class='flex items-center space-x-2 hover:text-slate-800 dark:hover:text-navy-100'>
                <div class='avatar h-6 w-6'>
                  <img class='rounded-full' src={avatar} alt='avatar' />
                </div>
                <span class='line-clamp-1'>{name} </span>
              </div>
              <div class='mx-3 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500'></div>
              <span class='shrink-0 text-slate-400 dark:text-navy-300'>
                {moment(createdAt).fromNow()}
              </span>
            </div>
          </div>
          <div class='mt-1 flex justify-end'>
            <div
              onClick={() => {
                setModal('view');
                setid(stripe._id);
              }}
              class='btn px-2.5 py-1.5 font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25'
            >
              READ ARTICLE
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StripeListItem;
