import React, { useState, useRef, useEffect } from 'react'

function Letter({keyLetter, correct, active}) {
    active = true
    // correct === 1 && console.log(keyLetter)
    return(
        <span className={
            !active? "text-neutral-500" : (correct === 0 ? "text-red-400": (correct === 1? "text-white": "text-neutral-500"))
            
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
    function makeArrayOf2s(words) {
        const twoArr = words.map((word) => {
          const row = [];
          for (let i = 0; i < word.length; i++) {
            row.push("2");
          }
          return row;
        });
        return twoArr;
      }
    
    let paragraph = "and we need you for a little late night dinner and then i have a few days off work tomorrow night so we will have a plan on tuesday for you and i can just drop your off and bring it home to the house if i can come over to your mom house and i get some water for me and then i’ll take you out for me and then i’ll take"
    const paraList = paragraph.split(" ")
    let [rightList, setRightList] = useState(makeArrayOf2s(paraList))
    console.log(rightList)

    const [text, setText] = useState('')
    const [textList, setTextList] = useState([[]])

    function changeRightList(row, col, newValue) {
        setRightList((prevArray) => {
          const newArray = [...prevArray];
          newArray[row] = [...prevArray[row]];
          newArray[row][col] = newValue;
          return newArray;
        })
      }

    const handleChange = (event) => {
        setText(event.target.value)
        setTextList(text.split(" "))
    }

    const inputRef = useRef()

    function focus() {
        inputRef.current.focus()
    }

    useEffect(() => {
        for (let i=0;i<textList.length;i++){
            for(let j=0; j < textList[i].length;j++){
                if(paraList[i][j] === textList[i][j]){
                    changeRightList(i, j, '1')
                }
                else{
                    changeRightList(i, j, '0')
                }
            }
        }
    }, [text])
    

    let yes = 2
    return (
        <>
            {/* <h1>{activeWord.current}</h1> */}
            <div className="flex justify-center items-center w-full h-full">   
                <div className='max-w-3xl text-left text-2xl tracking-wide font-normal text-neutral-500 [word-spacing:5px] max-h-40 overflow-hidden'>
                    {paraList.map((word, wordInd) => {

                        return(
                            <span>
                                {word.split("").map((letter, ind) => {
                                    yes = parseInt(rightList[wordInd][ind])
                                    return(
                                        <Letter keyLetter={letter} correct={yes}/>
                                    )
                                })} </span>
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