import React from 'react';
import Block from './Block';

const StripeBlock = ({ stripe }) => {
  return (
    <>
      <div class='p-2.5 max-w-4xl 2xl:max-w-[60rem] mx-auto flex justify-around gap-5'>
        {stripe.blocks?.map((blc, i) => (
          <>
          <Block block={blc} index={i} stripe= {stripe} />
         
          </>
        ))}
      </div>
    </>
  );
};

export default StripeBlock;
