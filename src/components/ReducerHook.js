import React , { useState, useReducer, useEffect } from 'react'
import { reducer } from '../reducer'
import {data} from '../data'

const Modle = ({ modleContent, closeModle })=>{
    useEffect(()=>{
        setTimeout(()=>{
            closeModle()
        }, 3000)
    })
    return <h2 className='message'>{modleContent}</h2>
}

const ReducerHook = () => {
    
    const [name, setName] = useState('')

    
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
        <section className='persons'>
            {
                state.people.map(person =>{
                    let capitalizeName = person.name.slice(0,1).toUpperCase() + person.name.slice(1)
                    return <article key={person.id} className='person'>
                        <h2>{capitalizeName}</h2>
                        <button className='btn-delete' onClick={()=>{dispatch( {type:'REMOVE_ITEM', payload: person.id} )}}>remove</button>
                    </article>
                })
            } 
        </section>
    </>
}

export default ReducerHook
