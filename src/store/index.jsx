import { useContext } from "react";
import { XyzContext } from "./GlobalContext";

export const useGlobalContext = () => useContext(XyzContext);