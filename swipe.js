'use strict';

import React, {Component} from 'react';
import {AppRegistry, View, Text, List, ListItem, FlatList, StyleSheet, Image, ScrollView,TextInput} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

class Swiper extends Component {


  constructor(props) {
    super(props);
    this.state =
    {
      myText: 'Title',
      gestureName: 'none',
      backgroundColor: '#fff',
      photo: 'https://facebook.github.io/react-native/docs/assets/favicon.png'
    };
  }
  onSwipeLeft(gestureState) {
    this.setState(
        {myText: 'Goluch',
        photo: 'https://static.goldenline.pl/user_photo/206/user_2004942_a4998e_huge.jpg'}
        );
  }

  onSwipeRight(gestureState) {
    this.setState(
        {myText: 'Krzysiu',
        photo: 'data:image/jpeg;base64,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'}
        );
  }

  onSwipe(gestureName, gestureState) {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    this.setState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_LEFT:
        this.setState({backgroundColor: 'white'});
        break;
      case SWIPE_RIGHT:
        this.setState({backgroundColor: 'white'});
        break;
    }
  }

  render() {

    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };

    return (
      <View style={styles.container}>
      <GestureRecognizer
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        onSwipeLeft={(state) => this.onSwipeLeft(state)}
        onSwipeRight={(state) => this.onSwipeRight(state)}
        config={config}
        style={{
          flex: 1,
          backgroundColor: this.state.backgroundColor
        }}
        >
        <View style={styles.header}>
        <Image
                 source={require('./photos/arrows_left.png')}
                 style={styles.arrow_left}
        />
        <Text style={styles.text}>{this.state.myText}</Text>
        <Image
                 source={require('./photos/arrows_right.png')}
                 style={styles.arrow_right}
        />
        </View>
        <Image
            source={{uri:this.state.photo}}
            style={styles.addPhoto}
            /></GestureRecognizer>
        <View style={styles.descContainer}>
          <TextInput style={styles.inputs} placeholder="Description" underlineColorAndroid='transparent' onChangeText={(description) => this.setState({description})}/>
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
    header:
    {
      justifyContent: 'space-between',
      flexDirection:'row',
      marginTop:30
    },
    container: {
      marginTop:20,
      flex: 1,
      marginRight:'auto',
      marginLeft:'auto',
      backgroundColor: '#FFFFFF'
    },
    item:
    {
      padding: 10,
      fontSize: 18,
      height: 44,
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
      marginRight:'auto',
      marginLeft:'auto',
      alignItems: 'center'
    },
    text:
    {
        textAlign: 'center',
        fontSize: 36
    },
    arrow_left:
    {
        width:10,
        height:30,
        marginLeft:5,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end'
    },
    arrow_right:
    {
        width:10,
        height:30,
        marginRight:5,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end'
    },
    inputs: {
      height: 45,
      marginLeft: 16,
      borderBottomColor: '#FFFFFF',
      flex: 1
    },
    addPhoto: {
      width: 300,
      height:300,
      marginBottom: 20
    },
  })

export default Swiper;
