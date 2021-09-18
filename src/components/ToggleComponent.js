import React , { useEffect, useState }from 'react'

const ToggleComponent = () => {
    const [show, setShow] = useState(true)

    return <>
        <button className='btn' onClick={() => setShow(!show)}>Toggle Components</button>
        {show ? <ShowComponent /> : <HideComponent />}
    </>
}

const ShowComponent = () =>{
    const [size, setSize] = useState(window.innerWidth)

    const checkSize = () => {
        setSize(window.innerWidth)
    }

    
    useEffect(()=>{
        // Always use this cleanup function to prevent the event heel
        // after rendering the component
        window.addEventListener('resize', checkSize)

        // after clearing the component, you should remove all the events.
        return ()=>{
            // When we remove the component, we remove the event listtener
            window.removeEventListener('resize', checkSize)
        }
    }, [])

    return <h2 className="show-component">Show component!!!!. {size} px</h2>
}

const HideComponent = () =>{
    return <h2 className="hide-component">Hide Component!!!</h2>
}

export default ToggleComponent
