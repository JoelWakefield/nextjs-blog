import { ReactElement } from "react";
import Link from "next/link";
import { NextPageWithLayout } from "@/pages/_app";
import Layout from "@/components/layout";
import StatusBar from "@/components/statusbar";
import styles from "@/app/page.module.css";

const ColoredClaws: NextPageWithLayout = () => {
  return (
    <div className={styles.ctaList}>
        <h1>Colored Claws</h1>

        <StatusBar 
          status={false} 
          play="https://wake1st.itch.io/colored-claws"
          code="https://github.com/Wake1st/colored-claws" 
        />

        <p className={styles.content}>
          Every other week, I challenge myself to make a game from scratch to publish very quickly - the 8 Hour Power Jam! For this jam, I was inspired by Terry from the <Link target="_blank" rel="noopener noreferrer" className={styles.primary} href="https://www.youtube.com/@cutegamesclub">Cute Games Club</Link> to make a cute game about painting your nails. Due to the short time constraint (and because I REALLY wanted to finish) I decided to go with <Link target="_blank" rel="noopener noreferrer" className={styles.primary} href="https://godotengine.org/">Godot</Link>, the engine I&apos;m most familiar with.
        </p>

        <p className={styles.content}>
          The most important mechanic in the game is editing a texture (aka, the nail), and in Godot this can be done by turning the texture into an image, editing said image, then turning that image back into a texture. Applying paint is as simple as creating a brush for the player to control, allowing them to apply colors to a texture, thus painting a nail. While I only had time to create a brush, I do think the game would benefit from more than just painting. 
        </p>

        <p className={styles.content}>
          There are types of polish (gloss, matte) - some have glitter or change color depending on the light they are under. There are stickers you can apply, and different brushes for different uses. Some nails are premade, come in many shapes, and can even be manually shaped by the user. There&apos;s also the prep work involved - some cleaning is usually required. It would also be fun to offer more than human nails (it is called Colored &lsquo;Claws&rsquo;).
        </p>

        <p className={styles.content}>
          Needless to say, there are many ways to decorate nails, and I would love to keep working on this game, adding more features over time. I&apos;d also like to note that this game was fun to play - I&apos;ve worked on many games over the last few years, but this simple nail painting simulator might just be the most engaging and satisfing game (for me personally) that I&apos;ve made. I honestly couldn&apos;t tell you why; something about it is just fun, and if I don&apos;t think a game I&apos;m making is enriching in some way, then whats the point of playing it?
        </p>
    </div>
  );
}
 
ColoredClaws.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
 
export default ColoredClaws;