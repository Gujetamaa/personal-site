export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  sections: {
    heading: string;
    body: string[];
  }[];
};

export const BLOG_POSTS: Record<string, BlogPost> = {
  "first-post": {
    slug: "first-post",
    title: "Why I Structure Projects Before Features",
    date: "2025",
    description:
      "Thoughts on architecture-first development and avoiding rewrites.",
    sections: [
      {
        heading: "The problem",
        body: [
          "Most personal sites grow organically and collapse under their own structure.",
          "I wanted to avoid that by committing to separation early."
        ]
      },
      {
        heading: "What worked",
        body: [
          "Using route groups to separate viewer and admin logic.",
          "Treating pages like database rows from day one."
        ]
      }
    ]
  }
};

export function getAllBlogPosts(): BlogPost[] {
  return Object.values(BLOG_POSTS);
}

export function getBlogPost(slug: string): BlogPost | null {
  return BLOG_POSTS[slug] ?? null;
}
