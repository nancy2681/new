import React from "react";
import { Provider } from "react-redux";
import Screen3 from "./screen3";
import store from "./store/index";
export default function App(props) {
  return (
    <Provider store={store}>
      <Screen3 navigation={props.navigation} />
    </Provider>
  );
}
