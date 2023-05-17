import React from 'react'
import Movie from './Movie'

const Results = ({ results }) => {
    return (
        <div className='result-wrapper'>
            {
                results.map(movie => {
                    const { imdbID } = movie
                    return <Movie key={imdbID} {...movie} />
                })
            }
        </div>
    )
}

export default Results
