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
  CameraRoll,
} from 'react-native';
import { ImagePicker,Permissions } from 'expo';

export default class AddToy extends Component {

    state = {
      title:'',
      description:'',
      imgUri: 'https://www.marketing.neustar/blog/default-7d66f7da851b6b7d94f785c7d6e6a4b0.png',
    }

async componentDidMount() {
  const permission = await Permissions.getAsync(Permissions.CAMERA_ROLL);
  if (permission.status !== 'granted') {
      const newPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (newPermission.status === 'granted') {
        //its granted.
      }
  }
}

  _onChoosePic = async () => {
    const {
      cancelled,
      uri,
    } = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!cancelled) {
      this.setState({ imgUri: uri });
      console.log(uri) // this logs correctly
      // TODO: why isn't this showing up inside the Image on screen?
    }
  }

    _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ imageUri: result.uri });
    }
  };

  constructor(props) {
    super(props);
  }


  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed " + viewId);
  }

  render() {
    return (<View style={styles.container}>
     <TouchableHighlight onPress={this._onChoosePic}>
      <Image style={styles.addPhoto}source={{
          uri: this.state.imgUri
        }}/>
        </TouchableHighlight>
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
  descContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#DCDCDC',
    borderRadius: 20,
    borderBottomWidth: 1,
    width: 250,
    height: 160,
    marginBottom: 20,
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
