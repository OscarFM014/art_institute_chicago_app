import React from 'react'
import { StyleSheet, View, SafeAreaView, Text, Image } from 'react-native'


export default function Header(props) {
    return (
        <SafeAreaView>
            <View style={styles.container_img}>
                <Image source={{ uri: props.image }} style={styles.image} />
            </View>
            <View>
                <Text style={[styles.baseText, styles.titleText, styles.line]}>{props.title}</Text>
                <Text style={[styles.baseText, styles.placeText]}>{props.place}</Text>
            </View>
        </SafeAreaView >
    )
}


const styles = StyleSheet.create({
    container_img: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        width: '100%',
        height: 300,
    },
    image: {
        height: '100%',
        resizeMode: "contain"
    },
    baseText: {
        fontFamily: 'Times New Roman',
        padding: 2,
    },
    titleText: {
        fontSize: 30,
        textAlign: "center"
    },
    placeText: {
        color: "#7e746d",
        fontSize: 20,
        textAlign: "center",
    }


}
)