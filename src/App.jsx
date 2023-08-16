import React from "react";
import AppRoutes from "./components/AppRoutes.jsx";
import "./assets/css/global.css"
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useRecoilState} from "recoil";
import {authToken} from "./atom/AuthAtom.js";
function App() {


    return (
        <>
            <AppRoutes/>
            <ToastContainer />
        </>
    )
}


export default App
