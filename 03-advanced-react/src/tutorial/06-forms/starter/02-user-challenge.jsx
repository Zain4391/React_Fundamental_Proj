import { useState } from "react";
import { data } from "../../../data";
const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUser] = useState(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: users.length + 1,
      name: name,
    };
    setUser([...users, newUser]);
  };

  const removeHandle = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUser(filteredUsers);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {users.map((user) => {
        return (
          <div>
            <h4 key={user.id}>{user.name}</h4>
            <button
              type="button"
              className="btn"
              onClick={() => removeHandle(user.id)}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
