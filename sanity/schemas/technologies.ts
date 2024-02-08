import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'technologies',
  type: 'document',
  title: 'Technologies',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
    }),

    defineField({
      name: "title",
      type: "string",
      title: "Heading",
    }),

    defineField({
      title: 'Content', 
      name: 'content',
      type: 'array', 
      of: [{type: 'block'}]
    }),

  ],
});
