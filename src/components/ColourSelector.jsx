import React from 'react'
import { themes } from '../data/themes'

import exitIcon from '../images/x.svg'

function ColourSelector({setColourOpen}) {
    let themeName = []
    let themeList = []
    for(var theme in themes){
        themeList.push([
            themes[theme]['--base-primary'],
            themes[theme]['--highlight-primary'],
            themes[theme]['--text-primary']
        ])
        themeName.push(theme)
    }

    const manage = (theme) => {
        const themeColours = themes[theme]
    
        for (let colour in themeColours){
          document.documentElement.style.setProperty(colour, themeColours[colour])
        }
      }

    return (
        
        <div className='w-screen h-screen flex absolute items-center justify-center top-0 left-0 text-2xl'>
            <div className="w-full max-w-xl max-h-140 h-full bg-[color:var(--base-primary)] border-4 border-[color:var(--base-secondary)] flex flex-col gap-2 p-8 rounded-lg relative pt-12">
                <button onClick={() => {setColourOpen(false)}}>
                    <img className='invert absolute right-4 top-4' src={exitIcon} alt="" />
                </button>
                {themeName.map((name, index) => (
                    <button className="w-full flex justify-between bg-[color:var(--base-secondary)] py-4 px-8 rounded-[50vh]"
                    onClick={() => {manage(name)}}>
                        <h1>{name}</h1>
                        <div className='flex gap-2'>
                            {themeList[index].map((colour) => {
                                return(
                                    <>
                                        <div className={"w-8 h-8 rounded-2xl"} style={{backgroundColor:colour}}></div>
                                    </>
                                )
                            })}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ColourSelector