import React from 'react'
import MovieCard from './MovieCard'

function MovieList({title, movies}) {
    
    if(!movies) return
  return (
    <div>
        <div className='px-6 bg-transparent'>
            <h1 className=' text-lg md:text-3xl text-white py-1'>{title}</h1>
            <div className=' flex overflow-x-scroll'>
            <div className='flex'>
                {movies?.map((movie) => (
                    <MovieCard key={movie.id} posterPath={movie.poster_path} />
                ))}
                
            </div>
            </div>
        </div>
        
    </div>
  )
}

export default MovieList