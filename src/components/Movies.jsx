import React from 'react'
import { useState } from 'react';

const Movies = () => {
    const [movies, setMovies] = useState([
        { id:1, title: 'SpiderMan', ratings:3},
        { id:2, title: 'Superman', ratings: 6},
    ]);

    const updateMovie = () =>{
        setMovies(movies.map(m =>m.id ===1 ? {...movies, title: 'John wick'} : m))
    }
  return (
    <div>
        <br />
        {movies.map(m => (
            
            <li key={Math.random()}>{m.title}</li>
        ))}
        <button onClick={updateMovie}>change movie</button>
    </div>
  )
}

export default Movies