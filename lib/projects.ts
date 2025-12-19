import { supabase } from "@/lib/supabase/client";

export type Project = {
  id: string;
  slug: string;
  title: string;
  year: string | null;
  tag: string | null;
  problem: string | null;
  solution: string | null;
  journey: string | null;
  tech_stack: string[] | null;
};

/**
 * Get all published projects (for /projects)
 */
export async function getProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from("projects")
    .select(
      `
      id,
      slug,
      title,
      year,
      tag,
      problem,
      solution,
      journey,
      tech_stack
      `
    )
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching projects:", error);
    return [];
  }

  return data ?? [];
}

/**
 * Get single project by slug (for /projects/[slug])
 */
export async function getProjectBySlug(
  slug: string
): Promise<Project | null> {
  const { data, error } = await supabase
    .from("projects")
    .select(
      `
      id,
      slug,
      title,
      year,
      tag,
      problem,
      solution,
      journey,
      tech_stack
      `
    )
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error) {
    console.error("Error fetching project:", error);
    return null;
  }

  return data;
}
