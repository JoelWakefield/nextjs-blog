import { NextPageWithLayout } from "@/pages/_app";
import Layout from "@/components/layout";
import { ReactElement } from "react";
import Card from "@/components/card";
import styles from "@/app/page.module.css";

const Projects: NextPageWithLayout = () => {
  return (
    <>
      <h1>Project Blogs</h1>
      <div className={styles.ctaList}>
        <Card
          title="Colored Claws"
          href="/blogs/colored-claws"
          text="A 2D godot game about painting nails."
          image="/colored_claws.png"
        />

        <Card
          title="Serpentes 3D"
          href="/blogs/serpentes-3d"
          text="A 3D snake like game written in C."
          image="/serpentes_3d.png"
        />
        
        <Card
          title="Break Glass"
          href="/blogs/break-glass"
          text="A 2D obstacle course game made with Godot for the Pirate Software - Game Jam 16."
          image="/break_glass.png"
        />

        <Card
          title="Make Words"
          href="/blogs/make-words"
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