// app/(admin)/admin/projects/new/page.tsx
import Link from "next/link";
import { createProject } from "./actions";

export default function NewProjectPage() {
  return (
    <div style={{ display: "grid", gap: 16, maxWidth: 720 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <h1>New project</h1>
        <Link href="/admin/projects">Back</Link>
      </div>

      <form action={createProject} style={{ display: "grid", gap: 12 }}>
        <label>
          <div>Title *</div>
          <input name="title" required style={{ width: "100%" }} />
        </label>

        <label>
          <div>Slug (optional — defaults to title)</div>
          <input name="slug" placeholder="my-project" style={{ width: "100%" }} />
        </label>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <label>
            <div>Year</div>
            <input name="year" placeholder="2025" />
          </label>

          <label>
            <div>Tag</div>
            <input name="tag" placeholder="Backend / Systems" />
          </label>
        </div>

        <label>
          <div>Problem</div>
          <textarea name="problem" rows={4} style={{ width: "100%" }} />
        </label>

        <label>
          <div>Solution</div>
          <textarea name="solution" rows={4} style={{ width: "100%" }} />
        </label>

        <label>
          <div>Journey</div>
          <textarea name="journey" rows={6} style={{ width: "100%" }} />
        </label>

        <label>
          <div>Tech stack (comma-separated)</div>
          <input name="tech_stack" placeholder="Next.js, Supabase, Postgres" style={{ width: "100%" }} />
        </label>

        <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <input type="checkbox" name="published" defaultChecked />
          Published
        </label>

        <button type="submit">Create project</button>
      </form>
    </div>
  );
}
