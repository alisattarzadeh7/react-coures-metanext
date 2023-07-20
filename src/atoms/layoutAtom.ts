import {atom} from "recoil";

type ThemeType = 'dark' | 'light' | 'dark-blue'


export const theme = atom<ThemeType>({
    key:'theme',
    default:'light'
})