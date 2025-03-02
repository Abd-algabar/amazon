import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppRdeucer";
import { initialState } from "./AppRdeucer";

export const Globalcontext = createContext();

import React from "react";

const Globalprovaider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <Globalcontext.Provider
      value={{ basket: state.basket, user: state.user, dispatch: dispatch }}
    >
      {children}
    </Globalcontext.Provider>
  );
};

export default Globalprovaider;

export const useAuth = () => {
  return useContext(Globalcontext);
};
