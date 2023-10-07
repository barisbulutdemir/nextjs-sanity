import Image from 'next/image'
import React from 'react'

const Advert = () => {
  return (
    <div className='space-y-4'>
        <h2 className='font-bold text-xl'>Offer</h2>
        <div>
            <Image src="/hawaii.png" alt='hawai' width={250} height={250}/>
        </div>
    </div>
  )
}

export default Advert