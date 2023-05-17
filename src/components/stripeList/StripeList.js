import React from 'react'
import Loader from '../ui/Loader'
import Error from '../ui/Error'
import { useGetStripesQuery } from '../../features/stripes/stripesApi'
import StripeListItem from './StripeListItem'
import StripeListHeader from './StripeListHeader'

const StripeList = () => {

  const {data:stripes, isLoading, isError} = useGetStripesQuery()


  return (
    <main class='w-full bg-white'>
      {/* Blog List Header */}
      <StripeListHeader />
      <div class='grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5 lg:gap-6'>
        {/* Blog Items */}
        {isLoading ? (
          <Loader />
        ) : isError || !stripes.length ? (
          <Error message="NO stripe Found!" />
        ) : (
          stripes.map((stripe) => <StripeListItem key={stripe?._id} stripe={stripe} />)
        )}
      </div>
    </main>
  )
}

export default StripeList
