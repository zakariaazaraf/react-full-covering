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

    window.addEventListener('resize', checkSize)

    useEffect(()=>{
        //window.addEventListener('resize', checkSize)
    }, [])

    return <h2 className="show-component">Show component!!!!. {size} px</h2>
}

const HideComponent = () =>{
    return <h2 className="hide-component">Hide Component!!!</h2>
}

export default ToggleComponent
