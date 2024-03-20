import { StyleSheet, View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function NotLogged() {
    const navigation = useNavigation();
    return (
        <View style={styles.content}>
            <Text styles={styles.text}>Login to get your favorites artworks</Text>
            <Button title="Login" onPress={() => navigation.navigate("AccountNavigation")}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        margin: 50,
        alignItems: "center"
    },
    text: {
        textAlign: "center",
        margin: 20
    }
})