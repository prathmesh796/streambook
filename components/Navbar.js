import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-black  text-off_white flex justify-between py-5 px-10 '>
        <div>
            <h1 className='text-3xl'>StreamBook</h1>
        </div>

        <div className='flex gap-3'>
            <ul className='flex mx-4 gap-4 pt-2'>
                <Link href='/'>Home</Link>
                <Link href='/'>About</Link>
                <Link href='/'>Contact</Link>
            </ul>

            <button className='bg-rusty_red rounded-full p-2'><Link href='/'>Github</Link></button>
        </div>
    </nav>
  )
}

export default Navbar
