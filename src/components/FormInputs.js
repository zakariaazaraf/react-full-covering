import React, { useState } from 'react'

const FormInputs = () => {

    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [people, setPeople] = useState([])

    const handleSubmitForm = (e) =>{
        e.preventDefault();

        let isValidEmail = email !== ''
        let isValidFirstName = firstName !== ''
        if(isValidEmail && isValidFirstName){
            people.push({email, firstName})
            setPeople(people)

            // clear the inputs
            alert(`You've entered those values. \n Email: ${email}\n FirstName: ${firstName}`)
            setEmail('')
            setFirstName('')
        }else{
            alert(`You've entered unvalid values. \n Email: ${email}\n FirstName: ${firstName}`)
        }
    }
    

    // Adding the people to the array, make sure all the input are valid
    const handelFirstName = (e) =>{
        setFirstName(e.target.value)
    }

    return <>
        <h2>Using Froms with React!!!</h2>
        <form action="" className='form' onSubmit={handleSubmitForm}>
            <div className="form-control">
                <label htmlFor="firstName">FirstName :</label>
                <input type="text" id="firstName" name='firstName' value={firstName} onChange={handelFirstName}/>
            </div>
            <div className="form-control">
                <label htmlFor="email">Email :</label>
                <input type="email" id="email" name='email' value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            <button type='submit'>Add Person</button>
        </form>
    </>
}

export default FormInputs
