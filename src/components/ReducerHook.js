import React , { useState, useReducer } from 'react'
import {data} from '../data'

const ReducerHook = () => {
    const [name, setName] = useState('')
    const [people, setPeople] = useState(data)

    const handleSubmitForm = (e)=>{
        e.preventDefault()
    }
    return <>
        <form onSubmit={handleSubmitForm}>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' name='name' value={name} onChange={()=> setName(name)}></input>
            <button type='submit'>Add Person</button>
        </form>
        {
            people.map(person =>{
                return <article key={person.id}>
                    <h2>{person.name}</h2>
                </article>
            })
        }
    </>
}

export default ReducerHook
