import React, { useState } from 'react';

function TypingApp() {
  const [currentChar, setCurrentChar] = useState(0);
  const [inputValue, setInputValue] = useState('');
  
  const text = 'and we need you for a little late night dinner and then i have a few days off work tomorrow night so we will have a plan on tuesday for you and i can just drop your off and bring it home to the house if i can come over to your mom house and i get some water for me and then i’ll take you out for me and then i’ll take';

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
        return 'text-green-500';
      }
      else{
        return 'text-red-500';
      }
    } else if (index === currentChar) {
      return 'text-gray-500';
    } else if (index >= currentChar) {
      return 'text-white';
    }
  };

  return (
    <div className="p-4">
      <p>
        {text.split('').map((char, index) => (
          <span key={index} className={getCharClass(index)}>
            {char}
          </span>
        ))}
      </p>
      <input
        className="text-black mt-4 p-2 rounded border border-gray-500"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default TypingApp;
