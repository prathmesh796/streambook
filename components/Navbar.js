import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <nav className='bg-dark_blue  text-off_white flex justify-between py-5 px-10 '>
        <div>
          <h1 className='text-4xl'>StreamBook</h1>
        </div>

        <div className='flex gap-3'>
          <ul className='flex mx-4 gap-4 pt-2'>
            <Link className="group transition duration-300 ease-in-out" href='/'>
              <span class="pb-1 bg-left-bottom bg-gradient-to-r from-rusty_red to-rusty_red bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-in-out group-hover:text-rusty_red">Home</span>
            </Link>
            <Link className="group transition duration-300 ease-in-out" href='/watchlist'>
              <span class="pb-1 bg-left-bottom bg-gradient-to-r from-rusty_red to-rusty_red bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-in-out group-hover:text-rusty_red">Your Watchlist</span>
            </Link>
            <Link className="group transition duration-300 ease-in-out" href='/about'>
              <span class="pb-1 bg-left-bottom bg-gradient-to-r from-rusty_red to-rusty_red bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-in-out group-hover:text-rusty_red">About</span>
            </Link>
            <Link className="group transition duration-300 ease-in-out " href='/contact'>
              <span class="pb-1 bg-left-bottom bg-gradient-to-r from-rusty_red to-rusty_red bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-in-out group-hover:text-rusty_red">Contact</span>
            </Link>
          </ul>

          <button className='bg-rusty_red hover:bg-red-600 rounded-full p-2'><Link href='https://github.com/prathmesh796/streambook' target="_blank">Github</Link></button>
        </div>

      </nav>
      <div className='min-h-1 bg-rusty_red'></div>
    </>
  )
}

export default Navbar
