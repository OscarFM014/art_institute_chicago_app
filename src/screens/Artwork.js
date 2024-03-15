import { View, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getArtworkById } from '../api/artwork';
import Header from '../components/Artwork/Header';
import Description from '../components/Artwork/Description';

export default function Artwork(props) {
    const { route: { params }, navigation } = props
    const [artwork, setArtwork] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                const response = await getArtworkById(params.id)
                setArtwork(response.data)
            } catch (error) {
                navigation.goBack();
            }
        })();
    }, [params])

    if (!artwork) return null;
    return (
        <ScrollView>
            <Header title={artwork.title}
                date_display={artwork.date_display}
                place={artwork.place_of_origin}
                dimensions={artwork.dimensions}
                credit_line={artwork.credit_line}
                main_reference_number={artwork.main_reference_number}
                image={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
            />
            <Description title={artwork.title}
                date_display={artwork.date_display}
                place={artwork.place_of_origin}
                dimensions={artwork.dimensions}
                credit_line={artwork.credit_line}
                main_reference_number={artwork.main_reference_number} />
        </ScrollView>
    )
}