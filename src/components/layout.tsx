import "@/app/globals.css";
import styles from "@/app/page.module.css";
import NavLink from "@/components/navlink";
import Cta from "./cta";

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
        <NavLink href="/portfolio" label="Portfolio" />
        <NavLink href="/blogs" label="Project Blogs" />
        <NavLink href="/contact" label="Contact Page" />
      </nav>
      <main className={styles.page}>
        {children}
      </main>
      <footer>
        <Cta />
      </footer>
    </>
  );
}
