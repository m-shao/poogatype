import React, { useState, useEffect, useRef } from 'react';

function TypingApp() {
  const [currentChar, setCurrentChar] = useState(0);
  const [inputValue, setInputValue] = useState('');
  
  const [text, setText] = useState('and we need you for a little late night dinner and then i have a few days off work tomorrow night so we will have a plan on tuesday for you and i can just drop your off and bring it home to the house if i can come over to your mom house and i get some water for me and then i’ll take you out for me and then i’ll take')
  const textLength = text.split(" ").length
  const [wordCount, setWordCount] = useState(0)

  useEffect(() => {
    let temp = inputValue.split(" ").length - 1
    setWordCount(temp)
  }, [inputValue])
  
  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setInputValue(inputText);

    let newCurrentChar = 0;

    while (newCurrentChar < inputText.length && newCurrentChar < text.length) {
      newCurrentChar++;
    }

    setCurrentChar(newCurrentChar);
  };

  const getCharClass = (index) => {
    if (index < currentChar) {
      if (inputValue[index] === text[index]){
        return 'text-white';
      }
      else{
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
        </div>
        <div className='max-w-4xl text-left text-3xl tracking-wide font-normal text-neutral-500 [word-spacing:5px] max-h-56 overflow-hidden leading-normal relative'>
          {text.split('').map((char, index) => (
            <span key={index} className={getCharClass(index)}>
              {char}
            </span>
          ))}
        </div>
        <button onClick={focus} className='absolute max-w-4xl w-full h-56'></button>
      </div>
      <input type="text" ref={inputRef} onChange={handleInputChange} value={inputValue} className="absolute w-0 right-0 botton-0" />
    </>

  )
}

export default TypingApp;
