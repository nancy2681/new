import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Provider } from "react-redux";
import Screen1 from "./screen1Provider";
import Screen2 from "./screen2Provider";
import Screen3 from "./screen3Provider";
import Lastscreen from "./lastscreenProvider";
import store from "./store";
const Stack = createStackNavigator();
const MyStack = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Screen1"
        component={Screen1}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Screen2"
        component={Screen2}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Screen3"
        component={Screen3}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LastScreen"
        component={Lastscreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <MyStack />
      </Provider>
    </NavigationContainer>
  );
}
