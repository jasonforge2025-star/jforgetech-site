export default {
  name: "article",
  title: "Articles",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },

    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
    },

    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "AI", value: "AI" },
          { title: "Data Analytics", value: "Data Analytics" },
          { title: "Web Development", value: "Web Development" },
          { title: "Automation", value: "Automation" },
          { title: "Cybersecurity", value: "Cybersecurity" },
          { title: "Business Technology", value: "Business Technology" },
        ],
      },
    },

    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    },

    {
      name: "featured",
      title: "Featured Article",
      type: "boolean",
      initialValue: false,
    },

    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};