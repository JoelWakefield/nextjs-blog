import { ReactElement } from "react";
import Link from "next/link";
import { NextPageWithLayout } from "@/pages/_app";
import Layout from "@/components/layout";
import StatusBar from "@/components/statusbar";
import styles from "@/app/page.module.css";

const ReapersWaltz: NextPageWithLayout = () => {
  return (
    <div className={styles.ctaList}>
        <h1>Reapers Waltz</h1>
        
        <StatusBar 
          status={true} 
          code="https://github.com/Wake1st/reapers-waltz-godot" 
          play="https://ashassault.itch.io/isekai-horror-game-jam" 
        />

        <p className={styles.content}>
          While I was streaming one day, someone hopped into the chat and started talking about a game jam they were working on for the <Link className={styles.primary} href="https://itch.io/jam/isekai-horror-jam">Isekai Horror Jam</Link>. Apparently, the original dev dropped the project without a heads up, and with 4 days left, they had no dev. Curriosity (and the ADHD twitch to tackle a vast challenge) took over and I decided to join with 4 days left to build a game from scratch... in <Link className={styles.primary} href="https://www.raylib.com/">Raylib</Link> (which I had just started learning).
        </p>
        
        <p className={styles.content}>
          Did I create a game? Sort of. Was that game published on itch in time? No (I forgot 😅). Did the game build at all? No. It was my first time trying to build a cpp program with a makefile, and I did not realize the difficulty of putting together a package (as opposed to simply compiling a program).
        </p>

        <p className={styles.content}>
          After the jam (and a much needed rest) I decided to rebuild the game in godot, which went much smoother. I don&apos;t regret my original attempt - I honestly enjoyed the challenge; I had to build many things that godot and other game engines handle automatically, like tilemapping and collisions. Even though those systems didn&apos;t get transfered into the godot version, they were a fun excercise to think through and build - and they did work (though poorly - game engines are much more sophisticated and should be used when building a quick/simple game). You can review the original code <Link className={styles.primary} href="https://github.com/Wake1st/reapers-waltz">here</Link> (running it might require some extra setup - so if you want help with that, open an issue and I&apos;ll do what I can to help).
        </p>
    </div>
  );
}
 
ReapersWaltz.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
 
export default ReapersWaltz;