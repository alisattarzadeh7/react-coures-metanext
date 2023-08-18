import {useRecoilState} from "recoil";
import {languageAtom} from "../atom/layoutAtoms.js";


const directions = {
    fa:'rtl',
    en:'ltr',
    de:'ltr',
    fg:'rtl'
}

const useIsRtl = ()=>{
    const [language] = useRecoilState(languageAtom)

    return  directions[language] === 'rtl'
}


export default useIsRtl