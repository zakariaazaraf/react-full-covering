import { useState, useEffect } from "react"

export const useFetch = (url) =>{
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const fetchData = async (url)=>{
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
        setLoading(false)
    }

    useEffect(()=>{
        fetchData(url)
    }, [url])

    return {loading, data}
}