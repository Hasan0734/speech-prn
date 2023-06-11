import React, { useEffect, useRef, useState } from 'react';

const StripePreview = ({ values, position, setStepPosition, activePosition }) => {

  const {
    character1,
    character2,
    character1Text,
    character2Text,
    blockStyle,
    character1Flip,
    character2Flip,
  } = values;

  const character2Ref = useRef();

  const handleSelect = () => {
    setStepPosition(position);
  };

  return (
    <>
     
        <div onClick={handleSelect}
         className={`relative transition-all duration-300 ${activePosition === position ? 'scale-105' : 'scale-100'}`}>
          {/* single block */}
          {!character2 && (
            <div
              className={`relative ${
                blockStyle === 'noblock' ? 'border-0' : 'border-4'
              } ${activePosition === position ? "border-green-500" : 'border-black'} ${
                blockStyle === 'short' ? 'h-[220px]' : 'h-[260px]'
              } w-full p-4`}
            >
              <p className='font-bold text-left'>{character1Text}</p>
             { character1 && <img
                className={`${
                  blockStyle === 'long'
                    ? 'max-w-[110px]'
                    : blockStyle === 'short'
                    ? 'max-w-[100px]'
                    : 'max-w-[100px]'
                } ${
                  character1Flip ? 'scale-x-[-1]' : 'scale-x-[1]'
                } absolute -left-6 -bottom-4`}
                src={character1.link}
                alt='character 1'
              />}
            </div>
          )}

          {character1 && character2 && (
            <div
              className={`relative ${
                blockStyle === 'noblock' ? 'border-0' : 'border-4'
              } ${activePosition === position ? "border-green-500" : 'border-black'} ${
                blockStyle === 'short' ? 'h-[220px]' : 'h-[260px]'
              } w-fulll p-4 flex items-center`}
            >
              <div className='px-3 mt-8 flex justify-between items-end w-full'>
                <div className='relative object-cover'>
                  {character1Text && (
                    <div
                      className={`absolute -left-[80px] -skew-x-[-6deg] -skew-y-[1deg]`}
                      style={{
                        bottom: character2Text
                          ? `${character2Ref.current?.scrollHeight + 140}px`
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
                        ? 'w-[105px] h-[140px]'
                        : blockStyle === 'short'
                        ? 'w-[85px] h-[110px]'
                        : 'w-[85px]'
                    } ${
                      character1Flip ? 'scale-x-[-1]' : 'scale-x-100'
                    }`}
                    src={character1?.link}
                    alt='character 1'
                  />
                </div>

                <div className='relative object-cover'>
                  {character2Text && (
                    <div
                      ref={character2Ref}
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
                      ? 'w-[105px] h-[140px]'
                      : blockStyle === 'short'
                      ? 'w-[85px] h-[110px]'
                      : 'w-[85px]'
                  } ${
                    character2Flip ? 'scale-x-[-1]' : 'scale-x-100'
                  }`}
                    src={character2?.link}
                    alt='character 2'
                  />
                </div>
              </div>
            </div>
          )}

        </div>
      
    </>
  );
};

export default StripePreview;
