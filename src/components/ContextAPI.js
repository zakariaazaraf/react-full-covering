import React from 'react'
import { useState, useContext } from 'react/cjs/react.development'
import {data} from '../data'

// declare the context, It give us the access to two component {Provide, Consumer}
const PersonContext = React.createContext(); // it accept default value

const Lists = ({ people })=>{
    return <>
        <section className='persons'>
            {people.map(person =>{
                return <List person={person} />
            })}
        </section>
    </>
}

const List = ({ person })=>{
    const { id } = person
    return <>
        <article key={id} className='person'>
            <Person person={person}/>
            <RemovePerson id={id} />
        </article>
    </>
}

const Person = ({ person })=>{
    return <>
            <h2>{person.name}</h2>      
        </>
}

const RemovePerson = ({ id })=>{
    // Pass the PersonContext
    const { removePerson, hola } = useContext(PersonContext)
    return<>
        <button className='btn-delete' onClick={()=>removePerson(id)}>remove, {hola}</button>
    </>;
}

const ContextAPI = () => {

    const [people, setPeople] = useState(data)
    let hola='zakaria'

    const removePerson = (id)=>{
        setPeople(people.filter(person => person.id !== id))
    }
    return <>
    {/* Rap the root of the component, could pass funcs, values trougth the value attribute */}
    <PersonContext.Provider value={{removePerson, hola}}>
        <h1>ContextAPI</h1>
        <Lists people={people}/>
    </PersonContext.Provider>
    </>
}

export default ContextAPI
