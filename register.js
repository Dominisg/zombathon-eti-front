import React, {Component} from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  KeyboardAvoidingView
} from "react-native";
import {register2} from './api'

export default class SignUpView extends Component {
  constructor(props) {
    super(props);
    state = {
      fullName: "",
      username:"",
      email: "",
      password: "",
      tel: "",
      city: "",
      street: "",
      houseNumber: "",
      postCode: "",
      age: ""
    };
  }

  onClickListener = changeScreen => {
    changeScreen(3);
  };



  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.container}>
          <TouchableHighlight style={styles.registerContainer}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableHighlight>
          <View style={styles.inputContainer}>
            <Image
              style={styles.inputIcon}
              source={{
                uri: "https://png.icons8.com/male-user/ultraviolet/50/3498db"
              }}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Full name"
              underlineColorAndroid="transparent"
              onChangeText={fullName => this.setState({fullName})}
            />
          </View>
            <View style={styles.inputContainer}>
              <Image
                style={styles.inputIcon}
                source={{
                  uri:
                    "https://img.icons8.com/ultraviolet/40/000000/password.png"
                }}
              />
              <TextInput
                style={styles.inputs}
                placeholder="Login"
                underlineColorAndroid="transparent"
                onChangeText={username => this.setState({username})}
              />
            </View>

            <View style={styles.inputContainer}>
              <Image
                style={styles.inputIcon}
                source={{
                  uri: "https://png.icons8.com/message/ultraviolet/50/3498db"
                }}
              />
              <TextInput
                style={styles.inputs}
                placeholder="Email"
                keyboardType="email-address"
                underlineColorAndroid="transparent"
                onChangeText={email => this.setState({email})}
              />
            </View>

            <View style={styles.inputContainer}>
              <Image
                style={styles.inputIcon}
                source={{
                  uri: "https://png.icons8.com/key-2/ultraviolet/50/3498db"
                }}
              />
              <TextInput
                style={styles.inputs}
                placeholder="Password"
                secureTextEntry={true}
                underlineColorAndroid="transparent"
                onChangeText={password => this.setState({password})}
              />
            </View>

            <View style={styles.inputContainer}>
              <Image
                style={styles.inputIcon}
                source={{
                  uri: "https://img.icons8.com/ultraviolet/40/000000/phone.png"
                }}
              />
              <TextInput
                style={styles.inputs}
                placeholder="Telephone"
                keyboardType="phone-pad"
                underlineColorAndroid="transparent"
                onChangeText={tel => this.setState({tel})}
              />
            </View>

            <View style={styles.inputContainer}>
              <Image
                style={styles.inputIcon}
                source={{
                  uri: "https://img.icons8.com/ultraviolet/40/000000/age.png"
                }}
              />
              <TextInput
                style={styles.inputs}
                placeholder="Age"
                keyboardType="numeric"
                underlineColorAndroid="transparent"
                onChangeText={age => this.setState({age})}
              />
            </View>

            <View style={styles.inputContainer}>
              <Image
                style={styles.inputIcon}
                source={{
                  uri:
                    "https://img.icons8.com/ultraviolet/40/000000/building.png"
                }}
              />
              <TextInput
                style={styles.inputs}
                placeholder="City"
                underlineColorAndroid="transparent"
                onChangeText={city => this.setState({city})}
              />
            </View>

            <View style={styles.inputContainer}>
              <Image
                style={styles.inputIcon}
                source={{
                  uri: "https://img.icons8.com/ultraviolet/40/000000/road.png"
                }}
              />
              <TextInput
                style={styles.inputs}
                placeholder="Street"
                underlineColorAndroid="transparent"
                onChangeText={street => this.setState({street})}
              />
            </View>

            <View style={styles.inputContainer}>
              <Image
                style={styles.inputIcon}
                source={{
                  uri: "https://img.icons8.com/ultraviolet/40/000000/home.png"
                }}
              />
              <TextInput
                style={styles.inputs}
                placeholder="House number"
                underlineColorAndroid="transparent"
                keyboardType="numeric"
                onChangeText={houseNumber => this.setState({houseNumber})}
              />
            </View>

            <View style={styles.inputContainer}>
              <Image
                style={styles.inputIcon}
                source={{
                  uri:
                    "https://img.icons8.com/ultraviolet/40/000000/mailbox-opened-flag-down.png"
                }}
                secureTextEntry={true}
              />
              <TextInput
                style={styles.inputs}
                placeholder="Post code"
                underlineColorAndroid="transparent"
                onChangeText={postCode => this.setState({postCode})}
              />
            </View>
            <TouchableHighlight
              style={[styles.buttonContainer, styles.signupButton]}
              onPress={() => {this.onClickListener(this.props.changescreen)
              register2(this.state)
              }}
            >
              <Text style={styles.signUpText}>Sign up</Text>
            </TouchableHighlight>
          </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff"
  },
  registerContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250
  },
  registerText: {
    color: "darkgrey",
    fontSize: 30
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#DCDCDC",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center"
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    width: 100,
    borderRadius: 30
  },
  signupButton: {
    backgroundColor: "#332978",
    marginBottom: 20
  },
  signUpText: {
    color: "white"
  }
});
