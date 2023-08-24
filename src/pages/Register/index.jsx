import {Input} from "antd";
import AppButton from "../../components/AppButton.jsx";
import AppInput from "../../components/AppInput.jsx";
import {useState} from "react";
import http from "../../config/http.js";
// import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {useRecoilState} from "recoil";
import {authToken} from "../../atom/AuthAtom.js";


const Register = ()=>{
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    const [ ,setAuthToken] = useRecoilState(authToken)

    const handleLoginUser = async ()=>{
        try{
            const {data} = await http.post('Users/login',{
                mobile:username,
                password:password
            })
            if(data){
                setAuthToken(data.token)
                localStorage.setItem('token',data.token)
                navigate('/',{replace:true})
            }
        }catch(e){

        }
    }

    const handleFormSubmit = async ()=>{
        try{
            const res = await http.post('Users',{
                mobile:username,
                password:password
            })
            console.log({res})
            if(res){
                toast('با موفقیت ثبت نام شدید',{type:'success'})
                handleLoginUser()
            }
        }catch(e){

        }
    }


    return (<div className="flex items-center justify-center h-full">


        <div className="w-[400px] flex flex-col justify-center items-center">
            <h1 className="p-5 fo">
                Register
            </h1>
            <AppInput value={username} onChange={(e)=>setUsername(e.target.value)} size="large" placeholder="username" />
            <br />
            <br />
            <AppInput type="password" value={password} onChange={(e)=>setPassword(e.target.value)} size="large" placeholder="password" />
            <div className="flex justify-center mt-4">
                <AppButton onClick={handleFormSubmit} >submit</AppButton>
            </div>
            <br />
            <br />
        </div>


    </div>)
}


export default Register