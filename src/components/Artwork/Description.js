import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { startCase } from "lodash"

export default function Description(props) {
    return (
        <View style={styles.container_description}>
            {Object.entries(props).map(([key, value]) => (
                <View key={key}>
                    <View style={styles.line}></View>
                    <Text style={[styles.subtitleText, styles.subtitleTextA]}>{startCase(key.replace(/_/g, ' '))}</Text>
                    <Text style={[styles.subtitleText, styles.subtitleTextB]}>{value}</Text>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container_description: {
        flex: 1,
        textAlign: "left",
        width: "100%",
        paddingBottom: 40
    },
    line: {
        margin: 10,
        borderBottomColor: "#7e746d",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    subtitleText: {
        marginLeft: 10,
        fontSize: 18,
        fontFamily: 'Arial'
    },
    subtitleTextA: {
        fontWeight: "bold"
    },
    subtitleTextB: {
        fontSize: 15,
        color: "#7e746d"
    },
    artistText: {
        color: "#7e746d"
    }
}
)