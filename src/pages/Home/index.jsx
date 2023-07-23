import AppButton from "../../components/AppButton.jsx";
import http from "../../config/http.js";
import {useEffect} from "react";


const Home = ()=>{

    const getTodos = async ()=>{
        const data = await http.get('todos')
        console.log({data})
    }

    useEffect(()=>{
        getTodos()
    },[])


    return (<div>

        this is home page
        <AppButton danger>submit</AppButton>
    </div>)
}


export default Home