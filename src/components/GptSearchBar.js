import React, { useRef } from 'react'
import { lang } from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux'
import openAi from '../utils/openAi';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/GptSlice';

const GptSearchBar = () => {

    const dispatch = useDispatch()

    const langKey = useSelector((store) => store.config.lang)
    console.log(langKey)
    const searchText = useRef(null)

    const searchMovieTMDB = async (movie) =>{

        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);

        const json = await data.json();

        return json.results
    }

    const handleGptSearchClick = async () => {
        console.log(searchText.current.value)

        const openAiQuery = "Act as a movie recommendation system and suggest some movies for the query : " + searchText.current.value + ". only give me names of 5 movies, comma seperated like the example Result: Animal, Pushpa, RRR, Gol mall, Hi Nanna";

        const getResults = await openAi.chat.completions.create({
            messages: [{ role: 'user', content: openAiQuery }],
            model: 'gpt-3.5-turbo',
        });
            if(getResults.choices) {
                // TODO: error message to be shown
            }
        console.log(getResults.choices[0]?.message?.content)

        const gptMovieList = getResults.choices[0]?.message?.content.split(",");

        const promiseArray = gptMovieList.map((movie) => searchMovieTMDB(movie))
        console.log(promiseArray)

        const tmdbResults = await Promise.all(promiseArray)

        console.log(tmdbResults)

        dispatch(addGptMovieResult({movieNames: gptMovieList, movieResults: tmdbResults}))
        
    }

  return (
    <div className='flex justify-center pt-[40%] md:pt-[10%]'>
        <form onSubmit={(e) => e.preventDefault()} className=' md-full md:w-1/2 bg-black grid grid-cols-12'>
            <input ref={searchText} type='text' className=' p-4 m-4 col-span-9' placeholder={lang[langKey].searchPlaceHolder}/>
            <button className=' col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar 