import { groq } from "next-sanity";
import { readClient } from "./lib/client";
import { buildQuery } from "./utils";

interface GetResourcesParams {
  query: string;
  category: string;
  page: string;
}
interface GetHeroResourcesParams {
  query: string;
  category: string;
  page: string;
}

interface getInstaFeedResourcesParams {
  query: string;
  page: string;
  category: string;
}

export const getResourcePlaylist = async (playlistId: any) => {
  try {
    const resourcePlaylist = await readClient.fetch(
      groq`*[_type == "resourcePlaylist" && _id == $playlistId]{
                _id,
                title,
                resources[0...6]->{
                    title,
                    _id,
                    content,
                    "image": poster.asset->url,
                    slug,
                    category,
                    createdAt
                  }

            }`,
      { playlistId }
    );

    return resourcePlaylist[0]; // Eğer tek bir playlist çekmek istiyorsanız, ilk sıradaki veriyi kullanabilirsiniz.
  } catch (error) {
    console.log(error);
  }
};



export const getResources = async (params: GetResourcesParams) => {
  const { query, category, page } = params;

  try {
    const resources = await readClient.fetch(
      groq`${buildQuery({
        type: "resource",
        query,
        category,
        page: parseInt(page),
        perPage: 10,
      })}{
                title,
                _id,
                content,
                "image": poster.asset->url,
                slug,
                category,
                createdAt,

            }`
    );

    return resources;
  } catch (error) {
    console.log(error);
  }
};

export const getHeroResources = async (params: GetHeroResourcesParams) => {
  const { query, category, page } = params;

  try {
    const resources = await readClient.fetch(
      groq`${buildQuery({
        type: "heroResource",
        query,
        category,
        page: parseInt(page),
        perPage: 10,
      })}{
                title,
                _id,
                content,
                "image": poster.asset->url,
                slug,
                category,
                createdAt,

            }`
    );

    return resources;
  } catch (error) {
    console.log(error);
  }
};




export const getInstaFeedResources = async (params: getInstaFeedResourcesParams) => {
  const { query, category, page } = params;

  try {
    const resources = await readClient.fetch(
      groq`${buildQuery({
        type: "instaFeed",
        query,
        category,
        page: parseInt(page),
        perPage: 12,
      })}{
                title,
                _id,    
                "poster": poster.asset->url,
                keywords,
            }`
    );

    return resources;
  } catch (error) {
    console.log(error);
  }
};



export const getOurWorksResources = async (params: GetHeroResourcesParams) => {
  const { query, category, page } = params;

  try {
    const resources = await readClient.fetch(
      groq`${buildQuery({
        type: "ourWorks",
        query,
        category,
        page: parseInt(page),
        perPage: 10,
      })}{
                title,
                _id,
                content,
                "image": poster.asset->url,
                slug,
                category,
                createdAt,

            }`
    );

    return resources;
  } catch (error) {
    console.log(error);
  }
};


export const getGalleryResources = async (params: getInstaFeedResourcesParams) => {
  const { query, category, page } = params;

  try {
    const resources = await readClient.fetch(
      groq`${buildQuery({
        type: "gallery",
        query,
        category,
        page: parseInt(page),
        perPage: 12,
      })}{
                title,
                _id,    
                "poster": poster.asset->url,
                keywords,
            }`
    );

    return resources;
  } catch (error) {
    console.log(error);
  }
};

export const getResourceBySlug = async (slug: string) => {
  try {
    const resource = await readClient.fetch(
      groq`*[_type == "resource" && slug.current == $slug]{
                title,
                _id,
                content,
                "image": poster.asset->url,
                slug,
                category,
                createdAt,
            }`,
      { slug }
    );

    return resource[0]; // Eğer tek bir veri çekmek istiyorsanız, ilk sıradaki veriyi kullanabilirsiniz.
  } catch (error) {
    console.log(error);
  }
};

export const getResourceBySlugg = async (slug: string) => {
  try {
    const resource = await readClient.fetch(
      groq`*[_type == "resource" && slug.current == $slug]{
        _id,
        title,
        content,
        "image": poster.asset->url,
        slug,
        category,
        createdAt
      }`,
      { slug }
    );

    return resource[0]; // Eğer tek bir veri çekmek istiyorsanız, ilk sıradaki veriyi kullanabilirsiniz.
  } catch (error) {
    console.log(error);
  }
};







