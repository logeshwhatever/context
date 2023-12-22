// Named import:
import { useEffect, useRef, useState } from "react";
import { Component2, Component3 } from "./components";

// ref is used to get the direct access to an element.
// ref doesn't trigger a re-rendering of the component.

const Component1 = () => {
  return (
    <div>
      Component1
      <Component2 />
      <Component3 />
    </div>
  );
};

export default Component1;
