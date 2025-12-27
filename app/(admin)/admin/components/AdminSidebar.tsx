"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase/browser";
import { ThemeToggle } from "@/components/ThemeToggle";
import styles from "@/styles/admin/AdminSidebar.module.css";

export default function AdminSidebar() {
  const supabase = createBrowserSupabaseClient();
  const router = useRouter();

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <aside className={styles.sidebar}>
      <div className={styles.title}>Admin</div>

      <nav className={styles.nav}>
        <Link href="/admin/projects">Projects</Link>
        <Link href="/admin/blog">Blog</Link>
      </nav>

      <div className={styles.spacer} />

      <ThemeToggle />

      <button onClick={handleLogout} className={styles.logout}>
        Logout
      </button>
    </aside>
  );
}
