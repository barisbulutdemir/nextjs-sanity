import Advert from "@/components/Advert";
import Banner from "@/components/Banner";
import Blogs from "@/components/Blogs";
import InstaFeed from "@/components/InstaFeed";
import RecentPosts from "@/components/RecentPosts";
import {
  getHeroResources,
  getInstaFeedResources,
  getResourcePlaylist,
  getResources,
} from "@/sanity/actions";
import React from "react";

const Page = async () => {
  const resources = await getResources({
    query: "",
    category: "",
    page: "1",
  });

  console.log(resources);

  const heroResources = await getHeroResources({
    query: "",
    category: "",
    page: "1",
  });

  const resourcesPlaylist = await getResourcePlaylist(
    "ea223a50-a1e1-4387-b02c-81c16e6484c8"
  );

  const instaFeed = await getInstaFeedResources({
    query: "",
    category: "",
    page: "1",
  });

  console.log(instaFeed);

  return (
    <div>
      <div className="w-full block md:flex gap-2 justify-between h-[325px] px-2 mt-10 ">
        {heroResources.map((heroResource: any) => (
          <Banner
            key={heroResource._id}
            title={heroResource.title}
            id={heroResource._id}
            image={heroResource.image}
            content={heroResource.content}
            slug={heroResource.slug}
            createdAt={heroResource.createdAt}
            category={heroResource.category}
          />
        ))}
      </div>
      <div className="w-[80%] flex mx-auto justify-between mt-20">
        <div className="w-[75%] space-y-10">
          {resources.map((resource: any) => (
            <Blogs
              key={resource._id}
              title={resource.title}
              id={resource._id}
              image={resource.image}
              content={resource.content}
              slug={resource.slug}
              createdAt={resource.createdAt}
              category={resource.category}
            />
          ))}
        </div>
        <div className="w-[25%]">
          <div className="pl-10 space-y-10">
            
            <div className="pl-2 space-y-2">
              <h1 className="font-bold  text-xl">Must Read</h1>
              {resourcesPlaylist.resources.map((resource: any) => (
                <RecentPosts
                  key={resource._id}
                  title={resource.title}
                  slug={resource.slug}
                  image={resource.image}
                  category={resource.category}
                />
              ))}
            </div>
            
            <div className="">
              <Advert />
              <div className="mt-20 ">
                <h2 className="text-md font-bold ">Instagram Feeds  </h2>
                <div className="grid grid-cols-3 gap-2 items-center mt-5 ">

              {instaFeed.map ((feed: any ) => (
                <InstaFeed
                key={feed._id}
                title={feed.title}
                poster={feed.poster}
                keywords={feed.keywords}
                
                />
                ))}
                </div>
                </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
