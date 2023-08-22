import AppRoutes from "./components/AppRoutes.tsx";
import "./assets/scss/global.scss"
import "./Config/translation/i18n.ts"
import {useEffect} from "react";
import changeLanguage from "./helpers/changeLanguage.ts";
import {langAbbr} from "./Config/translation/i18n.ts";
function App() {


    useEffect(()=>{
        const language = localStorage.getItem('language')
        if(language){
            changeLanguage(language as langAbbr)
        }
    },[])

    return (
        <>
            <AppRoutes/>
        </>
    )
}


export default App
