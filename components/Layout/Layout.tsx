import { Poppins } from "next/font/google";
import Head from "next/head";
import { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import data from "@/data/portfolio.json";

const hind = Poppins({ weight: ["300", "500", "700"], subsets: ["latin"] });

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <div className={`relative text-lg font-light ${hind.className}`}>
    <Head>
      <title>{data.name}</title>
    </Head>

    <div className="gradient-circle" />
    <div className="gradient-circle-bottom" />

    <div className="container mx-auto mb-10">
      <Header />

      {children}

      <Footer />
    </div>
  </div>
);

export default Layout;
