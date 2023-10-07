import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import {  getOurWorksResources } from "@/sanity/actions";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async () => {

  const ourWorkResources = await getOurWorksResources({
    query: "",
    category: "",
    page: "1",
  });

  
  return (
    <section>
      <div className="px-10 mt-20">
        <Label className="flex-center text-4xl  antialiased  font-semibold">Our Works</Label>
        <div  className="h-0.5 bg-gray-300 w-[80%] mx-auto mt-5 "/>
      {
        ourWorkResources.map((item: any) => (

      
      
        <div key={item._id}  className="mt-20 flex  space-x-10  ">
          <Image className=" object-cover h-auto w-[30%]" src={item.image} alt="hawai" width={250} height={250} />
          <div className="space-y-10">
            <Label className="text-2xl antialiased ">{item.title}</Label>
            <div className=" first-sentence">
            <PortableText value={item.content}  />

            </div>
            <div className="flex justify-between">
              <Link href="/" className="underline hover:text-blue-500">More...</Link>
              <p className="italic text-slate-400 pr-10">12.06.2023</p>
            </div>
          </div>
        </div>
      
        
        ))
      }
      </div>
    </section>
  );
};

export default Page;
