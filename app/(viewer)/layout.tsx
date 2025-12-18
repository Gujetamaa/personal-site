import { ThemeToggle } from "@/components/ThemeToggle";

export default function ViewerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="nav">
        <strong>je.</strong>
        <div className="nav-right">
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
