import { createContext, useState } from "react";

export const XyzContext = createContext();

const GlobalProvider = ({ children }) => {
  const [count, setCount] = useState(1);
  const nayaValue = 50;

  return (
    <XyzContext.Provider value={{ count, nayaValue, setCount }}>
      {children}
    </XyzContext.Provider>
  );
};

export default GlobalProvider;
