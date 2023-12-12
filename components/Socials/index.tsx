import React from "react";

import yourData from "../../data/portfolio.json";

type SocialProps = {
  className?: string;
};

const Socials = ({ className }: SocialProps) => (
  <div className={`${className} flex flex-wrap mob:flex-nowrap gap-4`}>
    {yourData.socials.map((social) => (
      <a key={social.title} className="text-xl hover:text-primary" href={social.link}>
        {social.title}
      </a>
    ))}
  </div>
);

export default Socials;
