import React from 'react'
import MovieCard from './MovieCard'

function MovieList({title, movies}) {
    console.log(movies)
    if(!movies) return
  return (
    <div>
        <div className='px-6 bg-transparent'>
            <h1 className='text-3xl text-white py-1'>{title}</h1>
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