import React from 'react';

const TableHeader = () => {
  return (
    <>
      <thead>
        <tr class='border border-transparent border-b-slate-200 dark:border-b-navy-500'>
          <th class='whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5'>
            #
          </th>
          <th class='whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5'>
            Name
          </th>
          <th class='whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5'>
            image
          </th>
          <th class='whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5'>
            Active
          </th>
        </tr>
      </thead>
    </>
  );
};

export default TableHeader;
