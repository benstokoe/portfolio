import { Metadata } from "next";

import data from "@/data/portfolio.json";

export default async function Page() {
  return <div />;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Contact | ${data.name}`,
    description: "Contact Ben Stokoe.",
  };
}
