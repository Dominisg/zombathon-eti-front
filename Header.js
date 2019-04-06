import React,{Component} from 'react';
import {Text, View, Image } from 'react-native';

const styles = {
    header:{
        paddingTop:20,
        width: '100%',
        height:80,
        backgroundColor: '#f0f0f0' ,
    },
    image:{
        width: '80%',
        height: 55,
        marginLeft:'auto',
        marginRight:'auto',
    }
}

class Header extends Component{
    render(){
        return(
            <View style={styles.header}>
                <Image style={styles.image} source={require("./assets/bar.png")}/>
            </View>
        )
    }
}
export default Header;