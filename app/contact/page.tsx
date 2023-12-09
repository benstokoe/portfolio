import { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";
import data from "@/data/portfolio.json";

export default async function Page() {
  return (
    <div className="mt-10 laptop:mt-20 hidden">
      <div className="laptop:mt-20 mt-10">
        <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold w-4/5 mob:w-full laptop:w-4/5 text-info">
          Contact.
        </h1>
      </div>

      <div className="mt-10 laptop:mt-20">
        <ContactForm />
      </div>
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Contact | ${data.name}`,
    description: "Contact Ben Stokoe.",
  };
}
