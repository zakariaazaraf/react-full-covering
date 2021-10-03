import { useState, useEffect } from "react"

export const useFetch = (url) =>{
    const [loding, setLoding] = useState(true)
    const [data, setData] = useState([])

    const fetchData = async (url)=>{
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
        setLoding(false)
    }

    useEffect(()=>{
        fetchData(url)
    }, [url])

    return {loding, data}
}