import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/Home"
import AppLayout from "../AppLayout"
import About from "../pages/About";
const AppRoutes = ()=>{
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