import styles from "@/app/page.module.css";
import Link from "next/link";

export type DetailLinks = {
  [key: string]: string;
};

export default function Details(
  { time, genre, links } : { time: string, genre: string, links: { [key: string]: string } }
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
    <div className={styles.projectDetails}>
      <h2>Details</h2>

      <ul>
        <li>
          <p>Timeline</p>
          <p>{time}</p>
        </li>
        <li>
          <p>Genre</p>
          <p>{genre}</p>
        </li>
        <li>
          <p>Tools</p>
          <p>
            {linkContent}
          </p>
        </li>
      </ul>
    </div>
  )
}