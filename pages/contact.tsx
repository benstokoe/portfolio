import Head from "next/head";

import Layout from "@/components/Layout";
import data from "@/data/portfolio.json";

const ContactPage = () => (
  <Layout>
    <Head>
      <title>Contact | {data.name}</title>
    </Head>
  </Layout>
);

export default ContactPage;
