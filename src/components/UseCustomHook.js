import React from 'react'
import { useFetch } from '../custom/useFetch'
const URL = `https://api.github.com/users`

const Loading = ()=>{
    return <h2>Loding ...</h2>
}

const DisplayUsers = (({ users }) =>{
    return <>
        <h1>Github Users Fetch using Custom HOOK</h1>
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
                        </div>
                        
                    </article>
                })
            }
        </section>
    </>
})

const UseCustomHook = () => {
    const { loading, data : users } = useFetch(URL)
    return loading ? <Loading /> : <DisplayUsers users={users}/>
}

export default UseCustomHook
