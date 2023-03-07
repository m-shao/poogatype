import React from 'react'

function Keyboard({mistakeObj, largeness}) {
    const keys = ["qwertyuiop".split(""), 
                "asdfghjkl".split(""), 
                "zxcvbnm".split("")]

    return (
        <>
            <div className='flex flex-col text-2xl font-light flex-1'>
                {keys.map((keyRow) => (
                    <div className='flex'>
                        {keyRow.map((key) => (
                            <div title={"Wrong: " + (mistakeObj[key] || 0)} className={
                                'w-12 h-12 m-1 bg-[color:var(--text-secondary)] text-[color:var(--text-primary)] rounded-lg flex items-center justify-center '
                                + (key in mistakeObj && 'bg-[color:var(--error)]')}>
                                <h1 className="inline cursor-default">{key}</h1>
                            </div>
                        ))}
                    </div>
                    
                ))}
            </div>
        </>
    )
}

export default Keyboard