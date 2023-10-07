import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <div className='flex gap-8 justify-center mt-5'>
        <Link href='/' className='menu-items hover:text-slate-500'>Home</Link>
        <Link href='/ourworks' className='menu-items hover:text-slate-500'>Our Works</Link>
        <Link href='/stones' className='menu-items hover:text-slate-500'>Stones</Link>
        <Link href='/contact' className='menu-items hover:text-slate-500'>Contact</Link>

    </div>
  )
}

export default Menu