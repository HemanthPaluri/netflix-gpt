import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BACKGROUND_IMG } from '../utils/constants';


const GptSearch = () => {
  return (
    <>
        <div className=' fixed -z-10 bg-gradient-to-r from-black opacity-70'>
            <img className='h-screen object-cover' src={BACKGROUND_IMG}
            alt='Background'/>
        </div>
        <div className=''>
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    </>
  )
}

export default GptSearch