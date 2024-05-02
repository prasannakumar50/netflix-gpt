import React from 'react'
import lang from '../utils/languageConstants'

const GptSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center'> 
        <form className=' bg-black w-1/2 grid grid-cols-12'>
            <input className='p-4 m-4  col-span-9' type='text' placeholder={lang.spanish.gptSearchPlaceholder}></input>
            <button className='py-2 px-4 m-4 col-span-3 bg-red-800 text-white rounded-lg'>{lang.spanish.search}</button>
        </form>
      
    </div>
  )
}

export default GptSearchBar
