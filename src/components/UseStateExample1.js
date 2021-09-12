import React, { useState } from 'react'

const UseStateExample1 = () => {

    // Working on useState
    const [title, setTitle] = useState('Default Title')

    // The function that handel the click event to change the Title
    const handelClick = () =>{
        if(title === 'Default Title'){
            setTitle('Title Changed')
            return
        }
        setTitle('Default Title')
    }
    return (
        <>
            <h1>UseState Example N1</h1>
            <h3>{title}</h3>
            <button className='btn' onClick={handelClick}>Chamge Title</button>
        </>
    );
}

export default UseStateExample1
