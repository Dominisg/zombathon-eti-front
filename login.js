import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

export default class LoginScreen extends Component {

  constructor(props) {
    super(props);
    state = {
      email: '',
      password: ''
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed " + viewId);
  }

  render() {
    return (<View style={styles.container}>
      <TouchableHighlight style={styles.titleContainer}>
      <Image style={styles.logo} source={
          require('./assets/logo.png')
        }/>
      </TouchableHighlight>
      <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={{
            uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'
          }}/>
        <TextInput style={styles.inputs} placeholder="Email" keyboardType="email-address" underlineColorAndroid='transparent' onChangeText={(email) => this.setState({email})}/>
      </View>

      <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={{
            uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'
          }}/>
        <TextInput style={styles.inputs} placeholder="Password" secureTextEntry={true} underlineColorAndroid='transparent' onChangeText={(password) => this.setState({password})}/>
      </View>

      <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
        <Text>Don't have account? Register now!</Text>
      </TouchableHighlight>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
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
    marginLeft: 16,
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
    marginBottom: 20,
    width: 250,
    borderRadius: 30
  },
  loginButton: {
    backgroundColor: "#332978"
  },
  loginText: {
    color: 'white'
  },
  titleText: {
    color: 'darkgrey',
    fontSize: 50
  }
});
