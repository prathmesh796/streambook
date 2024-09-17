"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  // const [data, setdata] = useState()

  // const url = 'https://streaming-availability.p.rapidapi.com/shows/search/filters?series_granularity=show&order_direction=asc&order_by=original_title&genres_relation'

  // useEffect(() => {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'x-rapidapi-key': '9a493b1f28msh958f0a6e83ae3b6p1dab81jsnac8f73621345',
  //       'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
  //     }
  //   };
  // }, [])

  // fetch(url, options)
  // .then(res => response.json())
  // .then({
  //   console.log(res)
  // })
  // .catch(err => {
  //   console.error(err)
  // })
  

  return (
    <main>
      <Image src='/bg-animation.gif' width={1520} height={300} alt='banner' />
      <div className='min-h-1 bg-rusty_red'></div>


      <form className="max-w-md mx-auto py-10">
        <label htmlfor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Movies & Series..." required />
          <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-rusty_red font-medium rounded-lg text-sm px-4 py-2">Search</button>
        </div>
      </form>

      <section className='mx-36 p-10 rounded-xl bg-black'>
        <h2 className='text-off_white text-xl p-5'>Recommended shows</h2>
        <div className="grid grid-cols-3 gap-10">
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <button href="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-rusty_red rounded-lg ">
              Read more
            </button>
          </div>

          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <button href="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-rusty_red rounded-lg ">
              Read more
            </button>
          </div>

          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <button href="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-rusty_red rounded-lg ">
              Read more
            </button>
          </div>

          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <button href="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-rusty_red rounded-lg ">
              Read more
            </button>
          </div>          
        </div>
      </section>
      
    </main>
  );
}
