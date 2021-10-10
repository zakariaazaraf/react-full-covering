import React from 'react'
import PropTypes from 'prop-types'
import { Link, useParams } from 'react-router-dom'
const IMG_URL_BASE = 'https://image.tmdb.org/t/p/original'


const Movie = ({ id, original_title, poster_path, title, overview }) => {
    // Getting the params from the useParams HOOK
    const { id: paramsID } = useParams()
    console.log(paramsID)
    return paramsID ? 'I\'ll fetch you more info': <article className='movie'>
            <Link to={`/movie/${id}`}>
                {/* <img src={`${IMG_URL_BASE}${poster_path}`}></img> */}
                {/* You can use short circuit operator to pass default value */}
                <img src={`${IMG_URL_BASE}${poster_path}`}></img>
            </Link>
        </article>
}

Movie.propTypes = {
    id : PropTypes.number.isRequired, //Change this line to be able to see the prop Error triggered
    original_title : PropTypes.string.isRequired,
    poster_path : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    overview : PropTypes.string.isRequired,
}

// Default values
Movie.defaultProps = {
    id : 22222222,
    original_title : 'deafult value',
    poster_path : 'deafult value',
    title : 'deafult value',
    overview : 'deafult value'
}

export default Movie
