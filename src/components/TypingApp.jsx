import React, { useState, useEffect, useRef } from 'react';

import {words} from '../data/words.js'
import {generateRandomString} from '../utils/randomString.js'

import Stats from './Stats';
import Timer from './Timer';

function TypingApp() {
  const [currentChar, setCurrentChar] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [doneType, setDoneType] = useState(false)
  const [timerStop, setTimerStop] = useState(true)
  const [timeSeconds, setTimeSeconds] = useState(0)
  const [text, setText] = useState("")
  
  useEffect(() => {
    setText(generateRandomString(words, 20))
  }, [])
  const textLength = text.split(" ").length - 1
  let wordCount = useRef(0)
  let mistakes = useRef([])

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
    setText(generateRandomString(words, 20))
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
      <div className="flex flex-col justify-center items-center w-full h-full relative ">  
        <div className='max-w-4xl w-full relative -top-6 -left-1 text-xl'>
          <h2 className='text-indigo-500 absolute'>{wordCount.current}/{textLength}</h2>
          <Timer stop={timerStop} callback={getTime}/>
        </div>
        <div className='max-w-4xl text-left text-3xl font-regular text-neutral-500 [word-spacing:7px] max-h-56 overflow-hidden leading-normal relative'>
          {!doneType ? 
            (text.split('').map((char, index) => (
              <span key={index} className={getCharClass(index) + " "}>
                {char}
              </span>
            ))) : 
            (
            <Stats mistakes={mistakes.current.length} wordCount={textLength} letterCount={text.length} time={timeSeconds}/>
            )
          } 
        </div>
        <button onClick={focus} className='absolute max-w-4xl w-full h-56'></button>
        <button onClick={resetType} className="absolute">Reset</button>
      </div>
      
      <input type="text" ref={inputRef} onChange={handleInputChange} value={inputValue} className="absolute w-0 right-0 botton-0" />
    </>

  )
}

export default TypingApp;
