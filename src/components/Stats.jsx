import React from 'react'

function Stats({mistakes, wordCount, letterCount, time}) {
    const accuracy = parseInt(Math.abs(letterCount-mistakes)/letterCount * 100)
    const wpm = parseInt(wordCount / (time / 60))
    return (
        <div>
            <h1>WPM: {parseInt(wpm * accuracy/100)}</h1>
            <h1>Accuracy: {accuracy}%</h1>
            <h1>Raw WPM: {wpm}</h1>
        </div>
    )
}

export default Stats