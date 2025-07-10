import styles from "@/app/page.module.css";
import Link from "next/link";

export default function StatusBar(
  { status, src, play } : { status: boolean, src: string, play: string }
) {
  return (
    <div className={styles.statusBar}>
      <p className={styles.subtitle}>Status: {status ? "Complete" : "In Progress"}</p>
      <Link className={styles.secondary} href={src}>
        <p className={styles.statusLink}>
          Source Code
        </p>
      </Link>
      <Link className={styles.secondary} href={play}>
        <p className={styles.statusLink}>
          Play Here
        </p>
      </Link>
    </div>
  )
}