import React from 'react'

import settingsIcon from "../images/settings.svg"
import accountIcon from "../images/user.svg"


function NavBar() {
  return (
    <div className='flex w-full justify-between'>
        <h1 className='font-black [font-family:"lato"]'>
        Pooga<span className='text-indigo-400'>Type</span>
        </h1>
        <div className='flex gap-6'>
        <button>
            <img src={settingsIcon} alt="settings" />
        </button>
        <button>
            <img src={accountIcon} alt="account" />
        </button>
        </div>
    </div>
  )
}

export default NavBar