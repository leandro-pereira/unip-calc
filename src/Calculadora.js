import React, {Component } from 'react'
import { Text, TextInput, View, StyleSheet, StatusBar} from 'react-native'

export default class Calculadora extends Component{
    render(){
        return(
            <View style={estilo.container}>
            <StatusBar backgroundColor="#263a7f" barStyle="light-content"/>
            <Text style={estilo.format}>Nota P1</Text>
            <TextInput style={estilo.textfield} keyboardType={'numeric'}  maxLength={4}  ></TextInput>
            <Text style={estilo.format}>Nota P2</Text>
            <TextInput style={estilo.textfield} keyboardType={'decimal-pad'} maxLength={4}></TextInput>
            <Text style={estilo.format}>Sua média é:</Text>
            <Text style={estilo.format}>Exame</Text>
            <TextInput style={estilo.textfield} keyboardType={'decimal-pad'} maxLength={4}></TextInput>
            <Text style={estilo.format}>Média mais exame :</Text>
            </View>
        )
    }
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#5595ff"
    },
    format:{
        fontSize: 30,
        textAlign: "center"
    },
    textfield:{
        fontSize: 20,
        height: 50,
        width: 100,
        textAlign: "center",
        borderRadius: 10,
        backgroundColor: 'grey'
    }
})