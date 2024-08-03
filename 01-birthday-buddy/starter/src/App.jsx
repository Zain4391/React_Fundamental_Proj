import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [person, setPerson] = useState(data);
  console.log(person);
  return (
    <main>
      <div className="container">
        <h2 style={{ marginBottom: "1rem" }}>
          {person.length} Birthdays Today
        </h2>
        <List person={person} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPerson([])}
        >
          clear all
        </button>
      </div>
    </main>
  );
};
export default App;
