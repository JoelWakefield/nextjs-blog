import { NextPageWithLayout } from "@/pages/_app";
import Layout from "@/components/layout";
import { ReactElement } from "react";
import styles from "@/app/page.module.css";
import Link from "next/link";

const BreakGlass: NextPageWithLayout = () => {
  return (
    <div className={styles.ctaList}>
        <h1>Break Glass</h1>
        <p className={styles.subtitle}>Status: Complete</p>
        <p className={styles.subheading}>
          <Link href="https://github.com/Wake1st/break-glass-godot">
            Source Code
          </Link>
        </p>
        <p className={styles.subheading}>
          <Link href="https://wake1st.itch.io/break-glass">
            Play Here
          </Link>
        </p>

        <p className={styles.content}>A 2D obstacle course made with Godot.</p>
    </div>
  );
}
 
BreakGlass.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
 
export default BreakGlass;