import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'

export default function ArtworkCard(props) {
    const [cardWidth, setCardWidth] = useState(0)
    const [imageWidth, setImageWidth] = useState(0);
    const [imageHeight, setImageHeight] = useState(0);
    const { artwork } = props;

    const goToArtwork = () => {
        console.log("Go to: ", artwork.title)
    }

    // const onLayout = (event) => {
    //     const { width } = event.nativeEvent.layout;
    //     setCardWidth(width)
    //     Image.getSize(artwork.image, (width, height) => {
    //         const aspectRatio = width / height;
    //         const maxHeight = cardWidth / aspectRatio;
    //         setImageWidth(width);
    //         setImageHeight(Math.floor(maxHeight));
    //     }, (error) => {
    //         console.error('Error getting image dimensions:', error);
    //     });
    // }

    return (
        <TouchableWithoutFeedback onPress={goToArtwork} onLayout={onLayout}>
            <View style={{ ...styles.card }}>
                {console.log(imageWidth, imageHeight, cardWidth)}

                <Image source={{ uri: artwork.image }} style={{ ...styles.image, height: imageHeight }} />
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
        // Adjust the height of the image
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

