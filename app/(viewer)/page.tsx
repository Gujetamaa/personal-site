export const dynamic = "force-dynamic";

import styles from "@/styles/viewer/home.module.css";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <main className={styles.container}>
      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <p className={styles.eyebrow}>&gt; hello, world_</p>

        <h1 className={styles.title}>Jerico Ibañez</h1>

        <p className={styles.role}>
          Backend-focused Software Engineer
        </p>

        <p className={styles.intro}>
          I build backend systems that replace manual processes, support real
          users, and hold up under real-world constraints.
        </p>

        <p className={styles.intro}>
          My work spans civic platforms, internal tools, and automation-heavy
          systems — with a focus on authentication, data integrity, and scalable
          workflows.
        </p>

        <p className={styles.note}>
          Currently studying Information Technology at De La Salle University –
          Manila.
        </p>
      </section>

      {/* ================= TECHNOLOGIES ================= */}
      <Reveal>
        <section className={styles.block}>
          <div className={styles.blockInner}>
            <p className={styles.sectionLabel}>Technologies</p>

            <div className={styles.sectionContent}>
              <p className={styles.sectionText}>
                Tools I’ve used to ship production systems and internal platforms.
              </p>

              <div className={styles.techList}>
                <span>TypeScript</span>
                <span>Next.js</span>
                <span>Node.js</span>
                <span>Ruby on Rails</span>
                <span>PostgreSQL</span>
                <span>Supabase</span>
                <span>Firebase</span>
                <span>REST APIs</span>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ================= WRITING ================= */}
      <Reveal>
        <section className={styles.block}>
          <div className={styles.blockInner}>
            <p className={styles.sectionLabel}>Writing</p>

            <div className={styles.sectionContent}>
              <p className={styles.sectionText}>
                I write short notes on backend design decisions, system trade-offs,
                and lessons learned from building, testing, and maintaining real
                applications.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ================= ABOUT ================= */}
      <Reveal>
        <section className={styles.block}>
          <div className={styles.blockInner}>
            <p className={styles.sectionLabel}>About</p>

            <div className={styles.sectionContent}>
              <p className={styles.sectionText}>
                I’ve worked on government and client-facing platforms serving tens
                of thousands of users, primarily focusing on backend development
                and system reliability.
              </p>

              <p className={styles.sectionText}>
                My experience includes building authentication systems,
                role-based access controls, automated reporting pipelines, and
                notification workflows that replace manual or paper-based
                processes.
              </p>

              <p className={styles.sectionText}>
                I’m also comfortable testing systems end-to-end, documenting
                issues clearly, and collaborating closely with frontend
                developers to keep data flow predictable and maintainable.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ================= FINAL CTA / FOOTER ================= */}
      <Reveal>
        <section className={styles.footerBlock}>
          <div className={styles.footerInner}>
            {/* Left */}
            <div>
              <h2 className={styles.footerTitle}>
                Let’s build something reliable.
              </h2>

              <p className={styles.footerText}>
                If you’re working on a system that needs to scale, automate
                workflows, or replace manual processes, I’d be happy to talk.
              </p>
            </div>

            {/* Right */}
            <div className={styles.footerActions}>
              <a href="#" className={styles.primaryButton}>
                <span className={styles.buttonIcon}>⌂</span>
                My GitHub
                <span className={styles.external}>↗</span>
              </a>

              <a href="#" className={styles.secondaryButton}>
                <span className={styles.buttonIcon}>in</span>
                Connect on LinkedIn
                <span className={styles.external}>↗</span>
              </a>

              <p className={styles.footerContact}>
                Contact me: <span>jericoibanez0326@gmail.com</span>
              </p>
            </div>
          </div>

          <div className={styles.footerMeta}>
            <p>© 2025 Jerico Ibañez.</p>
            <p>Built with Next.js & TypeScript</p>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
