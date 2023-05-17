import React from 'react'
import BigPinaple from './../../assets/images/logos/pineapple.png'

const LoginLayout = ({ children }) => {
  return (
    <div className='min-h-60vh flex grow '>
      <main className='grid w-full grow grid-cols-1 place-items-center'>
        <div className='w-full p-4 md:w-3/4 md:flex mx-auto'>
          <div>
            <img className='md:w-3/4' src={BigPinaple} alt='Big Pinaple' />
          </div>
          <div className='min-w-[300px] mx-auto mt-10'>{children}</div>
        </div>
      </main>
    </div>
  )
}

export default LoginLayout
