import Link from "next/link";
import styles from "@/app/page.module.css";

export default function ContactCard() {
  return (
    <div className={styles.contact}>
      <h3>Contact Info</h3>

      <ul>
        <li><Link
          target="_blank"
          rel="noopener noreferrer" 
          href="mailto:joel.tryangle@gmail.com"
        >
          joel.tryangle@gmail.com
        </Link></li>
        <li><Link
          target="_blank" 
          rel="noopener noreferrer" 
          href="https://www.twitch.tv/thetryangle"
        >
          twitch/thetryangle
        </Link></li>
        <li><Link
          target="_blank" 
          rel="noopener noreferrer" 
          href="https://www.youtube.com/@the-try-angle"
          >
            youtube/@the-try-angle
          </Link></li>
        <li><Link
          target="_blank" 
          rel="noopener noreferrer" 
          href="https://discord.gg/zyXdHB4m"
        >
          discord invite
        </Link></li>
      </ul>
    </div>
  )
}