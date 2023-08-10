import AppButton from "../../components/AppButton.jsx";
import {useRecoilState} from "recoil";
import {languageAtom} from "../../atom/layoutAtoms.js";


const About = ()=>{

    const [language,setLanguage] = useRecoilState(languageAtom)


    return (<div>
        <button onClick={()=>setLanguage(language  === 'fa' ? 'en' : 'fa')}>change language from about page</button>
        {language}
        <AppButton danger>submit from about</AppButton>
    </div>)
}


export default About