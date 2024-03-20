import { SafeAreaView, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getArtworkFavoriteApi, isArtworkFavoriteApi } from '../api/favorite'

export default function Favorite() {
    const [favorites, setFavorites] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await getArtworkFavoriteApi();
            console.log(response)
        })()
    })

    return (
        <SafeAreaView>
            <Text>Favorite</Text>
        </SafeAreaView>
    )
}