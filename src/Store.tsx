import { createContext, ReactElement, useReducer } from "react";
import Reducer, { defaultState } from "./Reducer";

const Store = ({ children }:{children:ReactElement}) => {
  const [state, dispatch] = useReducer(Reducer, defaultState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(defaultState);
export default Store;
