import React from 'react'
import { useState, useEffect } from 'react';

const Rentstate = () => {
    const [states, setStates] = useState([]);

    useEffect(() => {
        fetchStates()
        console.log(states)
    }, []);

    const fetchStates = async () => {
        const response = await fetch(`https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=12`, {
            "headers": {
                "x-rapidapi-host": "realtymole-rental-estimate-v1.p.rapidapi.com",
                "x-rapidapi-key": "2f8126bea7mshdf5675490dfb0a3p11b801jsn0452e1e62c57"
            }
        })
        const data = response.json()
        setStates(data)
    }

  return <section>
      {/* {states.map((state) => {
          return <article>
              <h3>The retted state</h3>
              <img src='' alt=''></img>
              <p>Description</p>
              <div>
                  <span>price 1</span>
                  <span>price 2</span>
              </div>
              <a>Link to the rent state</a>
          </article>
      })} */}
  </section>
}

export default Rentstate