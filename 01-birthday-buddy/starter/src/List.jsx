import React from "react";
import Person from "./Person";

const List = ({ person }) => {
  return (
    <div>
      {person.map((people) => {
        return <Person key={people.id} {...people} />;
      })}
    </div>
  );
};

export default List;
