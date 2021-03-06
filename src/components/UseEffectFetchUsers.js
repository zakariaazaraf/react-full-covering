import React, { useEffect, useState } from 'react'

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
                        <a className='avatar-img-link' href={`${html_url}`} target='_blank'>
                            <img src={avatar_url} alt={login}/>
                        </a>
                        <div className='user-info'>
                            <h5>{login}</h5>
                            <a href={`${html_url}`} target='_blank' title={`${login}`} >{`${login} Profile`}</a>
                            {/* <Router>
                                <Link to={{pathname: `${html_url}`}} target='_blank'>{`${login} Profile`}</Link>
                            </Router> */}
                        </div>
                        
                    </article>
                })
            }
        </section>
    </>
}

export default UseEffectFetchUsers
