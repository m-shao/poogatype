import React from 'react'

import GreyedCard from '../components/GreyedCard'

function Profile() {
  return (
    <GreyedCard flexDir={"col"} gap={"16"} justify={"between"} align={"start"}>
    <div>
      <h1 className='mb-10'>Minglun Shao</h1>
      <div className='flex'>
        <ul className='text-3xl flex flex-row gap-6 justify-between w-full'>
          <li className='text-center'>
            <h2>Average WPM:</h2>
            <h3 className='text-indigo-400 font-black text-5xl'>76</h3>
          </li>
          <li className='text-center'>
            <h2>Average Accuracy:</h2>
            <h3 className='text-indigo-400 font-black text-5xl'>89%</h3>
          </li>
          <li className='text-center'>
            <h2>Games Played:</h2>
            <h3 className='text-indigo-400 font-black text-5xl'>123</h3>
          </li>
        </ul>
      </div>
    </div>
    <div className='flex justify-between text-2xl'>
      <h1>Account Settings</h1>
      <h1>Joined May 15th 2023</h1>
    </div>
      
    </GreyedCard>
  )
}

export default Profile