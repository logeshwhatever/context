import { useGlobalContext } from "../store";

import Component4 from "./Component4";

const Component3 = () => {
  const { setCount } = useGlobalContext();

  // setCount(20);

  return (
    <div>
      Component3
      <Component4 data={"blah"}>
        <h3>Component 4 here.</h3>
      </Component4>
      <button onClick={() => setCount(20)}>Click</button>
    </div>
  );
};

export default Component3;
