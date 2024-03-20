import { Text } from 'react-native'
import React, { useState, useCallback } from 'react'
import { getArtworkFavoriteApi } from '../api/favorite'
import { getArtworkById } from '../api/artwork'
import useAuth from "../hooks/useAuth"
import ArtworkList from '../components/ArtworkList'
import { useFocusEffect } from '@react-navigation/native'
import NotLogged from '../components/NotLogged'

export default function Favorite() {
    const [artworks, setArtworks] = useState([])
    const { auth } = useAuth();

    useFocusEffect(
        useCallback(() => {
            if (auth) {
                (async () => {
                    const response = await getArtworkFavoriteApi();
                    const artworksArray = [];
                    setArtworks([...artworks, ...artworksArray])
                    for await (const id of response) {
                        const artwork = await getArtworkById(id)
                        if (artwork.data.image_id) {
                            image_url = `https://www.artic.edu/iiif/2/${artwork.data.image_id}/full/843,/0/default.jpg`
                            artworksArray.push({
                                id: artwork.data.id,
                                title: artwork.data.title,
                                date_start: artwork.data.date_start,
                                date_end: artwork.data.date_end,
                                date_display: artwork.data.date_display,
                                artist_display: artwork.data.artist_display,
                                place_of_origin: artwork.data.place_of_origin,
                                medium_display: artwork.data.medium_display,
                                dimensions: artwork.data.dimensions,
                                credit_line: artwork.data.credit_line,
                                main_reference_number: artwork.data.main_reference_number,
                                category_titles: artwork.data.category_titles,
                                term_titles: artwork.data.term_titles,
                                copyright_notice: artwork.data.copyright_notice,
                                image: image_url,
                            })
                        }
                    }
                    setArtworks([...artworks, ...artworksArray])
                })()
            }
        }, [auth])
    )


    return (
        !auth
            ?
            <NotLogged />
            :
            <ArtworkList artworks={artworks} />
    )
}