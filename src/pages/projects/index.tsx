import { NextPageWithLayout } from "@/pages/_app";
import Layout from "@/components/layout";
import { ReactElement } from "react";

const Home: NextPageWithLayout = () => {
  return (
    <>
      Projects Page
    </>
  );
}
 
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
 
export default Home;