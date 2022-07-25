import React from "react";
import "@styles/socialNetworkItem.scss"

const SocialNetworkItem = ({item}) => {
  return (
    <a href={item.href} target="_blank">
      <div className={item.class}></div>
    </a>
  );
};

export default SocialNetworkItem;
