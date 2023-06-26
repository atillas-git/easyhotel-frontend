import { storeReducer } from "@/reducers/StoreReducer";
import React, { useReducer } from "react";

const store = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

export const StoreContext = React.createContext();

// eslint-disable-next-line react/prop-types
const AppStore = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, store);
  return (
    <StoreContext.Provider
      value={{
        user: state.user,
        dispatch,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default AppStore;
