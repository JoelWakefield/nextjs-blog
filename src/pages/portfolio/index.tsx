import { NextPageWithLayout } from "@/pages/_app";
import Layout from "@/components/layout";
import { ReactElement } from "react";
import Card from "@/components/card";
import styles from "@/app/page.module.css";

const Portfolio: NextPageWithLayout = () => {
  return (
    <>
      <h1>Portfolio</h1>

      <div className={styles.ctaList}>
        <Card
          title="Gomi Moni"
          href="/portfolio/gomi-moni"
          text="A 3D physics puzzle game made for the Pompous Trash Jam 2025."
          image="/gomi_moni.png"
        />

        <Card
          title="NocTarot"
          href="/portfolio/noctarot"
          text="A story game about moths, tarot, and making drinks."
          image="/noctarot.png"
        />

        <Card
          title="Reapers Waltz"
          href="/portfolio/reapers-waltz"
          text="A 2D horror dungeon crawler made for the Isekai Horror Jam."
          image="/reapers_waltz.png"
        />

        <Card
          title="Game Design Patterns"
          href="/portfolio/game-design-patterns"
          text="A collection of C++ game design patterns implemented using Raylib."
          image="/patterns.png"
        />
        
        {/* <Card
          title="Vox Box"
          href="/portfolio/vox-box"
          text="A music making sandbox built with Godot."
          image="/vox_box.png"
        /> */}
      </div>
    </>
  );
}
 
Portfolio.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
 
export default Portfolio;