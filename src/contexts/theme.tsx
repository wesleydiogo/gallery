import { createContext, Dispatch, FC, SetStateAction, useContext, useState } from "react";
import {Theme, ThemeColors as Color} from "../types/Theme";
 
type ThemeType = 'default' | 'dark' | 'light';

interface ThemeContextProps {
    themeType: ThemeType,
    theme: Theme,
    setCurrentTheme: Dispatch<SetStateAction<ThemeType>>
}

const THEMES: Record<ThemeType, Theme> = {
    default: {
        backgroundColor: Color.GAINSBORO,
        primaryColor: Color.BLUE1,
        primaryColorHover: Color.BLUE2,
        secondaryColor: "",
        secondaryColorHover: ""
    },
    light: {
        backgroundColor: "",
        primaryColor: Color.BLUE1,
        primaryColorHover: Color.BLUE2,
        secondaryColor: "",
        secondaryColorHover: ""
    },
    dark: {
        backgroundColor: "",
        primaryColor: Color.BLUE1,
        primaryColorHover: Color.BLUE2,
        secondaryColor: "",
        secondaryColorHover: ""
    }
};

const ThemeContext = createContext<ThemeContextProps>({
    themeType: 'default',
    theme: THEMES['default'],
    setCurrentTheme: () => { }
});

export const ThemeContextProvider: FC = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState<ThemeType>('default');

    return (
        <ThemeContext.Provider value={{
            themeType: currentTheme,
            theme: THEMES[currentTheme],
            setCurrentTheme,
        }} >
            {children}
        </ThemeContext.Provider >
    );
}

const useTheme = () => useContext(ThemeContext);
export default useTheme;