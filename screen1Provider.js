import React from "react";
import { Provider } from "react-redux";
import Screen1 from "./screen1";
import store from "./store/index";
export default function App(props) {
  return (
    <Provider store={store}>
      <Screen1 navigation={props.navigation} />
    </Provider>
  );
}
