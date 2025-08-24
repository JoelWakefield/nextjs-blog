import ContactCard from "@/components/contact";
import styles from "@/app/page.module.css";
import Card from "@/components/card";
import { NextPageWithLayout } from "./_app";
import Layout from "@/components/layout";
import { ReactElement } from "react";
 import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'The Try Angle',
  description: 'A portfolio site for projects made by Joel Wakefield; these projects are usually made during twitch streams.',
};

const Home: NextPageWithLayout = () => {
  return (
    <>
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
          href="/portfolio/gomi-moni"
          title="Gomi Moni"
          text="A 3D physics puzzle game about trash."
          image="/gomi_moni.png"
        />
      </div>
    </>
  );
}
 
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
 
export default Home;