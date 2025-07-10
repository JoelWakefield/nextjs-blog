import { NextPageWithLayout } from "@/pages/_app";
import Layout from "@/components/layout";
import { ReactElement } from "react";
import Card from "@/components/card";
import styles from "@/app/page.module.css";

const Projects: NextPageWithLayout = () => {
  return (
    <>
      <h1>Projects</h1>
      <div className={styles.ctaList}>
        <Card
          title="Reapers Waltz"
          href="/projects/reapers-waltz"
          text="A 2D horror dungeon crawler made for the Isekai Horror Jam."
          image="/reapers_waltz.png"
        />
                  
        <Card
          title="Gomi Moni"
          href="/projects/gomi-moni"
          text="A godot game made for the Pompous Trash Jam 2025."
          image="/gomi_moni.png"
        />

        <Card
          title="Break Glass"
          href="/projects/break-glass"
          text="A 2D obstacle course game made with Godot for the Pirate Software - Game Jam 16."
          image="/break_glass.png"
        />

        <Card
          title="Make Words"
          href="/projects/make-words"
          text="An interactive experience about putting letters together."
          image="/make_words.png"
        />
      </div>
    </>
  );
}
 
Projects.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
 
export default Projects;