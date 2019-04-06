import React,{Component} from 'react';
import {  TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';

const styles = {
    footer:{
        flexDirection:'row',
        width: '100%',
        height:50,
        backgroundColor: '#f0f0f0' ,
        alignContent: 'center',
    },
    icon:{
        width:30,
        height:30,
    },
    button:{
        height: 40,
        width:'25.1%',
        backgroundColor: 'transparent',
        borderRightColor: '#000000',
        borderRightWidth: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:5,
        marginBottom:5,
    }
}

class Navbar extends Component{
    render(){
        return(
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.handle(0)}} >
                    <Image style={styles.icon} source={require('./assets/search.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.handle(1)}}>
                    <Image style={styles.icon} source={require('./assets/add.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.handle(2)}}>
                    <Image style={styles.icon} source={require('./assets/arrows.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.handle(3)}}>
                    <Image style={styles.icon} source={require('./assets/profile.png')}/>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Navbar;