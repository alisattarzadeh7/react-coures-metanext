import {Input} from "antd";
import AppButton from "../../components/AppButton.jsx";
import AppInput from "../../components/AppInput.jsx";
import {useState} from "react";
import http from "../../config/http.js";


const Login = ()=>{
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const handleFormSubmit = async ()=>{
        const res = await http.post('https://api.behsod.com/api/Login',{
            Phone:username,
            password:password
        })

        // console.log({data:data.data.success})
        console.log(res.data.success.token)
        localStorage.setItem('token',res.data.success.token)
    }


    return (<div className="flex items-center justify-center h-full">


        <div className="w-[400px] flex flex-col justify-center items-center">
            <h1 className="p-5 fo">
                login
            </h1>
            <AppInput value={username} onChange={(e)=>setUsername(e.target.value)} size="large" placeholder="username" />
            <br />
            <br />
            <AppInput value={password} onChange={(e)=>setPassword(e.target.value)} size="large" placeholder="password" />
            <div className="flex justify-center mt-4">
                <AppButton onClick={handleFormSubmit} >submit</AppButton>
            </div>
            <br />
            <br />
        </div>


    </div>)
}


export default Login