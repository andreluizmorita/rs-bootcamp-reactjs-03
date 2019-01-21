import React from "react";
import { Provider } from "react-redux";

import "./config/reactotron";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <div className="App">Start Redux and Reactotron</div>
  </Provider>
);

export default App;
