"use client"
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home() {
  

  return (
    <main>
      <Image src='/bg-animation.gif' width={1520} height={300} alt='banner' priority unoptimized />
      <div className='min-h-1 bg-rusty_red'></div>


      

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
