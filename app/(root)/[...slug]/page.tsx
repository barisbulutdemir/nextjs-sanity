'use client'
import { Label } from '@/components/ui/label';
import { getResourceBySlugg } from '@/sanity/actions';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react'

const Page = async () => {

    const path = usePathname();
const formattedSlug = path.replace(/^\//, '').trim().toLowerCase(); // Başındaki "/" işaretini çıkar, boşlukları kaldır ve küçük harfe çevir
const slugByBlog = await getResourceBySlugg(formattedSlug);

    console.log(slugByBlog);
  return (
    <section>
    <div className="px-10 mt-20">
      <Label className="flex-center text-4xl  antialiased  font-semibold">{slugByBlog.title}</Label>
      <div  className="h-0.5 bg-gray-300 w-[80%] mx-auto mt-5 "/>
   
    
    
      <div  className="mt-20 flex  space-x-10 ">
        <Image className='w-[30%] h-auto' src={slugByBlog.image} alt='sa' width={250} height={250}/>
        <div className="space-y-10 w-[70%]">
          <div className="">
          <PortableText value={slugByBlog.content}  />

          </div>
          <div className="flex justify-between">
            <p className="italic text-slate-400 pr-10">12.06.2023</p>
          </div>
        </div>
      </div>
    
      
  
    </div>
  </section>
  )
}

export default Page;