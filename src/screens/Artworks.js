import { SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { getArtworksApi } from "../api/artwork";
import ArtworkList from "../components/ArtworkList";

export default function Artworks() {

    const [artworks, setArtworks] = useState([])
    // console.log("artworks", artworks)

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
                    artworksArray.push({
                        id: artwork.id,
                        title: artwork.title,
                        date_start: artwork.date_start,
                        date_end: artwork.date_end,
                        date_display: artwork.date_display,
                        artist_display: artwork.artist_display,
                        place_of_origin: artwork.place_of_origin,
                        medium_display: artwork.medium_display,
                        dimensions: artwork.dimensions,
                        credit_line: artwork.credit_line,
                        main_reference_number: artwork.main_reference_number,
                        category_titles: artwork.category_titles,
                        term_titles: artwork.term_titles,
                        copyright_notice: artwork.copyright_notice,
                        image: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`
                    })
                }
                setArtworks([...artworks, ...artworksArray])
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <SafeAreaView>
            <ArtworkList artworks={artworks} />
        </SafeAreaView>
    )
}