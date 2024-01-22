import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  return (
    <div className='bg-black'>
      <div className='z-20 pl-0 relative mt-0 md:-mt-56 md:pl-12'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovie}/>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovie}/>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovie}/>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovie}/>
      </div>
    </div>
  )
}

export default SecondaryContainer