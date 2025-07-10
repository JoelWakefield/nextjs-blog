import ContactCard from "@/components/contact";
import { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import Layout from "@/components/layout";

const Contact: NextPageWithLayout = () => {
  return (
    <>
      <h1>Reach Out</h1>

      <ContactCard />
    </>
  )
}

Contact.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Contact;