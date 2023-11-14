
"use client"

import React, { MouseEvent, MouseEventHandler, useState } from 'react'
import { submitPreferences } from '~/app/(app)/SetUserPreferencesTest/actions'

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


const genrePreferencesStartingObject = {
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
}

const SetUserPreferences = () => {

const [genrePreferences, setGenrePreferences] = useState(genrePreferencesStartingObject) 
const [datePreference, setDatePreference] = useState("1900-01-01")   
const [ratingPreference, setRatingPreference] = useState(0)  


const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newGenrePreferences = {...genrePreferences}
    newGenrePreferences[event.target.id as keyof typeof newGenrePreferences] = Number(event.target.value)
    setGenrePreferences(newGenrePreferences)
}

const adjustRatingSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRatingPreference(Number(event.target.value)) 
}

const adjustDateSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDatePreference(event.target.value)
}


return (
    <section className = 'flex flex-col'>
   
    {genres.map((genre) => {
        return (
            <>
             <>{genre.name}</>
             <input type="range" min = "1" max = "10" id = {genre.name} value = {genrePreferences[genre.name as keyof typeof genrePreferences]} onChange = {handleSliderChange}/>
            </>
            )
    })}

<label htmlFor="date-select">I prefer movies newer than: </label>

<select value = {datePreference} name="dates" id="date-select" onChange={adjustDateSelect}>
  <option value="1900-01-01">--Please choose an option--</option>
  <option value="1970-01-01">1970</option>
  <option value="1980-01-01">1980</option>
  <option value="1990-01-01">1990</option>
  <option value="2000-01-01">2000</option>
  <option value="2010-01-01">2010</option>
  <option value="2020-01-01">2020</option>
  <option value="1900-01-01">Show me everything!</option>
</select>

<label htmlFor="rating-select">I prefer movies with an imdb rating greater than: </label>

<select value = {ratingPreference} name="ratings" id="rating-select" onChange={adjustRatingSelect}>
  <option value="">--Please choose an option--</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="0">Show me everything!</option>
</select>


    <button onClick = {(e: MouseEvent<HTMLButtonElement>) => submitPreferences(genrePreferences, datePreference, ratingPreference)}>Save Changes</button>

     </section>

) 
}



export default SetUserPreferences