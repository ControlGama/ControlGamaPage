import React from "react";
import "@styles/componentsStyles/socialNetworkItem.scss"

const SocialNetworkItem = ({item}) => {
  return (
    <a href={item.href} target="_blank">
      <div className="social-media">
        { <item.icon /> }
      </div>
    </a>
  );
};

export default SocialNetworkItem;
