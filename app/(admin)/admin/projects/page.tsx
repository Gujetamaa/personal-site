import Link from "next/link";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import type { Project } from "@/lib/projects/projectTypes";
import styles from "@/styles/admin/AdminProjects.module.css";

export const dynamic = "force-dynamic";

export default async function AdminProjectsPage() {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase
    .from("projects")
    .select("id, slug, title, year, tag, published, created_at")
    .order("created_at", { ascending: false });

  const projects = data as Project[] | null;

  if (error) {
    return <p className={styles.error}>{error.message}</p>;
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h1>Projects</h1>
        <Link href="/admin/projects/new">+ New project</Link>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Created</th>
              <th>Tag</th>
              <th>Year</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>

          <tbody>
            {projects?.map((p) => (
              <tr key={p.id}>
                <td>
                  <strong>{p.title}</strong>
                  <div className={styles.sub}>
                    /projects/{p.slug}
                  </div>
                </td>
                <td>{new Date(p.created_at).toLocaleDateString()}</td>
                <td>{p.tag ?? "-"}</td>
                <td>{p.year ?? "-"}</td>
                <td>
                  <span className={styles.status}>
                    {p.published ? "Published" : "Draft"}
                  </span>
                </td>
                <td>
                  <Link href={`/projects/${p.slug}`}>View</Link>
                </td>
              </tr>
            ))}

            {projects?.length === 0 && (
              <tr>
                <td colSpan={6} className={styles.empty}>
                  No projects yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
