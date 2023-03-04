import React, { useState, useEffect } from 'react'

function Notification({ type, message }) {
    const [notificationColour, setNotificationColour] = useState("bg-green-500")

    const [notificationVisible, setNotificationVisible] = useState(true)

    setTimeout(() => {
        setNotificationVisible(false)
    }, 3500)

    useEffect(() => {
        if(type === "good"){
            setNotificationColour("bg-green-500")
        } else if(type === "bad") {
            setNotificationColour("bg-red-500")
        }
    }, [type])
    
    return (
        <div className={"absolute bottom-5 mx-auto w-full max-w-2xl h-10 rounded-xl text-xl flex justify-center items-center transition-all duration-1000 " 
        + notificationColour + " "
        + (!notificationVisible && " opacity-0")}>
            {message}
        </div>
    )
}

export default Notification