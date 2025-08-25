import Link from "next/link";
import styles from "@/app/page.module.css";

export default function Cta() {
  return (
    <div className={styles.ctaNav}>
      <h2>Where to Next?</h2>

      <div className={styles.ctaLinks}>
        <Link className={styles.secondary} href="/about">About Me</Link>
        <Link className={styles.secondary} href="/portfolio">Portfolio</Link>
        <Link className={styles.secondary} href="/blogs">Blogs</Link>
        <Link className={styles.secondary} href="/contact">Contact</Link>
      </div>
    </div>
  )
}