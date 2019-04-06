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
      <TouchableOpacity style={styles.item}>
        <Image
          style={[styles.image]}
          source={{
            uri:
              "https://www.marketing.neustar/blog/default-7d66f7da851b6b7d94f785c7d6e6a4b0.png"
          }}
        />
        <Text style={[styles.image, {alignSelf: "flex-end", alignContent: 'center'}]}>Goluch</Text>
        
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#DCDCDC'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,

  },
  arrows: {
    width: 50,
    height: 50
  },
  item: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#eaedf2",
    borderRadius: 10,
    padding: 20,
    margin: 5,
    justifyContent: "space-between"
  }
});
