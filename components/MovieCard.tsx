import getImagePath from '@/lib/getImagePath'
import { Movie } from '@/type'
import Image, { getImageProps } from 'next/image'
import React from 'react'

const MovieCard = ({movie}:{movie:Movie}) => {
  return (
    <div className="relative flex-shrink-0 cursor-pointer transform hover:scale-105
    transition duration-200 ease-out hover:drop-shadow-lg" >
        <div className="absolute top-o left-0 inset-0 bg-gradient-to-b from-gray-900/10
             via-gray-900/30 to-gray-300 dark:to-[#121212] " />
        <p className=" absolute z-20 bottom-5 left-5">{movie?.title}</p>
        <Image src={getImagePath(movie?.backdrop_path || movie?.poster_path || '', !!movie?.backdrop_path)}
        alt={movie.title} 
        width={1920} 
        height={1080}
        className="w-fit lg:min-w-[400px] h-56 object-cover shadow-md
         shadow-gray-900 drop-shadow-x1"
          />  
    </div>
  )
}

export default MovieCard
