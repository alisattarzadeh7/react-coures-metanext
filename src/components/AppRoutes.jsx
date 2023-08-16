import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/Home"
import AppLayout from "../AppLayout"
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register/index.jsx";
import {useRecoilState} from "recoil";
import {authToken} from "../atom/AuthAtom.js";
import {useEffect, useState} from "react";
const AppRoutes = ()=>{
    const [userToken,setUserToken] = useRecoilState(authToken)
    const token = localStorage.getItem('token')
    const [mounted,setMounted] = useState(false)

    if(!mounted){
        setUserToken(token)
    }


    useEffect(()=>{
        setMounted(true)
    },[])


    if(!userToken)
        return (<BrowserRouter>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="*" element={ <Navigate to="login" replace={true} />} />
            </Routes>
        </BrowserRouter>)

    return (<BrowserRouter>
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />

            </Route>
        </Routes>
    </BrowserRouter>)
}


export default AppRoutes