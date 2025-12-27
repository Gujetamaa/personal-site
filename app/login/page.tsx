"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase/browser";
import { ThemeToggle } from "@/components/ThemeToggle";
import styles from "@/styles/admin/Login.module.css";

export default function LoginPage() {
  const supabase = createBrowserSupabaseClient();
  const router = useRouter();

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <main className={styles.wrapper}>
      <div className={styles.themeToggle}>
        <ThemeToggle />
      </div>

      <section className={styles.card}>
        <header className={styles.header}>
          <div className={styles.logo} aria-hidden="true">
            ◉
          </div>
          <h1 className={styles.title}>Welcome back</h1>
          <p className={styles.subtitle}>Sign in to access the admin panel</p>
        </header>

        <form onSubmit={handleSubmit} autoComplete="on" className={styles.form}>
          <label className={styles.field}>
            <span className={styles.label}>Email address</span>
            <input
              className={styles.input}
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
            />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Password</span>
            <input
              className={styles.input}
              type={showPassword ? "text" : "password"}
              name="password"
              autoComplete="current-password"
              placeholder="••••••••"
              required
            />
          </label>

          <div className={styles.optionsRow}>
            <label className={styles.checkbox}>
              <input
                className={styles.checkboxInput}
                type="checkbox"
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
              />
              <span>Show password</span>
            </label>
          </div>

          {error && <div className={styles.error}>{error}</div>}

          <button className={styles.primaryButton} type="submit" disabled={loading}>
            {loading ? "Signing in…" : "Login"}
          </button>
        </form>
      </section>
    </main>
  );
}
