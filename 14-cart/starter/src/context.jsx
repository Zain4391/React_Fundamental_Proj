import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import reducer from "../../final/src/reducer";
import { ACTIONS } from "./actions";
import cartItems from "./data";
import { getTotal } from "./utils";

export const AppContext = createContext();
const initState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};

const url = "https://www.course-api.com/react-useReducer-cart-project";

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const { totalItems, totalCost } = getTotal(state.cart);
  const clearCart = () => {
    dispatch({ type: ACTIONS[0] });
  };

  const remove = (id) => {
    dispatch({ type: ACTIONS[1], payload: { id } });
  };
  const increase = (id) => {
    dispatch({ type: ACTIONS[2], payload: { id } });
  };
  const decrease = (id) => {
    dispatch({ type: ACTIONS[3], payload: { id } });
  };

  const fetchData = async (url) => {
    dispatch({ type: ACTIONS[4] });
    const resp = await fetch(url);
    const cart = await resp.json();
    dispatch({ type: ACTIONS[5], payload: { cart } });
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        increase,
        decrease,
        remove,
        totalItems,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
