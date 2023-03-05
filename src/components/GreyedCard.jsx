import React from 'react'

function GreyedCard({children, flexDir, gap, justify, align}) {
  return (
    <div className='w-screen h-screen flex items-center justify-center fixed left-0 top-0 bg-black bg-opacity-60 p-4'>
        <div className={'bg-neutral-800 text-white max-h-128 h-full max-w-4xl w-full p-12 rounded-xl relative flex flex-'
        + flexDir + ' gap-' + gap + ' justify-' + justify + ' items-' + align}>
            {children}
        </div>
    </div>
  )
}
//flex gap-16 justify-between
export default GreyedCard