  import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  KeyboardAvoidingView
} from 'react-native';
import {logIn} from "./api"



export default class LoginScreen extends Component {
  
  login = ""
  password=""

  error = 0
  constructor(props) {
    super(props);
    state = {
      username: '',
      password: '',
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed " + viewId);
  }




  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <View style={styles.container}>
      <TouchableHighlight style={styles.titleContainer}>
      <Image style={styles.logo} source={
          require('./assets/logo.png')
        }/>
      </TouchableHighlight>
      <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={{
            uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'
          }}/>
        <TextInput style={styles.inputs} placeholder="Login" underlineColorAndroid='transparent' onChangeText={(username) => this.setState({username})}/>
      </View>

      <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={{
            uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'
          }}/>
        <TextInput style={styles.inputs} placeholder="Password" secureTextEntry={true} underlineColorAndroid='transparent' onChangeText={(password) => this.setState({password})}/>
      </View>
      <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() =>
        {logIn(this.state.login,this.state.password).then((rsp)=>{if(rsp.status===200){
          
          this.props.register(1)
          this.props.setuser(this.state.login,this.state.password)       
          }}).catch((r)=>{})
          
      }
      }>
        <Text style={styles.loginText}>Login</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.registerContainer} onPress={() => this.props.register(5)}>
        <Text>Don't have account? Register now!</Text>
      </TouchableHighlight>
    </View>
    </KeyboardAvoidingView>);
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:10,
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
    marginBottom: 20,
    width: 250,
    borderRadius: 30
  },
  registerContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 150,
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
