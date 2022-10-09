import React from "react";
import SocialNetworkItem from "@components/SocialNetworkItem";
import {
  Twitter,
  Instagram,
  Github,
  Linkedin,
  Gmail,
} from "@icons-pack/react-simple-icons";
import "@styles/containersStyles/socialNetworks.scss";

const SocialNetworks = ({ title }) => {
  const socialNetworkData = [
    {
      href: "mailto:nahalielgamaliel@gmail.com",
      icon: Gmail,
    },
    {
      href: "https://www.linkedin.com/in/controlgama/",
      icon: Linkedin,
    },
    {
      href: "https://github.com/ControlGama",
      icon: Github,
    },
    {
      href: "https://www.instagram.com/controlgama/",
      icon: Instagram,
    },
    {
      href: "https://twitter.com/ControlGama",
      icon: Twitter,
    },
  ];

  return (
    <section className="green_frame">
      <h2>{ title }</h2>
      <div className="social-media-container">
        {socialNetworkData.map((item, index) => (
          <SocialNetworkItem item={item} key={`SocialNetworkItem-${index}`} />
        ))}
      </div>
    </section>
  );
};

export default SocialNetworks;
