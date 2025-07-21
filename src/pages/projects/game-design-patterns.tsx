import { ReactElement } from "react";
import Link from "next/link";
import { NextPageWithLayout } from "@/pages/_app";
import Layout from "@/components/layout";
import StatusBar from "@/components/statusbar";
import styles from "@/app/page.module.css";

const GameDesignPatterns: NextPageWithLayout = () => {
  return (
    <div className={styles.ctaList}>
        <h1>Game Design Patterns</h1>

        <StatusBar 
          status={false}
          code="https://github.com/Wake1st/GameDesignPatterns"
          play={null}
        />

        <p className={styles.content}>
          After years of telling myself &ldquo;I&apos;ll learn C++... someday&rdquo;, I finally decided to buckle down and give it a try, and I&apos;m glad I did! While it was no cakewalk, I was able to put together a few small examples of some basic game design patterns (hence the project name). My reference was the excellent book <Link className={styles.primary} href="https://gameprogrammingpatterns.com/contents.html">Game Programming Patterns</Link> by Bob Nystrom; it&apos;s a great read, and very accessible (which is saying something for a book about design patterns).
        </p>

        <p className={styles.content}>
          The first pattern I implemented was a simple command pattern, with an undo function and an array of stored commands. Honestly, this one is pretty simple, but the benefits of this pattern are easily seen - anyone who&apos;s ever used an editor with undo/redo functionality has benefitted greatly from the flexibility and freedom to easily correct mistakes.
        </p>
        
        <p className={styles.content}>
          I tried to implement a &ldquo;version&rdquo; of the event queue pattern, but it&apos;s more of an input queue (still important, especially in the game world). To me, the most fascinating feature of this pattern is how the indecies wrap back around to the beginning of the array, thus enabling a fixed array to accept a flow of inputs infinitely. Let&apos;s say you&apos;re building a fighting game, you can chain multiple combos together since the inputs are constantly being &ldquo;read&rdquo; - clearing up space for new inputs to be written!
        </p>

        <p className={styles.content}>
          Currently, I need to get a working version for web (for a few small demos, I think web is best and it&apos;s safer than downloading). Once I do, I hope to keep adding to it over time - I really want to try a bytecode demo!
        </p>
    </div>
  );
}
 
GameDesignPatterns.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
 
export default GameDesignPatterns;