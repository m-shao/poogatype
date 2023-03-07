import { db } from '../config/firebase.js'
import { auth } from '../config/firebase.js'
import { getDoc, doc, setDoc } from 'firebase/firestore'

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
        return [data.averageWpm, data.averageAccuracy, data.gamesPlayed]

    } catch(error) {
        console.error(error)
    }
}

export default readDoc