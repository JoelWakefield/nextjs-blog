import { NextPageWithLayout } from "@/pages/_app";
import Layout from "@/components/layout";
import { ReactElement } from "react";
import styles from "@/app/page.module.css";

const CourseConstructor: NextPageWithLayout = () => {
  return (
    <div className={styles.ctaList}>
        <h1>Course Constructor</h1>
        <p className={styles.subheading}>Status: In Progress</p>

        <p className={styles.content}>Build race tracks... then race those tracks.</p>
    </div>
  );
}
 
CourseConstructor.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
 
export default CourseConstructor;