import styles from "@/app/page.module.css";

export default function ContactCard() {
  return (
    <div className={styles.contact}>
      <h3>Contact Info</h3>

      <ul>
        <li><a href="mailto:joel.tryangle@gmail.com">joel.tryangle@gmail.com</a></li>
        <li><a href="https://www.twitch.tv/thetryangle">twitch/thetryangle</a></li>
        <li><a href="https://www.youtube.com/@the-try-angle">youtube/@the-try-angle</a></li>
        <li><a href="https://discord.gg/Pq35pKKT">discord invite</a></li>
      </ul>
    </div>
  )
}