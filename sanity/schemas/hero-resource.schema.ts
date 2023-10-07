const schema = {
    name: 'heroResource',
    title: 'Hero Resource',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        require,
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: { source: 'title' }
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          {
            type: 'block'
          }
        ],
        validation: (Rule: any) => Rule.required()
      },
      
      {
        name: 'poster',
        title: 'Poster',
        type: 'image',
        validation: (Rule: any) => Rule.required(),
        options: {
          hotspot: true,
        },
      },
        {
          name: 'category',
          title: 'Category',
          validation: (Rule: any) => Rule.required(),
          type: 'array',
          of: [
            {
              type: 'string',
              options: {
                list: ['colormix', 'outdoor', 'garden', 'basic', 'recent', 'all']
              }
            }
          ],
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        validation: (Rule: any) => Rule.required(),
        options: {
          dateFormat: 'YYYY-MM-DD',
          calendarTodayLabel: 'Today'
        }
      },
      
    ]
  }
  
  export default schema;