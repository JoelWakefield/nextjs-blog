import { NextPageWithLayout } from "@/pages/_app";
import Layout from "@/components/layout";
import { ReactElement } from "react";
import styles from "@/app/page.module.css";
import Link from "next/link";
import StatusBar from "@/components/statusbar";

const BreakGlass: NextPageWithLayout = () => {
  return (
    <div className={styles.ctaList}>
        <h1>Break Glass</h1>

        <StatusBar 
          status={true}
          code="https://github.com/Wake1st/break-glass-godot"
          play="https://wake1st.itch.io/break-glass"
        />

        <p className={styles.content}>
          After a few years (and many demos and prototypes) of game dev, I finally decided to try for a 2D platformer, this time for the <Link target="_blank" rel="noopener noreferrer" className={styles.primary} href="https://itch.io/jam/pirate16">Pirate Software - Game Jam 16</Link>. The theme was &ldquo;you are the weapon&rdquo;, and the idea of an 80&apos;s dystopian death-sport world started forming, where the player has to navigate an obstacle course by either landing on or smashing through glass platforms.
        </p>

        <p className={styles.content}>
          The platforming is servicable (nothing to special), the UI was a pain to connect, and the level design was&apos;t very balanced, but one thing I am proud of was the &ldquo;cinematics&rdquo;: an intro cutscene for the game and a cutscene explaining training. A friend made some spritesheets, and I did the voice acting. Honestly, it was the most rewarding part of the game.
        </p>
    </div>
  );
}
 
BreakGlass.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
 
export default BreakGlass;