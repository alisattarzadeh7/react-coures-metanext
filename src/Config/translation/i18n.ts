import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import faDictionary from "./locales/fa.json"
import enDictionary from "./locales/en.json"

export type langAbbr = 'en' | 'fa' | 'de'

export type SupportedLanguagesType = Record<langAbbr, {title:string,flag:string,direction:'rtl' | 'ltr'}>

export const supportedLanguages:SupportedLanguagesType = {
    fa:{
        direction:'rtl',
        flag:'',
        title:'فارسی'
    },
    en:{
        direction:'ltr',
        flag:'',
        title:'english'
    },
}

const resources:Record<langAbbr,{translation:Object}> = {
    en:{translation:enDictionary},
    fa:{translation:faDictionary},
}

i18n.use(initReactI18next)
    .init({
        resources,
        lng: "fa",
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
