import React from 'react'

function Restart({colour}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={colour} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-rotate-cw">
        <polyline points="23 4 23 10 17 10"></polyline>
        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
    </svg>
  )
}

export default Restart