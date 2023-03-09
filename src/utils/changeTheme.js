import { themes } from "../data/themes"

export const changeTheme = (theme, first) => {
    if(!first){
        console.log(theme)
        localStorage.setItem('theme', theme)
    } 

    const themeColours = themes[theme]

    for (let colour in themeColours){
      document.documentElement.style.setProperty(colour, themeColours[colour])
    }
  }