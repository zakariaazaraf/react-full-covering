import React from 'react'
import { useFetch } from '../custom/useFetch'
//Call thr proptype package
import PropTypes from 'prop-types'
const URL = `https://api.themoviedb.org/3/discover/movie?api_key=96e2d48aa688b41bfb4a1ea227a982ef`
const IMG_URL_BASE = 'https://image.tmdb.org/t/p/original'

const Loading = ()=>{
    return <h2>Loding ...</h2>
}

const Movie = ({ id, original_title, poster_path, title, overview })=>{
    return <article className='movie'>
            <a>
                {/* <img src={`${IMG_URL_BASE}${poster_path}`}></img> */}
                {/* You can use short circuit operator to pass default value */}
                <img src={`${IMG_URL_BASE}${poster_path || 'Default Image'}`}></img>
            </a>
        </article>
}

const ProtoTypes = () => {
    const { loading, data } = useFetch(URL)
    const { results: movies} = data
    return loading ? <Loading /> : <section className='movies-container'>
        {
            movies.map( movie =>{
                return <Movie key={movie.id} {...movie}/>
            })
        }
    </section>
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

export default ProtoTypes
