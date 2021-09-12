import React from 'react'
import { data }  from '../data'

const UseStateArrayExample = () => {
    
    const [people, setPeople] = React.useState(data)

    // Delete all people, and hide the delete all btn
    const handelDeletePeoples = (event) =>{
        // Delete peoples
        setPeople([])

        // Hide the delete all people Btn
        event.target.remove()
    }

    // Delete individual person
    const removePerson = personId =>{
        let filterdPersons = people.filter(person =>{
            let { id } = person
            if(id !== personId){ return person }
        })

        setPeople(filterdPersons)
    }

    return <>
        <h1>UseState with array example</h1>
        <h3>Our beloved people</h3>
        <div className='people-list'>
            {
                people.map(person => {
                    const {id, name} = person
                    return <div key={id} className='person'>
                        <h5>{name}</h5>
                        <button onClick={ () => removePerson(id) } className='btn-delete'>Remove Person</button>
                    </div>
                })
            }
        </div>
        <button className='btn-delete' onClick={ handelDeletePeoples }>Remove all persons</button>
    </>
}

export default UseStateArrayExample
