import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import settingsIcon from "../images/settings.svg"
import accountIcon from "../images/user.svg"


function NavBar() {
  
  return (
    <div className='flex w-full justify-between items-center'>
        <Link to="/">
          <h1 className='font-black [font-family:"lato"]'>
            Pooga<span className='text-indigo-400'>Type</span>
          </h1>
        </Link>
        
        <div className='flex gap-6'>
        <Link to="/">
          <img src={settingsIcon} alt="settings" />
        </Link>
        <Link to={"/login"}>
          <img src={accountIcon} alt="account" />
        </Link>
        </div>
    </div>
  )
}

export default NavBar