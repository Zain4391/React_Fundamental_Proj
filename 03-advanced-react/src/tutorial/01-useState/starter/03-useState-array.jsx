import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const removeAll = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              onClick={() => {
                removeItem(id);
              }}
            >
              remove
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={removeAll}>
        Clear All
      </button>
    </div>
  );
};

export default UseStateArray;
