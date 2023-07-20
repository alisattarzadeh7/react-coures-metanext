import i18n, {langAbbr, supportedLanguages} from "../Config/translation/i18n.ts";


const changeLanguage = (lng:langAbbr)=>{
    i18n.changeLanguage(lng);
    document.body.dir = supportedLanguages[lng].direction
    localStorage.setItem('language',lng)
}

export default changeLanguage