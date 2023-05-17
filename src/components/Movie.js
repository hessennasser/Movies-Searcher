import React from 'react'

const Movie = ({ Title, Poster, Type, Year }) => {
    return (
        <div className="movie">
            <img src={Poster === "N/A" ? "https://i.imgur.com/Z2MYNbj.png" : Poster} alt={Title} />
            <div className="movie-info">
                <h3 className="movie-title">{Title}</h3>
                <span className="movie-year">Release Year: {Year}</span>
                <span className="movie-type">Type: {Type}</span>
            </div>
        </div>
    )
}

export default Movie
