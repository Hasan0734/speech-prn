import React from 'react'
import Header from '../header/Header'

const Layout = ({ children }) => {
  return (
    <div className={`min-h-100vh bg-white`}>
      <nav className='print:hidden'>
        <Header />
      </nav>

      {/* Main Content Wrapper */}
      <main className='space-y-3 w-full bg-white p-4 mt-20'>{children}</main>

      {/* Footer */}
      <div className=' bg-slate-100 mt-30'>
        <p className='font-medium text-black py-3 px-4 text-center text-xs pt-10'>
          TM & &c; 2022 Harmon Group Media Partners, llc. & Kiss My Emoji, llc.
          All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Layout
