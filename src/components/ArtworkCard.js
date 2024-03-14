import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function ArtworkCard(props) {
    const { artwork } = props;
    const navigation = useNavigation();

    const goToArtwork = () => {
        console.log("Go to: ", artwork.id);
        navigation.navigate("Artwork", { id: artwork.id })
    }

    return (
        <TouchableWithoutFeedback onPress={goToArtwork} >
            <View style={styles.card}>
                <Image source={{ uri: artwork.image }} style={styles.image} />
                <Text style={styles.baseText}>{artwork.title} {artwork.date_display}</Text>
                <Text style={[styles.baseText, styles.artistText]}>{artwork.artist_display}</Text>
            </View>
        </TouchableWithoutFeedback >
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        justifyContent: 'left',
        alignItems: 'left',
        margin: 5,
        backgroundColor: '#ffffff',
        elevation: 4,
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'contain',
    },
    baseText: {
        fontFamily: 'Times New Roman',
        padding: 2
    },
    artistText: {
        color: "#7e746d"
    }
})

