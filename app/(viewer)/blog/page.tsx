import Link from "next/link";
import styles from "@/styles/viewer/blog.module.css";
import { getAllBlogPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <p className={styles.kicker}>Blog</p>
        <h1 className={styles.title}>Notes & thinking</h1>
        <p className={styles.subtitle}>
          Short reflections on building, structure, and decisions.
        </p>
      </header>

      <section className={styles.list}>
        {posts.map((post) => (
          <article key={post.slug} className={styles.card}>
            <p className={styles.meta}>{post.date}</p>

            <h2 className={styles.postTitle}>
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>

            <p className={styles.description}>
              {post.description}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
