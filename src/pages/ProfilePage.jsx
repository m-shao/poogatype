import React, {useState, useEffect} from 'react'
import Profile from './Profile.jsx'
import Login from './LoginPage.jsx'
import GreyedCard from '../components/GreyedCard.jsx'

import {auth} from '../config/firebase.js'

function ProfilePage() {
    const [authLoaded, setAuthLoaded] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
        setUser(user)
        setAuthLoaded(true)
        })

        return unsubscribe;
    }, [])

    if (!authLoaded) {
        return <GreyedCard/>
    } 
    
    return (
        <div>
            {user ? <Profile/> : <Login/>}  
        </div>
    )
}

export default ProfilePage