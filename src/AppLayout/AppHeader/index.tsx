import React from "react";
import {Layout} from "antd";
import AppDropdown from "../../components/AppDropdown.tsx";
import {langAbbr, supportedLanguages} from "../../Config/translation/i18n.ts";
import {useTranslation} from "react-i18next";
import changeLanguage from "../../helpers/changeLanguage.ts";
const { Header } = Layout;


const AppHeader:React.FC  = ()=>{
    const {i18n} = useTranslation()


    return (<div>
        <Header
            className="text-white"
        >
            <AppDropdown
                items={Object.keys(supportedLanguages).map((lngKey)=>({
                        label:supportedLanguages[lngKey as langAbbr].title,
                        key:supportedLanguages[lngKey as langAbbr].title,
                        onClick:()=> changeLanguage(lngKey as langAbbr)
                    }))}
            >
                <a onClick={(e) => e.preventDefault()}>
                    {supportedLanguages[i18n.language as langAbbr].title}
                </a>
            </AppDropdown>
        </Header>
    </div>)
}

export default AppHeader