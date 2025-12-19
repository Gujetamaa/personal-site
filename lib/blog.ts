import { supabase } from "@/lib/supabase/client";

export type BlogSection = {
  heading: string;
  body: string[];
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  date: string | null;
  sections: BlogSection[];
};

/**
 * Get all published blog posts (for /blog)
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select(
      `
      id,
      slug,
      title,
      description,
      date,
      sections
      `
    )
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }

  return data ?? [];
}

/**
 * Get single blog post by slug (for /blog/[slug])
 */
export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select(
      `
      id,
      slug,
      title,
      description,
      date,
      sections
      `
    )
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }

  return data;
}
