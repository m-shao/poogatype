import React, { useState } from 'react'
import { auth } from '../../config/firebase.js'
import { sendPasswordResetEmail } from 'firebase/auth'

import Notification from '../Notification.jsx'

import xIcon from '../../images/x.svg'

function ForgotPassword() {
    const [resetEmail, setResetEmail] = useState('')

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
        try{
            await sendPasswordResetEmail(auth, resetEmail)
            callNotification("good", "Email Verification Sent")
        } catch (error) {
            //prevent malicious actors from finding out what emails exist
            callNotification("good", "Email Verification Sent")
        }
    }

    return(
    <div className='w-screen h-screen flex items-center justify-center fixed left-0 top-0 bg-black bg-opacity-60 p-4'>
        <div className='bg-neutral-800 text-white max-h-128 h-full max-w-4xl w-full flex gap-16 justify-between p-12 rounded-xl relative'>
            <button className='absolute right-8 top-8'><img className='invert' src={xIcon} alt="" /></button>
            <div className='text-lg flex flex-col gap-7 flex-1'>
                <h1 className='text-4xl'>Forgot Password</h1>
                <div className='flex flex-col gap-2'>
                <h2>Email</h2>
                <input
                    className='block h-10 p-4 rounded-lg text-black'
                    placeholder="Type your Email"
                    type='text'
                    onChange={(e) => {
                    setResetEmail(e.target.value)
                }}/>
                </div>
                <button className='p-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition-all flex gap-3 items-center justify-center' onClick={resetPasswordEmail}>
                <h2>Send Reset Password Email</h2>
                </button>       
            </div>
        </div>
        {activeNotification && <Notification type={notiType} message={notiMessage}/>}
    </div>
    )
}

export default ForgotPassword