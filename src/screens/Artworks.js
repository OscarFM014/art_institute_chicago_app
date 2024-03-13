import { SafeAreaView, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getArtworksApi } from "../api/artwork"

export default function Artworks() {

    const [artworks, setArtworks] = useState([])

    // Execute on each 
    useEffect(() => {
        // funcoin anonima auto 
        (async () => {
            await loadArtworks();
        })()
    }, [])

    const loadArtworks = async () => {
        try {
            const response = await getArtworksApi();
            const artworksArray = [];
            setArtworks(artworksArray)
            for await (const artwork of response.data) {
                if (artwork.image_id != null) {
                    console.log(artwork.id, artwork.title, artwork.image_id)
                    artworksArray.push({
                        id: artwork.id,
                        title: artwork.title,
                        date_start: artwork.date_start,
                        date_end: artwork.date_end,
                        artist_display: artwork.artist_display,
                        place_of_origin: artwork.place_of_origin,
                        dimensions: artwork.dimensions,
                        category_titles: artwork.category_titles,
                        term_titles: artwork.term_titles,
                    })
                }
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <SafeAreaView>
            <Text>Artworks</Text>
        </SafeAreaView>
    )
}