import { NextPageWithLayout } from "@/pages/_app";
import Layout from "@/components/layout";
import { ReactElement } from "react";
import styles from "@/app/page.module.css";
import Link from "next/link";

const ReapersWaltz: NextPageWithLayout = () => {
  return (
    <div className={styles.ctaList}>
        <h1>Reapers Waltz</h1>
        <p className={styles.subtitle}>Status: Complete</p>
        <p className={styles.subheading}>
          <Link href="https://github.com/Wake1st/GomiMoni">
            Source Code
          </Link>
        </p>
        <p className={styles.subheading}>
          <Link href="https://wake1st.itch.io/gomi-moni">
            Play Here
          </Link>
        </p>

        <p className={styles.content}>Build race tracks... then race those tracks.</p>
    </div>
  );
}
 
ReapersWaltz.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
 
export default ReapersWaltz;