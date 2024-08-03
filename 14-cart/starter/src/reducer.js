import { ACTIONS } from "./actions";

const reducer = (state, action) => {
  if (action.type === ACTIONS[0]) {
    return { ...state, cart: new Map() };
  }
  if (action.type === ACTIONS[1]) {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);
    return { ...state, cart: newCart };
  }
  if (action.type === ACTIONS[2]) {
    const newCart = new Map(state.cart);
    const item = newCart.get(action.payload.id);
    if (item) {
      const newItem = { ...item, amount: item.amount + 1 };
      newCart.set(action.payload.id, newItem);
    } else {
      throw new Error(`No item with id ${item} found`);
    }
    return { ...state, cart: newCart };
  }

  if (action.type === ACTIONS[3]) {
    const newCart = new Map(state.cart);
    const item = newCart.get(action.payload.id);

    if (item.amount === 1) {
      newCart.delete(action.payload.id);
      return { ...state, cart: newCart };
    }
    if (item) {
      const newItem = { ...item, amount: item.amount - 1 };
      newCart.set(action.payload.id, newItem);
    } else {
      throw new Error(`No item with id ${item} found`);
    }
    return { ...state, cart: newCart };
  }

  if (action.type === ACTIONS[4]) {
    return { ...state, loading: true };
  }

  if (action.type === ACTIONS[5]) {
    const newCart = new Map(action.payload.cart.map((item) => [item.id, item]));
    return { ...state, loading: false, cart: newCart };
  }

  throw new Error(`no matching action type : ${action.type}`);
};
