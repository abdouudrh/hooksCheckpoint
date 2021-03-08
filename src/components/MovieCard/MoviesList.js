import React from 'react'
import MovieCard from './MovieCard'
import PropTypes from 'prop-types'
const MoviesList = ({moviesArry})=>{
    return (
        <div style={{display:"flex", alignItems:"center",flexWrap:"wrap"}} >
            {moviesArry.map((movie,key)=>(
            <MovieCard movie={movie} key = {key}/>
            ))}
        </div>
    )
} 
MoviesList.propTypes ={
    moviesArry : PropTypes.array.isRequired
}


export default MoviesList

