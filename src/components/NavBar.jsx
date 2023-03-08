import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import SettingsSvg from '../images/SettingsSvg'
import User from '../images/User'

function NavBar() {
  
  return (
    <div className='flex w-full justify-between items-center'>
        <Link to="/">
          <h1 className='font-black [font-family:"lato"]'>
            Pooga<span className='text-[color:var(--highlight-primary)]'>Type</span>
          </h1>
        </Link>
        
        <div className='flex gap-6'>
        <Link to="/">
          <SettingsSvg colour="var(--highlight-primary)"/>
        </Link>
        <Link to={"/login"}>
          <User colour="var(--highlight-primary)"/>
        </Link>
        </div>
    </div>
  )
}

export default NavBar