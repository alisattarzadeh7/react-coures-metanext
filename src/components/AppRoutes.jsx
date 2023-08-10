import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/Home"
import AppLayout from "../AppLayout"
import About from "../pages/About";
import Login from "../pages/Login";
const AppRoutes = ()=>{
    const token = localStorage.getItem('token')

    if(!token)
        return (<BrowserRouter>
            <Routes>
                <Route path="login" element={<Login />} />
            </Routes>
            <Navigate to="login" replace={true} />

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