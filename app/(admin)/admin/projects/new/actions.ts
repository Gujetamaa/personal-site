"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase/server";

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function createProject(formData: FormData) {
  const supabase = await createServerSupabaseClient();

  const title = String(formData.get("title") ?? "").trim();
  const slugInput = String(formData.get("slug") ?? "").trim();
  const year = String(formData.get("year") ?? "").trim() || null;
  const tag = String(formData.get("tag") ?? "").trim() || null;

  const problem = String(formData.get("problem") ?? "").trim() || null;
  const solution = String(formData.get("solution") ?? "").trim() || null;
  const journey = String(formData.get("journey") ?? "").trim() || null;

  const techStackRaw = String(formData.get("tech_stack") ?? "").trim();
  const tech_stack =
    techStackRaw.length === 0
      ? []
      : techStackRaw.split(",").map((s) => s.trim()).filter(Boolean);

  const published = formData.get("published") === "on";

  if (!title) {
    throw new Error("Title is required.");
  }

  const slug = slugInput ? slugify(slugInput) : slugify(title);
  if (!slug) {
    throw new Error("Slug is required.");
  }

  const { error } = await supabase.from("projects").insert({
    title,
    slug,
    year,
    tag,
    problem,
    solution,
    journey,
    tech_stack,
    published,
  });

  if (error) {
    // common: duplicate slug unique constraint
    throw new Error(error.message);
  }

  revalidatePath("/admin/projects");
  // also revalidate viewer projects if you statically render them anywhere
  revalidatePath("/projects");

  redirect("/admin/projects");
}
