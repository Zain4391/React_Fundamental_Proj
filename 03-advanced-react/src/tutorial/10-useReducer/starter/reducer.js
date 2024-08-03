import { ACTIONS } from "./actions";
import { data } from "../../../data";

export const reducer = (state, action) => {
  if (action.type === ACTIONS[0]) {
    return { ...state, people: [] };
  }
  if (action.type === ACTIONS[1]) {
    let newPeople = state.people.filter(
      (item) => item.id !== action.payload.id
    );
    return { ...state, people: newPeople };
  }
  if (action.type === ACTIONS[2]) {
    return { ...state, people: data };
  }

  throw new Error(`No matchin "${action.type}" action type`);
};
