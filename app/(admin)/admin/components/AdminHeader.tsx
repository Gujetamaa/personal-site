"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createBrowserSupabaseClient } from "@/lib/supabase/browser";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function AdminHeader() {
  const supabase = createBrowserSupabaseClient();
  const router = useRouter();

  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    supabase.auth.getUser().then(({ data }) => {
      if (mounted) {
        setEmail(data.user?.email ?? null);
      }
    });

    return () => {
      mounted = false;
    };
  }, [supabase]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <header
      style={{
        padding: "20px 32px",
        borderBottom: "1px solid var(--border, #3333)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Left: title + nav */}
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <strong>Admin</strong>

        <nav style={{ display: "flex", gap: 16 }}>
          <Link href="/admin/projects">Projects</Link>
          <Link href="/admin/blog">Blog</Link>
        </nav>
      </div>

      {/* Right: theme + email + logout */}
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <ThemeToggle />

        {email && (
          <span style={{ fontSize: 14, opacity: 0.7 }}>
            {email}
          </span>
        )}

        <button
          onClick={handleLogout}
          style={{
            background: "transparent",
            border: "1px solid var(--border, #3333)",
            borderRadius: 8,
            padding: "6px 10px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </header>
  );
}
