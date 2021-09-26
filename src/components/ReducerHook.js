import React , { useState, useReducer } from 'react'
import {data} from '../data'

const Modle = ({ modleContent})=>{
    // return <h2>{modleContent}</h2>
    return <h2>Hello world</h2>
}

const ReducerHook = () => {
    const [name, setName] = useState('')
    // const [people, setPeople] = useState(data)

    // Reducer functtion
    const reducer = (state, action)=>{
        // You always need to return a state
        if(action.type === 'TESTING'){
            
            return {
                // i don't understand why the constructor write this destructring
                // ...state,
                // people: [...state.people, {id: new Date().getTime().toString(), name}],
                // Other method doing the same thing
                people: [...state.people, action.payload],
                isModleOpen: true,
                modleContent: 'Person added'
            }
        }
        return state
    }

    const initialState = {
        people: data,
        isModleOpen: false,
        modleContent: ''
    }
    // Call the reducer hook
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleSubmitForm = (e)=>{
        e.preventDefault()
        if(name){
            // payload is just a convention 
            const newPerson = {id: new Date().getTime().toString(), name}
            dispatch({
                type:'TESTING', 
                payload: newPerson
            })  
            setName('')   
        }
    }
    return <>
        {state.isModleOpen && <Modle />}
        <form onSubmit={handleSubmitForm}>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' name='name' value={name} onChange={(e)=>setName(e.target.value)}></input>
            <button type='submit'>Add Person</button>
        </form>
        {
            state.people.map(person =>{
                let capitalizeName = person.name.slice(0,1).toUpperCase() + person.name.slice(1)
                return <article key={person.id}>
                    {/* <h2>{person.name.toUpperCase()}</h2> */}
                    <h2>{capitalizeName}</h2>
                </article>
            })
        }
    </>
}

export default ReducerHook
