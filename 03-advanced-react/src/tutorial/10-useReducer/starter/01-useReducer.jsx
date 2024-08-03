import React from "react";
import { data, people } from "../../../data";
import { ACTIONS } from "./actions";
import { reducer } from "./reducer";
const defaultState = {
  people: data,
};

const ReducerBasics = () => {
  const [state, dispatch] = React.useReducer(reducer, defaultState);

  const clearList = () => {
    dispatch({ type: ACTIONS[0] });
  };
  const removeItem = (id) => {
    dispatch({ type: ACTIONS[1], payload: { id } });
  };
  const resetItems = () => {
    dispatch({ type: ACTIONS[2] });
  };

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length === 0 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetItems}
        >
          Reset
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearList}
        >
          clear items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
