import React from "react";
import Routing from "./routing/Routing";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <Provider store={store}>
        <Routing />
    </Provider>
  );
};

export default App;
