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

class Screen3 extends Component {
  state = { address: "", cityName: "" };
  save = () => {
    this.props.addUser({ city: this.state.cityName });
    this.props.addUser({ address: this.state.address });
    this.props.navigation.navigate("LastScreen");
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
          Screen 3
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
            onChangeText={(value) => this.setState({ address: value })}
            placeholder="Enter your Address:"
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
            onChangeText={(value) => this.setState({ cityName: value })}
            placeholder="Enter your City name:"
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
          <TouchableOpacity
            style={{
              alignSelf: "center",
              borderWidth: 2,
              borderColor: "#3792cb",
              padding: 5,
              width: windowWidth * 0.35,
              borderRadius: 12,
              backgroundColor: "#3792cb",
              marginTop: windowHeight * 0.25,
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
export default connect(mapStateToProps, mapDispatchToProps)(Screen3);
