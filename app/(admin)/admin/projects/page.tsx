import Link from "next/link";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import type { Project } from "@/lib/projects/projectTypes";

export const dynamic = "force-dynamic";



export default async function AdminProjectsPage() {
  const supabase = await createServerSupabaseClient();

    const { data: projects, error } = await supabase
    .from("projects")
    .select("id, slug, title, year, tag, published, created_at")
    .order("created_at", { ascending: false });

    const typedProjects = projects as Project[] | null;  

  if (error) {
    return (
      <div>
        <h1>Projects</h1>
        <p style={{ color: "crimson" }}>{error.message}</p>
      </div>
    );
  }

  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <h1>Projects</h1>
        <Link href="/admin/projects/new">+ New project</Link>
      </div>

      <div style={{ display: "grid", gap: 8 }}>
        {projects?.map((p: Project) => (
          <div
            key={p.id}
            style={{
              border: "1px solid var(--border, #3333)",
              borderRadius: 12,
              padding: 12,
              display: "flex",
              justifyContent: "space-between",
              gap: 12,
            }}
          >
            <div style={{ display: "grid" }}>
              <strong>{p.title}</strong>
              <span style={{ opacity: 0.75 }}>
                /projects/{p.slug} {p.year ? `• ${p.year}` : ""} {p.tag ? `• ${p.tag}` : ""}
              </span>
            </div>

            <div style={{ textAlign: "right" }}>
              <span style={{ opacity: 0.75 }}>{p.published ? "Published" : "Draft"}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
