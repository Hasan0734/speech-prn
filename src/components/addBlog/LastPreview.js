import React, { useEffect, useRef, useState } from 'react';

const LastPreview = ({ values }) => {
  const {
    blockStyle,
    character1character,
    character1Text,
    character2character,
    character2Text,
   
  } = values;

  const character2 = useRef();

  return (
    <>
      <div className=''>
        <div className='relative'>
          {/* single block */}
          {!character2character && (
            <div
              className={`relative ${
                blockStyle === 'noblock' ? 'border-0' : 'border-4'
              } border-black ${
                blockStyle === 'short' ? 'h-[220px]' : 'h-[300px]'
              } w-full p-4`}
            >
              <p className='font-bold text-left'>{character1Text}</p>
              <img
                className={`${
                  blockStyle === 'long'
                    ? 'max-w-[120px]'
                    : blockStyle === 'short'
                    ? 'max-w-[120px]'
                    : 'max-w-[120px]'
                } absolute -left-6 -bottom-4`}
                src={character1character.link}
                alt=''
              />
            </div>
          )}

          {character1character && character2character && (
            <div
              className={`relative ${
                blockStyle === 'noblock' ? 'border-0' : 'border-4'
              } border-black ${
                blockStyle === 'short' ? 'h-[220px]' : 'h-[300px]'
              } w-[320px] p-4 flex items-center`}
            >
              <div className='px-3 flex justify-between items-center w-full'>
                <div className='relative object-cover'>
                  {character1Text && (
                    <div
                      className={`absolute -left-[80px] -skew-x-[-6deg] -skew-y-[1deg]`}
                      style={{
                        bottom: character2Text
                          ? `${character2.current?.scrollHeight + 140}px`
                          : '150px',
                      }}
                    >
                      <div className='text-left m-bubble1 p-2 w-[250px] border-4 border-black rounded-md bg-white'>
                        <span className='text-sm text-black'>
                          {character1Text}
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
                    src={character1character.link}
                    alt=''
                  />
                </div>

                <div className='relative object-cover'>
                  {character2Text && (
                    <div
                      ref={character2}
                      className={`absolute ${'bottom-[150px] -right-[70px]'} -skew-x-[-6deg] -skew-y-[1deg]`}
                    >
                      <div className='text-left m-bubble4 p-2 w-[250px] border-4 border-black rounded-md bg-white'>
                        <span className='text-sm text-black'>
                          {character2Text}
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
                    src={character2character.link}
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

export default LastPreview;
