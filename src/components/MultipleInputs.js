import React, { useState } from 'react'

const MultipleInputs = () => {


    const [people, setPeople] = useState([])
    const [user, setUser] = useState([ { email:'', firstName:'', age:'' } ])

    const handelChange = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setUser({...user, [name]: value})
    }


    const handleSubmitForm = (e) =>{
        e.preventDefault();

        let isValidEmail = user.email !== ''
        let isValidFirstName = user.firstName !== ''
        let isValidage = user.age !== ''

        if(isValidEmail && isValidFirstName && isValidage){
            people.push({
                id: new Date().getTime().toString(),
                email: user.email,
                firstName: user.firstName,
                age: user.age
            })
            setPeople(people)

            // clear the inputs
            alert(`You've entered those values. \n Email: ${user.email}\n FirstName: ${user.firstName}\n Age: ${user.age}`)
            setUser({ email:'', firstName:'', age:'' })
        }else{
            alert(`You've entered unvalid values. \n Email: ${user.email}\n FirstName: ${user.firstName}\n Age: ${user.age}`)
        }
    }


    return <>
        <h2>Using Froms with React, Multiple Inputs!!!</h2>
        <form action="" className='form' onSubmit={handleSubmitForm}>
            <div className="form-control" key="a">
                <label htmlFor="firstName">FirstName :</label>
                <input type="text" id="firstName" name='firstName' value={user.firstName} onChange={handelChange}/>
            </div>
            <div className="form-control" key="b">
                <label htmlFor="email">Email :</label>
                <input type="email" id="email" name='email' value={user.email} onChange={handelChange}/>
            </div>
            <div className="form-control" key="c">
                <label htmlFor="age">Age :</label>
                <input type="text" id="age" name='age' value={user.age} onChange={handelChange}/>
            </div>
            <button type='submit'>Add Person</button>
        </form>
        {
            people.map((person, index) =>{
                let {id, firstName, email, age} = person
                return <>
                    <article key={id}>
                        <h2>Person N{index +1}</h2>
                        <h5>Email: {email}</h5>
                        <h5>FirstName: {firstName}</h5>
                        <h5>Age: {age}</h5>
                    </article>
                </>
            })
        }
    </>
}

export default MultipleInputs
