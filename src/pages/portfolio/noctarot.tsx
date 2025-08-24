import { ReactElement } from "react";
import Image from "next/image";
import { NextPageWithLayout } from "@/pages/_app";
import Layout from "@/components/layout";
import StatusBar from "@/components/statusbar";
import Details from "@/components/details";
import PrimaryLink from "@/components/primarylink";
import styles from "@/app/page.module.css";

const NocTarot: NextPageWithLayout = () => {
  return (
    <div className={styles.ctaList}>
      <h1>NocTarot</h1>

      <StatusBar 
        status={false} 
        code="https://github.com/Wake1st/noctarot" 
        play="https://wake1st.itch.io/noctarot" 
      />

      <Details 
        time="2 weeks (so far)" 
        genre="2D Narative Puzzle" 
        links={{
          "Godot": "https://godotengine.org/",
        }}
      />

      <div className={styles.ctaText}>
        <div className={styles.content}>
          <h2 className={styles.infoHeading}>
            The Why
          </h2>
          <hr />

          <p>
            This entry was made for the <PrimaryLink href="https://itch.io/jam/pompous-trash-2025">Society of Play - Pompous Trash Jam 2025</ PrimaryLink>. My original idea was to make a mecha game. I was sharing my ideas with a friend, and they suggested <q>why not make a game about roling trash into a hole</q>? Needless to say, I was hooked - such a simple idea, but simple is best (especially for a 2 week jam).
          </p>
        </div>
        <Image className={styles.ctaImage} src="/pompous_trash_jam.png" width={460} height={300} alt="Pompous Trash Jam Banner" />
      </div>

      <div className={styles.ctaText}>
        <Image className={styles.ctaImage} src="/gomi_moni_mechanics.png" width={420} height={300} alt="Gomi Moni Puzzle Solution" />

        <div className={styles.content}>
          <h2 className={styles.infoHeading}>
            Mechanics
          </h2>
          <hr />

          <p>
            I first started out making a few <q>vehicles</q> for the player to control: normal, heavy, and flyer. The goal of each level is to role the normal (or Gomi) into a hole. The other vehicles are there to interact with specific mechanisms; when the mechanisms are activated, the hole is uncovered, <q>solving</q> the puzzle!
          </p>
        </div>
      </div>

      <div className={styles.ctaText}>
        <div className={styles.content}>
          <h2 className={styles.infoHeading}>
            Testing and Prototypes
          </h2>
          <hr />

          <p>
            As development carried on, I kept creating little test scenes for everything: vehicles, mechanisms, systems, lighting, UI - if it was being used, it was getting a test. I found that testing out the smaller pieces helped provide a blank slate to focus on refining and refactoring parts of the game in isolation, which did speed up development time. It also forced me to think about how these parts would be connected together (something I&apos;ve often struggled with in the part - I always end up with a spagetti mess). For tests to be effective, they would need to <q>plug into</q> the systems they were testing, thus revealing how said system would be utilized within the game itself.
          </p>
        </div>
      </div>

      <div className={styles.ctaText}>
        <div className={styles.content}>
          <h2 className={styles.infoHeading}>
            Lighting the Way
          </h2>
          <hr />

          <p>
            One aspect I also focused on a lot was presentation - my way of adding some <q>juice</q>. The camera in the main manu moves around a 3D scene; in fact, all the UI in the game is in 3D space (it felt more fun). The levels themselves use spotlights for illumination, but those same lights also start by focusing on specific parts of the level, providing <q>hints</q> to the player at that puzzles solution. Each light turns on, one by one, showing the player the steps of the solution; after they&apos;re all on, they expand to full light up the level.
          </p>
        </div>

        <Image className={styles.ctaImage} src="/gomi_moni_lighting.gif" width={400} height={280} alt="Gomi Moni Lighting" unoptimized />
      </div>

      <div className={styles.ctaText}>
        <div className={styles.content}>
          <h2 className={styles.infoHeading}>
            Wrapup and Refinement
          </h2>
          <hr />


          <p>
            As the jam was nearing it&apos;s deadline, I realized that I could only pull off 6 levels (not the dozen-ish I originally planned). Still, this gave me time to iron out some kinks and refine the existing gameplay. This turned out to be a blessing; there were many errors to fix, and lots of juice I wanted to add.
          </p>
            
          <p>
            After the jam, I kept refining the game, even working on the selection system to ensure both mouse and controller could be used interchangeably throughout the whole game. Overall, it was a nice small project that convinced me that even small projects take time and love, and that quality is more important than quantity.
          </p>
        </div>
      </div>
    </div>
  );
}

NocTarot.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
 
export default NocTarot;