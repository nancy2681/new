import React from "react";
import { Provider } from "react-redux";
import Screen2 from "./screen2";
import store from "./store/index";
export default function App(props) {
  return (
    <Provider store={store}>
      <Screen2 navigation={props.navigation} />
    </Provider>
  );
}
