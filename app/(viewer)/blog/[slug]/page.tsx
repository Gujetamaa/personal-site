import { notFound } from "next/navigation";
import styles from "@/styles/viewer/blog-detail.module.css";
import { getBlogPostBySlug } from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) return notFound();

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        {post.date && (
          <p className={styles.meta}>{post.date}</p>
        )}

        <h1 className={styles.title}>{post.title}</h1>

        {post.description && (
          <p className={styles.description}>
            {post.description}
          </p>
        )}
      </header>

      {post.sections.map((section) => (
        <section key={section.heading} className={styles.section}>
          <h2 className={styles.sectionTitle}>
            {section.heading}
          </h2>

          {section.body.map((paragraph, i) => (
            <p key={i} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </main>
  );
}
