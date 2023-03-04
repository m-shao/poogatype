import { useState } from 'react'
import { auth, googleProvider } from '../config/firebase.js'
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, signInWithPopup, sendEmailVerification } from 'firebase/auth'
import { Link } from 'react-router-dom'


import Notification from '../components/Notification.jsx'

import signInIcon from '../images/signin-icon.svg'
import newUserIcon from '../images/user-add-icon.svg'
import googleSignInIcon from '../images/google-icon.svg'
import exitIcon from '../images/x.svg'

const LoginPage = ( ) => {
    const [newEmail, setNewEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [activeNotification, setActiveNotification] = useState(false)
    const [notiMessage, setnotiMessage] = useState('')
    const [notiType, setNotiType] = useState('good')

    const callNotification = (type, message) => {
      setnotiMessage(message)
      setNotiType(type)
      setActiveNotification(true)
      setTimeout(() => {
        setActiveNotification(false)
    }, 4000)
    }

    const createAccount = async () => {
        try{
            await createUserWithEmailAndPassword(auth, newEmail, newPassword)
            signUserOut()
            await sendEmailVerification(auth?.currentUser)
            callNotification("good", "New Account Created, Please Verify Email")
        } catch(error){
            callNotification("bad", "This Account Already Exists")
        }
    }
    
    const signIn = async () => {
        try{
            await signInWithEmailAndPassword(auth, email, password)
            
            if (auth.currentUser.emailVerified) {
              callNotification("good", "Signed In Successfully")
            }
            else{
              signUserOut()
              callNotification("bad", "Please Verify This Account or Create a New One")
            }
        } catch(error) {
            console.error(error)
        }
    }
    
    const signUserOut = async () => {
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
      <div className='w-screen h-screen flex items-center justify-center fixed left-0 top-0 bg-black bg-opacity-60 p-4'>
        <div className='bg-neutral-800 text-white max-h-128 h-full max-w-4xl w-full flex gap-16 justify-between p-12 rounded-xl relative'>
          <Link to="/" className='absolute right-8 top-8'>
            <img className='invert' src={exitIcon} alt="" />
          </Link>
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
            <button className='p-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition-all flex gap-3 items-center justify-center' onClick={signUserOut}>
              <img src={newUserIcon} alt="create account" />
              <h2>Sign Out</h2>
            </button>         
          </div>

          <div className=" left-1/2 w-0.5 h-full top-0 bg-neutral-900"></div>

          <div className='text-lg flex flex-col gap-7 flex-1 justify-start'>
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
              <Link to="/reset-password" className='text-left'>
                <h4 className='text-sm text-neutral-400'>Forgot Password?</h4>
              </Link>
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
        {activeNotification && <Notification type={notiType} message={notiMessage}/>}
      </div>
    )
}

export default LoginPage