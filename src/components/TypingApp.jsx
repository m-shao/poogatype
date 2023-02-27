import React, { useState, useEffect, useRef } from 'react';

import Stats from './Stats';
import Timer from './Timer';

function TypingApp() {
  const [currentChar, setCurrentChar] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [doneType, setDoneType] = useState(false)
  const [timerStop, setTimerStop] = useState(true)
  const [timeSeconds, setTimeSeconds] = useState(0)
  
  let text = 'and we need you for a little late night dinner and then i have a few days off work tomorrow night so we will have a plan on tuesday for you and i can just drop your off and bring it home to the house if i can come over to your mom house and i get some water for me and then ill take you out for me and then ill take'
  text = 'and we need you for a little late night dinner'
  const textLength = text.split(" ").length
  const [wordCount, setWordCount] = useState(0)
  const [mistakes, setMistakes] = useState([])

  useEffect(() => {
    let temp = inputValue.split(" ").length - 1
    setWordCount(temp)
  }, [inputValue])

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
    if (currentChar === text.length){
      setTimerStop(true)
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
        if(!mistakes.includes(index)){
          let tempList = [...mistakes]
          tempList.push(index)
          setMistakes(tempList)
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
          <h2 className='text-indigo-500 absolute'>{wordCount}/{textLength}</h2>
          <Timer stop={timerStop} callback={getTime}/>
        </div>
        <div className='max-w-4xl text-left text-3xl font-regular text-neutral-500 [word-spacing:5px] max-h-56 overflow-hidden leading-normal relative'>
          {!doneType ? 
            (text.split('').map((char, index) => (
              <span key={index} className={getCharClass(index)}>
                {char}
              </span>
            ))) : 
            (
            <Stats mistakes={mistakes.length} wordCount={textLength} letterCount={text.length} time={timeSeconds}/>
            )
          } 
        </div>
        <button onClick={focus} className='absolute max-w-4xl w-full h-56'></button>
      </div>
      <input type="text" ref={inputRef} onChange={handleInputChange} value={inputValue} className="absolute w-0 right-0 botton-0" />
    </>

  )
}

export default TypingApp;
