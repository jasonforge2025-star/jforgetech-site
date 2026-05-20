export const articlesQuery = `
  *[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    publishedAt,
    featured,
    coverImage
  }
`;

export const articleBySlugQuery = `
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    publishedAt,
    featured,
    coverImage,
    content
  }
`;

export const caseStudiesQuery = `
  *[_type == "caseStudy"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    clientName,
    industry,
    serviceType,
    excerpt,
    featured,
    publishedAt,
    coverImage
  }
`;

export const caseStudyBySlugQuery = `
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    clientName,
    industry,
    serviceType,
    excerpt,
    challenge,
    solution,
    outcome,
    metrics,
    technologies,
    featured,
    publishedAt,
    coverImage,
    content
  }
`;