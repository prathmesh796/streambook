"use client"
import React from 'react'
import Link from 'next/link'
import * as streamingAvailability from "streaming-availability";
import {submitAction} from "@/actions/form";
import { useRef } from "react";

const Navbar = () => {
  const handleSearch = async () => {
    const RAPID_API_KEY = "9a493b1f28msh958f0a6e83ae3b6p1dab81jsnac8f73621345";

    const client = new streamingAvailability.Client(new streamingAvailability.Configuration({
      apiKey: RAPID_API_KEY
    }));

    let data = await client.showsApi.searchShowsByTitle({
      title: "Batman",
      country: "in",
    });

    let a = await fetch('/api/add', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })

    let res = await a.json()
    console.log(res)
  }

  let ref = useRef()

  return (
    <>
      <nav className='bg-dark_blue  text-off_white flex justify-between py-5 px-10 '>
        <div>
          <h1 className='text-4xl'>StreamBook</h1>
        </div>

        <form className="max-w-md mx-auto w-96" ref={ref} action={(e) => {{submitAction(e); ref.current.reset()}}}>
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Movies & Series..." required />
          <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-rusty_red font-medium rounded-lg text-sm px-4 py-2" onClick={handleSearch} >Search</button>
        </div>
      </form>

        <div className='flex gap-3'>
          <ul className='flex mx-4 gap-4 pt-2'>
            <Link className="group transition duration-300 ease-in-out" href='/'>
              <span className="pb-1 bg-left-bottom bg-gradient-to-r from-rusty_red to-rusty_red bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-in-out group-hover:text-rusty_red">Home</span>
            </Link>
            <Link className="group transition duration-300 ease-in-out" href='/watchlist'>
              <span className="pb-1 bg-left-bottom bg-gradient-to-r from-rusty_red to-rusty_red bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-in-out group-hover:text-rusty_red">Your Watchlist</span>
            </Link>
            <Link className="group transition duration-300 ease-in-out" href='/about'>
              <span className="pb-1 bg-left-bottom bg-gradient-to-r from-rusty_red to-rusty_red bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-in-out group-hover:text-rusty_red">About</span>
            </Link>
            <Link className="group transition duration-300 ease-in-out " href='/contact'>
              <span className="pb-1 bg-left-bottom bg-gradient-to-r from-rusty_red to-rusty_red bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-in-out group-hover:text-rusty_red">Contact</span>
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
