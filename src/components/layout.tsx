import "@/app/globals.css";
import styles from "@/app/page.module.css";
import NavLink from "@/components/navlink";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <nav className={styles.navWrapper}>
          <NavLink href="/" label="Home" />
          <NavLink href="/about" label="About Me" />
          <NavLink href="/projects" label="Projects" />
          <NavLink href="/contact" label="Contact Page" />
        </nav>
        <main className={styles.page}>
          {children}
        </main>
    </>
  );
}
