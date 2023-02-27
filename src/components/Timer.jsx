import React, { useState, useEffect } from 'react';

function Timer({stop, callback}) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let intervalId;
    if (!stop) {
      intervalId = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [stop]);

  callback(seconds)
  
  return (
  <div className='absolute right-0'>
    {seconds}
  </div>
  )
}

export default Timer;