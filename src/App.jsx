// Default import (any name allowed):
import { useState } from "react";
import Component1 from "./Component1";
import { Component3 } from "./components";
// import { Component2, Component3, Component4 } from "./components";

// Prop drilling.

// A component re-renders when:
// -> When state or props changes
// -> When parent re-renders.

// => Solution: State management libraries (Redux).

// React native solution => Context API.

// -> Custom hook, children (special prop).

const App = () => {
  //   const [count, setCount] = useState(0);

  return (
    <div>
      App
      <Component1 />
    </div>
  );
};

export default App;
