import React, { Component, Fragment} from 'react'
import { View, Text , StyleSheet, Platform, SafeAreaView, StatusBar } from 'react-native'
import  Simples  from './componentes/Simples'


export default class App extends Component {
    render(){
      return (
        <Fragment>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'blue'}}>
        <StatusBar backgroundColor="red" barStyle="dark-content"/>
        <View style={styles.container}>
        <Simples texto='flex'/>
        </View>
        </SafeAreaView>
        </Fragment>
      )
    }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    f20: {
      fontSize:40
    }
})