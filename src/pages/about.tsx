import styles from "@/app/page.module.css";
import { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import Layout from "@/components/layout";

const About: NextPageWithLayout = () => {
  return (
    <>
      <h1>About Me</h1>
      <div className={styles.ctaList}>
        <p className={styles.content}>
          I&apos;ve been a software developer/engineer for 7+ years, mostly working on business applications in my work, and game dev in my spare time. Both in my professional or personal life, I love to learn new things (hence the name). 
        </p>

        <p className={styles.content}>
          Professionally, my experience covers building applications both for desktop and web, using technologies like .NET, React, Azure, AWS, Docker, C#, Typescript, Javascript, and a few others.  
        </p>
        
        <p className={styles.content}>
          In my personal life, I&apos;ve worked with Python, Java, C, C++, and Rust. I mostly stick to game development, and I&apos;m most proficient in Godot (but I have worked in Unity, Unreal, Game Maker, Bevy, and Raylib). 
        </p>
      </div>
    </>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default About;