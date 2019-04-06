import React from 'react';
import { ScrollView,StyleSheet, Text, View } from 'react-native';
import MatchList from './MatchList'
import Navbar from './Navbar'
import AddToy from './AddToy'
import Swiper from './swipe'
import LoginScreen from './login'
import Header from './Header'



export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.changeScreen = this.changeScreen.bind(this);
  }


  state = {
    screen:3
  }

  changeScreen(screen_num){
    this.setState({
      screen: screen_num
    })
  }

  render() {
  switch (this.state.screen){
    case 0:
    return(
      <View style={{flex:1}}>
      <Header/>
        <ScrollView style={styles.container}>
          <Swiper/>
        </ScrollView>
        <Navbar handle={this.changeScreen}/>
      </View>);
    case 1:
    return(
      <View style={{flex:1}}>
        <Header/>
        <ScrollView style={styles.container}>
          <AddToy/>
        </ScrollView>
        <Navbar handle={this.changeScreen}/>
      </View>);
    case 2:
    return(
          <View style={{flex:1}}>
            <Header/>
            <ScrollView style={styles.container}>
                <MatchList/>
            </ScrollView>
            <Navbar handle={this.changeScreen} />
      </View>
    );
    case 3:
    return(
            <View style={{flex:1}}>
            <Header/>
            <ScrollView style={styles.container}>
                <LoginScreen/>
            </ScrollView>
            <Navbar handle={this.changeScreen} />
      </View>
      )
      }
  }
}

const styles = StyleSheet.create({
    container:{
        alignContent: 'center',
        backgroundColor:'transparent' ,
    },
});
