import styles from "@/styles/viewer/projects.module.css";

export default function ProjectsPage() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.subtitle}>
          A collection of things I’ve built — from experiments to production
          systems.
        </p>
      </header>

      <section className={styles.list}>
        <article className={styles.project}>
          <div className={styles.meta}>
            <span className={styles.tag}>Web</span>
            <span className={styles.date}>2025</span>
          </div>

          <h2 className={styles.projectTitle}>Personal Site Platform</h2>

          <p className={styles.description}>
            A content-driven personal website built with Next.js, Supabase, and
            TypeScript. Designed for static performance with a dynamic backend
            and admin CMS.
          </p>

          <a
            href="/projects/personal-site"
            className={styles.link}
          >
            View case study →
          </a>
        </article>

        <article className={styles.project}>
          <div className={styles.meta}>
            <span className={styles.tag}>Systems</span>
            <span className={styles.date}>2024</span>
          </div>

          <h2 className={styles.projectTitle}>AWS Scraping Pipeline</h2>

          <p className={styles.description}>
            A serverless data scraping system using AWS Lambda and DynamoDB,
            focused on reliability, cost control, and observability.
          </p>

          <a
            href="/projects/aws-scraper"
            className={styles.link}
          >
            View case study →
          </a>
        </article>
      </section>
    </main>
  );
}
