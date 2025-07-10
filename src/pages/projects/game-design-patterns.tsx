import { NextPageWithLayout } from "@/pages/_app";
import Layout from "@/components/layout";
import { ReactElement } from "react";
import styles from "@/app/page.module.css";

const GameDesignPatterns: NextPageWithLayout = () => {
  return (
    <div className={styles.ctaList}>
        <h1>Game Design Patterns</h1>
        <p className={styles.subheading}>Status: In Progress</p>

        <p className={styles.content}>Build race tracks... then race those tracks.</p>
    </div>
  );
}
 
GameDesignPatterns.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
 
export default GameDesignPatterns;