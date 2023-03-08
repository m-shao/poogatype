import React from 'react'

function Slider({colour}) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 21V14" stroke={colour} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 10V3" stroke={colour} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 21V12" stroke={colour} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 8V3" stroke={colour} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 21V16" stroke={colour} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 12V3" stroke={colour} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 14H7" stroke={colour} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 8H15" stroke={colour} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 16H23" stroke={colour} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  )
}

export default Slider