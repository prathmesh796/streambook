import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <div className='min-h-1 bg-rusty_red mt-10'></div>
      <footer className='flex bg-dark_blue text-off_white justify-between p-5 '>

        <div>
          <p>Follow us on</p>

        </div>

        <div className='flex-col text-center'>
          <h1 className='text-xl'>StreamBook</h1>
          <p className='text-sm opacity-50'>All rights reserved | 2024</p>
        </div>

        <div className='flex-col text-center'>
          <p>Our email</p>
          <Link href='/'>streambook@796.gmail.com</Link>
        </div>
      </footer>
    </>

  )
}

export default Footer
