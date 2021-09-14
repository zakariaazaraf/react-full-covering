import React , { useState }from 'react'

const ToggleComponent = () => {
    const [show, setShow] = useState(true)
    
    return <>
        <button className='btn' onClick={() => setShow(!show)}>Toggle Components</button>
        {show ? <ShowComponent /> : <HideComponent />}
    </>
}

const ShowComponent = () =>{
    return <h2 className="show-component">Show component!!!!. </h2>
}

const HideComponent = () =>{
    return <h2 className="hide-component">Hide Component!!!</h2>
}

export default ToggleComponent
