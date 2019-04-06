'use strict';

import React, {Component} from 'react';
import {AppRegistry, View, Text, List, ListItem, FlatList, StyleSheet, Image, ScrollView,TextInput} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import{getToys} from './api'

class Swiper extends Component {


    componentDidMount(){
     getToys().then(resp=>{
        this.toys = resp
        this.item = this.toys.pop()
        this.setState(
          {
            myText: this.item.name,
            photo: this.item.photo_path,
            description: this.item.description
          }
        )
        });
    }

    popAndSetToy = () => {
    this.item = this.toys.pop()
    this.setState(
      {
        myText: this.item.name,
        photo: this.item.photo_path,
        description: this.item.description
      })
    }

  constructor(props) {
    super(props);
    this.state =
    {
      myText: 'Title',
      gestureName: 'none',
      backgroundColor: '#fff',
      photo: "https://cdn0.iconfinder.com/data/icons/toys-1/154/toy-horse-child-game-512.png",
      description: "..."
    };
  }
  onSwipeLeft(gestureState) {
    if(this.toys.length == 0){
       getToys().then(resp=>{
        this.toys = resp
        this.item = this.toys.pop()
        this.setState(
          {
            myText: this.item.name,
            photo: this.item.photo_path,
            description: this.item.description
          }
        )
        });
    }else{
      this.popAndSetToy();
    }
  }

  onSwipeRight(gestureState) {
    if(this.toys.length == 0){
       getToys().then(resp=>{
        this.toys = resp
        this.item = this.toys.pop()
        this.setState(
          {
            myText: this.item.name,
            photo: this.item.photo_path,
            description: this.item.description
          }
        )
        });
    }else{
      this.popAndSetToy();
    }
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
          <Text style={styles.inputs} underlineColorAndroid='transparent'>{this.state.description}</Text>
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
      marginBottom:30,
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
      width: 300,
      height: 180,
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
      borderBottomColor: "#F5FCFF",
      backgroundColor: "#DCDCDC",
      borderRadius: 20,
      borderBottomWidth: 1,
      width: 300,
      height: 180,
      padding: 15,
      marginBottom: 15,
      flexDirection: "row",
      alignItems: "center",
      textAlignVertical: "top",
    },
    addPhoto: {
      width: 300,
      height:300,
      marginBottom: 20
    },
  })

export default Swiper;
