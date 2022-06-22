import React from "react";
import { Provider } from "react-redux";
import Lastscreen from "./lastscreen";
import store from "./store/index";
export default function App(props) {
  return (
    <Provider store={store}>
      <Lastscreen navigation={props.navigation} />
    </Provider>
  );
}
