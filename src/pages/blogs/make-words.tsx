import { ReactElement } from "react";
import Link from "next/link";
import { NextPageWithLayout } from "@/pages/_app";
import Layout from "@/components/layout";
import StatusBar from "@/components/statusbar";
import styles from "@/app/page.module.css";

const CourseConstructor: NextPageWithLayout = () => {
  return (
    <div className={styles.ctaList}>
        <h1>Make Words</h1>

        <StatusBar 
          status={true} 
          code="https://github.com/Wake1st/make-words" 
          play="https://wake1st.itch.io/make-words" 
        />

        <p className={styles.content}>This entry was made using the <Link target="_blank" rel="noopener noreferrer" className={styles.primary} href="https://bevy.org/">Bevy</Link> game engine, which is written in rust. My goal was to make an interactive experience where users could assemble letters to &ldquo;make words&rdquo;. The letters also play the sounds of their pronunciation when selected, and when letters are connected, each letter&apos;s sound is played in sequence. The combined audio segments hardly sound correct, so the words always sound weird, but I found that fun. The goal of the game is not to do things &ldquo;correctly&rdquo;, but to simply do - it&apos;s a space to mess around and create.</p>

        <p className={styles.content}>The goal for me presonally was learning more Bevy, specifically making a drag and drop system. It was a fun learning experience, even adding a trash can and a &ldquo;draw&rdquo; for users to &ldquo;grab&rdquo; letters. I even implemented a spell checking system (initially, I thought of challenging the user to spell specific words, but I ended up letting the user create whatever, only checking for specific, banned words).</p>
    </div>
  );
}
 
CourseConstructor.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
 
export default CourseConstructor;