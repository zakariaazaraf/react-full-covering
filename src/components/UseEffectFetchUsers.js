import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom'

const UseEffectFetchUsers = () => {

    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetchUsers()
    }, [])

    const fetchUsers = async ()=>{
        const response = await fetch('https://api.github.com/users')
        const data = await response.json()
        setUsers(data)
    }

    //console.log(fetchUsers())

    return <>
        <h1>Github Users Fetch using useEffect HOOK</h1>
        <section className='github-users'>
            {
                users.map(user => {
                    const {id, login, avatar_url, html_url} = user
                    return <article key={id} className='user'>
                        <img src={avatar_url} alt={login}/>
                        <div className='user-info'>
                            <h5>{login}</h5>
                            <Router>
                                <Link to={`${html_url}`} activeClassName="active" >{`${login} Profile`}</Link>
                            </Router>
                        </div>
                        
                    </article>
                })
            }
        </section>
    </>
}

export default UseEffectFetchUsers