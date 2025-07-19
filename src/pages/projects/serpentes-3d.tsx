import { ReactElement } from "react";
import Link from "next/link";
import { NextPageWithLayout } from "@/pages/_app";
import Layout from "@/components/layout";
import StatusBar from "@/components/statusbar";
import styles from "@/app/page.module.css";

const Serpentes3D: NextPageWithLayout = () => {
  return (
    <div className={styles.ctaList}>
        <h1>Serpentes 3D</h1>

        <StatusBar 
          status={false} 
          play="https://wake1st.itch.io/serpentes-3d"
          code="https://github.com/Wake1st/raylib-snake-3D" 
        />

        <p className={styles.content}>
          For my second 8 Hour Power Jam, I wanted to make a 3D version of the classic game, snake. I decided to use <Link className={styles.primary} href="https://www.raylib.com/index.html">Raylib</Link> because it&apos;s a great library, and I wanted the <s>suffering</s> challenge of trying to make a game in C.
        </p>
    </div>
  );
}
 
Serpentes3D.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
 
export default Serpentes3D;