import React, { useState, useEffect } from 'react'

import Timer from './Timer';

import settings from '../images/settings.svg'

function Session({wordCount, textLength, timerStop, getTime, timerReset, reset, setTextLength}) {

    const [wordMode, setWordMode] = useState(10)
    const [menuOpen, setMenuOpen] = useState(true)

    const modes = [
        {value: 10, id: "10"},
        {value: 20, id: "20"},
        {value: 25, id: "25"},
        {value: 35, id: "35"},
        {value: 50, id: "50"},
    ]

    const changeMode = (mode) => {
        setWordMode(mode)
        setTextLength(mode)
    }

    const toggleMenu = () => {
        setMenuOpen(menuOpen => !menuOpen)
    }

    return (
        <div className='max-w-4xl w-full text-xl mb-1 flex justify-between'>
            <div className='flex gap-3 items-center'>
                <h2 className='text-indigo-500'>{wordCount}/{textLength}</h2>
                <div className='flex gap-5 bg-neutral-900 px-3 py-1 rounded-3xl'>
                    <button className='py-1' onClick={toggleMenu}>
                        <img src={settings} alt="" />
                    </button>
                    <div className={'gap-5 flex ' + (!menuOpen && "hidden")}>
                        {modes.map((mode) => (
                            <button key={mode.id} 
                                className={"text-neutral-400 " + 
                                (mode.value === wordMode && "text-white")}
                                onClick={() => {changeMode(mode.value)}}>
                                {mode.value}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <Timer stop={timerStop} callback={getTime} reset={timerReset}/>
        </div>
    )
}

export default Session