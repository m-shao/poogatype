import React, { useState, useEffect } from 'react';

function Timer({stop, callback, reset}) {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    if (reset){
      setSeconds(0)
    }
  }, [reset])

  useEffect(() => {
    let intervalId;
    if (!stop) {
      intervalId = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [stop]);

  useEffect(() => {
    callback(seconds)
  }, [seconds])
  
  return (
  <div>
    {seconds}
  </div>
  )
}

export default Timer;