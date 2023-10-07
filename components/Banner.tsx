import Image from "next/image";
import React from "react";
import { formatDate } from "./formatDate";
import Link from "next/link";

interface Props {
  id: string;
  title: string;
  image: string;
  slug: {
    current: string; // 'current' özelliği bir string içerir
  };
  content: any[]; // content'i bir dizi olarak işaretle
  createdAt: string;
  category: string[];
}

const Banner = ({
  id,
  title,
  image,
  slug,
  content,
  createdAt,
  category,
}: Props) => {
  return (
   
      <div className=" bg-slate-400 relative h-[350px] w-full object-cover overflow-hidden">
        <Image
          src={image}
          className=" object-cover w-auto h-full hover:scale-110 transition-transform duration-500 "
          width={400}
          height={400}
          alt="pi"
        />
        <div className="absolute flex flex-col left-4 bottom-5 gap-5 ">
         

        <Link href={slug.current}><h1 className="text-xl text-white font-bold tracking-wider">{title}</h1></Link>

          <p className="text-slate-200 text-sm italic"> {formatDate(createdAt)}</p>          

            
        </div>
      </div>
  
  );
};

export default Banner;
