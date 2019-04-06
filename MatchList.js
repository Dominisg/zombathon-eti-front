import React,{Component} from 'react';
import {ScrollView, FlatList, StyleSheet, Text, View } from 'react-native';
import Match from './Match'
import {getTrades} from './api'

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
        matches : null,
    }

    componentDidMount(){
    getTrades().then(resp=>{
        this.setState(
          {
            matches: resp,
          }
        )
        });
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