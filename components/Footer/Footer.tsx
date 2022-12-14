import React from "react";

import Socials from "@/components/Socials";

export const Footer = () => (
  <div className="mt-40">
    <h1 className="text-4xl text-bold">Contact.</h1>
    <div className="mt-10 laptop:w-3/5">
      <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
        LET&apos;S WORK
      </h1>
      <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
        TOGETHER
      </h1>

      <p className="mt-6 opacity-80">
        I am open to both contract and freelance developer projects and would love to hear what your
        ideas are.
      </p>
      <p className="mt-4 mb-6 opacity-80">
        Feel free to drop me an email and I&apos;ll let you know how I can help you!
      </p>

      <button
        type="button"
        onClick={() => window.open("mailto:mail@benstokoe.co.uk")}
        className="mb-6 text-3xl tablet:text-5xl text-bold"
      >
        mail@benstokoe.co.uk
      </button>

      <div className="mt-10">
        <Socials />
      </div>
    </div>
  </div>
);
