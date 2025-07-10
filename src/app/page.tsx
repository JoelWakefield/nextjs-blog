import ContactCard from "@/components/contact";
import styles from "./page.module.css";
import Card from "@/components/card";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <div>
          <h1>The Try Angle</h1>
          <p className={styles.subheading}>
            The angle is to try new things and learn as much as possible.
          </p>
        </div>

        <div className={styles.ctaText}>
          <p>
            Hello world! Here you shall find a number of projects I&apos;ve worked on over the past year. While most of my professional career revolves around business applications, in my spare time, I enjoy learning other languages, frameworks, design patterns, etc. This site highlights a few of those projects and documents the process of making them.
          </p>
          <ContactCard />
        </div>

        <div className={styles.ctaList}>
          <h2>Highlight Project</h2>

          <Card
            href="/projects/gomi-moni"
            title="Gomi Moni"
            text="A 3D physics puzzle game about trash."
            image="/gomi_moni.png"
            />
        </div>
      </main>
    </div>
  );
}
