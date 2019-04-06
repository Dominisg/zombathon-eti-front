import React, {Component} from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Alert,
  CameraRoll
} from "react-native";
import {ImagePicker, Permissions} from "expo";

export default class Profile extends Component {
  state = {
    title: "",
    description: "",
    imgUri:
      "https://www.marketing.neustar/blog/default-7d66f7da851b6b7d94f785c7d6e6a4b0.png"
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Your profile</Text>
        <Text style={styles.text}>
          To start exchanging toys, please sign in or create an account
        </Text>
        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.props.register(4)}
        >
          <Text style={styles.loginText}>Sign in to your account</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.registerContainer}
          onPress={() => this.props.register(5)}
        >
          <Text>Sign up for ToyShare</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:150,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#DCDCDC',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  logo: {
    width: 400,
    height:200
  },
  inputs: {
    height: 45,
    marginLeft: 15,
    borderBottomColor: '#FFFFFF',
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },
  titleContainer: {
    height: 200,
    width: 250,
    alignItems: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    width: 250,
    borderRadius: 30
  },
  registerContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: 250,
    borderRadius: 30
  },
  loginButton: {
    backgroundColor: "#332978"
  },
  loginText: {
    color: 'white'
  },
  text: {
    marginTop:20
  },
  title: {
    fontSize:30,
    fontWeight: 'bold'
  }
});
