import Link from "next/link";
import styles from "@/styles/viewer/projects.module.css";
import { getProjects } from "@/lib/projects";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <p className={styles.kicker}>Projects</p>
        <h1 className={styles.title}>Selected work</h1>
        <p className={styles.subtitle}>
          Case studies focused on structure, clarity, and decisions.
        </p>
      </header>

      <section className={styles.list}>
        {projects.map((project) => (
          <article key={project.id} className={styles.card}>
            <p className={styles.meta}>
              {project.tag}
              {project.year && ` · ${project.year}`}
            </p>

            <h2 className={styles.projectTitle}>
              <Link href={`/projects/${project.slug}`}>
                {project.title}
              </Link>
            </h2>
          </article>
        ))}
      </section>
    </main>
  );
}
