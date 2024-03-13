import { StyleSheet, View, Text, Image, TouchableNativeFeedback } from 'react-native'
import React from 'react'

export default function ArtworkCard(props) {
    const { artwork } = props;

    const goToArtwork = () => {
        console.log("Go to: ", artwork.title)
    }
    return (
        <TouchableNativeFeedback onPress={goToArtwork}>
            <View style={styles.figure}>
                <View style={styles.card}>
                    <Image source={{ uri: artwork.image }} style={styles.image} />
                    <Text style={styles.baseText}>{artwork.title} {artwork.date_display}</Text>
                    <Text style={[styles.baseText, styles.artist]}>{artwork.artist_display}</Text>
                </View>
            </View>

        </TouchableNativeFeedback >
    )
}

const styles = StyleSheet.create({
    figure: {
        flexDirection: 'column',
        flex: 1,
        flexWrap: 'wrap',
    },
    card: {
        flex: 1,
        height: 220,
    },
    image: {
        height: 200,
        width: 200,
        resizeMode: 'contain',
    },
    baseText: {
        fontFamily: 'Times New Roman',
    },
    artist: {
        color: "#7e746d"
    }
})

