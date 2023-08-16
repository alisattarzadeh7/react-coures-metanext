import axios from "axios"



const http = axios.create({
    baseURL:'https://react-mini-projects-api.classbon.com'
})

http.interceptors.request.use((config)=>{

    const token = localStorage.getItem('token')

    config.headers['authorization'] = token

    return config
})


export default http