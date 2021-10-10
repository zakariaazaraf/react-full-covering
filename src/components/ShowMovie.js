import React from 'react'
import PropTypes from 'prop-types'
import { Link, useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import { useFetch } from '../custom/useFetch'
const URL = `https://api.themoviedb.org/3/discover/movie?api_key=96e2d48aa688b41bfb4a1ea227a982ef`
const IMG_URL_BASE = 'https://image.tmdb.org/t/p/original'


const ShowMovie = () => {
    const { loading, data } = useFetch(URL)
    const { results: movies} = data

     // Getting the params from the useParams HOOK
    const { id: paramsID } = useParams()
    console.log(paramsID)
        
    return loading ? <Loading /> : 
    
            <>
                {

                    movies.filter(movie =>{
                        if(movie.id == paramsID){
                            const { id, original_title, poster_path, title, overview } = movie
                            console.log({ id, original_title, poster_path, title, overview })
                            return <article key={id} className='movie'>
                                {/* <img src={`${IMG_URL_BASE}${poster_path}`}></img> */}
                                {/* You can use short circuit operator to pass default value */}
                                <img src={`${IMG_URL_BASE}${poster_path || 'value'}`}></img>
                            </article>
                        }
                    })
                }
            </>
}

ShowMovie.propTypes = {
    id : PropTypes.number.isRequired, //Change this line to be able to see the prop Error triggered
    original_title : PropTypes.string.isRequired,
    poster_path : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    overview : PropTypes.string.isRequired,
}

// Default values
ShowMovie.defaultProps = {
    id : 22222222,
    original_title : 'deafult value',
    poster_path : 'deafult value',
    title : 'deafult value',
    overview : 'deafult value'
}

export default ShowMovie
