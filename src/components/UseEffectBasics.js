import React, { useEffect, useState } from 'react'

const UseEffectBasics = () => {

    // Setup the useState hook to encrase the counter
    const [counter, setCounter] = useState(0)

    // @@ Do the work out side the Component
    // @@ Calls after the each render/re-render
    // @@ Use dependencies to choose wich and when you want to use the effect
    useEffect((e)=>{
        console.log(e)
        if(counter){
            document.title = `Counter Pointe To ${counter}`;
        }
    }, [counter])
    return <>
        <h1>UseEffect Basic Example. Changinh the page tTitle with the couunter Value</h1>
        <h3>Counter To {counter}</h3>
        <button className='btn' onClick={ () => setCounter(counter+1) }>Encrase Counter</button>
    </>
}

export default UseEffectBasics
