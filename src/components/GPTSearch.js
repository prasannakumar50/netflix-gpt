import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { LOGO } from '../utils/constants'

const GPTSearch = () => {
  return (
    <>
    <div className="absolute -z-10">
        <img src={LOGO}
          alt="logo" />
      </div>
    <div>
      <GptSearchBar/>
      <GptMovieSuggestions />
    </div>
    </>
  )
}

export default GPTSearch
