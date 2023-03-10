import { useState } from 'react'
import { auth, googleProvider } from '../config/firebase.js'
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, signInWithPopup, sendEmailVerification } from 'firebase/auth'
import { Link } from 'react-router-dom'


import signInIcon from '../images/signin-icon.svg'
import newUserIcon from '../images/user-add-icon.svg'
import googleSignInIcon from '../images/google-icon.svg'
import exitIcon from '../images/x.svg'

const LoginPage = ( ) => {
    const [newEmail, setNewEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const createAccount = async () => {
        try{
            await createUserWithEmailAndPassword(auth, newEmail, newPassword)
            signUserOut()
            await sendEmailVerification(auth?.currentUser)
            alert("New Account Created, Please Verify Email")
        } catch(error){
            alert("This Account Already Exists")
        }
    }
    
    const signIn = async () => {
        try{
            await signInWithEmailAndPassword(auth, email, password)
            if (!auth.currentUser.emailVerified) {
                signUserOut()
                alert("Please Verify This Account or Create a New One")
            }
        } catch(error) {
            alert("Account does not exists")
        }
    }
    
    const signUserOut = async () => {
        try{
            await signOut(auth)
        } catch(error) {
          alert("Error Signing out")
        }
    }

    const signInWithGoogle = async () => {
        try{
            await signInWithPopup(auth, googleProvider)
        } catch(error) {
            alert("Error Signing In")
        }
    }

    return(
      <div className='w-screen h-screen flex items-center justify-center fixed left-0 top-0 bg-black bg-opacity-60 p-4'>
        <div className='bg-[color:var(--base-primary)] text-[color:var(--text-primary)] max-h-128 h-full max-w-4xl w-full flex gap-16 justify-between p-12 rounded-xl relative'>
          <Link to="/" className='absolute right-8 top-8 hover:bg-[color:var(--base-seondary)] transition-all p-2 rounded-lg'>
            <img className='invert' src={exitIcon} alt="" />
          </Link>
          <div className='text-lg flex flex-col gap-7 flex-1'>
            <h1 className='text-4xl'>Register</h1>
            <div className='flex flex-col gap-2'>
              
              <h2>Email</h2>
              <input 
                className='block h-10 p-4 rounded-lg text-[color:var(--base-primary)] bg-white border-black border'
                placeholder="Type your email"
                onChange={(e) => {
                  setNewEmail(e.target.value)
              }}/>

              <h2>Password</h2>
              <input
                className='block h-10 p-4 rounded-lg text-[color:var(--base-primary)] bg-white border-black border'
                placeholder="Type your password"
                type='password'
                onChange={(e) => {
                  setNewPassword(e.target.value)
              }}/>
            </div>
            <button className='p-2 rounded-lg bg-[color:var(--highlight-primary)] hover:bg-[color:var(--highlight-secondary)] transition-all flex gap-3 items-center justify-center' onClick={createAccount}>
              <img src={newUserIcon} alt="create account" />
              <h2 className="text-white">Create Account</h2>
            </button>       
            <button className='p-2 rounded-lg bg-[color:var(--highlight-primary)] hover:bg-[color:var(--highlight-secondary)] transition-all flex gap-3 items-center justify-center' onClick={signUserOut}>
              <img src={newUserIcon} alt="create account" />
              <h2 className="text-white">Sign Out</h2>
            </button>         
          </div>

          <div className=" left-1/2 w-0.5 h-full top-0 bg-[color:var(--base-secondary)]"></div>

          <div className='text-lg flex flex-col gap-7 flex-1 justify-start'>
            <h1 className='text-4xl'>Sign In</h1>
            <div className='flex flex-col gap-2'>
              <h2>Email</h2>
              <input 
                className='block h-10 p-4 rounded-lg text-[color:var(--base-primary)] bg-white border-black border w-full'
                placeholder="Type your email"
                onChange={(e) => {
                    setEmail(e.target.value)
              }}/>
              <h2>Password</h2>
              <input
                className='block h-10 p-4 rounded-lg text-[color:var(--base-primary)] bg-white border-black border w-full'
                placeholder="Type your password"
                type='password'
                onChange={(e) => {
                    setPassword(e.target.value)
              }}/>
              <Link to="/reset-password" className='text-left'>
                <h4 className='text-sm text-neutral-400'>Forgot Password?</h4>
              </Link>
            </div>
            

            <button className='p-2 rounded-lg bg-[color:var(--highlight-primary)] hover:bg-[color:var(--highlight-secondary)] transition-all flex gap-3 items-center justify-center' onClick={signIn}>
              <img src={signInIcon} alt="sign in" />
              <h2 className="text-white">Sign In</h2>
            </button>

            <button className='p-2 rounded-lg bg-[color:var(--highlight-primary)] hover:bg-[color:var(--highlight-secondary)] transition-all flex gap-3 items-center justify-center' onClick={signInWithGoogle}>
              <img src={googleSignInIcon} alt="sign in with google" />
              <h2 className="text-white">Google Sign In</h2>
            </button>
          </div>
        </div>
      </div>
    )
}

export default LoginPage