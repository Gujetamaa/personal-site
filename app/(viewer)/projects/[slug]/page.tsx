import { notFound } from "next/navigation";
import styles from "@/styles/viewer/project-detail.module.css";

type Project = {
  title: string;
  year: string;
  tag: string;
  problem: string;
  solution: string;
  journey: string;
  tech: string[];
};

const PROJECTS: Record<string, Project> = {
  "personal-site": {
    title: "Personal Site Platform",
    year: "2025",
    tag: "Web",
    problem:
      "Most developer portfolios are static, hard to maintain, and don’t reflect real-world engineering practices.",
    solution:
      "I built a content-driven personal site with Next.js and Supabase, designed for static performance while still supporting a dynamic backend and admin CMS.",
    journey:
      "The challenge wasn’t building pages, but designing a structure that could scale cleanly as content grew. I iterated on routing, layout, and styling until everything felt intentional.",
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
  },

  "aws-scraper": {
    title: "AWS Scraping Pipeline",
    year: "2024",
    tag: "Systems",
    problem:
      "Scraping large volumes of data reliably is difficult when dealing with cost constraints and transient failures.",
    solution:
      "I designed a serverless scraping pipeline using AWS Lambda and DynamoDB with retry logic, rate limiting, and cost monitoring.",
    journey:
      "This project taught me the importance of observability and boring infrastructure choices. Small decisions around retries and timeouts had large cost implications.",
    tech: ["AWS Lambda", "DynamoDB", "TypeScript"],
  },
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS[slug];

  if (!project) {
    notFound();
  }

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <div className={styles.meta}>
          <span>{project.tag}</span>
          <span>{project.year}</span>
        </div>

        <h1 className={styles.title}>{project.title}</h1>
      </header>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Problem</h2>
          <p className={styles.sectionText}>{project.problem}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I Built</h2>
          <p className={styles.sectionText}>{project.solution}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Journey</h2>
          <p className={styles.sectionText}>{project.journey}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Tech Stack</h2>
          <ul className={styles.tech}>
            {project.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
