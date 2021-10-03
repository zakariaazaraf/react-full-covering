import React from 'react'
import { useState } from 'react/cjs/react.development'
import {data} from '../data'

const Lists = ({ people })=>{
    return <>
        <section className='persons'>
            {people.map(person =>{
                return <List person={person}/>
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

const RemovePerson = ()=>{
    return<>
        <button className='btn-delete' >remove</button>
    </>;
}

const PropDrilling = () => {

    const [people, setPeople] = useState(data)
    return <>
     <Lists people={people} />
    </>
}

export default PropDrilling
