import React from "react";

import Socials from "@/components/Socials";

export const Footer = () => (
  <div className="mt-40">
    <div>
      <h1 className="text-2xl text-bold">Contact.</h1>
      <div className="mt-10">
        <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
          LET&apos;S WORK
        </h1>
        <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
          TOGETHER
        </h1>

        <div className="mt-10">
          <Socials />
        </div>
      </div>
    </div>
  </div>
);
