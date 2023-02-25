import React, { useState, useRef, useEffect } from 'react'

function Letter({keyLetter, correct}) {
    return(
        
        <span className={
            correct === 0 ? "text-red-400": (correct === 1? "text-white": "text-neutral-500")
        }>{keyLetter}</span>
    )
}

function Word({keyWord, active, paragraph, text}) {
    const wordList = keyWord.split("")
    const i = text.length - 1

    return(
        <span>{wordList.map((letter, index) => {
            return(
                !active? <Letter keyLetter={letter} key={index} correct={2}/> :
                (index > i ? <Letter keyLetter={letter} key={index} correct={2}/> :
                (paragraph[i] == text[i]? 
                <Letter keyLetter={letter} key={index} correct={1}/> : 
                <Letter keyLetter={letter} key={index} correct={0}/>))
            )
        })} </span>
    )
}

function TypingField() {
    
    const paragraph = "and we need you for a little late night dinner and then i have a few days off work tomorrow night so we will have a plan on tuesday for you and i can just drop your off and bring it home to the house if i can come over to your mom house and i get some water for me and then i’ll take you out for me and then i’ll take"
    const paraList = paragraph.split("")

    const [curLetter, setCurLetter] = useState('')
    const activeWord = useRef(0)

    const [text, setText] = useState('')

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const inputRef = useRef()

    function focus() {
        inputRef.current.focus()
    }
    
    useEffect(() => {
        console.log(curLetter)
        curLetter === " " && (activeWord.current++)
        setCurLetter(text[text.length - 1])
    }, [text])
    
    let yes = null
    let wordCount = 0
    return (
        <>
            <div className="flex justify-center items-center w-full h-full">
                <h1>{activeWord.current}</h1>
                <div className='max-w-3xl text-left text-2xl tracking-wide font-normal text-neutral-500 [word-spacing:5px] max-h-40 overflow-hidden'>
                    {paraList.map((letter) => {
                        letter === " " && (wordCount++)
                        wordCount === activeWord.current ? (letter === curLetter ? yes = 1 : yes = 0) : yes = 2
                        return(
                            <Letter keyLetter={letter} correct={yes}/>
                        ) 
                    })}
                </div>
                <button onClick={focus} className='absolute border max-w-3xl w-full h-56'></button>
            </div>
            <input type="text" ref={inputRef} onChange={handleChange} value={text} className="absolute w-0 right-0 botton-0" />
        </>
    )
}

export default TypingField