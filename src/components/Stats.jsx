import React from 'react'
import Keyboard from './Keyboard'
import updateDoc from '../utils/updateDoc.js'
import {useEffect} from 'react'

function Stats({mistakes, letterCount, time, mistakeObj}) {
    const accuracy = parseInt((1 - (mistakes/letterCount))* 100) 
    const wpm = parseInt((letterCount / 5)/(time/60))
    
    useEffect(() => {
        updateDoc(wpm, accuracy)
    }, [])

    return (
        <div className='flex gap-20'>
            <div className='flex flex-col gap-8'>
                <h1>WPM: {parseInt(wpm * accuracy/100)}</h1>
                <h1>Accuracy: {accuracy}%</h1>
                <h1>Raw WPM: {wpm}</h1>
            </div>    
            <Keyboard mistakeObj={mistakeObj} largeness={12}/>
        </div>
    )
}

export default Stats