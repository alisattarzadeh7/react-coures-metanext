import {Trans, useTranslation} from "react-i18next";
import { Input } from 'antd';


const Home = ()=>{

    const {i18n,t} = useTranslation()

    return (<div>
        <button onClick={()=>i18n.changeLanguage('en')}>change to en</button>
        <Trans>hello</Trans>
        <Input placeholder="Basic usage" />
    </div>)
}


export default Home