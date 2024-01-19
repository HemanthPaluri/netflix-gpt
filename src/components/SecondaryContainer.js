import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  return (
    <div className='bg-black'>
      <div className='z-20 pl-12 relative -mt-56'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovie}/>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovie}/>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovie}/>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovie}/>
      </div>
    </div>
  )
}

export default SecondaryContainer