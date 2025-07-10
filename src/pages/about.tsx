import styles from "@/app/page.module.css";

export default function About() {
  return (
    <div className={styles.page}>
      <h1>About Me</h1>
      <p className={styles.content}>
        I&apos;ve been a software developer/engineer for 7+ years, mostly working on business applications in my work, and game dev in my spare time. This channel is about trying new things, specifically game-dev related.
      </p>
      <p className={styles.content}>
        Everyday is a day to try something new.
      </p>
    </div>
  )
}