import React from 'react'
import { data }  from '../data'

const UseStateArrayExample = () => {
    const [people, setPeople] = React.useState(data)
    return <>
        <h1>UseState with array example</h1>
        <h3>Our beloved people</h3>
        <div className='people-list'>
            {
                people.map(person => {
                    const {id, name} = person
                    return <div key={id} className='person'>
                        <h5>{name}</h5>
                        <button className='btn-delete'>Remove Person</button>
                    </div>
                })
            }
        </div>
        <button className='btn-delete' onClick={() => setPeople([])}>Remove all persons</button>
    </>
}

export default UseStateArrayExample
