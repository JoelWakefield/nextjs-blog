import styles from "@/app/page.module.css";
import { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import Layout from "@/components/layout";

const About: NextPageWithLayout = () => {
  return (
    <>
      <h1>About Me</h1>
      <div className={styles.ctaList}>
        
        <div className={styles.ctaText}>
          <div className={styles.content}>
            <h2 className={styles.infoHeading}>
              The Basics
            </h2>
            <hr />

            <p className={styles.content}>
              I&apos;ve been a software developer/engineer for 7+ years; while my professional career has been mostly working on business applications, in my spare time I&apos;ve been growing as a game developer. Both in my professional and personal life, I love to learn new things (hence the name).
            </p>

            <p className={styles.content}>
              Professionally, my experience covers building applications both for desktop and web, using technologies like .NET, React, Azure, AWS, Docker, C#, Typescript, Javascript, and a few others.
            </p>
            
            <p className={styles.content}>
              In my personal life, I&apos;ve worked with Python, Java, C, C++, and Rust. I mostly stick to game development, and I&apos;m most proficient in Godot (but I have worked in Unity, Unreal, Game Maker, Bevy, and Raylib).
            </p>
          </div>
        </div>

        <div className={styles.ctaText}>
          <div className={styles.content}>
            <h2 className={styles.infoHeading}>
              Why Games?
            </h2>
            <hr />

            <p>
              There&apos;s a lot to game development, even the simplest games take more effort than one might assume, which is part of why I love it so much. There are so many problems to solve - plenty of challenge to sink your teeth into. That being said, it&apos;s very easy to bit off more than you can chew, which is why I&apos;m focusing on smaller projects at the moment.
            </p>

            <p>
              The other fun thing about game development is the fun (we are making games after all), but I&apos;ll be honest, not everything I&apos;ve made ends up being fun. Sure, little tech demos don&apos;t often result in an engaging experience, but beyond that, I can easily get caught up in <q>how does it work</q>, that I often forget to ask <q>why should it work</q> - or more bluntly <q>why would anyone play this</q>? A harsh question, but fair. After all, if I don&apos;t have a good reason to play what I&apos;m making, why should anyone else?
            </p>

            <p>
              Ultimately, my main reason might simply be the satisfaction of bringing an idea to life - of trying to build some intricate system that produces a rewarding experience. To put it more plainly, it&apos;s fun to make fun things, and if it isn&apos;t fun, I still grew by trying.
            </p>
          </div>
        </div>

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