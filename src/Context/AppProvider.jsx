import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [a, setA] = useState("hello world");
  return (
    <AppContext.Provider value={{ a, setA }}>{children}</AppContext.Provider>
  );
}
