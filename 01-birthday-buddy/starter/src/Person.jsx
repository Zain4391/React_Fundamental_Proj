import React from "react";

const Person = ({ image, name, age }) => {
  return (
    <div className="person">
      <img
        src={image}
        alt={name}
        className="img"
        style={{ width: "75px", height: "75px", borderRadius: "40px" }}
      />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  );
};

export default Person;
