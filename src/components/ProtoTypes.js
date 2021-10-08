import React from 'react'
import { useFetch } from '../custom/useFetch'
const URL = `https://api.themoviedb.org/3/discover/movie?api_key=96e2d48aa688b41bfb4a1ea227a982ef`
const IMG_URL_BASE = 'https://image.tmdb.org/t/p/original'

const Loading = ()=>{
    return <h2>Loding ...</h2>
}


const ProtoTypes = () => {
    const { loading, data } = useFetch(URL)
    const { results: movies} = data
    console.log(movies)
    return loading ? <Loading /> : <section className='movies-container'>
        {
            movies.map(movie=>{
                // const {id, original_title, overview, poster_path, title} = movie
                const {id, poster_path } = movie
                //console.log(id, original_title, overview, poster_path, title)
                return <article key={id} className='movie'>
                    <a>
                        <img src={`${IMG_URL_BASE}${poster_path}`}></img>
                    </a>
                </article>
            })
        }
    </section>
}

export default ProtoTypes
