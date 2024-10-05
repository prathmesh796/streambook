import React from 'react'
import Image from 'next/image'

const SearchCard = ({ title, poster }) => {
    return (
        <div className="bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
            <Image src={poster} width={360} height={400} alt={title} priority unoptimized />
            <h2 className="text-xl font-bold text-white">{title}</h2>
        </div>
    )
}

export default SearchCard
