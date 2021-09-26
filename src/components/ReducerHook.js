import React , { useState, useReducer, useEffect } from 'react'
import {data} from '../data'

const Modle = ({ modleContent, closeModle })=>{
    useEffect(()=>{
        setTimeout(()=>{
            closeModle()
        }, 3000)
    })
    return <h2>{modleContent}</h2>
}

const ReducerHook = () => {
    
    const [name, setName] = useState('')

    // Reducer function
    const reducer = (state, action)=>{
        // You always need to return a state
        if(action.type === 'ADD_PERSON'){
            
            return {
                // you always want to keep the last state properties that doesn't changed
                ...state,
                // people: [...state.people, {id: new Date().getTime().toString(), name}],
                people: [...state.people, action.payload],
                isModleOpen: true,
                modleContent: 'Person added'
            }
        }
        
        if(action.type === 'NO_VALUE'){
            return { ...state, isModleOpen: true, modleContent: 'No persom added !' }
        }

        if(action.type === 'REMOVE_ITEM'){
            return { ...state, isModleOpen: true, modleContent: 'Item removed !' }
        }

        if(action.type === 'CLOSE_MODLE'){
            return { ...state, isModleOpen: false }
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

    const closeModle = ()=>{
        dispatch({type:'CLOSE_MODLE'})
    }

    return <>
        {state.isModleOpen && <Modle modleContent={state.modleContent} closeModle={closeModle} />}

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
