import Link from 'next/link'
import React, { Children } from 'react'

function CustomBtn({children,href='#',icon,className=' capitalize '}) {
  return (
    <div className={`${className} font-body bg-brand-secondary  p-4 rounded-full min-w-[8em] flex items-center justify-center`}>
    <a href={href} className=' text-center text-brand-black font-semibold  flex w-full justify-center items-center transition-all duration-300 ease-out'>
    {children}
    </a>
       </div>
  )
}

export default CustomBtn