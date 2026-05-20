export default {
  name: "caseStudy",
  title: "Case Studies",
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
      name: "clientName",
      title: "Client Name",
      type: "string",
    },

    {
      name: "industry",
      title: "Industry",
      type: "string",
    },

    {
      name: "serviceType",
      title: "Service Type",
      type: "string",
      options: {
        list: [
          { title: "AI Solutions", value: "AI Solutions" },
          { title: "Web Development", value: "Web Development" },
          { title: "Automation", value: "Automation" },
          { title: "Data Analytics", value: "Data Analytics" },
          { title: "Software Engineering", value: "Software Engineering" },
          { title: "Infrastructure", value: "Infrastructure" },
        ],
      },
    },

    {
      name: "excerpt",
      title: "Short Excerpt",
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
      name: "challenge",
      title: "Challenge",
      type: "text",
      rows: 5,
    },

    {
      name: "solution",
      title: "Solution",
      type: "text",
      rows: 5,
    },

    {
      name: "outcome",
      title: "Outcome",
      type: "text",
      rows: 5,
    },

    {
      name: "metrics",
      title: "Key Metrics",
      type: "array",
      of: [{ type: "string" }],
    },

    {
      name: "technologies",
      title: "Technologies Used",
      type: "array",
      of: [{ type: "string" }],
    },

    {
      name: "featured",
      title: "Featured Case Study",
      type: "boolean",
      initialValue: false,
    },

    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    },

    {
      name: "content",
      title: "Full Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};