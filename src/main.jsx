import React from "react";
import ReactDOM from "react-dom/client";

// IMP to follow this order in all the React projects:
import "../normalize.css";
import "./index.css";
import App from "./App.jsx";
import "./generic-media-query.css";

// CSS Modules, Styled components, Tailwind.

import GlobalProvider from "./store/GlobalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);
