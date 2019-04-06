import React,{Component} from 'react';
import {ScrollView, FlatList, StyleSheet, Text, View } from 'react-native';
import Match from './Match'

const matches = [
    {
        toy_to_borrow:{
            uri: "https://cdn0.iconfinder.com/data/icons/toys-1/154/toy-horse-child-game-512.png",
        },
        toy_to_lend:{
            uri: "https://cdn0.iconfinder.com/data/icons/toys-1/154/toy-horse-child-game-512.png",
        }
    },
    {
        toy_to_borrow:{
            uri: "https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg",
        },
        toy_to_lend:{
            uri: "https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg",
        }
    },
]

const styles = StyleSheet.create({
    container:{
        alignContent: 'center',
        marginTop: 20,
        backgroundColor:'#f8f8f8' ,
    },
    header:{
        fontSize:30,
        textAlign:'center'
    }
});


class MatchList extends Component{
    state = {
        matches : matches,
    };
    componentDidMount(){

    }
    render(){
        return(
                <ScrollView style={styles.container}>
                    <FlatList data={this.state.matches}
                    renderItem = {({item})=><Match item={item}/>
                    }
                    keyExtractor={(item, index) => index.toString()}
                    />
                </ScrollView>
            )
    }
}

export default MatchList