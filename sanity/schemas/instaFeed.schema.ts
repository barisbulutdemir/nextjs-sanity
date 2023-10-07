const schema = {
  
    name: "instaFeed",
    title: "Insta Feed",
    type: "document",
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        require,
        validation: (Rule: any) => Rule.required()
      },
      {
        name: "poster",
        title: "Poster",
        type: "image",
        validation: (Rule: any) => Rule.required(),
        options: {
          hotspot: true,
        },
      },
      {
        name: "keywords",
        title: "Keywords",
        type: "array",
        of: [{ type: "string" }],
        options: {
          layout: "tags", // Bu seçenek, etiketleri daha iyi görüntülemek için kullanılır.
        },
      },
    ],
  };
  
  
  export default schema;
  