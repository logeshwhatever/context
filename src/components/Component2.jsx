import { useContext } from "react";
import { XyzContext } from "../store/GlobalContext";

const Component2 = () => {
  const { count } = useContext(XyzContext);

  console.log(count);

  return <div>Component2</div>;
};

export default Component2;
