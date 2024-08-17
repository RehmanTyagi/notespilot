import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";

// redux store
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.createRoot(document.getElementById("root")! as HTMLDivElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
