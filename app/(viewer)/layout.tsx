import { ThemeToggle } from "@/components/ThemeToggle";

export default function ViewerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="nav">
        <strong>jerico.</strong>
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/blog">Blog</a>
          <ThemeToggle />
        </div>
      </nav>
      {children}
    </>
  );
}
