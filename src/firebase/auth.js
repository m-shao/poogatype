import { useState } from 'react'
import { auth, googleProvider } from '../config/firebase.js'
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { async } from '@firebase/util'

export const Auth = ( ) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const createAccount = async () => {
        try{
            await createUserWithEmailAndPassword(auth, email, password)
        } catch(error){
            console.error(error)
        }
    }

    const logIn = async () => {
        try{
            await signInWithEmailAndPassword(auth, email, password)
        } catch(error) {
            console.error(error)
        }
    }
    
    const logOut = async () => {
        try{
            await signOut(auth)
        } catch(error) {
            console.error(error)
        }
    }

    const signInWithGoogle = async () => {
        try{
            await signInWithPopup(auth, googleProvider)
        } catch(error) {
            console.error(error)
        }
    }

    return(
        <div className='text-black text-xl'>
            <input 
            className='block'
            placeholder="Email..."
            onChange={(e) => {
                setEmail(e.target.value)
            }}
            />
            <input
            className='block'
            placeholder="Password..."
            onChange={(e) => {
                setPassword(e.target.value)
            }}
            />
            <button className='bg-gray-200 p-2 block' onClick={createAccount}>Create account</button>

            <button className='bg-gray-200 p-2 block' onClick={logIn}>Log In</button>

            <button className='bg-gray-200 p-2 block' onClick={logOut}>Log Out</button>

            <button className='bg-gray-200 p-2 block' onClick={signInWithGoogle}>Google</button>
        </div>
    )
}