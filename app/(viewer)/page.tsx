import styles from "@/styles/viewer/home.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <p className={styles.eyebrow}>&gt; hello, world_</p>

      <h1 className={styles.title}>Jerico</h1>

      <p className={styles.subtitle}>
        I build things that matter — from scalable web systems to thoughtful
        developer tools. Currently exploring full-stack engineering, databases,
        and product-driven software.
      </p>
    </main>
  );
}
