import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getArtworkById } from '../api/artwork';

export default function Artwork(props) {
    const { route: { params }, navigation } = props
    const [artwork, setArtwork] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                const response = await getArtworkById(params.id)
                console.log(response)
            } catch (error) {
                console.log(error)
                navigation.goBack();
            }
        })();
    }, [params])

    return (
        <View>
            <Text>Artwork</Text>
        </View>
    )
}