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

export default class AddToy extends Component {

  constructor(props) {
    super(props);
    state = {
      title:'',
      description:''
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed " + viewId);
  }

  render() {
    return (<View style={styles.container}>
      <Image style={styles.addPhoto}source={{
          uri: 'https://www.marketing.neustar/blog/default-7d66f7da851b6b7d94f785c7d6e6a4b0.png'
        }}/>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputs} placeholder="Title" keyboardType="email-address" underlineColorAndroid='transparent' onChangeText={(title) => this.setState({title})}/>
      </View>
      <View style={styles.descContainer}>
        <TextInput style={styles.inputs} placeholder="Description" underlineColorAndroid='transparent' onChangeText={(description) => this.setState({description})}/>
      </View>

      <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('addToy')}>
        <Text style={styles.loginText}>Add toy</Text>
      </TouchableHighlight>

    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:60,
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
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  descContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#DCDCDC',
    borderRadius: 20,
    borderBottomWidth: 1,
    width: 250,
    height: 160,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center'
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
    backgroundColor: "#00b5ec"
  },
  loginText: {
    color: 'white'
  },
  titleText: {
    color: 'darkgrey',
    fontSize: 50
  },
  addPhoto: {
    width: 300,
    height:300,
    marginBottom: 20
  },
  headerContainer: {
    textAlign: 'left'
  }
});
