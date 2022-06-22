import React, { Component } from "react";
import { connect } from "react-redux";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  Dimensions,
} from "react-native";

export class Screen1 extends Component {
  state = { firstName: "", lastName: "", email: "", mobile: "" };
  save = () => {
    this.props.addUser({ firstName: this.state.firstName });
    this.props.addUser({ lastName: this.state.lastName });
    this.props.addUser({ email: this.state.email });
    this.props.addUser({ mobile: this.state.mobile });
    this.props.navigation.navigate("Screen2");
  };
  render() {
    return (
      <View
        style={{
          flex: 0.25,
          borderRadius: 30,
          borderWidth: 1,
          borderColor: "white",
          backgroundColor: "#3792cb",
        }}
      >
        <View></View>
        <Text
          style={{
            fontSize: 20,
            marginTop: windowHeight * 0.15,
            alignSelf: "center",
          }}
        >
          Screen 1
        </Text>
        <View
          style={{
            backgroundColor: "lightblue",
            marginTop: windowHeight * 0.15,
            width: windowWidth * 0.85,
            height: windowHeight * 0.6,
            borderRadius: 20,
            alignSelf: "center",
          }}
        >
          <TextInput
            onChangeText={(value) => this.setState({ firstName: value })}
            placeholder="First Name"
            style={{
              borderWidth: 1,
              borderColor: "lightblue",
              marginTop: windowHeight * 0.07,
              borderBottomColor: "black",
              fontSize: 20,
              marginStart: windowWidth * 0.05,
              width: windowWidth * 0.7,
            }}
          ></TextInput>
          <TextInput
            onChangeText={(value) => this.setState({ lastName: value })}
            placeholder="Last Name"
            style={{
              borderWidth: 1,
              borderColor: "lightblue",
              marginTop: windowHeight * 0.05,
              borderBottomColor: "black",
              fontSize: 20,
              marginStart: windowWidth * 0.05,
              width: windowWidth * 0.7,
            }}
          ></TextInput>
          <TextInput
            onChangeText={(value) => this.setState({ email: value })}
            placeholder="Email"
            keyboardType="email-address"
            style={{
              borderWidth: 1,
              borderColor: "lightblue",
              marginTop: windowHeight * 0.05,
              borderBottomColor: "black",
              fontSize: 20,
              marginStart: windowWidth * 0.05,
              width: windowWidth * 0.7,
            }}
          ></TextInput>
          <TextInput
            onChangeText={(value) => this.setState({ mobile: value })}
            placeholder="Mobile no."
            keyboardType="phone-pad"
            maxLength={10}
            style={{
              borderWidth: 1,
              borderColor: "lightblue",
              marginTop: windowHeight * 0.05,
              borderBottomColor: "black",
              fontSize: 20,
              marginStart: windowWidth * 0.05,
              width: windowWidth * 0.7,
            }}
          ></TextInput>
          <TouchableOpacity
            style={{
              alignSelf: "center",
              borderWidth: 2,
              borderColor: "#3792cb",
              padding: 5,
              width: windowWidth * 0.35,
              borderRadius: 12,
              backgroundColor: "#3792cb",
              marginTop: windowHeight * 0.14,
            }}
            onPress={this.save}
          >
            <Text style={{ alignSelf: "center", fontSize: 18 }}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (value) => dispatch({ payload: value, type: "SAVE" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Screen1);
