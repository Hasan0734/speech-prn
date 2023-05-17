import React, { useEffect, useRef, useState } from 'react';

const Block = ({ block, index }) => {
  const character2ref = useRef();
  const [scrollHeight, setScrollHeight] = useState('-120px');

  useEffect(() => {
    if (character2ref.current) {
      setScrollHeight(character2ref.current.scrollHeight - 120 + 'px');
    }
  }, []);

  return (
    <>
      <div className='relative 2xl:w-full'>
        {index === 0 && (
          <>
            <p className='-rotate-90 text-xs absolute -left-[177px] bottom-[180px] w-full'>
              ©2020 Alister Harmon w/ Haromn Group Media Partners LLC.
            </p>
            <h2 className='font-bold text-xl text-black uppercase text-left'>
              Kiss My Emoji
            </h2>
          </>
        )}

        {index === 2 && (
           <h2 className='font-bold text-sm leading-6 text-black uppercase text-left'>
           From the mind of Alister Harmon
         </h2>
        )}

        <div className='relative border-4 border-black h-[300px] 2xl:h-[320px] w-full p-3'>
          <div className='relative'>
            <div
              className={`absolute -left-5 skew-x-[8deg] skew-y-[361deg]`}
              style={{ bottom: scrollHeight }}
            >
              {block.characters[0]?.dialogue && (
                <div className='text-left m-bubble3 p-2 w-[270px] border-4 border-black rounded-md bg-white'>
                  <span className='text-sm text-black'>
                    {block.characters[0]?.dialogue}
                  </span>
                </div>
              )}
            </div>
            <div
              ref={character2ref}
              className='absolute -right-5 skew-x-[8deg] skew-y-[361deg]'
              style={{ bottom: '-120px' }}
            >
              {block.characters[1]?.dialogue && (
                <div className='text-left m-bubble2 p-2 w-[257px] border-4 border-black rounded-md bg-white'>
                  <span className='text-sm text-black'>
                    {block.characters[1]?.dialogue}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className='absolute bottom-6 flex items-center justify-between w-[88%] left-6'>
            <div className='relative'>
              <img
                className='max-w-[100px]'
                src={`http://127.0.0.1:5000/uploads/emojis/${block.characters[0]?.character.avatar}`}
                alt=''
              />
            </div>

            <div className='relative'>
              {block.characters?.length === 2 && (
                <img
                  className='max-w-[100px]'
                  src={`http://127.0.0.1:5000/uploads/emojis/${block.characters[1]?.character.avatar}`}
                  alt=''
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Block;
