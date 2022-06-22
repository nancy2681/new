import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, TouchableOpacity, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export class Lastscreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "lightblue",
          alignItems: "center",
          //justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            textDecorationLine: "underline",
            marginTop: windowHeight * 0.2,
          }}
        >
          User's Details:
        </Text>

        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            width: windowWidth * 0.8,
          }}
        >
          <Text style={{ fontSize: 18, marginTop: windowHeight * 0.04 }}>
            First Name:{this.props.user.firstName}
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            width: windowWidth * 0.8,
          }}
        >
          <Text style={{ fontSize: 18, marginTop: windowHeight * 0.04 }}>
            Last Name:{this.props.user.lastName}
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            width: windowWidth * 0.8,
          }}
        >
          <Text style={{ fontSize: 18, marginTop: windowHeight * 0.04 }}>
            Mobile no:{this.props.user.mobile}
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            width: windowWidth * 0.8,
          }}
        >
          <Text style={{ fontSize: 18, marginTop: windowHeight * 0.04 }}>
            DOB:{this.props.user.dob}
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            width: windowWidth * 0.8,
          }}
        >
          <Text style={{ fontSize: 18, marginTop: windowHeight * 0.04 }}>
            Gender:{this.props.user.gender}
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            width: windowWidth * 0.8,
          }}
        >
          <Text style={{ fontSize: 18, marginTop: windowHeight * 0.04 }}>
            Address:{this.props.user.address}
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            width: windowWidth * 0.8,
          }}
        >
          <Text style={{ fontSize: 18, marginTop: windowHeight * 0.04 }}>
            City Name:{this.props.user.city}
          </Text>
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
            marginTop: windowHeight * 0.1,
          }}
          onPress={() => this.props.navigation.navigate("Screen1")}
        >
          <Text style={{ alignSelf: "center", fontSize: 18 }}>Log out</Text>
        </TouchableOpacity>
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
export default connect(mapStateToProps, mapDispatchToProps)(Lastscreen);
