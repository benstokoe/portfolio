import React from "react";

import yourData from "../../data/portfolio.json";

type SocialProps = {
  className?: string;
};

const Socials = ({ className }: SocialProps) => (
  <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
    {yourData.socials.map((social) => (
      <a href={social.link}>{social.title}</a>
    ))}
  </div>
);

export default Socials;
