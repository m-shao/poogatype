import { db } from '../config/firebase.js'
import { auth } from '../config/firebase.js'
import { getDoc, doc, setDoc } from 'firebase/firestore'

const updateDoc = async (wpm, acc) => {
    try{
        const docRef = doc(db, "userStats", auth?.currentUser?.uid)
        const docSnap = await getDoc(docRef)
        
        if (docSnap.exists()){
            const data = docSnap.data()
            setDoc(docRef, {
                averageWpm: ((data.averageWpm * data.gamesPlayed) + wpm)/(data.gamesPlayed + 1),
                averageAccuracy: ((data.averageAccuracy * data.gamesPlayed) + acc)/(data.gamesPlayed + 1),
                gamesPlayed: (data.gamesPlayed + 1)
            })
        }
        else{
            setDoc(docRef, {
                averageWpm: 0,
                averageAccuracy: 0,
                gamesPlayed: 0
            })
        }

    } catch(error) {
        console.error(error)
    }
}

export default updateDoc