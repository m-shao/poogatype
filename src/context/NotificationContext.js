import React, { useContext, useState } from 'react'

const notificationContext = React.createContext()
const notificationUpdateContext = React.createContext()

export function useNotification() {   
    return useContext(notificationContext) 
}  

export function useNotificationUpdate() {   
    return useContext(notificationUpdateContext);
}  


export function NotifcationProvider({ children }) {   
    const [notifcation, setNotifcation] = useState(['', 'good'])

    function changeNotification(message, type) {     
        setNotifcation((notifcation) => [message, type])   
    }    

    return (     
        <notificationContext.Provider value={notifcation}>       
            <notificationUpdateContext.Provider value={changeNotification}>         
                {children}       
            </notificationUpdateContext.Provider>     
        </notificationContext.Provider>   
    ) 
}
