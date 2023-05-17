import React, { useEffect, useRef, useState } from 'react';

const StripPreview = ({ block, characters: allCharacter }) => {
  const { blockStyle, characters } = block;
  const character2 = useRef();


  return (
    <>
      <div className=''>
        <div className='relative'>
          {/* single block */}
          {characters?.length === 1 && (
            <div
              className={`relative ${
                blockStyle === 'noblock' ? 'border-0' : 'border-4'
              } border-black ${
                blockStyle === 'short' ? 'h-[220px]' : 'h-[300px]'
              } w-full p-4`}
            >
              <p className='font-bold text-left'>{characters[0].dialogue}</p>
              <img
                className={`${
                  blockStyle === 'long'
                    ? 'max-w-[120px]'
                    : blockStyle === 'short'
                    ? 'max-w-[120px]'
                    : 'max-w-[120px]'
                } absolute -left-6 -bottom-4`}
                src={`http://127.0.0.1:5000/uploads/emojis/${block.characters[0]?.character.avatar}`}
                alt=''
              />
            </div>
          )}

          {characters?.length === 2 && (
            <div
              className={`relative ${
                blockStyle === 'noblock' ? 'border-0' : 'border-4'
              } border-black ${
                blockStyle === 'short' ? 'h-[220px]' : 'h-[300px]'
              } p-4 flex items-center`}
            >
              <div className='px-3 flex justify-between items-center w-full'>
                <div className='relative object-cover'>
                  {characters[0].dialogue && (
                    <div
                      className={`absolute -left-[80px] -skew-x-[-6deg] -skew-y-[1deg]`}
                      style={{
                        bottom: characters[1].dialogue
                          ? `${character2.current?.scrollHeight + 140}px`
                          : '150px',
                      }}
                    >
                      <div className='text-left m-bubble1 p-2 w-[250px] border-4 border-black rounded-md bg-white'>
                        <span className='text-sm text-black'>
                          {characters[0].dialogue}
                        </span>
                      </div>
                    </div>
                  )}
                  <img
                    className={`${
                      blockStyle === 'long'
                        ? 'w-[105px]'
                        : blockStyle === 'short'
                        ? 'w-[105px]'
                        : 'w-[105px]'
                    } h-[140px]`}
                    src={`http://127.0.0.1:5000/uploads/emojis/${block.characters[0]?.character.avatar}`}
                    alt=''
                  />
                </div>

                <div className='relative object-cover'>
                  {characters[1].dialogue && (
                    <div
                      ref={character2}
                      className={`absolute ${'bottom-[150px] -right-[70px]'} -skew-x-[-6deg] -skew-y-[1deg]`}
                    >
                      <div className='text-left m-bubble4 p-2 w-[250px] border-4 border-black rounded-md bg-white'>
                        <span className='text-sm text-black'>
                          {characters[1].dialogue}
                        </span>
                      </div>
                    </div>
                  )}
                  <img
                    className={`${
                      blockStyle === 'long'
                        ? 'w-[105px]'
                        : blockStyle === 'short'
                        ? 'w-[105px]'
                        : 'w-[105px]'
                    } h-[140px]`}
                    src={`http://127.0.0.1:5000/uploads/emojis/${block.characters[1]?.character.avatar}`}
                    alt=''
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StripPreview;
