import React, { Component } from 'react'
import { ImageBackground, View, Text, TextInput, Button, StyleSheet, StatusBar, Image } from 'react-native'
import GradeInput from './componentes/GradeInput'


export default class Calculadora extends Component {


    state = {
        grade1: 0,
        grade2: 0,
        exame: 0
    }


    handleNota1 = texto => {
        console.warn({})
    }

    handleNota2 = grade2 => {
        this.setState({ grade2 })
        console.warn({ handleNota1, grade2 })
    }

    handleExame = exame => {
        this.setState({ exame })
        console.warn({ exame })
    }

    calcular() {
        const p1 = this.state.grade1
        const p2 = this.state.grade2
        const ex = this.state.exame
        console.warn({ p1, p2, ex })
    }

    isApproved = () => {
        const { nota1, nota2 } = this.state
        const media = (nota1 + nota2) / 2
        return media >= 7
    }

    render() {

        const average = this.isApproved();
        const texto = average ? "Aprovado" : "Exame"

        return (
            <ImageBackground source={require('./img/wallp.jpg')} style={estilo.container}>
                <StatusBar backgroundColor="#263a7f" barStyle="light-content" />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                    <Button title="Menu" color='red' onPress={() => this.props.navigation.openDrawer()} />
                    <Image source={require('./img/logo-site.png')} style={{ width: 160, height: 50 }} />
                </View>
                <View style={{ alignItems: 'center', margin: 100 }}>
                    <Text style={estilo.label}>Nota 1</Text>
                    <TextInput
                        style={estilo.gradeInput}
                        keyboardType={'numeric'}
                        maxLength={4}
                        onChangeText={(text) => this.setState({ grade1: text })}
                        value={this.state.grade1}
                    />
                    <Text style={estilo.label}>Nota 2</Text>
                    <TextInput
                        style={estilo.gradeInput}
                        keyboardType={'numeric'}
                        maxLength={4}
                        onChangeText={(text) => this.setState({ grade2: text })}
                        value={this.state.grade2}
                    />
                    <Text style={estilo.label}>Nota :{p1 = parseFloat(this.state.grade1), p2 = parseFloat(this.state.grade2), (p1 + p2) / 2}</Text>
                </View>
            </ImageBackground>
        )
    }
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: "#5595ff"
    },
    format: {
        fontSize: 30,
        textAlign: "center"
    },
    textfield: {
        fontSize: 20,
        height: 50,
        width: 100,
        textAlign: "center",
        borderRadius: 10,
        backgroundColor: 'grey'
    },
    label: {
        fontSize: 30,
        textAlign: "center"
    },
    gradeInput: {
        fontSize: 20,
        height: 50,
        width: 100,
        textAlign: "center",
        borderRadius: 10,
        backgroundColor: 'grey'
    }
})