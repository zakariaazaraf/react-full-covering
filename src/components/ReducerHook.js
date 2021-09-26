import React , { useState, useReducer } from 'react'
import {data} from '../data'

const Modle = ({ modleContent })=>{
    console.log(modleContent)

    return <h2>{modleContent}</h2>
}

const ReducerHook = () => {
    const [name, setName] = useState('')
    // const [people, setPeople] = useState(data)

    // Reducer functtion
    const reducer = (state, action)=>{
        // You always need to return a state
        if(action.type === 'ADD_PERSON'){
            
            return {
                // you always want to keep the last state properties that doesn't changed
                ...state,
                // people: [...state.people, {id: new Date().getTime().toString(), name}],
                // Other method doing the same thing
                people: [...state.people, action.payload],
                isModleOpen: true,
                modleContent: 'Person added'
            }
        }
        
        if(action.type === 'NO_VALUE'){
            return { ...state, isModleOpen: true, modleContent: 'No persom added !' }
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
                type:'ADD_PERSON', 
                payload: newPerson
            })  
            setName('')   
        }else{
            dispatch({ type: 'NO_VALUE' })
        }
    }

    return <>
        {state.isModleOpen && <Modle modleContent={state.modleContent} />}

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
