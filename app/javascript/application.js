// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./components/App";

document.addEventListener("DOMContentLoaded", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
});
