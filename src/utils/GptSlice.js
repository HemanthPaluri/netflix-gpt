import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'GPT',
    initialState: {
        showGptSearch: false,
        movieResults: null,
        movieNames: null
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) => {
            const {movieResults, movieNames} = action.payload
            state.movieNames = movieNames;
            state.movieResults = movieResults
        }
    }
})

export const {toggleGptSearchView, addGptMovieResult} = gptSlice.actions

export default gptSlice.reducer