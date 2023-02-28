import React, { useState, useEffect } from 'react'
import { db } from '../config/firebase.js'
import { getDocs, collection } from 'firebase/firestore'

function FirebaseSample() {
    const [userStats, setUserStats] = useState([])

    const useStatsCollectionRef = collection(db, "userStats")

    useEffect(() => {
        const getUserStats = async () => {
            try{
                const data = await getDocs(useStatsCollectionRef)
                const filteredData = data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                }))
                setUserStats(filteredData)
            } catch(error){
                console.error(error)
            }
            
        }
        getUserStats()
    }, [])

    return (
        <div className='text-2xl'>
            <div>
                {userStats.map((stat, index) => (
                    <div key={index}>
                        <h1>{stat.title}</h1>
                        <p>WPM: {stat.averageWpm} WPM</p>
                        <p>Accuracy: {stat.averageAccuracy}%</p>
                        <p>Games Played: {stat.gamesPlayed}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FirebaseSample