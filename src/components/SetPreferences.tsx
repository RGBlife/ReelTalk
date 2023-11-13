// @ts-nocheck

"use client"

import React, { useState } from 'react'

const genres = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]

const genrePreferencesStartingObject = {}

genres.forEach((genre) => {
    genrePreferencesStartingObject[genre.name] = 0
})

console.log(genrePreferencesStartingObject)

const SetUserPreferences = () => {

const [genrePreferences, setGenrePreferences] = useState(genrePreferencesStartingObject) 
const [datePreference, setDatePreference] = useState("")   
const [ratingPreference, setRatingPreference] = useState("")  


const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newGenrePreferences = {...genrePreferences}
    newGenrePreferences[e.target.id] = e.target.value
    setGenrePreferences(newGenrePreferences)
}

const adjustRatingSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRatingPreference(e.target.value) 
}

const adjustDateSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDatePreference(e.target.value)
}

const submitPreferences = () => {
    //This function will post/patch the changes to the preferences database 
}

const createReview = async (formData: FormData) => {
    "use server"; // ensures this function is only ever executed on the server

    const { user_id  ,    
        action          ,
        adventure       ,
        animation       ,
        comedy          ,
        crime           ,
        documentary     ,
        drama           ,
        family          ,
        fantasy         ,
        history         ,
        horror          ,
        music           ,
        mystery         ,
        romance         ,
        science_fiction ,
        tv_movie        ,
        thriller        ,
        war             ,
        western         ,
        release_year    ,
        imdb_rating } = Object.fromEntries(formData)

    const createdReview: Review = await db.review.create({
      data: {
        user_id: 3,   //hardcoded   
        action: genrePreferences[action],
        adventure: genrePreferences[adventure],
        animation: genrePreferences[animation]       ,
        comedy: genrePreferences[comedy] ,
        crime: genrePreferences[crime],
        documentary: genrePreferences[documentary]     ,
        drama: genrePreferences[drama],
        family:genrePreferences[family] ,
        fantasy: genrePreferences[fantasy],
        history: genrePreferences[history],
        horror: genrePreferences[horror] ,
        music: genrePreferences[music],
        mystery: genrePreferences[mystery],
        romance: genrePreferences[romance],
        science_fiction: genrePreferences[science_fiction] ,
        tv_movie: genrePreferences[tv_movie]        ,
        thriller: genrePreferences[thriller]        ,
        war: genrePreferences[war]  ,
        western: genrePreferences[western],
        release_year: datePreference    ,
        imdb_rating: ratingPreference
      },
    });

    revalidatePath("/");
  };


return (
    <section className = 'flex flex-col'>
   
    {genres.map((genre) => {
        return (
            <>
             <>{genre.name}</>
             <input type="range" min = "1" max = "10" id = {genre.name} value = {genrePreferences[genre.name]} onChange = {handleSliderChange}/>
            </>
            )
    })}

<label htmlFor="date-select">I prefer movies newer than: </label>

<select value = {datePreference} name="dates" id="date-select" onChange={adjustDateSelect}>
  <option value="">--Please choose an option--</option>
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


    <button onClick = {submitPreferences}>Save Changes</button>

     </section>

) 
}



export default SetUserPreferences