import React from 'react'
import { createDrawerNavigator } from "react-navigation"
import  Simples  from './componentes/Simples'
import Calculadora from './Calculadora'

export default createDrawerNavigator({
    Calculadora:{
        screen: () => <Calculadora></Calculadora>
    },

    Simples: {
        screen: () => <Simples texto='Flexivel' />
    }
}, {drawerWidth: 150 })


