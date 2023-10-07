import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props{
  title: string;
  poster: string;
  keywords: string[];
}

const InstaFeed = ({ title, poster, keywords }: Props) => {
  return (

        <Link href="/">
      <Image
        className=" hover:scale-105 transition-transform duration-300"
        src={poster}
        alt="pikachu"
        width={75}
        height={75}
        
        />
        </Link>
      
  );
};

export default InstaFeed;
