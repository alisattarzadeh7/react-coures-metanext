import {useRecoilValue} from "recoil";
import {theme} from "../atoms/layoutAtom.ts";
import React from "react";


const withTheme  = <T,> (Component:React.FC<T>)=>(props:T)=>{
        const appTheme = useRecoilValue(theme)


        return  <Component {...props} theme={appTheme} />
}


export default withTheme