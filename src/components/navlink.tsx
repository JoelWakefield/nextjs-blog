import Link from "next/link";
import styles from "@/app/page.module.css";

export default function NavLink(
  { href, label} : { href: string, label: string }
) {
  return (
    <Link href={href}>
      <div className={styles.navLink}>
        <p>{label}</p>
      </div>
    </Link>
  )
}