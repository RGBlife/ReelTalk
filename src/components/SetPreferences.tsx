
"use client"

import { preferencesSeedData } from 'prisma/seed-data/preferences'
import React, { MouseEvent, MouseEventHandler, useState, useEffect } from 'react'
import { submitPreferences } from '~/app/(app)/setpreferences/actions'
import { fetchPreferencesAction } from '~/app/utils/api/fetchPreferences'
import { db } from '~/server/db'

const genres = [
    {
      "id": 28,
      "name": "action"
    },
    {
      "id": 12,
      "name": "adventure"
    },
    {
      "id": 16,
      "name": "animation"
    },
    {
      "id": 35,
      "name": "comedy"
    },
    {
      "id": 80,
      "name": "crime"
    },
    {
      "id": 99,
      "name": "documentary"
    },
    {
      "id": 18,
      "name": "drama"
    },
    {
      "id": 10751,
      "name": "family"
    },
    {
      "id": 14,
      "name": "fantasy"
    },
    {
      "id": 36,
      "name": "history"
    },
    {
      "id": 27,
      "name": "horror"
    },
    {
      "id": 10402,
      "name": "music"
    },
    {
      "id": 9648,
      "name": "mystery"
    },
    {
      "id": 10749,
      "name": "romance"
    },
    {
      "id": 878,
      "name": "science_fiction"
    },
    {
      "id": 10770,
      "name": "tv_movie"
    },
    {
      "id": 53,
      "name": "thriller"
    },
    {
      "id": 10752,
      "name": "war"
    },
    {
      "id": 37,
      "name": "western"
    }
  ]



const preferencesStartingObject = {
  action: 0,
  adventure: 0,
  animation: 0,
  comedy: 0,
  crime: 0,
  documentary: 0,
  drama: 0,
  family: 0,
  fantasy: 0,
  history: 0,
  horror: 0,
  music: 0,
  mystery: 0,
  romance: 0,
  science_fiction: 0,
  tv_movie: 0,
  thriller: 0,
  war: 0,
  western: 0,
  release_year:"1900-01-01",
  imdb_rating:0
}

const SetUserPreferences = () => {

const [preferences, setPreferences] = useState(preferencesStartingObject) 

const setAllPreferences = async () => {
  const result = await fetchPreferencesAction()
  if (result){
    setPreferences(result)
  }
};

useEffect(() => {

    setAllPreferences().catch(()=> {
      console.log("error fetching preferences")
    })

  
}, [])


const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    setPreferences((prev)=> {
      return {...prev,[event.target.id]: Number(event.target.value) }
    })
}

const handleDateChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
  setPreferences((prev)=> {
    return {...prev,[event.target.id]: event.target.value}
  })
}

return (
    <section className = 'flex flex-col text-center items-center'>
   <h2 className='text-4xl mt-4 mb-6 text-black'>Set your preferences</h2>
   <p className='text-xl mb-4 text-black'>Adjust the slider to reflect your preference for each movie genre. Move it to the right for genres you love and to the left for those you&apos;re not a fan of. Your input will help us tailor recommendations to your taste!</p>
    {genres.map((genre) => {
      const spacedGenre = genre.name.replace('_', ' ')
        return (
            <>
             <p className='capitalize mb-2 mt-6 text-black'>{spacedGenre} : {(preferences[genre.name as keyof typeof preferences])}/10 </p>
             <input type="range" min = "0" max = "10" id = {genre.name} className='range w-1/2 range-primary' value = {(preferences[genre.name as keyof typeof preferences])} onChange = {handleNumberChange} step="1"/>
            </>
            )
    })}

<div className="mt-6">
<label htmlFor="date-select" className='mb-2 mt-6'>I prefer movies newer than: </label>
<select value = {preferences.release_year} className='w-1/6 bg-primary text-black rounded-xl p-1' name="dates" id="release_year" onChange={handleDateChange}>
  <option value="1900-01-01" className='text-center'>--Please choose an option--</option>
  <option value="1970-01-01" className='text-center'>1970</option>
  <option value="1980-01-01" className='text-center'>1980</option>
  <option value="1990-01-01" className='text-center'>1990</option>
  <option value="2000-01-01" className='text-center'>2000</option>
  <option value="2010-01-01" className='text-center'>2010</option>
  <option value="2020-01-01" className='text-center'>2020</option>
  <option value="1900-01-01" className='text-center'>Show me everything!</option>
</select>
</div>

<div className="mt-6 ">
<label htmlFor="rating-select" className='mb-2 mt-6 '>I prefer movies with an imdb rating greater than: </label>
<select value = {preferences.imdb_rating} className='w-1/6 bg-primary text-black rounded-xl p-1' name="ratings" id="imdb_rating" onChange={handleNumberChange}>
  <option value="" className='text-center'>--Please choose an option--</option>
  <option value="5" className='text-center'>5</option>
  <option value="6" className='text-center'>6</option>
  <option value="7" className='text-center'>7</option>
  <option value="8" className='text-center'>8</option>
  <option value="9" className='text-center'>9</option>
  <option value="0" className='text-center'>Show me everything!</option>
</select>
</div>


    <button onClick = {(e: MouseEvent<HTMLButtonElement>) => submitPreferences(preferences)} className='w-1/6 bg-primary text-black mb-2 mt-6 rounded-2xl border-2 p-1 border-black text-xl'>Save Preferences</button>

     </section>

) 
}



export default SetUserPreferences