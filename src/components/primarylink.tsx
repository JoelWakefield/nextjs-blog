import Link from "next/link";
import styles from "@/app/page.module.css";

export default function PrimaryLink(
  { href, children} : { href: string, children: React.ReactNode }
) {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      className={styles.primary}
      href={href}
    >
      {children}
    </Link>
  )
}