import {useEffect, useState} from "react";
import http from "../config/http.js";


const useRequestData = (url)=>{

    const [data,setData] = useState()
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
            http.get(url).then(({data})=>{
                setData(data)
            }).finally(()=>{
                setLoading(false)
            })
    },[])

    return {
        data,
        loading
    }


}


export default useRequestData