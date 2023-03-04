import React, { useState, useEffect, useRef } from 'react';

import {words} from '../data/words.js'
import {generateRandomString} from '../utils/randomString.js'

import restart from '../images/restart.svg'

import Stats from '../components/Stats';
import Session from '../components/Session.jsx';

function TypingApp() {
  const [currentChar, setCurrentChar] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [doneType, setDoneType] = useState(false)
  const [timerStop, setTimerStop] = useState(true)
  const [timeSeconds, setTimeSeconds] = useState(0)
  const [text, setText] = useState("")
  const [timerReset, setTimerReset] = useState(false)
  const [textLength, setTextLength] = useState(10)

  useEffect(() => {
    resetType()
  },[textLength])
  
  useEffect(() => {
    setText(generateRandomString(words, textLength))
  }, [])

  let wordCount = useRef(0)
  let mistakes = useRef([])
  let mistakeObj = useRef({})

  useEffect(() => {
    let temp = inputValue.split(" ").length - 1
    wordCount.current = temp
  }, [inputValue])

  const resetType = () => {
    setCurrentChar(0)
    setInputValue('')
    setDoneType(false)
    setTimerStop(true)
    setTimeSeconds(0)
    setTimerReset(true)
    wordCount.current = 0
    mistakes.current = []
    mistakeObj.current = {}
    setText(generateRandomString(words, textLength))
  }

  const getTime = (data) => {
    setTimeSeconds(data)
  }

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setInputValue(inputText);

    let newCurrentChar = 0;

    while (newCurrentChar < inputText.length && newCurrentChar < text.length) {
      newCurrentChar++;
    }

    setCurrentChar(newCurrentChar);
    if (currentChar === text.length - 2){
      setTimerStop(true)
      wordCount.current++
      setDoneType(true)
    }
  }

  const getCharClass = (index) => {
    if(currentChar === 1 && timerStop){
      setTimerReset(false)
      setTimerStop(false)
    }
    if (index < currentChar) {
      if (inputValue[index] === text[index]){
        return 'text-white';
      }
      else{
        if(!mistakes.current.includes(index)){
          let tempList = [...mistakes.current]
          tempList.push(index)
          mistakes.current = tempList

          let wrongLetter = text[index]
          mistakeObj.current[wrongLetter] = (mistakeObj.current[wrongLetter]+1) || 1

        }
        return 'text-red-500';
      }
    } else if (index === currentChar) {
      return 'text-indigo-500';
    } else if (index >= currentChar) {
      return 'text-neutral-500';
    }
  }

  const inputRef = useRef()

  function focus() {
      inputRef.current.focus()
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-full relative text-4xl">  
        {!doneType ? 
          <div>
            <Session wordCount={wordCount.current} 
              textLength={textLength} 
              timerStop={timerStop} 
              getTime={getTime} 
              timerReset={timerReset}
              setTextLength={setTextLength}
              reset={resetType}/>

            <button onClick={focus}>
              <div className='max-w-4xl text-left text-3xl font-regular text-neutral-500 [word-spacing:7px] max-h-72 overflow-scroll scrollbar-hide leading-normal relative'>
                {text.split('').map((char, index) => (
                  <span key={index} className={getCharClass(index) + " "}>
                    {char}
                  </span>
                )) } 
              </div>
            </button>
          </div> :
          (
            <Stats 
            mistakes={mistakes.current.length} 
            letterCount={text.length} 
            time={timeSeconds} 
            mistakeObj={mistakeObj.current}/>
          )
        }
        <button onClick={resetType} className='mt-8'>
          <img className='invert' src={restart} alt="restart" />
        </button>
      </div>
      
      <input type="text" ref={inputRef} onChange={handleInputChange} value={inputValue} className="absolute w-0 right-0 botton-0" />
    </>

  )
}

export default TypingApp;
