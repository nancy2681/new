import React, { Component } from "react";
import { RadioButton } from "react-native-paper";
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
export class Screen2 extends Component {
  state = { value: "male", dob: "" };
  one = () => {
    this.setState({ value: "male" });
  };
  two = () => {
    this.setState({ value: "female" });
  };
  third = () => {
    this.setState({ value: "other" });
  };
  save = () => {
    this.props.addUser({ dob: this.state.dob });
    this.props.addUser({ gender: this.state.value });
    this.props.navigation.navigate("Screen3");
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
        <Text
          style={{
            fontSize: 20,
            marginTop: windowHeight * 0.15,
            alignSelf: "center",
          }}
        >
          Screen 2
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
          <Text
            style={{
              marginTop: windowHeight * 0.07,
              marginStart: windowWidth * 0.05,
              fontSize: 18,
            }}
          >
            Enter your DOB:
          </Text>
          <TextInput
            onChangeText={(value) => this.setState({ dob: value })}
            placeholder="DOB"
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
          <Text
            style={{
              marginTop: windowHeight * 0.05,
              marginStart: windowWidth * 0.05,
              fontSize: 20,
            }}
          >
            Select your gender:
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: windowHeight * 0.02,
              marginStart: windowWidth * 0.05,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                marginTop: windowHeight * 0.005,
                marginRight: windowWidth * 0.1,
              }}
            >
              Male:
            </Text>

            <RadioButton
              value="male"
              color="green"
              status={this.state.value === "male" ? "checked" : "unchecked"}
              onPress={this.one}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              //marginTop: windowHeight * 0.02,
              marginStart: windowWidth * 0.05,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                marginTop: windowHeight * 0.005,
                marginRight: windowWidth * 0.05,
              }}
            >
              Female:
            </Text>
            <RadioButton
              value="female"
              color="green"
              status={this.state.value === "female" ? "checked" : "unchecked"}
              onPress={this.two}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              //marginTop: windowHeight * 0.02,
              marginStart: windowWidth * 0.05,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                marginTop: windowHeight * 0.005,
                marginRight: windowWidth * 0.09,
              }}
            >
              Other:
            </Text>
            <RadioButton
              value="other"
              color="green"
              status={this.state.value === "other" ? "checked" : "unchecked"}
              onPress={this.third}
            />
          </View>
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
export default connect(mapStateToProps, mapDispatchToProps)(Screen2);
