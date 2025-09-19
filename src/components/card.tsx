import Image from "next/image";
import styles from "@/app/page.module.css";
import Link from "next/link";

export default function Card(
  { href, title, text, image, links } : { href: string, title: string, text: string, image: string, links: { [key: string]: string }  }
) {
  const linkContent = Object.keys(links).map(value => (
    <>
      <Link 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.secondary} 
        key={value} 
        href={links[value]}
      >
        {value}
      </Link>
    </>
  ));

  return (
    <div className={styles.card}>
      <Link href={href}>
      <div className={styles.cardContent}>
        <div>
          <h3>{title}</h3>
          <p className={styles.subtitle}>{text}</p>
        </div>
        <Image className={styles.cardImage} src={image} alt={title} width={240} height={180} />
      </div>
      </Link>
      <div className={styles.cardLinks}>
        {linkContent}
      </div>
    </div>
  )
}
