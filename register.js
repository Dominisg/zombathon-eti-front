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
  Alert
} from "react-native";

export default class SignUpView extends Component {
  constructor(props) {
    super(props);
    state = {
      fullName: "",
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
    changeScreen(3)
  };

  render() {
    return (
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
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={fullName => this.setState({fullName})}
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
            source={{uri: "https://png.icons8.com/key-2/ultraviolet/50/3498db"}}
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
            secureTextEntry={true}
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
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={age => this.setState({age})}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri: "https://img.icons8.com/ultraviolet/40/000000/building.png"
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="City"
            secureTextEntry={true}
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
            secureTextEntry={true}
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
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={houseNumber => this.setState({houseNumber})}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri: "https://img.icons8.com/ultraviolet/40/000000/mailbox-opened-flag-down.png"
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Post code"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={postCode => this.setState({postCode})}
          />
        </View>
        <TouchableHighlight
          style={[styles.buttonContainer, styles.signupButton]}
          onPress={() => this.onClickListener(this.props.changescreen)}
        >
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
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
    color: 'darkgrey',
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
    backgroundColor: "#332978"
  },
  signUpText: {
    color: "white"
  }
});
