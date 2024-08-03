import { useState } from "react";

const UseStateObject = () => {
  const user = {
    id: 1,
    name: "Zain",
    age: 21,
    hobby: "Learning new things",
  };
  const [person, setUser] = useState(user);

  const renderNewUser = () => {
    setUser({
      id: 2,
      name: "John",
      age: 25,
      hobby: "Breaking new things",
    });
  };
  return (
    <div key={person.id}>
      <h1>UseState Object Example</h1>
      <h2>{person.name}</h2>
      <h3>{person.age}</h3>
      <h4>Enjoys: {person.hobby}</h4>
      <button className="btn" onClick={renderNewUser}>
        Show another
      </button>
    </div>
  );
};

export default UseStateObject;
