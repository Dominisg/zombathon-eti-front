import React,{Component} from 'react';
import {  TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
    image:{
        width: 100,
        height: 100,
        borderRadius: 10,
        },
    arrows:{
        width: 50,
        height: 50,
        },
    item:{
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#eaedf2',
        borderRadius: 5,
        padding: 20,
        margin:5,
        justifyContent: 'space-between',
    },
})

class Match extends Component{
    state = {
        
    }
    render(){
        return(
            <TouchableOpacity style={styles.item}>
                <Image
                    style={[styles.image]}
                    source={{uri: this.props.item.toy_to_borrow.uri}}
                />
                <Image
                    style={[styles.arrows,{alignSelf:'center'}]}
                    source={ require('./assets/arrows.png')}
                />
                <Image
                    style={[styles.image,{alignSelf:'flex-end'}]}
                    source={{uri: this.props.item.toy_to_lend.uri}}
                />
            </TouchableOpacity>
        )
    }
}

export default Match