import React from "react";
import avatar from "../../../assets/default-avatar.svg";
const Person = ({ name, nickName = "KissmyASS", images }) => {
  //const img = images && images[0] && images[0].small && images[0].small.url;
  const img = images?.[0]?.small?.url || avatar;
  return (
    <main>
      <img src={img} alt={name} style={{ width: "75px" }} />
      <h1>{name}</h1>
      <p>nickName: {nickName}</p>
    </main>
  );
};

export default Person;
