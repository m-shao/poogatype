import React, {useEffect, useState} from 'react'

import { db } from '../config/firebase.js'
import { auth } from '../config/firebase.js'
import { getDoc, doc, setDoc } from 'firebase/firestore'

import { useTheme } from '../context/ColourContext.js'
import { Link } from 'react-router-dom'
import exitIcon from '../images/x.svg'

import {signOut} from 'firebase/auth'

import GreyedCard from '../components/GreyedCard'

function Profile() {
    const {textColour1, textColour2, highlight1, highlight2, main1, main2} = useTheme()

    const [wpm, setWpm] = useState(0)
    const [acc, setAcc] = useState(0)
    const [games, setGames] = useState(0)

    const readDoc = async () => {
        try{
            const docRef = doc(db, "userStats", auth?.currentUser?.uid)
            const docSnap = await getDoc(docRef)
            
            if (!docSnap.exists()){
                setDoc(docRef, {
                    averageWpm: 0,
                    averageAccuracy: 0,
                    gamesPlayed: 0
                })
            }
            const data = await docSnap.data()
            setWpm(data.averageWpm)
            setAcc(data.averageAccuracy)
            setGames(data.gamesPlayed)

        } catch(error) {
            console.error(error)
        }
    }
    
    useEffect(() => {
        readDoc()
    }, [])
    
  

    const signUserOut = async () => {
        try{
            await signOut(auth)
        } catch(error) {
            console.error(error)
        }
    }
    
  return (
    <GreyedCard flexDir={"col"} gap={"16"} justify={"between"} align={"start"}>
    <Link to="/" className='absolute right-8 top-8 hover:bg-neutral-900 transition-all p-2 rounded-lg'>
        <img className='invert' src={exitIcon} alt="" />
    </Link>
    <div>
      <h1 className='mb-10'>Minglun Shao</h1>
      <div className='flex'>
            <ul className='text-3xl flex flex-row gap-6 justify-between w-full'>
                <li className='text-center'>
                    <h2>Average WPM:</h2>
                    <h3 className='text-indigo-400 font-black text-5xl'>{parseInt(wpm)}</h3>
                </li>
                <li className='text-center'>
                    <h2>Average Accuracy:</h2>
                    <h3 className='text-indigo-400 font-black text-5xl'>{parseInt(acc)}%</h3>
                </li>
                <li className='text-center'>
                    <h2>Games Played:</h2>
                    <h3 className='text-indigo-400 font-black text-5xl'>{parseInt(games)}</h3>
                </li>
            </ul>
      </div>
    </div>
    <div className='flex justify-between text-2xl'>
        <h1>Account Settings</h1>
        <h1>Joined May 15th 2023</h1>
    </div>
    <button className='p-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition-all flex gap-3 items-center justify-center' onClick={signUserOut}>
        <h2>Sign Out</h2>
    </button>  
      
    </GreyedCard>
  )
}

export default Profile