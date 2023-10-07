import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Menu from '@/components/Menu'
import Navbar from '@/components/Navbar'
import React from 'react'


const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        <Navbar />
        <Hero />
         <Menu />
         <div className='my-20'>

        {children}
         </div>
        <Footer />
    </>
  )
}

export default layout