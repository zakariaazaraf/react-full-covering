import React from 'react'
import { useState, useEffect } from 'react';

const Rentstate = () => {
    const [states, setStates] = useState([]);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        fetchStates()
    }, []);

    const fetchStates = async () => {
        try {
            const response = await fetch(`https://bayut.p.rapidapi.com//properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=12`, {
        
                "headers": {
                    "x-rapidapi-host": "bayut.p.rapidapi.com",
                    "x-rapidapi-key": "2f8126bea7mshdf5675490dfb0a3p11b801jsn0452e1e62c57"
                }
            })

            if (response.ok && response.status === 200) {

                const data = await response.json()
                setStates(data.hits)
                setIsReady(true)
            } else {
                console.log('loding ...')
            }
        } catch(error) {
            console.log(error)
        }
        
    }


  return <section className='estate-container'>
      {
      isReady 
      ? 
        states.map((state) => {
            console.log(state)
          const {id, agency, area, baths, category, contactName, coverPhoto, phoneNumber, price, title, title_l1} = state
          const {url} = coverPhoto
        //   console.log(agency, area, baths, category, contactName, coverPhoto, phoneNumber, price, title, title_l1)
          return <article key={id} className='estate'>
              <h3>{title_l1}</h3>
              <img className='estate-img' src={url} alt={title_l1}></img>
              <p>Description</p>
              <div>
                  <span>{price}</span>
                  <span>{price}</span>
              </div>
              <a>Link to the rent state</a>
          </article>
        }) 
      : 
      <h3>Data is loading ...</h3>
    }
  </section>
}

export default Rentstate