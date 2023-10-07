'use client'

import { getGalleryResources } from "@/sanity/actions";
import React from "react";
import Masonry from "react-masonry-css";


const breakpointColumnsObj = {
  default: 3, // Varsayılan sütun sayısı
  1100: 2,    // 1100px eknpmran genişliğinde 2 sütun
  700: 1      // 700px ekran genişliğinde 1 sütun
};


interface Props{
  title: string;
  poster: string;
  keywords: string[];
}

const Gallery = async () => {

  const galleryResources = await getGalleryResources({
    query: "",
    category: "",
    page: "1",
  });

  


  return (
    <div className="App px-4">
      <h1 className="text-center font-bold text-2xl py-10">Stone Gallery</h1>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >

        {galleryResources.map((image:any) => (
          <div key={image._id} className="gallery-item hover:scale-105 transition-transform duration-500 -mx-2 rounded overflow-hidden ">
            <img src={image.poster} alt="" />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Gallery;
