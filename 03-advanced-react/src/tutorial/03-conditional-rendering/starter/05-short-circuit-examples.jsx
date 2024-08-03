import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h1> {text || "default text"} </h1>
      <h1> {!name && "default name"} </h1>
      <h1> {user && user.name} </h1>
    </div>
  );
};

export default ShortCircuitExamples;
