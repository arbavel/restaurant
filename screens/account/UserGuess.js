import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { Button } from 'react-native-elements'
import Loading from '../../components/Loading'

import {useNavigation} from '@react-navigation/native'

export default function UserGuess() {

    const navigation = useNavigation()

    return (
        <div>
        
            <ScrollView
                centerContent
                style={styles.viewBody}
            >
                <Image 
                    source = {require("../../assets/restaurant-logo.png")}
                    resizeMode="contain"
                    style={styles.image}
                />
                <Text style={styles.title}>Consulta tu perfil en Restaurants</Text>
                <Text style = {styles.description}>
                    ¿Cómo describirías tu mejor restaurante ?
                    Busca y visualiza los mejores restaurantes de una forma sencilla,
                    vota cuál te ha gustado más y comenta cómo ha sido tu experiencia.
                </Text>

                <Button
                    buttonStyle = {styles.buttom}
                    title="Ver tu perfil"
                    onPress={() => navigation.navigate("login")}
                />

            </ScrollView>

        </div>

        
        
    )
}

const styles = StyleSheet.create({
    viewBody : {
        marginHorizontal: 30
    },
    image: {
        height: 300,
        width: "100%",
        marginVertical: 10
    },
    title: {
        fontWeight:"bold",
        fontSize: 19,
        marginBottom:10,
        textAlign: "center"
    },
    description: {
        textAlign: "justify",
        marginBottom:20,
        color:"#a65273"
    },
    buttom: {
        backgroundColor: "#442484"

    }

})
