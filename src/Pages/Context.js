import { createContext, useContext, useState } from "react";
import useFetch from "../Component/useFetch";
import "./Pages.css";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("avenger");
  const { isLoading, isError, movie } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ query, movie, setQuery, isLoading, isError }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
