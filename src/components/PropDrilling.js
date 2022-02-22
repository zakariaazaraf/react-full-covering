import React from 'react'
import { useState } from 'react/cjs/react.development'
import {data} from '../data'

const Lists = ({ people, removePerson })=>{
    return <>
        <section className='persons'>
            {people.map(person =>{
                return <List person={person} removePerson={removePerson}/>
            })}
        </section>
    </>
}

const List = ({ person, removePerson })=>{
    const { id } = person
    return <>
        <article key={id} className='person'>
            <Person person={person}/>
            <RemovePerson id={id} removePerson={removePerson}/>
        </article>
    </>
}

const Person = ({ person })=>{
    return <>
            <h2>{person.name}</h2>      
        </>
}

const RemovePerson = ({ id, removePerson })=>{
    return <>
        <button className='btn-delete' onClick={() => removePerson(id)}>remove</button>
    </>;
}

const PropDrilling = () => {

    const [people, setPeople] = useState(data)

    const removePerson = id => {
        setPeople(people.filter(person => person.id !== id))
    }
    
    return <>
    <h1>Prop Drilling</h1>
     <Lists people={people} removePerson={removePerson}/>
    </>
}

export default PropDrilling
