import React from 'react';
import { ScrollView,StyleSheet, Text, View } from 'react-native';
import MatchList from './MatchList'
import Navbar from './Navbar'
import AddToy from './AddToy'
import SomeComponent from './swipe'



export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.changeScreen = this.changeScreen.bind(this);
  }
  

  state = {
    screen:1
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
        <ScrollView style={styles.container}>
          <SomeComponent/>
        </ScrollView>
        <Navbar handle={this.changeScreen}/>
      </View>);
    case 1:
    return(
      <View style={{flex:1}}>
        <ScrollView style={styles.container}>
          <AddToy/>
        </ScrollView>
        <Navbar handle={this.changeScreen}/>
      </View>);
    case 2:
    return(
            <View style={{flex:1}}>
            <ScrollView style={styles.container}>
                <MatchList/>
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
        marginTop: 20,
        backgroundColor:'#f8f8f8' ,
    },
});
