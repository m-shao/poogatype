import React, { useState } from 'react'

import Timer from './Timer';

import settings from '../images/settings.svg'

function Session({wordCount, textLength, timerStop, getTime, timerReset, reset, setTextLength}) {

    const [wordMode, setWordMode] = useState(20)
    const [menuOpen, setMenuOpen] = useState(false)

    const modes = [
        {value: 20, id: "20"},
        {value: 30, id: "30"},
        {value: 40, id: "40"},
        {value: 50, id: "50"}
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
                <h2 className='text-[color:var(--highlight-primary)]'>{wordCount}/{textLength}</h2>
                <div className='flex gap-5 bg-[color:var(--base-secondary)] px-3 py-1 rounded-3xl'>
                    <button className='py-1' onClick={toggleMenu}>
                        <img src={settings} alt="" />
                    </button>
                    <div className={'gap-5 flex ' + (!menuOpen && "hidden")}>
                        {modes.map((mode) => (
                            <button key={mode.id} 
                                className={"text-[color:var(--text-secondary)] " + 
                                (mode.value === wordMode && "text-[color:var(--text-primary)]")}
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