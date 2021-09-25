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
                // i don't understand wuy the constructor write this destructring
                // ...state,
                people: [...state.people, {id: new Date().getTime().toString(), name}],
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
            dispatch({type:'TESTING'})  
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
                return <article key={person.id}>
                    <h2>{person.name}</h2>
                </article>
            })
        }
    </>
}

export default ReducerHook
