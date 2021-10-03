import React from 'react'
import { useFetch } from '../custom/useFetch'
const URL = `https://api.themoviedb.org/3/discover/movie?api_key=96e2d48aa688b41bfb4a1ea227a982ef`

const ProtoTypes = () => {
    const { loding, data} = useFetch(URL)
    const { results: movies} = data
    if(movies){

        movies.map(movie=>{
                const {id, original_title, overview, poster_path, title} = movie
                console.log(id, original_title, overview, poster_path, title)
            // console.log(movie)
        })
    }

    return <section>
        {
            // movies.map(movie=>{
            //     const {id, original_title, overview, poster_path, title} = movie
            //     //console.log(id, original_title, overview, poster_path, title)
            //     return <article for={id}>
            //         {original_title}
            //     </article>
            // })
        }
    </section>
}

export default ProtoTypes
