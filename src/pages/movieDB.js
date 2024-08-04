import React, { useEffect, useState } from 'react'


// const url = "https://api.themoviedb.org/3/movie/changes"
// const API_KEY = process.env.API_KEY

export default function Movies() {
    const [movies, setMovie] = useState(null)

   const getMovie = () =>{
    fetch('https://api.themoviedb.org/3/movie/changes?api_key=492d9dddf253a0a15209ce806c3e9961')
    .then(response => response.json())
    .then(response => 
      {
          console.log(response)
          setMovie(response.results);
      })
    .catch(err => console.error(err));
   }

   useEffect(()=>{
    getMovie()
   },[])

   let Result = ({movies}) =>{
    return(
        <div>
            {
             movies.map((movie)=>(
                <div key={movie.id}>
                    <h1>{movie.title}</h1>
                </div>
            ))
            }
        </div>
    )
   }
  return (
    <div style={{marginTop:'7%'}}>
      {movies && <Result movies={movies}/>}
    </div>
  )
}
