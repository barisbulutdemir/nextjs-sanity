const schema = {
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      require,
    },
    {
      name: "poster",
      title: "Poster",
      type: "image",
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
