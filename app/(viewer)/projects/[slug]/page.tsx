import { notFound } from "next/navigation";
import styles from "@/styles/viewer/project-detail.module.css";
import { getProjectBySlug } from "@/lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) return notFound();

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <p className={styles.meta}>
          {project.tag}
          {project.year && ` · ${project.year}`}
        </p>

        <h1 className={styles.title}>{project.title}</h1>
      </header>

      {project.problem && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Problem</h2>
          <p>{project.problem}</p>
        </section>
      )}

      {project.solution && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I built</h2>
          <p>{project.solution}</p>
        </section>
      )}

      {project.journey && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Journey</h2>
          <p>{project.journey}</p>
        </section>
      )}

      {project.tech_stack && project.tech_stack.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Tech stack</h2>
          <ul className={styles.techList}>
            {project.tech_stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
