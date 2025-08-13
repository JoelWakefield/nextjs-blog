import styles from "@/app/page.module.css";
import Link from "next/link";

export default function StatusBar(
  { status, code, play } : { status: boolean, code: string | null, play: string | null }
) {
  return (
    <div className={styles.statusBar}>
      <p className={styles.subtitle}>Status: {status ? "Complete" : "In Progress"}</p>
      {code && <Link
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.secondary} href={code}
      >
        <p className={styles.statusLink}>
          Source Code
        </p>
      </Link>}
      {play && <Link
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.secondary} href={play}
      >
        <p className={styles.statusLink}>
          Play Here
        </p>
      </Link>}
    </div>
  )
}