import React from 'react';
import TableHeader from './TableHeader';
import ListItem from './ListItem';

const CharacterList = () => {
  return (
    <>
      <div class='is-scrollbar-hidden max-w-3xl mx-auto overflow-x-auto'>
        <h1 className='text-xl font-semibold mb-3 text-black'>Character Lists</h1>
        <table class='w-full text-left'>
          <TableHeader />
          <tbody>
            <ListItem />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CharacterList;
