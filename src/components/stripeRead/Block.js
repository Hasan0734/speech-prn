import React, { useEffect, useRef, useState } from 'react';

const Block = ({ block, index, stripe }) => {
  const character2ref = useRef();
  const [scrollHeight, setScrollHeight] = useState('-120px');

  useEffect(() => {
    if (character2ref.current) {
      setScrollHeight(character2ref.current.scrollHeight - 120 + 'px');
    }
  }, []);

  console.log(stripe.blockCount)

  return (
    <>
      <div className='relative 2xl:w-full'>
        {index === 0 && (
          <>
            {index === 0 &&  <p className={`-rotate-90 text-xs absolute ${stripe.blockCount === 2 ? ' -left-[247px] bottom-[167px]' : ' -left-[177px] bottom-[130px]'} ${stripe.blockCount === 1 ? ' -left-[495px] bottom-[160px]' : ' -left-[177px] bottom-[130px]'} w-full`}>
              ©2020 Alister Harmon w/ Haromn Group Media Partners LLC.
            </p>}
            <div className='flex items-center justify-between'>
              <h2 className='font-bold text-xl text-black uppercase text-left'>
                Kiss My Emoji
              </h2>
              { index === 0 && stripe.blockCount === 1 && (
                <h2 className='font-bold text-sm leading-6 text-black uppercase text-left'>
                  From the mind of Alister Harmon
                </h2>
              )}
            </div>
          </>
        )}
        {index === 1 &&  stripe.blockCount === 2 && (
          <h2 className='font-bold text-sm leading-6 text-black uppercase text-left'>
            From the mind of Alister Harmon
          </h2>
        )}
        {index === 2 &&  stripe.blockCount === 3 && (
          <h2 className='font-bold text-sm leading-6 text-black uppercase text-left'>
            From the mind of Alister Harmon
          </h2>
        )}
        <div className='relative border-4 border-black h-[300px] 2xl:h-[320px] w-full p-3'>
          <div className='relative'>
            <div
              className={`absolute -left-5 skew-x-[8deg] skew-y-[361deg]`}
              style={{ bottom: stripe.blockCount === 1 ? '-100px' : scrollHeight }}
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
              style={{ bottom: stripe.blockCount === 1 ? '-100px' : '-120px' }}
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

          <div className={`flex items-center justify-between ${stripe.blockCount === 1 ? 'mt-[120px]' : 'mt-[140px]'}`}>
            <div className='relative'>
              <img
                 className={`${stripe.blockCount === 1 ? 'max-w-[130px]' : 'max-w-[100px]'} `}
                src={`http://127.0.0.1:5000/uploads/emojis/${block.characters[0]?.character.avatar}`}
                alt=''
              />
            </div>

            <div className='relative'>
              {block.characters?.length === 2 && (
                <img
                  className={`${stripe.blockCount === 1 ? 'max-w-[130px]' : 'max-w-[100px]'} `}
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
