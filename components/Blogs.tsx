import Image from "next/image";
import React from "react";
import { formatDate } from './formatDate';

import { PortableText } from '@portabletext/react'; // PortableText ekledik
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



const Blogs = ({ id, title, image, slug, content, createdAt, category }: Props) => {
  return (
    <div className="flex space-x-6">
      <div className="w-[25%] object-cover">
        <Link href={slug.current} onClick={() => window.location.href = slug.current}><Image src={image} alt={slug.current} className="" width={250} height={250} /> </Link>
      </div>
      <div className="space-y-4 w-[60%]">
      <div className="space-x-2">
          {category.map((cat) => (
            <span key={cat} className="px-3 py-1 rounded text-xs bg-green-500 text-white  capitalize">
              {cat}
            </span>
          ))}
        </div>
        <Link href={slug.current} onClick={() => window.location.href = slug.current}><h1 className="text-xl font-bold tracking-wider">{title}</h1></Link>
        {/* PortableText ile content'i görüntüle */}
        <div className="text-slate-400 line-clamp-3 text-sm">

        <PortableText value={content}  />
        </div>
        <div className="text-end text-sm italic text-slate-500">
          
        <p> {formatDate(createdAt)}</p>          
        </div>
      </div>
    </div>
  );
};

export default Blogs;
