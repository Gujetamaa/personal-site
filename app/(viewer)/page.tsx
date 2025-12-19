import styles from "@/styles/viewer/home.module.css";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <main className={styles.container}>
      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <p className={styles.eyebrow}>&gt; hello, world_</p>

        <h1 className={styles.title}>Jerico</h1>

        <p className={styles.role}>
          Software Engineer · building things that matter
        </p>

        <p className={styles.intro}>
          I turn late nights and rabbit holes into products people actually use.
          I care about structure, clarity, and making complex systems feel calm.
          Currently exploring full-stack engineering, databases, and
          product-driven software.
        </p>

        <p className={styles.note}>
          Fun fact: I grew up playing Minecraft — it taught me that even the most
          complex structures start with a single block.
        </p>
      </section>

      {/* ================= TECHNOLOGIES ================= */}
      <Reveal>
        <section className={styles.block}>
          <div className={styles.blockInner}>
            <p className={styles.sectionLabel}>Technologies</p>

            <div className={styles.sectionContent}>
              <div className={styles.techList}>
                <span>TypeScript</span>
                <span>React</span>
                <span>Next.js</span>
                <span>Node.js</span>
                <span>PostgreSQL</span>
                <span>AWS</span>
                <span>Supabase</span>
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
                I write about software development, system design, and lessons
                learned from building products. Check out my blog for technical
                deep-dives and project retrospectives.
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
                I’m a software engineer who believes the best code is the code you
                don’t have to write. My philosophy is{" "}
                <em>“What I cannot build, I do not understand.”</em>
              </p>

              <p className={styles.sectionText}>
                When I’m not shipping features late at night, you’ll find me
                chasing a new obsession — currently hiking, previously Muay Thai,
                cycling, and running.
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
                Let’s build something together.
              </h2>

              <p className={styles.footerText}>
                Got an idea? I’m always up for a new challenge — whether it’s a
                side project, a startup, or something in between.
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
            <p>© 2025 Jerico Ibañez. All rights reserved.</p>
            <p>Built with Next.js & TypeScript</p>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
