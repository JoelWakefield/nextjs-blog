import { ReactElement } from "react";
import Link from "next/link";
import { NextPageWithLayout } from "@/pages/_app";
import Layout from "@/components/layout";
import StatusBar from "@/components/statusbar";
import styles from "@/app/page.module.css";

const VoxBox: NextPageWithLayout = () => {
  return (
    <div className={styles.ctaList}>
        <h1>Vox Box</h1>

        <StatusBar 
          status={false} 
          play={null}
          code="https://github.com/Wake1st/vox-box" 
        />

        <p className={styles.content}>
          Have you ever wanted to make music, but with blocks and toys instead of instraments? Then <Link target="_blank" rel="noopener noreferrer" className={styles.primary} href="https://www.oddada.com/">ODDADA</Link> might be for you. I&apos;ve spent hours playing it, and I wanted to make a version of my own, but instead of instraments, the user could record their own sounds and mix them, like <Link className={styles.primary} href="https://www.audacityteam.org/">Audacity</Link>.
        </p>

        <p className={styles.content}>
          On the developer side, I&apos;ve got a few main features I want to game to exhibit: a user can tab through every interactable (for accessability), a user can modify sound data (might have to go a bit beyond what godot offers), and a user can import and export sound data. I&apos;ve heard of other creative sandbox style games which don&apos;t allow users to export their creations, which has always felt needlessly controlling to me - if we can&apos;t take our art with us, why use that environment to create at all?
        </p>

        <p className={styles.content}>
          For now, the game is barely a prototype, but I hope to release it to itch soon (if nothing else, to gain user feedback).
        </p>
    </div>
  );
}
 
VoxBox.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
 
export default VoxBox;