'use client'
import React from 'react'
import Image from 'next/image'

const SearchCard = ({ title, poster }) => {

    const HandleAdd = () => {
        
    }

    return (
        <>
            <div className="justify-center align-top bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="justify-center align-top">
                <Image className='object-cover' src={poster} width={200} height={200} alt={title} priority unoptimized />
                </div>
                <h2 className="text-xl font-bold text-white text-center p-2">{title}</h2>
                <button className='p-2 bg-rusty_red rounded-full' onClick={HandleAdd}>
                    <Image className='text-rusty_red' src='/plus-solid.svg' width={18} height={20} />
                </button>
            </div>
            
        </>

    )
}

export default SearchCard
