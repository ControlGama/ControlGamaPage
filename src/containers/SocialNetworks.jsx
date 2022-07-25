import React from "react";
import SocialNetworkItem from "@components/SocialNetworkItem";
import "@styles/SocialNetworks.scss";

const SocialNetworks = () => {
  const socialNetworkData = [
    {
      id: 0,
      href: "mailto:nahalielgamaliel@gmail.com",
      class: "social-media socialmedia-gmail",
    },
    {
      id: 1,
      href: "https://www.linkedin.com/in/controlgama/",
      class: "social-media socialmedia-linkedin",
    },
    {
      id: 2,
      href: "https://github.com/ControlGama",
      class: "social-media socialmedia-github",
    },
    {
      id: 3,
      href: "https://www.instagram.com/controlgama/",
      class: "social-media socialmedia-instagram",
    },
    {
      id: 4,
      href: "https://twitter.com/ControlGama",
      class: "social-media socialmedia-twitter",
    },
  ];

  return (
    <section className="green_frame">
      <h2>Redes sociales</h2>
      <div className="social-media-container">
        {socialNetworkData.map((item) => (
          <SocialNetworkItem item={item} key={`SocialNetworkItem-${item.id}`}/>
        ))}
      </div>
    </section>
  );
};

export default SocialNetworks;
