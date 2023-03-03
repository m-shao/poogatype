import { useState } from 'react'
import { auth, googleProvider } from '../../config/firebase.js'
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { async } from '@firebase/util'

import signInIcon from '../../images/signin-icon.svg'
import newUserIcon from '../../images/user-add-icon.svg'
import googleSignInIcon from '../../images/google-icon.svg'
import exitIcon from '../../images/x.svg'

export const LoginPage = ( ) => {
    const [newEmail, setNewEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const createAccount = async () => {
        try{
            await createUserWithEmailAndPassword(auth, newEmail, newPassword)
        } catch(error){
            console.error(error)
        }
    }

    const signIn = async () => {
        try{
            await signInWithEmailAndPassword(auth, email, password)
        } catch(error) {
            console.error(error)
        }
    }
    
    const signOut = async () => {
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
      <div className='w-screen h-screen flex items-center justify-center fixed left-0 top-0 bg-black bg-opacity-60'>
        <div className='bg-neutral-800 text-white max-h-128 h-full max-w-4xl w-full flex gap-16 justify-between p-12 rounded-xl relative'>
          <button className='absolute right-8 top-8'><img className='invert' src={exitIcon} alt="" /></button>
          <div className='text-lg flex flex-col gap-7 flex-1'>
            <h1 className='text-4xl'>Register</h1>
            <div className='flex flex-col gap-2'>
              
              <h2>Email</h2>
              <input 
                className='block h-10 p-4 rounded-lg text-black'
                placeholder="Type your email"
                onChange={(e) => {
                  setNewEmail(e.target.value)
              }}/>

              <h2>Password</h2>
              <input
                className='block h-10 p-4 rounded-lg text-black'
                placeholder="Type your password"
                type='password'
                onChange={(e) => {
                  setNewPassword(e.target.value)
              }}/>
            </div>
            <button className='p-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition-all flex gap-3 items-center justify-center' onClick={createAccount}>
              <img src={newUserIcon} alt="create account" />
              <h2>Create Account</h2>
            </button>           
          </div>

          <div className=" left-1/2 w-0.5 h-full top-0 bg-neutral-900"></div>

          <div className='text-lg flex flex-col gap-7 flex-1'>
            <h1 className='text-4xl'>Sign In</h1>
            <div className='flex flex-col gap-2'>
              <h2>Email</h2>
              <input 
                className='block h-10 p-4 rounded-lg text-black w-full'
                placeholder="Type your email"
                onChange={(e) => {
                    setEmail(e.target.value)
              }}/>
              <h2>Password</h2>
              <input
                className='block h-10 p-4 rounded-lg text-black w-full'
                placeholder="Type your password"
                type='password'
                onChange={(e) => {
                    setPassword(e.target.value)
              }}/>
              <h4 className='text-sm text-neutral-400'>Forgot Password?</h4>
            </div>
            

            <button className='p-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition-all flex gap-3 items-center justify-center' onClick={signIn}>
              <img src={signInIcon} alt="sign in" />
              <h2>Sign In</h2>
            </button>

            <button className='p-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition-all flex gap-3 items-center justify-center' onClick={signInWithGoogle}>
              <img src={googleSignInIcon} alt="sign in with google" />
              <h2>Google Sign In</h2>
            </button>
          </div>
        </div>
      </div>
    )
}