import React from 'react'
import { StyleSheet, SafeAreaView, Text, FlatList } from 'react-native'
import ArtworkCard from './ArtworkCard'

export default function ArtworkList(props) {
    const { artworks } = props
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={artworks}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                keyExtractor={(artwork) => String(artwork.id)}
                renderItem={({ item }) => <ArtworkCard artwork={item} />}
                contentContainerStyle={styles.flatListContentContainer}
            />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5
    }
})