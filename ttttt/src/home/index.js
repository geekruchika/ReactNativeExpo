import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  TextInput,
  Image,
  Text,
  AsyncStorage,
  Button
} from "react-native";
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      Password: ""
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>HomeScreen</Text>
        <Button
          title="click to back login"
          onPress={() => {
            this.props.navigation.pop();
          }}
        />
      </View>
    );
  }
}

export default HomeScreen;
