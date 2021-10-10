import React from 'react'
import { useFetch } from '../custom/useFetch'
//Call thr proptype package
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Movie from '../components/Movie'
import Loading from '../components/Loading'
const URL = `https://api.themoviedb.org/3/discover/movie?api_key=96e2d48aa688b41bfb4a1ea227a982ef`


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


export default ProtoTypes
