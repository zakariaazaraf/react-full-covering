import React, { useState } from 'react'

const FormInputs = () => {

    const handleSubmitForm = (e) =>{
        e.preventDefault();
        
        console.log('Form beign validated')
    }
    
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')

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
