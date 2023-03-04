import React from 'react'

import GreyedCard from '../components/GreyedCard'
import Keyboard from '../components/Keyboard'

function Profile() {
  return (
    <GreyedCard flexDir={"flex-row"} gap={"gap-16"} justify={"start"} align={"start"}>
      <h1 className='mb-10'>Minglun Shao</h1>
      <div className='flex justify-between'>
        <ul className='text-2xl flex flex-col gap-6'>
          <li>
            Average WPM: 76
          </li>
          <li>
            Average Accuracy: 89%
          </li>
          <li>
            Games Played: 123
          </li>
        </ul>
        <Keyboard mistakeObj={{'a':1, 'h':10, 'f':5}}/>
      </div>
      
    </GreyedCard>
  )
}

export default Profile