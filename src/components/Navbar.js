import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/BookList'>BookList</Link>
            </li>
            <li>
                <Link to='/UseStateExample1'>UseStateExample1</Link>
            </li>
            <li>
                <Link to='/UseStateArrayExample'>UseStateArrayExample</Link>
            </li>
            <li>
                <Link to='/UseEffectBasics'>UseEffectBasics</Link>
            </li>
            <li>
                <Link to='/UseEffectFetchUsers'>UseEffectFetchUsers</Link>
            </li>
            <li>
                <Link to='/ToggleComponent'>ToggleComponent</Link>
            </li>
            <li>
                <Link to='/FormInputs'>FormInputs</Link>
            </li>
            <li>
                <Link to='/MultipleInputs'>MultipleInputs</Link>
            </li>
            <li>
                <Link to='/ReducerHook'>ReducerHook</Link>
            </li>
            <li>
                <Link to='/PropDrilling'>PropDrilling</Link>
            </li>
            <li>
                <Link to='/ContextAPI'>ContextAPI</Link>
            </li>
            <li>
                <Link to='/UseCustomHook'>UseCustomHook</Link>
            </li>
            <li>
                <Link to='/ProtoTypes'>ProtoTypes</Link>
            </li>
            <li>
                <Link to='/states'>Rent States</Link>
            </li>
        </ul>
    </nav>
}

export default Navbar
