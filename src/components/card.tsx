import Image from "next/image";
import styles from "@/app/page.module.css";

export default function Card(
  { href, title, text, image } : { href: string, title: string, text: string, image: string }
) {
  return (
      <div className={styles.card}>
        <a href={href}>
          <div className={styles.cardContent}>
            <div>
              <h3>{title}</h3>
              <p className={styles.subtitle}>{text}</p>
            </div>
            <Image className={styles.cardImage} src={image} alt={title} width={240} height={180} />
          </div>
        </a>
      </div>
  )
}
