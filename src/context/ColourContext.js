import React, { useContext, useState } from 'react'
import themes from '../data/themes.js'

const themeContext = React.createContext()
const themeUpdateContext = React.createContext()

export function useTheme() {   
    return useContext(themeContext) 
}  

export function useThemeUpdate() {   
    return useContext(themeUpdateContext);
}  


export function ThemeProvider({ children }) {   
    const [theme, setTheme] = useState([])
    function changeTheme(data) {     
        setTheme((theme) => themes[data])   
    }    

    return (     
        <themeContext.Provider value={theme}>       
            <themeUpdateContext.Provider value={changeTheme}>         
                {children}       
            </themeUpdateContext.Provider>     
        </themeContext.Provider>   
    ) 
}
