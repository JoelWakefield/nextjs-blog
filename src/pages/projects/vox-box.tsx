import { ReactElement } from "react";
import Image from "next/image";
import { NextPageWithLayout } from "@/pages/_app";
import Layout from "@/components/layout";
import StatusBar from "@/components/statusbar";
import styles from "@/app/page.module.css";
import Details from "@/components/details";
import PrimaryLink from "@/components/primarylink";

const VoxBox: NextPageWithLayout = () => {
  return (
    <div className={styles.ctaList}>
        <h1>Vox Box</h1>

        <StatusBar 
          status={false} 
          play={null}
          code="https://github.com/Wake1st/vox-box" 
        />

        <Details 
          time="ongoing" 
          genre="Interactive Music Maker" 
          links={{
            "Godot": "https://godotengine.org/",
          }}
        />

        <div className={styles.ctaText}>
          <Image className={styles.ctaImage} src="/oddada.png" width={360} height={360} alt="ODDADA Game Poster" />
          <div className={styles.content}>
            <h2 className={styles.infoHeading}>
              The Why
            </h2>
            <hr />

            <p>
              Have you ever wanted to make music - but with blocks and toys instead of instraments and DAWs? Then <PrimaryLink href="https://www.oddada.com/">ODDADA</PrimaryLink> might be for you. I&apos;ve spent hours playing it, and I wanted to make my own version of it, but instead of premade sounds, the user could record their own sounds and mix them.
            </p>
          </div>
        </div>

        <div className={styles.ctaText}>
          <div className={styles.content}>
            <h2 className={styles.infoHeading}>
              Accessibility
            </h2>
            <hr />

            <p>
              On the developer side, I&apos;ve got a few main features I want to game to exhibit: a user can tab through every interactable (for accessability), a user can modify sound data (might have to go a bit beyond what godot offers), and a user can import and export sound data. I&apos;ve heard of other creative sandbox style games which don&apos;t allow users to export their creations, which has always felt needlessly controlling to me - control over our own expressions is vital to one&apos;s well being.
            </p>
          </div>
          <Image className={styles.ctaImage} src="/oddada.png" width={360} height={360} alt="ODDADA Game Poster" />
        </div>

        <div className={styles.ctaText}>
          <div className={styles.content}>
            <h2 className={styles.infoHeading}>
              Interaction Abstraction
            </h2>
            <hr />

            <p>
              Talk about the selection system.
            </p>
          </div>
        </div>

        <div className={styles.ctaText}>
          <div className={styles.content}>
            <h2 className={styles.infoHeading}>
              Status Report
            </h2>
            <hr />

            <p>
              For now, the game is barely a prototype, but I hope to release it to itch soon (if nothing else, to gain user feedback).
            </p>
          </div>
        </div>
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
