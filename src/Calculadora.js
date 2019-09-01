import React, {Component } from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'

export default class Calculadora extends Component{
    render(){
        return(
            <View style={estilo.container}>
            <Text style={estilo.format}>Nota P1</Text>
            <TextInput style={estilo.textfield} keyboardType={'decimal-pad'}  placeholder="Coloque sua nota" maxLength={4}  ></TextInput>
            <Text style={estilo.format}>Nota P2</Text>
            <TextInput style={estilo.textfield} keyboardType={'decimal-pad'} placeholder="Coloque sua nota" min='0' max='9' maxLength={4}></TextInput>
            <Text style={estilo.format}>Sua média é:</Text>
            </View>
        )
    }
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    format:{
        fontSize: 30,
        textAlign: "center"
    },
    textfield:{
        fontSize: 20,
        height: 100,
        width: 200,
        textAlign: "center",
        borderColor: "grey",
        borderWidth: 2,
        backgroundColor: '#dde8c9'
    }
})