import { createContext, useEffect, useReducer } from "react";
import Reducer from "./AuthReducer";

const LOGOUT_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
  };
  
  export const LogoutContext = createContext(LOGOUT_STATE);

  export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, LOGOUT_STATE);
  
    useEffect(() => {
      localStorage.removeItem("user");
    }, [state.user]);
  
    return (
      <LogoutContext.Provider
        value={{
          user: state.user,
          isFetching: state.isFetching,
          error: state.error,
          dispatch,
        }}
      >
        {children}
      </LogoutContext.Provider>
    );
  };