import React, { useState } from 'react'
import { auth } from '../config/firebase.js'
import { sendPasswordResetEmail } from 'firebase/auth'
import { Link } from 'react-router-dom'

import Notification from '../components/Notification.jsx'

import exitIcon from '../images/x.svg'

function ForgotPassword() {
    const [resetEmail, setResetEmail] = useState(null)

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

    const resetPasswordEmail = async () => {
        if (!resetEmail){
            callNotification("bad", "Enter a Valid Email")
        }
        else{
            try{
                await sendPasswordResetEmail(auth, resetEmail)
                callNotification("good", "Email Verification Sent")
            } catch (error) {
                //prevent malicious actors from finding out what emails exist
                callNotification("good", "Email Verification Sent")
            }
        }
        
    }

    return(
    <div className='w-screen h-screen flex items-center justify-center fixed left-0 top-0 bg-black bg-opacity-60 p-4'>
        <div className='bg-[color:var(--base-primary)] text-[color:var(--text-primary)] max-h-128 h-full max-w-4xl w-full flex gap-16 justify-between p-12 rounded-xl relative'>
            <Link to="/login" className='absolute right-8 top-8 hover:bg-[color:var(--base-secondary)] transition-all p-2 rounded-lg'>
                <img className='invert' src={exitIcon} alt="" />
            </Link>
            <div className='text-lg flex flex-col gap-7 flex-1'>
                <h1 className='text-4xl'>Forgot Password</h1>
                <div className='flex flex-col gap-2'>
                <h2>Email</h2>
                <input
                    className='block h-10 p-4 rounded-lg text-[color:var(--base-secondary)] bg-[color:var(--text-primary)]'
                    placeholder="Type your Email"
                    type='text'
                    onChange={(e) => {
                    setResetEmail(e.target.value)
                }}/>
                </div>
                <button className='p-2 rounded-lg bg-[color:var(--highlight-primary)] hover:bg-[color:var(--highlight-secondary)] transition-all flex gap-3 items-center justify-center' onClick={resetPasswordEmail}>
                <h2 className='text-[color:var(--base-primary)]'>Send Reset Password Email</h2>
                </button>       
            </div>
        </div>
        {activeNotification && <Notification type={notiType} message={notiMessage}/>}
    </div>
    )
}

export default ForgotPassword