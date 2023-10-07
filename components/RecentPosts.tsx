import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  slug: string;
  image: string;
  category: string[];
}

const RecentPosts = ({ title, slug, image, category }: Props) => {
  return (
    <div className="flex items-center space-x-4 ">
      <Image src={image} width={75} height={75} alt="pi" />
      <div className=" space-y-2">
        <Link href="/">
          {" "}
          <h1 className="font-bold text-sm">{title}</h1>
        </Link>
        <p className="text-slate-500 text-xs italic">12 Jan, 2016</p>
      </div>
    </div>
  );
};

export default RecentPosts;
