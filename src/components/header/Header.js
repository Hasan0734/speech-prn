import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import KissMyEmogiLogo from './../../assets/images/logos/logo.png';
import HermonLogo from './../../assets/images/logos/ftmoah.webp';
import Modal from './../ui/Modal';
import AddStripe from '../addStripe/AddStripe';
import AddCharacter from '../addCharacter/AddCharacter';

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  let [addStripeModal, setAddStripeModal] = React.useState(false);
  const [addCharacterModal, setAddCharacterModal] = React.useState(false);

  const modalCloser = () => {
    setAddStripeModal(false);
    setAddCharacterModal();
  };

  return (
    <div className='w-full h-48'>
      {/* Add New Blog Modal */}
      {addStripeModal && (
        <Modal
          open={addStripeModal}
          modalHandler={modalCloser}
          maxWidth={'max-w-5xl'}
        >
          <AddStripe modalHandler={modalCloser} />
        </Modal>
      )}
      {/* /add new Character */}
      {addCharacterModal && (
        <Modal
          open={addCharacterModal}
          modalHandler={modalCloser}
          maxWidth={'max-w-2xl'}
        >
          <AddCharacter modalHandler={modalCloser} />
        </Modal>
      )}
      {/* Header Images */}
      <div className=' bg-slate-100 h-24 w-full flex items-center justify-center space-x-5 relative'>
        <img className='block h-20' src={HermonLogo} alt='Alister Harmon' />
        <img className='block h-20' src={KissMyEmogiLogo} alt='Kiss my Emoji' />
        <p className='absolute -bottom-8 left-40  text-blue-600 bg-slate-100 py-3 px-12 rounded-xl '>
          Kiss My Emoji*
        </p>
      </div>
      {/* Main Header */}
      <div className='w-full mt-10 md:w-8/12 mx-auto'>
        <p className='flex justify-end font-medium text-black'>
          <span>KME v1.0</span>
        </p>

        <div className='border-2 border-slate-400 bg-slate-100 rounded-t'>
          <p className='font-medium text-black py-3 px-4'>
            EMOJI-DEX / STRIP GENERATOR
          </p>
        </div>
        <div className='border-2 border-t-0 border-slate-400 rounded-b py-4 flex justify-end space-x-2 pr-4'>
          {user && (
            <>
              <button
                onClick={() => setAddStripeModal(true)}
                class='btn border border-warning font-medium text-warning hover:bg-warning hover:text-white focus:bg-warning focus:text-white active:bg-warning/90 rounded-full py-1'
              >
                Add Stripe
              </button>
              <button
                onClick={() => setAddCharacterModal(true)}
                class='btn border border-warning font-medium text-warning hover:bg-warning hover:text-white focus:bg-warning focus:text-white active:bg-warning/90 rounded-full py-1'
              >
                Add Character
              </button>
              <Link
                to='?tab=character_list'
                class='btn border border-warning font-medium text-warning 
                hover:bg-warning hover:text-white focus:bg-warning focus:text-white
                 active:bg-warning/90 rounded-full py-1'
              >
                Characters
              </Link>
              <Link
                to='?tab=logout'
                class='btn border border-warning font-medium text-warning 
                hover:bg-warning hover:text-white focus:bg-warning focus:text-white
                 active:bg-warning/90 rounded-full py-1'
              >
                Signout
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
