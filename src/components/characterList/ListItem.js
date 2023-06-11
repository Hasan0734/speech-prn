import React, { useState } from 'react';
import {
  TrashIcon,
  PencilSquareIcon,

} from '@heroicons/react/24/solid';
import Modal from '../ui/Modal';
import UpdateCharacter from '../updateCharacter/updateCharacter';

const ListItem = () => {
  const [updateModal, setUpdateModal] = useState(false);

  const modalCloser = () => {
    setUpdateModal(false);
  };
  return (
    <>
      {updateModal && (
        <Modal
          open={updateModal}
          modalHandler={modalCloser}
          maxWidth={'max-w-2xl'}
        >
          <UpdateCharacter modalHandler={modalCloser} />
        </Modal>
      )}

      <tr class='border border-transparent border-b-slate-200 dark:border-b-navy-500'>
        <td class='whitespace-nowrap px-4 py-3 sm:px-5'>1</td>
        <td class='whitespace-nowrap px-4 py-3 sm:px-5'>Egg plant</td>
        <td class='whitespace-nowrap px-4 py-3 sm:px-5'>
          <img
            className='max-w-[30px]'
            src='http://127.0.0.1:5000/uploads/emojis/eggplant.png'
            alt=''
          />
        </td>
        <td class='whitespace-nowrap px-4 py-3 sm:px-5 flex items-center gap-1'>

          <button
            onClick={() => {
              setUpdateModal(true);
              // setModal('edit');
              // setid(blog._id);
            }}
          >
            <PencilSquareIcon className='h-7 w-7 px-1.5 py-1 rounded text-gray-100 hover:text-white bg-green-500 hover:bg-green-700 cursor-pointer' />
          </button>
          <button
          // onClick={() => {
          //   setModal('delete');
          //   setid(blog._id);
          // }}
          >
            <TrashIcon className='h-7 w-7 px-1.5 py-1 rounded text-gray-100 hover:text-white bg-red-500 hover:bg-red-700 cursor-pointer' />
          </button>
        </td>
      </tr>
    </>
  );
};

export default ListItem;
