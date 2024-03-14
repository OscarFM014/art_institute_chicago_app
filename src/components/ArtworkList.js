import React from 'react'
import { StyleSheet, View, FlatList, ActivityIndicator, Platform } from 'react-native'
import ArtworkCard from './ArtworkCard'

export default function ArtworkList(props) {
    const { artworks, loadArtworks, isNext } = props

    const loadMore = () => {
        console.log("Loading more artworks ...")
        loadArtworks();
    }

    return (
        <FlatList
            data={artworks}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(artwork) => String(artwork.id)}
            renderItem={({ item }) => <ArtworkCard artwork={item} />}
            contentContainerStyle={styles.flatListContentContainer}
            onEndReached={isNext && loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
                isNext && (
                    <ActivityIndicator size="large" style={styles.spinner} color="#AEAEAE" />)
            }
        />
    )
}


const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5,
        marginTop: Platform.OS === "android" ? 30 : 0,
    },
    spinner: {
        marginTop: 20,
        marginBottom: Platform.OS === "android" ? 90 : 60,
    },
})